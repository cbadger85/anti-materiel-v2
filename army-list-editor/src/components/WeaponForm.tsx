import React, { useState } from 'react';
import { WeaponStore, WeaponModeStore, AmmoStore } from '../types/weapon';
import {
  makeStyles,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Paper,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import WeaponModeTable from './WeaponModeTable';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { BaseRule } from '../types/rule';
import WeaponModeFormModal from './WeaponModeModal';

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
  error: {
    marginBottom: theme.spacing(4),
  },
  paper: {
    borderColor: theme.palette.secondary.dark,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  weaponModeTitle: {
    marginBottom: theme.spacing(3),
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
  ammo,
  traits,
  onSave,
}) => {
  const classes = useStyles();
  const [weaponFields, setWeaponFields] = useState(weapon);
  const [isWeaponModeModal, setIsWeaponModeModal] = useState(false);
  const [selectedWeaponMode, setSelectedWeaponMode] = useState<
    WeaponModeStore
  >();

  const handleChange = (
    e: React.ChangeEvent<{ value: unknown; name?: string }>,
  ) => {
    setWeaponFields({
      ...weaponFields,
      [e.target.name as string]: e.target.value,
    });
  };

  const handleOpenModal = () => setIsWeaponModeModal(true);

  const handleOpenEditModal = (mode: WeaponModeStore) => {
    setSelectedWeaponMode(mode);
    setIsWeaponModeModal(true);
  };

  const handleCloseModal = () => {
    setIsWeaponModeModal(false);
    setSelectedWeaponMode(undefined);
  };

  const handleSaveWeaponMode = (mode: WeaponModeStore) => {
    setWeaponFields({
      ...weaponFields,
      modes: [...weaponFields.modes, mode],
    });
  };

  const handleUpdateWeaponMode = (updatedMode: WeaponModeStore) => {
    setWeaponFields({
      ...weaponFields,
      modes: weaponFields.modes.map(mode =>
        updatedMode.id === mode.id ? updatedMode : mode,
      ),
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
    <div>
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
        <Paper variant="outlined" className={classes.paper}>
          <Typography variant="h6" className={classes.weaponModeTitle}>
            Weapon Modes
          </Typography>
          {!weaponFields.modes.length && (
            <Box marginBottom={3}>
              <Alert variant="filled" severity="error">
                No weapon modes have been added yet
              </Alert>
            </Box>
          )}
          {weaponFields.modes.map(mode => (
            <Box
              key={mode.id}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <WeaponModeTable weaponMode={mode} ammo={ammo} traits={traits} />
              <Box display="flex">
                <IconButton onClick={() => handleOpenEditModal(mode)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDeleteWeaponMode(mode.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
          <Button color="secondary" onClick={handleOpenModal}>
            Add Weapon Mode
          </Button>
        </Paper>
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
      <WeaponModeFormModal
        isOpen={isWeaponModeModal}
        onSave={
          selectedWeaponMode ? handleUpdateWeaponMode : handleSaveWeaponMode
        }
        onClose={handleCloseModal}
        weaponMode={selectedWeaponMode}
      />
    </div>
  );
};

export default WeaponForm;

interface WeaponFormProps {
  weapon?: WeaponStore;
  onSave: (weapon: WeaponStore) => void;
  ammo: AmmoStore[];
  traits: BaseRule[];
}
