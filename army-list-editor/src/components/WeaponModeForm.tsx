import {
  Box,
  Button,
  IconButton,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Autocomplete from '@material-ui/lab/Autocomplete';
import sortBy from 'lodash/sortBy';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import { RootState } from '../store/rootReducer';
import { BaseRule } from '../types/rule';
import { AmmoStore, WeaponModeStore, weaponRangeBands } from '../types/weapon';
import WeaponModeTable from './WeaponModeTable';

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
    minWidth: 172,
    marginRight: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  paper: {
    borderColor: theme.palette.secondary.dark,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  error: {
    marginBottom: theme.spacing(4),
  },
}));

const initialFields: WeaponModeFields = {
  id: '',
  name: '',
  shortRange: '',
  mediumRange: '',
  longRange: '',
  maximumRange: '',
  damage: '',
  burst: '',
  ammo: [],
  traits: [],
};

const WeaponModeForm: React.FC<WeaponModeFormProps> = ({
  weaponModes,
  onSave,
  onDelete,
}) => {
  const classes = useStyles();

  const { ammo, rules } = useSelector(({ ammo, rules }: RootState) => ({
    ammo: sortBy(ammo, 'name'),
    rules: sortBy(rules, 'name'),
  }));

  const [weaponModeFields, setWeaponModeFields] = useState(initialFields);

  console.log(weaponModeFields);

  const isDisabled = !weaponModeFields.name || !weaponModeFields.burst;

  const handleChange = (
    e: React.ChangeEvent<{ value: unknown; name?: string }>,
  ) => {
    setWeaponModeFields({
      ...weaponModeFields,
      [e.target.name as string]: e.target.value,
    });
  };

  const handleSave = () => {
    const weaponModeStore = {
      id: shortid(),
      name: weaponModeFields.name,
      shortRange: weaponModeFields.shortRange,
      mediumRange: weaponModeFields.mediumRange,
      longRange: weaponModeFields.longRange,
      maximumRange: weaponModeFields.maximumRange,
      damage: weaponModeFields.damage,
      burst: weaponModeFields.burst,
      ammoIds: weaponModeFields.ammo.map(ammo => ammo.id),
      traitIds: weaponModeFields.traits.map(trait => trait.id),
    };

    onSave(weaponModeStore);
    setWeaponModeFields(initialFields);
  };

  return (
    <Paper variant="outlined" className={classes.paper}>
      <Typography variant="h6">Weapon Modes</Typography>
      {weaponModes.map(mode => (
        <Box
          key={mode.id}
          display="flex"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <WeaponModeTable weaponMode={mode} ammo={ammo} traits={rules} />
          <IconButton onClick={() => onDelete(mode.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}
      {!weaponModes.length && (
        <Typography color="error" className={classes.error}>
          No weapon modes have been added yet...
        </Typography>
      )}
      <div>
        <Box display="flex" flexWrap="wrap" alignItems="flex-end">
          <TextField
            name="name"
            id="weapon-mode-name"
            label="Name"
            color="secondary"
            className={classes.fieldWide}
            required
            value={weaponModeFields.name}
            onChange={handleChange}
          />
        </Box>
        <Box display="flex" flexWrap="wrap" alignItems="flex-end">
          <Autocomplete
            id="short-range-band"
            options={[...weaponRangeBands, '']}
            className={classes.fieldSmall}
            getOptionSelected={(option, value) => option === value}
            renderInput={params => (
              <TextField {...params} label="Short Range" />
            )}
            value={weaponModeFields.shortRange}
            onChange={(e: React.ChangeEvent<{}>, shortRange: string | null) =>
              setWeaponModeFields({
                ...weaponModeFields,
                shortRange,
              } as WeaponModeFields)
            }
          />
          <Autocomplete<string>
            id="medium-range-band"
            options={[...weaponRangeBands, '']}
            className={classes.fieldSmall}
            getOptionSelected={(option, value) => option === value}
            renderInput={params => (
              <TextField {...params} label="Medium Range" />
            )}
            value={weaponModeFields.mediumRange}
            onChange={(e: React.ChangeEvent<{}>, mediumRange: string | null) =>
              setWeaponModeFields({
                ...weaponModeFields,
                mediumRange,
              } as WeaponModeFields)
            }
          />
          <Autocomplete
            id="long-range-band"
            options={[...weaponRangeBands, '']}
            className={classes.fieldSmall}
            getOptionSelected={(option, value) => option === value}
            renderInput={params => <TextField {...params} label="Long Range" />}
            value={weaponModeFields.longRange}
            onChange={(e: React.ChangeEvent<{}>, longRange: string | null) =>
              setWeaponModeFields({
                ...weaponModeFields,
                longRange,
              } as WeaponModeFields)
            }
          />
          <Autocomplete
            id="maximum-range-band"
            options={[...weaponRangeBands, '']}
            className={classes.fieldSmall}
            getOptionSelected={(option, value) => option === value}
            renderInput={params => (
              <TextField {...params} label="Maximum Range" />
            )}
            value={weaponModeFields.maximumRange}
            onChange={(e: React.ChangeEvent<{}>, maximumRange: string | null) =>
              setWeaponModeFields({
                ...weaponModeFields,
                maximumRange,
              } as WeaponModeFields)
            }
          />
        </Box>
        <Box display="flex" flexWrap="wrap" alignItems="flex-end">
          <TextField
            name="damage"
            id="weapon-mode-damage"
            label="Damage"
            color="secondary"
            className={classes.fieldSmall}
            required
            value={weaponModeFields.damage}
            onChange={handleChange}
          />
          <TextField
            name="burst"
            id="weapon-mode-burst"
            label="Burst"
            color="secondary"
            className={classes.fieldSmall}
            required
            value={weaponModeFields.burst}
            onChange={handleChange}
          />
          <Autocomplete<AmmoStore>
            className={classes.fieldSmall}
            multiple
            id="weapon-mode-ammo"
            options={ammo}
            getOptionLabel={option => option.name}
            renderInput={params => <TextField {...params} label="Ammo" />}
            value={weaponModeFields.ammo}
            onChange={(e, ammo) => {
              setWeaponModeFields({
                ...weaponModeFields,
                ammo,
              });
            }}
          />
          <Autocomplete<BaseRule>
            className={classes.field}
            multiple
            id="weapon-mode-traits"
            options={rules}
            getOptionLabel={option => option.name}
            renderInput={params => <TextField {...params} label="Traits" />}
            value={weaponModeFields.traits}
            onChange={(e, traits) => {
              setWeaponModeFields({
                ...weaponModeFields,
                traits,
              });
            }}
          />
        </Box>
        <Button color="secondary" onClick={handleSave} disabled={isDisabled}>
          Save Weapon Mode
        </Button>
      </div>
    </Paper>
  );
};

export default WeaponModeForm;

type WeaponModeFields = Omit<WeaponModeStore, 'ammoIds' | 'traitIds'> & {
  ammo: AmmoStore[];
  traits: BaseRule[];
};

interface WeaponModeFormProps {
  weaponModes: WeaponModeStore[];
  onSave: (weaponMode: WeaponModeStore) => void;
  onDelete: (modeId: string) => void;
}
