import MUIDataTable from 'mui-datatables';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PageTemplate from '../components/PageTemplate';
import WeaponModal from '../components/WeaponModal';
import WeaponTableToolbar from '../components/WeaponTableToolbar';
import { RootState } from '../store/rootReducer';
import { WeaponMode, WeaponStore } from '../types/weapon';
import { commaSeparateList } from '../utils/commaSeparateList';

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
    <PageTemplate title="Weapons">
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
    </PageTemplate>
  );
};

export default WeaponsPage;
