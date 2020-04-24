import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { Sectorial, sectorials } from '../types/army';
import { addEntryDetails } from '../store/EntryFormSlice';

const EntryDetailsForm: React.FC<EntryDetailsFormProps> = ({ onClose }) => {
  const initialEntryDetailsFields = useSelector(({ entryForm }: RootState) => ({
    name: entryForm.name,
    isc: entryForm.isc,
    sectorials: entryForm.sectorials,
  }));

  const [entryDetailsFields, setEntryDetailsFields] = useState(
    initialEntryDetailsFields,
  );

  const dispatch = useDispatch();

  const isDisabled =
    !entryDetailsFields.name || !entryDetailsFields.sectorials.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntryDetailsFields({
      ...entryDetailsFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addEntryDetails(entryDetailsFields));
    onClose();
  };

  return (
    <form>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          id="entry-name"
          label="Name"
          onChange={handleChange}
          color="secondary"
          fullWidth
          value={entryDetailsFields.name}
          required
        />
        <TextField
          margin="dense"
          id="entry-isc"
          label="ISC"
          name="isc"
          color="secondary"
          onChange={handleChange}
          fullWidth
          value={entryDetailsFields.isc}
        />
        <Autocomplete
          multiple
          id="entry-sectorials"
          options={[...sectorials, '']}
          value={entryDetailsFields.sectorials}
          onChange={(e, sectorials) => {
            setEntryDetailsFields({
              ...entryDetailsFields,
              sectorials: sectorials as Sectorial[],
            });
          }}
          renderInput={params => (
            <TextField
              {...params}
              variant="standard"
              color="secondary"
              label="Sectorials"
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleSave}
          color="primary"
          variant="contained"
          type="submit"
          disabled={isDisabled}
        >
          Save Entry Details
        </Button>
      </DialogActions>
    </form>
  );
};

interface EntryDetailsFormProps {
  onClose: () => void;
}

const EntryDetailsModal: React.FC<EntryDetailsModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      aria-labelledby="entry-details-title"
    >
      <DialogTitle id="entry-details-title">Entry Details</DialogTitle>
      <EntryDetailsForm onClose={onClose} />
    </Dialog>
  );
};

export default EntryDetailsModal;

interface EntryDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}
