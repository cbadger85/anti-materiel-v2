import { Box, Drawer, Fab, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { InfoWarStore } from '../types/infoWar';
import InfoWarForm from './InfoWarForm';
import { appBarHeight, drawerWidth } from './NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { updateInfoWar, addInfoWar } from '../store/infoWar';
import { RootState } from '../store/rootReducer';

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

const InfoWarDrawer: React.FC<InfoWarDrawerProps> = ({ onClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const snack = useAppSnackbar();

  const { isOpen, selectedInfoWar } = useSelector(({ app }: RootState) => ({
    isOpen: app.infoWarDrawer.isOpen,
    selectedInfoWar: app.infoWarDrawer.selectedInfoWar,
  }));

  const handleUpdateInfoWar = (infoWar: InfoWarStore) => {
    dispatch(updateInfoWar(infoWar));
    snack('InfoWar Updated', 'success');
  };

  const handleAddInfoWar = (infoWar: InfoWarStore) => {
    dispatch(addInfoWar(infoWar));
    snack('InfoWar Added', 'success');
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
        <InfoWarForm
          onSave={selectedInfoWar ? handleUpdateInfoWar : handleAddInfoWar}
          infoWar={selectedInfoWar}
        />
      </Box>
    </Drawer>
  );
};

export default InfoWarDrawer;

interface InfoWarDrawerProps {
  onClose: () => void;
}
