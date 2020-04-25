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
import { Sectorial, sectorials } from '../types/army';
import { EntryNote } from '../types/entry';

const initialFields: EntryNote = {
  id: '',
  text: '',
  sectorials: [],
};

const EntryNoteForm: React.FC<EntryNoteFormProps> = ({
  onClose,
  onSave,
  note = initialFields,
}) => {
  const [noteFields, setNoteFields] = useState(note);

  const isDisabled = !noteFields.text || !noteFields.sectorials.length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteFields({
      ...noteFields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(noteFields);
    onClose();
  };

  return (
    <form>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="text"
          id="entry-note-text"
          label="Text"
          onChange={handleChange}
          color="secondary"
          fullWidth
          value={noteFields.text}
          required
        />
        <Autocomplete
          multiple
          id="entry-note-sectorials"
          options={[...sectorials, '']}
          value={noteFields.sectorials}
          onChange={(e, sectorials) => {
            setNoteFields({
              ...noteFields,
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
          Save Note
        </Button>
      </DialogActions>
    </form>
  );
};

interface EntryNoteFormProps {
  onClose: () => void;
  onSave: (note: EntryNote) => void;
  note?: EntryNote;
}

const EntryNoteModal: React.FC<EntryNoteModalProps> = ({
  isOpen,
  onClose,
  onSave,
  note,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      aria-labelledby="entry-note-title"
    >
      <DialogTitle id="entry-note-title">Entry Note</DialogTitle>
      <EntryNoteForm onClose={onClose} onSave={onSave} note={note} />
    </Dialog>
  );
};

export default EntryNoteModal;

interface EntryNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (note: EntryNote) => void;
  note?: EntryNote;
}
