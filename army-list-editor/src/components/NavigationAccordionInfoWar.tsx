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
import {
  closeInfoWarDrawer,
  openAddInfoWarDrawer,
} from '../store/infoWarDrawerSlice';
import { RootState } from '../store/rootReducer';
import NavigationAccordion from './NavigationAccordion';
import InfoWarDrawer from './InfoWarDrawer';

const useStyles = makeStyles(theme => ({
  toolbar: { ...theme.mixins.toolbar, width: '100%' },
  listItemText: {
    paddingLeft: theme.spacing(2),
  },
  listItemIcon: {
    marginRight: theme.spacing(2),
  },
}));

const NavigationAccordionInfoWar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isInfoWarDrawerOpen = useSelector(
    (state: RootState) => state.app.infoWarDrawer.isOpen,
  );

  const handleOpenInfoWarDrawer = () => {
    dispatch(openAddInfoWarDrawer());
  };

  const handleCloseInfoWarDrawer = () => {
    dispatch(closeInfoWarDrawer());
  };

  return (
    <NavigationAccordion title="InfoWar">
      <InfoWarDrawer onClose={handleCloseInfoWarDrawer} />
      <div className={classes.toolbar}>
        <List>
          <ListItem button component={NavLink} to="/infowar">
            <ListItemText className={classes.listItemText}>
              <Box display="flex" alignItems="center">
                <DescriptionIcon className={classes.listItemIcon} />
                InfoWar List
              </Box>
            </ListItemText>
          </ListItem>
          <ListItem
            button
            onClick={
              isInfoWarDrawerOpen
                ? handleCloseInfoWarDrawer
                : handleOpenInfoWarDrawer
            }
          >
            <ListItemText className={classes.listItemText}>
              {isInfoWarDrawerOpen ? (
                <Box display="flex" alignItems="center">
                  <CloseIcon className={classes.listItemIcon} />
                  Close InfoWar Drawer
                </Box>
              ) : (
                <Box display="flex" alignItems="center">
                  <AddIcon className={classes.listItemIcon} />
                  Add InfoWar
                </Box>
              )}
            </ListItemText>
          </ListItem>
        </List>
      </div>
    </NavigationAccordion>
  );
};

export default NavigationAccordionInfoWar;
