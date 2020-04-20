import React, { useState } from 'react';
import { WeaponStore, WeaponModeStore } from '../types/weapon';
import { makeStyles, Box, TextField, Button } from '@material-ui/core';
import WeaponModeForm from './WeaponModeForm';

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
}));

const initialFields = {
  id: '',
  name: '',
  link: '',
  modes: [],
};

const WeaponForm: React.FC<WeaponFormProps> = ({
  weapon = initialFields,
  onSave,
}) => {
  const classes = useStyles();
  const [weaponFields, setWeaponFields] = useState(weapon);

  const handleChange = (
    e: React.ChangeEvent<{ value: unknown; name?: string }>,
  ) => {
    setWeaponFields({
      ...weaponFields,
      [e.target.name as string]: e.target.value,
    });
  };

  const handleSaveWeaponMode = (mode: WeaponModeStore) => {
    setWeaponFields({
      ...weaponFields,
      modes: [...weaponFields.modes, mode],
    });
  };

  const handleDeleteWeaponMode = (id: string) => {
    setWeaponFields({
      ...weaponFields,
      modes: weaponFields.modes.filter(mode => mode.id !== id),
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    onSave(weaponFields);
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
          value={weaponFields.name}
          onChange={handleChange}
        />
        <TextField
          id="infowar-attack-link"
          label="Link"
          name="link"
          color="secondary"
          className={classes.fieldWide}
          value={weaponFields.link}
          onChange={handleChange}
        />
      </Box>
      <WeaponModeForm
        weaponModes={weaponFields.modes}
        onSave={handleSaveWeaponMode}
        onDelete={handleDeleteWeaponMode}
      />
      <Button
        color="primary"
        variant="contained"
        onClick={handleSave}
        disabled={!weaponFields.name || !weaponFields.modes.length}
        type="submit"
      >
        Save Weapon
      </Button>
    </form>
  );
};

export default WeaponForm;

interface WeaponFormProps {
  weapon?: WeaponStore;
  onSave: (weapon: WeaponStore) => void;
}
