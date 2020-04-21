import React from 'react';
import { Drawer, makeStyles } from '@material-ui/core';
import { appBarHeight } from './NavBar';

export const ListDrawerWidth = 400;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: ListDrawerWidth,
    flexShrink: 0,
    top: 64,
  },
  drawerPaper: {
    width: ListDrawerWidth,
    marginTop: appBarHeight,
    padding: theme.spacing(2),
    border: 'none',
  },
}));

const ListDrawer: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      anchor="right"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {children}
    </Drawer>
  );
};

export default ListDrawer;
