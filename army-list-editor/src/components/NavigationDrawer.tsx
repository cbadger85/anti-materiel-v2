import React from 'react';
import { makeStyles, Drawer, Typography } from '@material-ui/core';
import { appBarHeight } from './AppTopBar';
import NavigationAccordionEntry from './NavigationAccordionEntry';
import NavigationAccordionWeapon from './NavigationAccordionWeapon';
import NavigationAccordionInfoWar from './NavigationAccordionInfoWar';
import NavigationAccordionAmmo from './NavigationAccordionAmmo';
import NavigationAccordionRule from './NavigationAccordionRule';

export const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.primary.main,
    height: appBarHeight,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(3),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: theme.zIndex.drawer + 2,
  },
  drawerPaper: {
    backgroundColor: '#1b1b1b',
    width: drawerWidth,
  },
}));

const NavigationDrawer = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <Typography variant="h6" className={classes.title}>
        Army Editor
      </Typography>
      <NavigationAccordionEntry />
      <NavigationAccordionWeapon />
      <NavigationAccordionInfoWar />
      <NavigationAccordionAmmo />
      <NavigationAccordionRule />
    </Drawer>
  );
};

export default NavigationDrawer;
