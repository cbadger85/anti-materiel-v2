import { Box, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { removeInfoWarAttack } from '../store/infoWarAttackSlice';
import { Row } from '../types/app';
import { InfoWarAttackStore } from '../types/infoWarAttack';

const InfoWarAttackTableToolbar: React.FC<InfoWarAttackTableToolbarProps> = ({
  row,
  data,
}) => {
  const infoWarAttack = data[row.data[0].dataIndex];

  const dispatch = useDispatch();
  const snack = useAppSnackbar();

  const handleDelete = () => {
    dispatch(removeInfoWarAttack(infoWarAttack.id));
    snack('Rule Removed', 'success');
  };

  return (
    <Box>
      <IconButton
        component={Link}
        to={`/edit/infowar-attacks/${infoWarAttack.id}`}
      >
        <EditIcon />
      </IconButton>
      <IconButton onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

interface InfoWarAttackTableToolbarProps {
  row: Row;
  data: InfoWarAttackStore[];
}

export default InfoWarAttackTableToolbar;
