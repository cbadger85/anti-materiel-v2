import {
  Box,
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { removeInfoWar } from '../store/infoWar';
import { openEditInfoWarDrawer } from '../store/infoWarDrawerSlice';
import { RootState } from '../store/rootReducer';
import { commaSeparateList } from '../utils/commaSeparateList';
import ConfirmDeleteModal from '../components/ConfirmDeleteModal';

const useStyles = makeStyles(theme => ({
  link: {
    marginLeft: theme.spacing(3),
  },
  table: {
    marginBottom: theme.spacing(3),
  },
  bottomCell: {
    border: 'none',
  },
  bold: {
    fontWeight: 'bold',
  },
}));

const SelectedInfoWarPage = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const classes = useStyles();

  const dispatch = useDispatch();
  const snack = useAppSnackbar();
  const { infoWarId } = useParams<{ infoWarId: string }>();
  const { infoWar, ammo } = useSelector(({ infoWar, ammo }: RootState) => ({
    infoWar,
    ammo,
  }));

  const selectedInfoWar = infoWar.find(infoWar => infoWar.id === infoWarId);

  if (!selectedInfoWar) {
    return <Redirect to="/infowar" />;
  }

  const toggleDeleteModal = () => setIsDeleteModalOpen(isOpen => !isOpen);

  const handleOpenInfoWarDrawer = () => {
    dispatch(openEditInfoWarDrawer(selectedInfoWar));
  };

  const handleDelete = (infoWarId: string) => {
    dispatch(removeInfoWar(infoWarId));
    toggleDeleteModal();
    snack('InfoWar Removed', 'success');
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
        <Table size="small" className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Range</TableCell>
              <TableCell align="center">Target</TableCell>
              <TableCell align="center">Skill Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.bottomCell} align="center">
                {selectedInfoWar.range || '--'}
              </TableCell>
              <TableCell className={classes.bottomCell} align="center">
                {selectedInfoWar.target.length
                  ? commaSeparateList(selectedInfoWar.target)
                  : ''}
              </TableCell>
              <TableCell className={classes.bottomCell} align="center">
                {commaSeparateList(selectedInfoWar.skillType)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table size="small" className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Attack Modifier</TableCell>
              <TableCell align="center">Opponent Modifier</TableCell>
              <TableCell align="center">Damage</TableCell>
              <TableCell align="center">Burst</TableCell>
              <TableCell align="center">Ammo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.bottomCell} align="center">
                {selectedInfoWar.attackModifier || '--'}
              </TableCell>
              <TableCell className={classes.bottomCell} align="center">
                {selectedInfoWar.opponentModifier || '--'}
              </TableCell>
              <TableCell className={classes.bottomCell} align="center">
                {selectedInfoWar.damage || '--'}
              </TableCell>
              <TableCell className={classes.bottomCell} align="center">
                {selectedInfoWar.burst || '--'}
              </TableCell>
              <TableCell className={classes.bottomCell} align="center">
                {selectedInfoWar.ammoIds.length
                  ? commaSeparateList(
                      selectedInfoWar.ammoIds.map(
                        ammoId =>
                          ammo.find(ammo => ammo.id === ammoId)?.name || '',
                      ),
                    )
                  : '--'}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        {selectedInfoWar.effect && (
          <Box marginBottom={3}>
            <Typography variant="button">Effect:</Typography>
            <Typography>{selectedInfoWar.effect}</Typography>
          </Box>
        )}
        {selectedInfoWar.special && (
          <Box marginBottom={3}>
            <Typography variant="button">Special:</Typography>
            <Typography>{selectedInfoWar.special}</Typography>
          </Box>
        )}
      </div>
      <Box display="flex">
        <IconButton onClick={handleOpenInfoWarDrawer} size="small">
          <EditIcon />
        </IconButton>
        <IconButton onClick={toggleDeleteModal} size="small">
          <DeleteIcon />
        </IconButton>
      </Box>
      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onCancel={toggleDeleteModal}
        onDelete={() => handleDelete(selectedInfoWar.id)}
        item={<span className={classes.bold}>InfoWar Action</span>}
      />
    </Box>
  );
};

export default SelectedInfoWarPage;
