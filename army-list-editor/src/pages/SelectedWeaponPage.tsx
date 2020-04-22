import { Box, IconButton, Link, Paper, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import shortid from 'shortid';
import WeaponDrawer from '../components/WeaponDrawer';
import WeaponModeTable from '../components/WeaponModeTable';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { RootState } from '../store/rootReducer';
import { addWeapon, removeWeapon } from '../store/weaponSlice';
import { WeaponModeStore, WeaponStore } from '../types/weapon';

const SelectedWeaponPage = () => {
  const [isWeaponDrawerOpen, setIsWeaponDrawerOpen] = useState(false);

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

  const toggleWeaponDrawer = () => setIsWeaponDrawerOpen(isOpen => !isOpen);

  const handleDelete = (weaponId: string) => {
    dispatch(removeWeapon(weaponId));
    snack('Weapon Removed', 'success');
  };

  const handleUpdate = (weapon: WeaponStore) => {
    const suppressiveFireModes = weapon.modes
      .filter(mode =>
        mode.traitIds
          .map(traitId => rules.find(rule => rule.id === traitId)?.name)
          .toString()
          .toLowerCase()
          .includes('suppressive'),
      )
      .map<WeaponModeStore>(mode => ({
        ...mode,
        id: shortid(),
        name: `${mode.name} Suppressive Fire Mode`,
        shortRange: '0-8" 0',
        mediumRange: '8-16" 0',
        longRange: '16-24" -3',
        maximumRange: '',
        burst: '3',
        traitIds: mode.traitIds.filter(
          traitId =>
            !rules
              .find(rule => rule.id === traitId)
              ?.name.toString()
              .toLowerCase()
              .includes('suppressive'),
        ),
      }));

    dispatch(
      addWeapon({
        ...weapon,
        modes: [...weapon.modes, ...suppressiveFireModes],
      }),
    );
    snack('Weapon Added', 'success');
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
        <IconButton onClick={toggleWeaponDrawer} size="small">
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={() => handleDelete(selectedWeapon.id)}
          size="small"
        >
          <DeleteIcon />
        </IconButton>
      </Box>
      <WeaponDrawer
        isOpen={isWeaponDrawerOpen}
        onClose={toggleWeaponDrawer}
        ammo={ammo}
        traits={rules}
        onSave={handleUpdate}
        weapon={selectedWeapon}
      />
    </Box>
  );
};

export default SelectedWeaponPage;
