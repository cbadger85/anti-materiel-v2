import { Box, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { removeWeapon } from '../store/weaponSlice';
import { Row } from '../types/app';
import { WeaponStore } from '../types/weapon';

const WeaponTableToolbar: React.FC<WeaponTableToolbarProps> = ({
  row,
  data,
}) => {
  const weapon = data[row.data[0].dataIndex];

  const dispatch = useDispatch();
  const snack = useAppSnackbar();

  const handleDelete = () => {
    dispatch(removeWeapon(weapon.id));
    snack('Weapon Removed', 'success');
  };

  return (
    <Box>
      <IconButton component={Link} to={`/edit/weapons/${weapon.id}`}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

interface WeaponTableToolbarProps {
  row: Row;
  data: WeaponStore[];
}

export default WeaponTableToolbar;
