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
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { enterFormMode } from '../store/entryFormModeSlice';
import { RootState } from '../store/rootReducer';
import NavigationAccordion from './NavigationAccordion';
import ConfirmDiscardModal from './ConfirmDiscardModal';
import { clearEntry } from '../store/EntryFormSlice';

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
  const dispatch = useDispatch();
  const history = useHistory();
  const [isDiscardModalOpen, setIsDiscardModalOpen] = useState(false);

  const { isEntryFormMode, entryId } = useSelector((state: RootState) => ({
    isEntryFormMode: state.app.isEntryFormMode,
    entryId: state.entryForm.id,
  }));

  const toggleDiscardModal = () => setIsDiscardModalOpen(isOpen => !isOpen);

  const handleCancelEntryForm = () => {
    toggleDiscardModal();
    dispatch(clearEntry());
    history.push('/entries');
  };

  const handleEnterEntryForm = () => {
    dispatch(enterFormMode());
    history.push('new/entries');
  };

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
          {isEntryFormMode && (
            <ListItem
              button
              component={NavLink}
              to={entryId ? `/edit/entrieds/${entryId}` : '/new/entries'}
            >
              <ListItemText className={classes.listItemText}>
                <Box display="flex" alignItems="center">
                  <EditIcon className={classes.listItemIcon} />
                  Edit Entry
                </Box>
              </ListItemText>
            </ListItem>
          )}
          {isEntryFormMode ? (
            <ListItem button onClick={toggleDiscardModal}>
              <ListItemText className={classes.listItemText}>
                <Box display="flex" alignItems="center">
                  <CloseIcon className={classes.listItemIcon} />
                  Close Entry Form
                </Box>
              </ListItemText>
            </ListItem>
          ) : (
            <ListItem button onClick={handleEnterEntryForm}>
              <ListItemText className={classes.listItemText}>
                <Box display="flex" alignItems="center">
                  <AddIcon className={classes.listItemIcon} />
                  Add Entry
                </Box>
              </ListItemText>
            </ListItem>
          )}
        </List>
        <ConfirmDiscardModal
          isOpen={isDiscardModalOpen}
          onCancel={toggleDiscardModal}
          onDiscard={handleCancelEntryForm}
        />
      </div>
    </NavigationAccordion>
  );
};

export default NavigationAccordionEntry;
