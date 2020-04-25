import { Box, Button, Divider, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { EntryNote } from '../types/entry';
import EntryNoteModal from './EntryNotesModal';
import { useDispatch } from 'react-redux';
import { addEntryNote } from '../store/EntryFormSlice';
import EntryNotesDisplay from './EntryNotesDisplay';

const EntryNotes: React.FC<EntryNotesProps> = ({ editable, notes }) => {
  const [isEntryNotesModalOpen, setIsEntryNotesModalOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleEntryNotesModal = () =>
    setIsEntryNotesModalOpen(isOpen => !isOpen);

  const handleSave = (note: EntryNote) => dispatch(addEntryNote(note));

  return (
    <div>
      <Box>
        <Typography variant="h6">Notes</Typography>
      </Box>
      <Divider />
      <Box marginTop={3}>
        <EntryNotesDisplay notes={notes} editable />
        <Button
          color="secondary"
          variant="outlined"
          onClick={toggleEntryNotesModal}
        >
          Add Note
        </Button>
      </Box>
      <EntryNoteModal
        onClose={toggleEntryNotesModal}
        onSave={handleSave}
        isOpen={isEntryNotesModalOpen}
      />
    </div>
  );
};

export default EntryNotes;

interface EntryNotesProps {
  notes: EntryNote[];
  editable?: boolean;
}
