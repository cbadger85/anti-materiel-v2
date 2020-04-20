import { Box, Button, Typography } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store/rootReducer';
import { WeaponMode, WeaponStore } from '../types/weapon';
import { commaSeparateList } from '../utils/commaSeparateList';
import WeaponTableToolbar from '../components/WeaponTableToolbar';
import WeaponModal from '../components/WeaponModal';

const WeaponsPage = () => {
  const [selectedWeapon, setSelectedWeapon] = useState<WeaponStore>();
  const weapons = useSelector((state: RootState) => state.weapons);

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
      name: 'modes',
      label: 'Weapon Modes',
      options: {
        filter: true,
        sort: true,
        customBodyRender: (value: WeaponMode[]) =>
          commaSeparateList(value.map(mode => mode.name)),
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

  const handleCloseModal = () => setSelectedWeapon(undefined);

  return (
    <Box maxWidth={1000} marginY={6} marginX="auto" padding={2}>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <Typography variant="h5">Weapons</Typography>
        <Button
          color="primary"
          variant="contained"
          component={Link}
          to="/new/weapons"
        >
          Add Weapon
        </Button>
      </Box>
      <MUIDataTable
        title=""
        data={weapons}
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
            setSelectedWeapon(weapons[rowMeta.dataIndex]),
          customToolbarSelect: selectedRow => (
            <WeaponTableToolbar row={selectedRow} data={weapons} />
          ),
        }}
      />
      <WeaponModal weapon={selectedWeapon} onClose={handleCloseModal} />
    </Box>
  );
};

export default WeaponsPage;
