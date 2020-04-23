import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  delete: {
    backgroundColor: theme.palette.error.main,
    border: theme.palette.error.dark,
    color: theme.palette.text.primary,
  },
}));

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  isOpen,
  onCancel,
  onDelete,
  item,
}) => {
  const classes = useStyles();

  return (
    <Dialog open={isOpen} maxWidth="sm" fullWidth>
      <DialogTitle>Delete?</DialogTitle>
      <DialogContent>Are you want to this {item}?</DialogContent>
      <DialogActions>
        <Button onClick={onCancel} autoFocus>
          Cancel
        </Button>
        <Button
          onClick={onDelete}
          variant="contained"
          className={classes.delete}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDeleteModal;

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onDelete: () => void;
  item: React.ReactNode;
}
