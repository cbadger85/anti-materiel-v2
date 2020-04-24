import {
  Box,
  Button,
  Typography,
  Divider,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import EntryDetails from '../components/EntryDetails';
import EntryDetailsModal from '../components/EntryDetailsModal';
import PageTemplate from '../components/PageTemplate';
import { RootState } from '../store/rootReducer';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
  icon: {
    marginLeft: theme.spacing(2),
  },
}));

const EntryFormPage = () => {
  const [isEntryDetailsModalOpen, setIsEntryDetailsModalOpen] = useState(false);
  const { isEntryFormMode, entry } = useSelector((state: RootState) => ({
    isEntryFormMode: state.app.isEntryFormMode,
    entry: state.entryForm,
  }));
  const history = useHistory();
  const { entryId } = useParams<{ entryId: string }>();

  const classes = useStyles();

  useEffect(() => {
    isEntryFormMode || history.push('/entries');
  }, [isEntryFormMode, history]);

  useEffect(() => {
    if (entryId && entry.id !== entryId) {
      history.push('/new/entries');
    }
  }, [entry.id, entryId, history]);

  const toggleEntryDetailsModal = () =>
    setIsEntryDetailsModalOpen(isOpen => !isOpen);

  return (
    <PageTemplate title={entryId ? 'Edit Entry' : 'Add Entry'}>
      <Box display="flex" alignItems="center">
        <Typography variant="h6">Entry Details</Typography>
        {entry.name && (
          <IconButton
            onClick={toggleEntryDetailsModal}
            size="small"
            className={classes.icon}
          >
            <EditIcon />
          </IconButton>
        )}
      </Box>
      <Divider />
      <Box marginTop={3}>
        {entry.name ? (
          <EntryDetails
            name={entry.name}
            isc={entry.isc}
            sectorials={entry.sectorials}
          />
        ) : (
          <Button
            color="secondary"
            variant="outlined"
            onClick={toggleEntryDetailsModal}
          >
            Add Entry Details
          </Button>
        )}
      </Box>
      <EntryDetailsModal
        isOpen={isEntryDetailsModalOpen}
        onClose={toggleEntryDetailsModal}
      />
    </PageTemplate>
  );
};

export default EntryFormPage;
