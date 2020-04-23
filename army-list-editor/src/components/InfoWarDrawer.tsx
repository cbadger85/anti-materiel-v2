import { Box, Drawer, Fab, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { InfoWarStore } from '../types/infoWar';
import InfoWarForm from './InfoWarForm';
import { appBarHeight, drawerWidth } from './NavBar';

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

const InfoWarDrawer: React.FC<InfoWarDrawerProps> = ({
  isOpen,
  onClose,
  onSave,
  infoWar,
}) => {
  const classes = useStyles();

  const handleSave = (infoWar: InfoWarStore) => {
    onSave(infoWar);
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
        <InfoWarForm onSave={handleSave} infoWar={infoWar} />
      </Box>
    </Drawer>
  );
};

export default InfoWarDrawer;

interface InfoWarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (infoWar: InfoWarStore) => void;
  infoWar?: InfoWarStore;
}
