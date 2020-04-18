import {
  AppBar,
  Link,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Link as NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[900],
  },
  title: {
    color: theme.palette.primary.light,
    flex: 1,
  },
  navLink: {
    fontSize: 16,
    marginLeft: theme.spacing(3),
    color: theme.palette.primary.light,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Anti-Materiel Army Editor
        </Typography>
        <Link
          component={NavLink}
          to="/"
          color="secondary"
          className={classes.navLink}
        >
          Entries
        </Link>
        <Link
          component={NavLink}
          to="/"
          color="secondary"
          className={classes.navLink}
        >
          Weapons
        </Link>
        <Link
          component={NavLink}
          to="/"
          color="secondary"
          className={classes.navLink}
        >
          Info War Attacks
        </Link>
        <Link
          component={NavLink}
          to="/"
          color="secondary"
          className={classes.navLink}
        >
          Ammo
        </Link>
        <Link
          component={NavLink}
          to="/rules"
          color="secondary"
          className={classes.navLink}
        >
          Rules
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
