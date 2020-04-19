import {
  Box,
  Button,
  Chip,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Theme,
  useTheme,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import sortBy from 'lodash/sortBy';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import {
  infoWarAttackCategories,
  InfoWarAttackCategory,
  infoWarAttackRange,
  InfoWarAttackRange,
  InfoWarAttackStore,
  infoWarAttackTargets,
  InfoWarAttackType,
  skillType,
} from '../types/infoWarAttack';
import { AmmoStore } from '../types/weapon';

const useStyles = makeStyles(theme => ({
  field: {
    minWidth: 250,
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  fieldWide: {
    minWidth: 400,
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  fieldSmall: {
    minWidth: 100,
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const initialFields = {
  id: '',
  name: '',
  link: '',
  attackType: '',
  category: '',
  range: '',
  target: [],
  attackModifier: '',
  opponentModifier: '',
  damage: '',
  burst: '',
  ammoIds: [],
  skillType: [],
  effect: '',
  special: '',
};

const InfoWarAttackForm: React.FC<InfoWarAttackFormProps> = ({
  infoWarAttack = initialFields,
  onSave,
}) => {
  const ammoOptions = useSelector((state: RootState) => state.ammo);

  const [infoWarAttackFields, setInfoWarAttackFields] = useState({
    ...infoWarAttack,
    ammo: (infoWarAttack.ammoIds as string[]).map(
      ammoId => ammoOptions.find(ammo => ammo.id === ammoId) as AmmoStore,
    ),
  });

  const classes = useStyles();
  const theme = useTheme();

  const isDisabled =
    !infoWarAttackFields.name ||
    !infoWarAttackFields.attackType ||
    !infoWarAttackFields.category ||
    !infoWarAttackFields.skillType.length;

  const handleChange = (
    e: React.ChangeEvent<{ value: unknown; name?: string }>,
  ) => {
    setInfoWarAttackFields({
      ...infoWarAttackFields,
      [e.target.name as string]: e.target.value,
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const infoWarAttackStore: InfoWarAttackStore = {
      id: infoWarAttack.id,
      name: infoWarAttackFields.name,
      link: infoWarAttackFields.link,
      attackType: infoWarAttackFields.attackType as InfoWarAttackType,
      category: infoWarAttackFields.category as InfoWarAttackCategory,
      range: infoWarAttackFields.range as InfoWarAttackRange | undefined,
      target: infoWarAttackFields.target,
      attackModifier: infoWarAttackFields.attackModifier,
      opponentModifier: infoWarAttackFields.opponentModifier,
      damage: infoWarAttackFields.damage,
      burst: infoWarAttackFields.burst,
      ammoIds: infoWarAttackFields.ammo.map(ammo => ammo.id),
      skillType: infoWarAttackFields.skillType,
      effect: infoWarAttackFields.effect,
      special: infoWarAttack.special,
    };

    onSave(infoWarAttackStore);
  };

  return (
    <form>
      <Box display="flex" flexWrap="wrap" alignItems="flex-end">
        <TextField
          autoFocus
          name="name"
          id="infowar-attack-name"
          label="Name"
          color="secondary"
          className={classes.field}
          required
          value={infoWarAttackFields.name}
          onChange={handleChange}
        />
        <TextField
          id="infowar-attack-link"
          label="Link"
          name="link"
          color="secondary"
          className={classes.fieldWide}
          value={infoWarAttackFields.link}
          onChange={handleChange}
        />
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="flex-end">
        <FormControl className={classes.field} required>
          <InputLabel id="infowar-attack-type-label">Attack Type</InputLabel>
          <Select
            labelId="infowar-attack-type-label"
            id="infowar-attack-type"
            color="secondary"
            name="attackType"
            value={infoWarAttackFields.attackType}
            onChange={handleChange}
          >
            <MenuItem value={InfoWarAttackType.HACKING_PROGRAM}>
              Hacking Program
            </MenuItem>
            <MenuItem value={InfoWarAttackType.PHEROWARE_TACTIC}>
              Pheroware Tactic
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.field}>
          <InputLabel id="infowar-range-label">Range</InputLabel>
          <Select
            labelId="infowar-range-label"
            id="infowar-range"
            color="secondary"
            name="range"
            value={infoWarAttackFields.range}
            onChange={handleChange}
          >
            {infoWarAttackRange.map(range => (
              <MenuItem value={range} key={range}>
                {range}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="flex-end">
        <FormControl className={classes.field} required>
          <InputLabel id="infowar-category-label">Category</InputLabel>
          <Select
            labelId="infowar-category-label"
            id="infowar-category"
            color="secondary"
            name="category"
            value={infoWarAttackFields.category}
            onChange={handleChange}
          >
            {infoWarAttackCategories.map(category => (
              <MenuItem value={category} key={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.fieldWide}>
          <InputLabel id="infowar-target-label">Target</InputLabel>
          <Select
            labelId="infowar-target-label"
            id="infowar-target"
            name="target"
            multiple
            input={<Input id="infowar-target-chip" />}
            value={infoWarAttackFields.target}
            onChange={handleChange}
            color="secondary"
            renderValue={selected => (
              <div className={classes.chips}>
                {(selected as string[]).map(value => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {infoWarAttackTargets.map(target => (
              <MenuItem
                key={target}
                value={target}
                style={getStyles(target, ['target in state'], theme)}
              >
                {target}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="flex-end">
        <TextField
          name="attackModifier"
          id="infowar-attack-modifier"
          label="Attack Modifier"
          color="secondary"
          className={classes.fieldSmall}
          value={infoWarAttackFields.attackModifier}
          onChange={handleChange}
        />
        <TextField
          id="infowar-opponent-modifier"
          label="Opponent Modifier"
          name="opponentModifier"
          color="secondary"
          className={classes.fieldSmall}
          value={infoWarAttackFields.opponentModifier}
          onChange={handleChange}
        />
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="flex-end">
        <TextField
          name="damage"
          id="infowar-damage"
          label="Damage"
          color="secondary"
          className={classes.fieldSmall}
          value={infoWarAttackFields.damage}
          onChange={handleChange}
        />
        <TextField
          id="infowar-burst"
          label="Burst"
          name="burst"
          color="secondary"
          className={classes.fieldSmall}
          value={infoWarAttackFields.burst}
          onChange={handleChange}
        />
        <Autocomplete<AmmoStore>
          className={classes.fieldSmall}
          multiple
          id="infowar-ammo"
          options={sortBy(ammoOptions, 'name')}
          getOptionLabel={option => option.name}
          renderInput={params => (
            <TextField {...params} variant="standard" label="Ammo" />
          )}
          value={infoWarAttackFields.ammo}
          onChange={(e, ammo) => {
            setInfoWarAttackFields({
              ...infoWarAttackFields,
              ammo,
            });
          }}
        />
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="flex-end">
        <FormControl className={classes.field} required>
          <InputLabel id="infowar-skill-type-label">Skill Type</InputLabel>
          <Select
            labelId="infowar-skill-type-label"
            id="infowar-skill-type"
            multiple
            name="skillType"
            input={<Input id="infowar-skill-type-chip" />}
            value={infoWarAttackFields.skillType}
            onChange={handleChange}
            color="secondary"
            renderValue={selected => (
              <div className={classes.chips}>
                {(selected as string[]).map(value => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {skillType.map(skill => (
              <MenuItem
                key={skill}
                value={skill}
                style={getStyles(skill, ['target in state'], theme)}
              >
                {skill}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="flex-end">
        <TextField
          name="effect"
          id="infowar-effect"
          label="Effect"
          color="secondary"
          className={classes.fieldWide}
          value={infoWarAttackFields.effect}
          onChange={handleChange}
        />
      </Box>
      <Box display="flex" flexWrap="wrap" alignItems="flex-end">
        <TextField
          id="infowar-special"
          label="Special"
          name="special"
          color="secondary"
          className={classes.fieldWide}
          value={infoWarAttackFields.special}
          onChange={handleChange}
        />
      </Box>
      <Button
        color="primary"
        variant="contained"
        onClick={handleSave}
        disabled={isDisabled}
        type="submit"
      >
        Save InfoWar Attack
      </Button>
    </form>
  );
};

export default InfoWarAttackForm;

interface InfoWarAttackFormProps {
  infoWarAttack?: InfoWarAttackStore;
  onSave: (infoWarAttack: InfoWarAttackStore) => void;
}
