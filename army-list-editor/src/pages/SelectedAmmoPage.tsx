import {
  Box,
  Button,
  IconButton,
  Link,
  Paper,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, Redirect, useParams } from 'react-router-dom';
import AmmoModal from '../components/AmmoModal';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { addAmmo, removeAmmo } from '../store/ammoSlice';
import { RootState } from '../store/rootReducer';
import { AmmoStore } from '../types/weapon';

const SelectedAmmoPage = () => {
  const [isAmmoModalOpen, setIsAmmoModalOpen] = useState(false);

  const dispatch = useDispatch();
  const snack = useAppSnackbar();
  const { ammoId } = useParams<{ ammoId: string }>();
  const ammo = useSelector((state: RootState) => state.ammo);

  const selectedAmmo = ammo.find(ammo => ammo.id === ammoId);

  if (!selectedAmmo) {
    return <Redirect to="/ammo" />;
  }

  const toggleAmmoModal = () => setIsAmmoModalOpen(isOpen => !isOpen);

  const handleDelete = (ammoId: string) => {
    dispatch(removeAmmo(ammoId));
    snack('Ammo Removed', 'success');
  };

  const handleUpdate = (ammo: AmmoStore) => {
    dispatch(addAmmo(ammo));
    snack('Ammo Added', 'success');
  };

  return (
    <Box
      component={Paper}
      paddingX={3}
      paddingY={3}
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <div>
        <Typography variant="h6">{selectedAmmo.name}</Typography>
        <Link href={selectedAmmo.link}>{selectedAmmo.link}</Link>
        <Typography variant="overline">combines:</Typography>
        {selectedAmmo.combinedAmmoIds.length &&
          selectedAmmo.combinedAmmoIds
            .map(ammoId => ammo.find(ammo => ammo.id === ammoId))
            .map(ammo => (
              <Button
                key={ammo?.id}
                component={RouterLink}
                to={`/ammo/${ammo?.id}`}
              >
                {ammo?.name}
              </Button>
            ))}
      </div>
      <Box>
        <IconButton onClick={toggleAmmoModal} size="small">
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => handleDelete(selectedAmmo.id)} size="small">
          <DeleteIcon />
        </IconButton>
      </Box>
      <AmmoModal
        isOpen={isAmmoModalOpen}
        onClose={toggleAmmoModal}
        onSave={handleUpdate}
        ammo={selectedAmmo}
      />
    </Box>
  );
};

export default SelectedAmmoPage;
