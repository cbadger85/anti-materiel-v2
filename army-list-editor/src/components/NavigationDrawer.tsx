import { Box, Drawer, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { appBarHeight } from './AppTopBar';
import NavigationAccordionAmmo from './NavigationAccordionAmmo';
import NavigationAccordionEntry from './NavigationAccordionEntry';
import NavigationAccordionInfoWar from './NavigationAccordionInfoWar';
import NavigationAccordionRule from './NavigationAccordionRule';
import NavigationAccordionWeapon from './NavigationAccordionWeapon';
import AppMenuIcon from './AppMenuIcon';

export const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.primary.main,
    height: appBarHeight,
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    marginLeft: theme.spacing(1),
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
      <Box display="flex" alignItems="center" marginLeft={1}>
        <AppMenuIcon />
        <Typography variant="h6">
          <Link to="/" className={classes.title}>
            Army Editor
          </Link>
        </Typography>
      </Box>
      <NavigationAccordionEntry />
      <NavigationAccordionWeapon />
      <NavigationAccordionInfoWar />
      <NavigationAccordionAmmo />
      <NavigationAccordionRule />
    </Drawer>
  );
};

export default NavigationDrawer;
