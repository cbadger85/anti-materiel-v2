import {
  Box,
  IconButton,
  Link,
  Paper,
  Typography,
  makeStyles,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import RuleModal from '../components/RuleModal';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { RootState } from '../store/rootReducer';
import { removeRule, updateRule } from '../store/ruleListSlice';
import { BaseRule } from '../types/rule';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: 'bold',
  },
}));

const SelectedRulePage = () => {
  const [isRuleModalOpen, setIsRuleModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const classes = useStyles();
  const dispatch = useDispatch();
  const snack = useAppSnackbar();
  const { ruleId } = useParams<{ ruleId: string }>();
  const rules = useSelector((state: RootState) => state.rules);

  const selectedRule = rules.find(rule => rule.id === ruleId);

  if (!selectedRule) {
    return <Redirect to="/rules" />;
  }

  const toggleRuleModal = () => setIsRuleModalOpen(isOpen => !isOpen);
  const toggleDeleteModal = () => setIsDeleteModalOpen(isOpen => !isOpen);

  const handleDelete = (ruleId: string) => {
    dispatch(removeRule(ruleId));
    toggleDeleteModal();
    snack('Rule Removed', 'success');
  };

  const handleUpdate = (rule: BaseRule) => {
    dispatch(updateRule(rule));
    snack('Rule Updated', 'success');
  };

  return (
    <Box
      component={Paper}
      paddingX={3}
      paddingY={3}
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
    >
      <div>
        <Typography variant="h6">{selectedRule.name}</Typography>
        <Link href={selectedRule.link}>{selectedRule.link}</Link>
      </div>
      <Box>
        <IconButton onClick={toggleRuleModal} size="small">
          <EditIcon />
        </IconButton>
        <IconButton onClick={toggleDeleteModal} size="small">
          <DeleteIcon />
        </IconButton>
      </Box>
      <RuleModal
        isOpen={isRuleModalOpen}
        onClose={toggleRuleModal}
        onSave={handleUpdate}
        rule={selectedRule}
      />
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onCancel={toggleDeleteModal}
        onDelete={() => handleDelete(selectedRule.id)}
        item={<span className={classes.bold}>Rule</span>}
      />
    </Box>
  );
};

export default SelectedRulePage;
