import { Box, Button, Typography } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import InfoWarAttackModal from '../components/InfoWarAttackModal';
import InfoWarAttackTableToolbar from '../components/InfoWarAttackToolbar';
import { RootState } from '../store/rootReducer';
import { InfoWarAttackStore, InfoWarAttackType } from '../types/infoWarAttack';
import { enumToCapitalize } from '../utils/enumToCapitalize';

const InfoWarAttackPage = () => {
  const [selectedInfoWarAttack, setSelectedInfoWarAttack] = useState<
    InfoWarAttackStore
  >();
  const infoWarAttacks = useSelector(
    (state: RootState) => state.infoWarAttacks,
  );

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
      name: 'attackType',
      label: 'Attack Type',
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value: InfoWarAttackType) => enumToCapitalize(value),
      },
    },
    {
      name: 'category',
      label: 'Category',
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: 'link',
      label: 'Link',
      options: {
        filter: false,
        sort: false,
        searchable: false,
      },
    },
  ];

  const handleCloseModal = () => setSelectedInfoWarAttack(undefined);

  return (
    <Box maxWidth={1000} marginY={6} marginX="auto" padding={2}>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <Typography variant="h5">InfoWar Attacks</Typography>
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to="/new/infowar-attacks"
        >
          Add InfoWar Attack
        </Button>
      </Box>
      <MUIDataTable
        title=""
        data={infoWarAttacks}
        columns={columns}
        options={{
          download: false,
          responsive: 'scrollFullHeight',
          print: false,
          viewColumns: false,
          filter: false,
          selectableRowsHeader: false,
          selectableRows: 'single',
          onRowClick: (rowData, rowMeta) =>
            setSelectedInfoWarAttack(infoWarAttacks[rowMeta.dataIndex]),
          customToolbarSelect: selectedRow => (
            <InfoWarAttackTableToolbar
              row={selectedRow}
              data={infoWarAttacks}
            />
          ),
        }}
      />
      <InfoWarAttackModal
        infoWarAttack={selectedInfoWarAttack}
        onClose={handleCloseModal}
      />
    </Box>
  );
};

export default InfoWarAttackPage;
