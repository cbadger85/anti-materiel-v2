import {
  Box,
  IconButton,
  Link,
  Paper,
  Typography,
  makeStyles,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import WeaponModeTable from '../components/WeaponModeTable';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { RootState } from '../store/rootReducer';
import { removeWeapon } from '../store/weaponListSlice';
import { openEditWeaponDrawer } from '../store/weaponDrawerSlice';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: 'bold',
  },
}));

const SelectedWeaponPage = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const classes = useStyles();
  const dispatch = useDispatch();
  const snack = useAppSnackbar();
  const { weaponId } = useParams<{ weaponId: string }>();
  const { rules, ammo, weapons } = useSelector(
    ({ rules, ammo, weapons }: RootState) => ({
      rules,
      ammo,
      weapons,
    }),
  );

  const selectedWeapon = weapons.find(weapon => weapon.id === weaponId);

  if (!selectedWeapon) {
    return <Redirect to="/weapons" />;
  }

  const toggleDeleteModal = () => setIsDeleteModalOpen(isOpen => !isOpen);

  const handleOpenWeaponDrawer = () => {
    dispatch(openEditWeaponDrawer(selectedWeapon));
  };

  const handleDelete = (weaponId: string) => {
    dispatch(removeWeapon(weaponId));
    toggleDeleteModal();
    snack('Weapon Removed', 'success');
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
        <Typography variant="h6">{selectedWeapon.name}</Typography>
        <Link href={selectedWeapon.link}>{selectedWeapon.link}</Link>
        {selectedWeapon.modes.map(mode => (
          <WeaponModeTable weaponMode={mode} ammo={ammo} traits={rules} />
        ))}
      </div>
      <Box display="flex">
        <IconButton onClick={handleOpenWeaponDrawer} size="small">
          <EditIcon />
        </IconButton>
        <IconButton onClick={toggleDeleteModal} size="small">
          <DeleteIcon />
        </IconButton>
      </Box>
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onCancel={toggleDeleteModal}
        onDelete={() => handleDelete(selectedWeapon.id)}
        item={<span className={classes.bold}>Weapon</span>}
      />
    </Box>
  );
};

export default SelectedWeaponPage;
