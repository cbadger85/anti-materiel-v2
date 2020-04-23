import { Box, Drawer, Fab, makeStyles, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { addInfoWar, updateInfoWar } from '../store/infoWar';
import { RootState } from '../store/rootReducer';
import { InfoWarStore } from '../types/infoWar';
import InfoWarForm from './InfoWarForm';
import { appBarHeight, drawerWidth } from './NavBar';

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
      style={{ marginLeft: drawerWidth }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">
          {selectedInfoWar ? 'Edit' : 'Add'} InfoWar
        </Typography>
        <Fab onClick={onClose} className={classes.closeIcon} size="small">
          <CloseIcon />
        </Fab>
      </Box>
      <Box maxWidth={1000} marginTop={4}>
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
