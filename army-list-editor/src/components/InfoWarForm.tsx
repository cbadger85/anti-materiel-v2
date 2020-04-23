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
  infoWarCategories,
  InfoWarCategory,
  infoWarRange,
  InfoWarRange,
  InfoWarStore,
  infoWarTargets,
  InfoWarType,
  skillType,
} from '../types/infoWar';
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

const InfoWarForm: React.FC<InfoWarFormProps> = ({
  infoWar = initialFields,
  onSave,
}) => {
  const ammoOptions = useSelector((state: RootState) => state.ammo);

  const [infoWarFields, setInfoWarFields] = useState({
    ...infoWar,
    ammo: (infoWar.ammoIds as string[]).map(
      ammoId => ammoOptions.find(ammo => ammo.id === ammoId) as AmmoStore,
    ),
  });

  const classes = useStyles();
  const theme = useTheme();

  const isDisabled =
    !infoWarFields.name ||
    !infoWarFields.attackType ||
    !infoWarFields.category ||
    !infoWarFields.skillType.length;

  const handleChange = (
    e: React.ChangeEvent<{ value: unknown; name?: string }>,
  ) => {
    setInfoWarFields({
      ...infoWarFields,
      [e.target.name as string]: e.target.value,
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    const infoWarStore: InfoWarStore = {
      id: infoWar.id,
      name: infoWarFields.name,
      link: infoWarFields.link,
      attackType: infoWarFields.attackType as InfoWarType,
      category: infoWarFields.category as InfoWarCategory,
      range: infoWarFields.range as InfoWarRange | undefined,
      target: infoWarFields.target,
      attackModifier: infoWarFields.attackModifier,
      opponentModifier: infoWarFields.opponentModifier,
      damage: infoWarFields.damage,
      burst: infoWarFields.burst,
      ammoIds: infoWarFields.ammo.map(ammo => ammo.id),
      skillType: infoWarFields.skillType,
      effect: infoWarFields.effect,
      special: infoWar.special,
    };

    onSave(infoWarStore);
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
          value={infoWarFields.name}
          onChange={handleChange}
        />
        <TextField
          id="infowar-attack-link"
          label="Link"
          name="link"
          color="secondary"
          className={classes.fieldWide}
          value={infoWarFields.link}
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
            value={infoWarFields.attackType}
            onChange={handleChange}
          >
            <MenuItem value={InfoWarType.HACKING_PROGRAM}>
              Hacking Program
            </MenuItem>
            <MenuItem value={InfoWarType.PHEROWARE_TACTIC}>
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
            value={infoWarFields.range}
            onChange={handleChange}
          >
            {infoWarRange.map(range => (
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
            value={infoWarFields.category}
            onChange={handleChange}
          >
            {infoWarCategories.map(category => (
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
            value={infoWarFields.target}
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
            {infoWarTargets.map(target => (
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
          value={infoWarFields.attackModifier}
          onChange={handleChange}
        />
        <TextField
          id="infowar-opponent-modifier"
          label="Opponent Modifier"
          name="opponentModifier"
          color="secondary"
          className={classes.fieldSmall}
          value={infoWarFields.opponentModifier}
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
          value={infoWarFields.damage}
          onChange={handleChange}
        />
        <TextField
          id="infowar-burst"
          label="Burst"
          name="burst"
          color="secondary"
          className={classes.fieldSmall}
          value={infoWarFields.burst}
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
          value={infoWarFields.ammo}
          onChange={(e, ammo) => {
            setInfoWarFields({
              ...infoWarFields,
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
            value={infoWarFields.skillType}
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
          value={infoWarFields.effect}
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
          value={infoWarFields.special}
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

export default InfoWarForm;

interface InfoWarFormProps {
  infoWar?: InfoWarStore;
  onSave: (infoWar: InfoWarStore) => void;
}
