import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import React from 'react';

const ConfirmDiscardModal: React.FC<ConfirmDiscardModalProps> = ({
  isOpen,
  onCancel,
  onDiscard,
}) => {
  return (
    <Dialog open={isOpen} maxWidth="sm" fullWidth>
      <DialogTitle>Discard?</DialogTitle>
      <DialogContent>Are you want to discard changes?</DialogContent>
      <DialogActions>
        <Button onClick={onCancel} autoFocus>
          Cancel
        </Button>
        <Button onClick={onDiscard} variant="contained" color="secondary">
          Discard
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDiscardModal;

interface ConfirmDiscardModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onDiscard: () => void;
}
