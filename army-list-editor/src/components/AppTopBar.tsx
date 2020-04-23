import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { drawerWidth } from './NavigationDrawer';

export const appBarHeight = 64;

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: '#1b1b1b',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    height: appBarHeight,
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const AppTopBar = () => {
  const classes = useStyles();

  const { title, isWeaponDrawerOpen, isInfoWarDrawerOpen } = useSelector(
    ({ app }: RootState) => ({
      title: app.title,
      isWeaponDrawerOpen: app.weaponDrawer.isOpen,
      isInfoWarDrawerOpen: app.infoWarDrawer.isOpen,
    }),
  );

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5" color="textPrimary">
          {isInfoWarDrawerOpen || isWeaponDrawerOpen || title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppTopBar;
