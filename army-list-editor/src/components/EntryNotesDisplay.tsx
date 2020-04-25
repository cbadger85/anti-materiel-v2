import React, { useState } from 'react';
import { EntryNote } from '../types/entry';
import {
  Box,
  Typography,
  Chip,
  makeStyles,
  IconButton,
} from '@material-ui/core';
import EntryNoteModal from './EntryNotesModal';
import { useDispatch } from 'react-redux';
import { updateEntryNote, removeEntryNote } from '../store/EntryFormSlice';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  chip: {
    marginRight: theme.spacing(0.5),
  },
}));

const EntryNotesDisplay: React.FC<EntryNotesDisplayProps> = ({
  notes,
  editable,
}) => {
  const [isEntryNotesModalOpen, setIsEntryNotesModalOpen] = useState(false);

  const classes = useStyles();
  const dispatch = useDispatch();

  const toggleEntryNotesModal = () =>
    setIsEntryNotesModalOpen(isOpen => !isOpen);

  const handleUpdate = (note: EntryNote) => dispatch(updateEntryNote(note));

  const handleDelete = (noteId: string) => dispatch(removeEntryNote(noteId));

  return (
    <Box>
      {notes.map(note => (
        <Box key={note.id} marginBottom={2}>
          <Box display="flex">
            <Typography>{note.text}</Typography>
            <Box marginLeft={2} flex={1}>
              {note.sectorials.map(sectorial => (
                <Chip
                  key={sectorial}
                  variant="outlined"
                  label={sectorial}
                  className={classes.chip}
                />
              ))}
            </Box>
            {editable && (
              <Box>
                <IconButton onClick={toggleEntryNotesModal}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(note.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            )}
          </Box>
          <EntryNoteModal
            onSave={handleUpdate}
            onClose={toggleEntryNotesModal}
            isOpen={isEntryNotesModalOpen}
            note={note}
          />
        </Box>
      ))}
    </Box>
  );
};

export default EntryNotesDisplay;

interface EntryNotesDisplayProps {
  notes: EntryNote[];
  editable?: boolean;
}
