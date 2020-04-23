import {
  Box,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DescriptionIcon from '@material-ui/icons/Description';
import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationAccordion from './NavigationAccordion';

const useStyles = makeStyles(theme => ({
  toolbar: { ...theme.mixins.toolbar, width: '100%' },
  listItemText: {
    paddingLeft: theme.spacing(2),
  },
  listItemIcon: {
    marginRight: theme.spacing(2),
  },
}));

const NavigationAccordionEntry = () => {
  const classes = useStyles();

  return (
    <NavigationAccordion title="Entry">
      <div className={classes.toolbar}>
        <List>
          <ListItem button component={NavLink} to="/entries">
            <ListItemText className={classes.listItemText}>
              <Box display="flex" alignItems="center">
                <DescriptionIcon className={classes.listItemIcon} />
                Entry List
              </Box>
            </ListItemText>
          </ListItem>
          <ListItem button component={NavLink} to="/entries">
            <ListItemText className={classes.listItemText}>
              <Box display="flex" alignItems="center">
                <AddIcon className={classes.listItemIcon} />
                Add Entry
              </Box>
            </ListItemText>
          </ListItem>
        </List>
      </div>
    </NavigationAccordion>
  );
};

export default NavigationAccordionEntry;
