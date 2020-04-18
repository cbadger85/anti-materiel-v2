import { Box, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import RuleModal from '../components/RuleModal';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { removeRule, updateRule } from '../store/ruleSlice';
import { BaseRule } from '../types/rule';
import { Row } from '../types/app';

const RuleTableToolbar: React.FC<RuleTableToolbarProps> = ({ row, data }) => {
  const rule = data[row.data[0].dataIndex];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const snack = useAppSnackbar();

  const toggleModal = () => setIsModalOpen(isOpen => !isOpen);

  const handleDelete = () => {
    dispatch(removeRule(rule.id));
    snack('Rule Removed', 'success');
  };

  const handleSave = (rule: BaseRule) => {
    dispatch(updateRule(rule));
    snack('Rule Updated', 'success');
  };

  return (
    <Box>
      <IconButton onClick={toggleModal}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
      <RuleModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onSave={handleSave}
        rule={rule}
      />
    </Box>
  );
};

interface RuleTableToolbarProps {
  row: Row;
  data: BaseRule[];
}

export default RuleTableToolbar;
