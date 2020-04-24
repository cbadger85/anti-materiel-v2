import {
  Box,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DescriptionIcon from '@material-ui/icons/Description';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { addAmmo } from '../store/ammoListSlice';
import { AmmoStore } from '../types/weapon';
import AmmoModal from './AmmoModal';
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

const NavigationAccordionAmmo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const snack = useAppSnackbar();

  const [isAmmoModalOpen, setIsAmmoModalOpen] = useState(false);

  const toggleAmmoModal = () => setIsAmmoModalOpen(isOpen => !isOpen);

  const handleAddAmmo = (ammo: AmmoStore) => {
    dispatch(addAmmo(ammo));
    snack('Ammo Added', 'success');
  };

  return (
    <NavigationAccordion title="ammo">
      <AmmoModal
        isOpen={isAmmoModalOpen}
        onClose={toggleAmmoModal}
        onSave={handleAddAmmo}
      />
      <div className={classes.toolbar}>
        <List>
          <ListItem button component={NavLink} to="/ammo">
            <ListItemText className={classes.listItemText}>
              <Box display="flex" alignItems="center">
                <DescriptionIcon className={classes.listItemIcon} />
                Ammo List
              </Box>
            </ListItemText>
          </ListItem>
          <ListItem button onClick={toggleAmmoModal}>
            <ListItemText className={classes.listItemText}>
              <Box display="flex" alignItems="center">
                <AddIcon className={classes.listItemIcon} />
                Add Ammo
              </Box>
            </ListItemText>
          </ListItem>
        </List>
      </div>
    </NavigationAccordion>
  );
};

export default NavigationAccordionAmmo;
