import {
  Box,
  Button,
  Divider,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import { Sectorial } from '../types/army';
import EntryDetailsDisplay from './EntryDetailsDisplay';
import EntryDetailsModal from './EntryDetailsModal';

const useStyles = makeStyles(theme => ({
  icon: {
    marginLeft: theme.spacing(2),
  },
}));

const EntryDetails: React.FC<EntryDetailsProps> = ({
  editable,
  name,
  isc,
  sectorials,
}) => {
  const [isEntryDetailsModalOpen, setIsEntryDetailsModalOpen] = useState(false);
  const classes = useStyles();

  const toggleEntryDetailsModal = () =>
    setIsEntryDetailsModalOpen(isOpen => !isOpen);

  return (
    <div>
      <Box display="flex" alignItems="center">
        <Typography variant="h6">Details</Typography>
        {name && editable && (
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
        {name || !editable ? (
          <EntryDetailsDisplay name={name} isc={isc} sectorials={sectorials} />
        ) : (
          <Button
            color="secondary"
            variant="outlined"
            onClick={toggleEntryDetailsModal}
          >
            Add Details
          </Button>
        )}
      </Box>
      <EntryDetailsModal
        isOpen={isEntryDetailsModalOpen}
        onClose={toggleEntryDetailsModal}
      />
    </div>
  );
};

export default EntryDetails;

interface EntryDetailsProps {
  editable?: boolean;
  name: string;
  isc?: string;
  sectorials: Sectorial[];
}
