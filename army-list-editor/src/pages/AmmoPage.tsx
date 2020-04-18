import { Box, Button, Typography } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AmmoModal from '../components/AmmoModal';
import AmmoTableToolbar from '../components/AmmoTableToolbar';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { addAmmo } from '../store/ammoSlice';
import { RootState } from '../store/rootReducer';
import { AmmoStore } from '../types/weapon';

const AmmoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const snack = useAppSnackbar();

  const ammo = useSelector((state: RootState) => state.ammo);

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

  const handleSave = (ammo: AmmoStore) => {
    dispatch(addAmmo(ammo));
    snack('Rule Added', 'success');
  };

  return (
    <Box marginX={32} marginY={6}>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <Typography variant="h5">Ammo</Typography>
        <Button color="primary" variant="contained" onClick={toggleModal}>
          Add Ammo
        </Button>
      </Box>
      <MUIDataTable
        title=""
        data={ammo}
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
            <AmmoTableToolbar row={selectedRow} data={ammo} />
          ),
        }}
      />
      <AmmoModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onSave={handleSave}
      />
    </Box>
  );
};

export default AmmoPage;
