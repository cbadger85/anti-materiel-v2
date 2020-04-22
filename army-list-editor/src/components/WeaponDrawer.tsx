import { Box, Drawer, Fab, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { BaseRule } from '../types/rule';
import { AmmoStore, WeaponStore } from '../types/weapon';
import { appBarHeight, drawerWidth } from './NavBar';
import WeaponForm from './WeaponForm';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: `calc(100% - ${drawerWidth}px)`,
    flexShrink: 0,
    top: 64,
  },
  drawerPaper: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginTop: appBarHeight,
    padding: theme.spacing(2),
    border: 'none',
  },
  closeIcon: {
    top: 0,
    left: `calc(100vw - ${drawerWidth}px - 90px)`,
    backgroundColor: '#1b1b1b',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1f1f1f',
    },
  },
}));

const WeaponDrawer: React.FC<WeaponDrawerProps> = ({
  isOpen,
  onClose,
  onSave,
  weapon,
  ammo,
  traits,
}) => {
  const classes = useStyles();

  const handleSave = (weapon: WeaponStore) => {
    onSave(weapon);
    onClose();
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
      style={{ top: 64, marginLeft: drawerWidth }}
    >
      <Box maxWidth={1000}>
        <Fab onClick={onClose} className={classes.closeIcon}>
          <CloseIcon />
        </Fab>
        <WeaponForm
          onSave={handleSave}
          traits={traits}
          ammo={ammo}
          weapon={weapon}
        />
      </Box>
    </Drawer>
  );
};

export default WeaponDrawer;

interface WeaponDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (weapon: WeaponStore) => void;
  traits: BaseRule[];
  ammo: AmmoStore[];
  weapon?: WeaponStore;
}
