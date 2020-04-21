import MUIDataTable from 'mui-datatables';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import InfoWarAttackModal from '../components/InfoWarAttackModal';
import InfoWarAttackTableToolbar from '../components/InfoWarAttackToolbar';
import PageTemplate from '../components/PageTemplate';
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
    <PageTemplate title="InfoWar">
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
    </PageTemplate>
  );
};

export default InfoWarAttackPage;
