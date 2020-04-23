import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { BaseRule } from '../types/rule';

const initialFields = {
  id: '',
  name: '',
  link: '',
};

const RuleForm: React.FC<RuleFormProps> = ({
  rule = initialFields,
  onClose,
  onSave,
}) => {
  const [ruleFields, setRuleFields] = useState(rule);

  const isDisabled = !ruleFields.name;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRuleFields({ ...ruleFields, [e.target.name]: e.target.value });
  };

  const handleAddRule = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(ruleFields);
    onClose();
  };

  return (
    <form>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          id="rule-name"
          label="Name"
          onChange={handleChange}
          color="secondary"
          fullWidth
          value={ruleFields.name}
          required
        />
        <TextField
          margin="dense"
          id="rule-link"
          label="Link"
          name="link"
          color="secondary"
          onChange={handleChange}
          fullWidth
          value={ruleFields.link}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={handleAddRule}
          color="primary"
          variant="contained"
          type="submit"
          disabled={isDisabled}
        >
          Save Rule
        </Button>
      </DialogActions>
    </form>
  );
};

interface RuleFormProps {
  rule?: BaseRule;
  onClose: () => void;
  onSave: (rule: BaseRule) => void;
}

const RuleModal: React.FC<RuleModalProps> = ({
  isOpen,
  onClose,
  onSave,
  rule,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} aria-labelledby="add-rule-title">
      <DialogTitle id="add-rule-title">
        {rule ? 'Edit' : 'Add'} Rule
      </DialogTitle>
      <RuleForm rule={rule} onClose={onClose} onSave={onSave} />
    </Dialog>
  );
};

export default RuleModal;

interface RuleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (rule: BaseRule) => void;
  rule?: BaseRule;
}
