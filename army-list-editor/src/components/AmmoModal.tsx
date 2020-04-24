import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { AmmoStore } from '../types/weapon';
import sortBy from 'lodash/sortBy';

const initialFields = {
  id: '',
  name: '',
  link: '',
  combinedAmmoIds: [],
};

const AmmoForm: React.FC<AmmoFormProps> = ({
  ammo = initialFields,
  onClose,
  onSave,
}) => {
  const ammoOptions = useSelector((state: RootState) =>
    state.ammo.filter(ammo => !ammo.combinedAmmoIds.length),
  );

  const [ammoFields, setAmmoFields] = useState({
    ...ammo,
    combinedAmmo: ammo.combinedAmmoIds.map(
      ammoId => ammoOptions.find(ammo => ammo.id === ammoId) as AmmoStore,
    ),
  });
  const isDisabled = !ammoFields.name;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmmoFields({ ...ammoFields, [e.target.name]: e.target.value });
  };

  const handleSaveAmmo = (e: React.FormEvent) => {
    e.preventDefault();

    const ammoStore: AmmoStore = {
      id: ammo.id,
      name: ammoFields.name,
      link: ammoFields.link,
      combinedAmmoIds: ammoFields.combinedAmmo.map(ammo => ammo.id),
    };

    onSave(ammoStore);
    onClose();
  };

  return (
    <form>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          id="ammo-name"
          label="Name"
          onChange={handleChange}
          color="secondary"
          fullWidth
          value={ammoFields.name}
          required
        />
        <TextField
          margin="dense"
          id="ammo-link"
          label="Link"
          name="link"
          color="secondary"
          onChange={handleChange}
          fullWidth
          value={ammoFields.link}
        />
        <Autocomplete<AmmoStore>
          multiple
          id="ammo-combined-ammo"
          options={sortBy(ammoOptions, 'name')}
          getOptionLabel={option => option.name}
          value={ammoFields.combinedAmmo}
          onChange={(e, combinedAmmo) => {
            setAmmoFields({
              ...ammoFields,
              combinedAmmo,
            });
          }}
          renderInput={params => (
            <TextField
              {...params}
              variant="standard"
              color="secondary"
              label="Combined Ammo"
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleSaveAmmo}
          color="primary"
          variant="contained"
          type="submit"
          disabled={isDisabled}
        >
          Save Ammo
        </Button>
      </DialogActions>
    </form>
  );
};

interface AmmoFormProps {
  ammo?: AmmoStore;
  onClose: () => void;
  onSave: (ammo: AmmoStore) => void;
}

const AmmoModal: React.FC<AmmoModalProps> = ({
  isOpen,
  onClose,
  onSave,
  ammo,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} aria-labelledby="add-ammo-title">
      <DialogTitle id="add-ammo-title">
        {ammo ? 'Edit' : 'Add'} Ammo
      </DialogTitle>
      <AmmoForm ammo={ammo} onClose={onClose} onSave={onSave} />
    </Dialog>
  );
};

export default AmmoModal;

interface AmmoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (ammo: AmmoStore) => void;
  ammo?: AmmoStore;
}
