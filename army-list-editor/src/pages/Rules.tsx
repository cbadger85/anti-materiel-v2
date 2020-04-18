import { Box, Button, Typography } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RuleModal from '../components/RuleModal';
import RuleTableToolbar from '../components/RuleTableToolbar';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { RootState } from '../store/rootReducer';
import { addRule } from '../store/ruleSlice';
import { BaseRule } from '../types/rule';

const Rules = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const snack = useAppSnackbar();

  const rules = useSelector((state: RootState) => state.rules);

  const columns = [
    {
      name: 'name',
      label: 'Name',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'link',
      label: 'Link',
      options: {
        filter: true,
        sort: true,
        searchable: false,
      },
    },
  ];

  const toggleModal = () => setIsModalOpen(isOpen => !isOpen);

  const handleSave = (rule: BaseRule) => {
    dispatch(addRule(rule));
    snack('Rule Added', 'success');
  };

  return (
    <Box marginX={32} marginY={6}>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <Typography variant="h5">Rules</Typography>
        <Button color="primary" variant="contained" onClick={toggleModal}>
          Add Rule
        </Button>
      </Box>
      <MUIDataTable
        title=""
        data={rules}
        columns={columns}
        options={{
          download: false,
          print: false,
          viewColumns: false,
          filter: false,
          selectableRowsOnClick: true,
          selectableRowsHeader: false,
          selectableRows: 'single',
          customToolbarSelect: selectedRow => (
            <RuleTableToolbar row={selectedRow} data={rules} />
          ),
        }}
      />
      <RuleModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onSave={handleSave}
      />
    </Box>
  );
};

export default Rules;
