import { Box, IconButton, Link, Paper, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import RuleModal from '../components/RuleModal';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { RootState } from '../store/rootReducer';
import { removeRule, updateRule } from '../store/ruleSlice';
import { BaseRule } from '../types/rule';

const SelectedRulePage = () => {
  const [isRuleModalOpen, setIsRuleModalOpen] = useState(false);

  const dispatch = useDispatch();
  const snack = useAppSnackbar();
  const { ruleId } = useParams<{ ruleId: string }>();
  const rules = useSelector((state: RootState) => state.rules);

  const selectedRule = rules.find(rule => rule.id === ruleId);

  if (!selectedRule) {
    return <Redirect to="/rules" />;
  }

  const toggleRuleModal = () => setIsRuleModalOpen(isOpen => !isOpen);

  const handleDelete = (ruleId: string) => {
    dispatch(removeRule(ruleId));
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
        <IconButton onClick={() => handleDelete(selectedRule.id)} size="small">
          <DeleteIcon />
        </IconButton>
      </Box>
      <RuleModal
        isOpen={isRuleModalOpen}
        onClose={toggleRuleModal}
        onSave={handleUpdate}
        rule={selectedRule}
      />
    </Box>
  );
};

export default SelectedRulePage;
