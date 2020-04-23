import {
  Box,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import DescriptionIcon from '@material-ui/icons/Description';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../store/rootReducer';
import {
  closeWeaponDrawer,
  openAddWeaponDrawer,
} from '../store/weaponDrawerSlice';
import NavigationAccordion from './NavigationAccordion';
import WeaponDrawer from './WeaponDrawer';

const useStyles = makeStyles(theme => ({
  toolbar: { ...theme.mixins.toolbar, width: '100%' },
  listItemText: {
    paddingLeft: theme.spacing(2),
  },
  listItemIcon: {
    marginRight: theme.spacing(2),
  },
}));

const NavigationAccordionWeapon = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isWeaponDrawerOpen = useSelector(
    (state: RootState) => state.app.weaponDrawer.isOpen,
  );

  const handleOpenWeaponDrawer = () => {
    dispatch(openAddWeaponDrawer());
  };

  const handleCloseWeaponDrawer = () => {
    dispatch(closeWeaponDrawer());
  };

  return (
    <NavigationAccordion title="Weapon">
      <WeaponDrawer onClose={handleCloseWeaponDrawer} />
      <div className={classes.toolbar}>
        <List>
          <ListItem button component={NavLink} to="/weapons">
            <ListItemText className={classes.listItemText}>
              <Box display="flex" alignItems="center">
                <DescriptionIcon className={classes.listItemIcon} />
                Weapon List
              </Box>
            </ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={
              isWeaponDrawerOpen
                ? handleCloseWeaponDrawer
                : handleOpenWeaponDrawer
            }
          >
            <ListItemText className={classes.listItemText}>
              {isWeaponDrawerOpen ? (
                <Box display="flex" alignItems="center">
                  <CloseIcon className={classes.listItemIcon} />
                  Close Weapon Drawer
                </Box>
              ) : (
                <Box display="flex" alignItems="center">
                  <AddIcon className={classes.listItemIcon} />
                  Add Weapon
                </Box>
              )}
            </ListItemText>
          </ListItem>
        </List>
      </div>
    </NavigationAccordion>
  );
};

export default NavigationAccordionWeapon;
