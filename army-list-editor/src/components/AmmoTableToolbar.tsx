import { Box, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { removeAmmo, updateAmmo } from '../store/ammoSlice';
import { Row } from '../types/app';
import { AmmoStore } from '../types/weapon';
import AmmoModal from './AmmoModal';

const AmmoTableToolbar: React.FC<AmmoTableToolbarProps> = ({ row, data }) => {
  const ammo = data[row.data[0].dataIndex];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const snack = useAppSnackbar();

  const toggleModal = () => setIsModalOpen(isOpen => !isOpen);

  const handleDelete = () => {
    dispatch(removeAmmo(ammo.id));
    snack('Rule Removed', 'success');
  };

  const handleSave = (ammo: AmmoStore) => {
    dispatch(updateAmmo(ammo));
    snack('Rule Updated', 'success');
  };

  return (
    <Box>
      <IconButton onClick={toggleModal}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
      <AmmoModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onSave={handleSave}
        ammo={ammo}
      />
    </Box>
  );
};

interface AmmoTableToolbarProps {
  row: Row;
  data: AmmoStore[];
}

export default AmmoTableToolbar;
