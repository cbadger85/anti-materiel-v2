import { Box, Drawer, Fab, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { RootState } from '../store/rootReducer';
import { addWeapon, updateWeapon } from '../store/weaponSlice';
import { WeaponModeStore, WeaponStore } from '../types/weapon';
import { appBarHeight, drawerWidth } from './NavBar';
import WeaponForm from './WeaponForm';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: `calc(100% - ${drawerWidth}px)`,
    flexShrink: 0,
  },
  drawerPaper: {
    width: `calc(100% - ${drawerWidth}px)`,
    height: `calc(100vh - ${appBarHeight}px)`,
    top: 64,
    padding: theme.spacing(3),
    border: 'none',
  },
  closeIcon: {
    backgroundColor: '#1b1b1b',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1f1f1f',
    },
  },
}));

const WeaponDrawer: React.FC<WeaponDrawerProps> = ({ onClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const snack = useAppSnackbar();

  const { rules, ammo, isOpen, selectedWeapon } = useSelector(
    ({ rules, ammo, app }: RootState) => ({
      rules,
      ammo,
      isOpen: app.weaponDrawer.isOpen,
      selectedWeapon: app.weaponDrawer.selectedWeapon,
    }),
  );

  const handleAddWeapon = (weapon: WeaponStore) => {
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

  const handleUpdateWeapon = (weapon: WeaponStore) => {
    dispatch(updateWeapon(weapon));
    snack('Weapon Updated', 'success');
  };

  return (
    <Drawer
      open={isOpen}
      anchor="right"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        hideBackdrop: true,
      }}
      style={{ marginLeft: drawerWidth }}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">
          {selectedWeapon ? 'Edit' : 'Add'} Weapon
        </Typography>
        <Fab onClick={onClose} className={classes.closeIcon} size="small">
          <CloseIcon />
        </Fab>
      </Box>
      <Box maxWidth={1000} marginTop={4}>
        <WeaponForm
          onSave={selectedWeapon ? handleUpdateWeapon : handleAddWeapon}
          weapon={selectedWeapon}
          ammo={ammo}
          traits={rules}
        />
      </Box>
    </Drawer>
  );
};

export default WeaponDrawer;

interface WeaponDrawerProps {
  onClose: () => void;
}
