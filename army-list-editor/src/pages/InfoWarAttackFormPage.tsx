import React, { useState } from 'react';
import { Paper, Box, Typography, makeStyles, Button } from '@material-ui/core';
import InfoWarAttackForm from '../components/InfoWarAttackForm';
import AmmoModal from '../components/AmmoModal';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { AmmoStore } from '../types/weapon';
import { addAmmo } from '../store/ammoSlice';
import { InfoWarAttackStore } from '../types/infoWarAttack';
import {
  addInfoWarAttack,
  updateInfoWarAttack,
} from '../store/infoWarAttackSlice';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from '../store/rootReducer';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const InfoWarAttackFormPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const snack = useAppSnackbar();
  const classes = useStyles();
  const history = useHistory();
  const { infoWarAttackId } = useParams<{ infoWarAttackId: string }>();
  const infoWarAttacks = useSelector(
    (state: RootState) => state.infoWarAttacks,
  );

  const infoWarAttack = infoWarAttacks.find(
    infoWarAttack => infoWarAttack.id === infoWarAttackId,
  );

  if (!infoWarAttack && infoWarAttackId) {
    history.push('/new/infowar-attacks');
  }

  const toggleModal = () => setIsModalOpen(isOpen => !isOpen);

  const handleAddInfoWarAttack = (infoWarAttack: InfoWarAttackStore) => {
    dispatch(addInfoWarAttack(infoWarAttack));
    snack('InfoWar Attack Added', 'success');
    history.push('/infowar-attacks');
  };

  const handleUpdateInfoWarAttack = (infoWarAttack: InfoWarAttackStore) => {
    dispatch(updateInfoWarAttack(infoWarAttack));
    snack('InfoWar Attack Added', 'success');
    history.push('/infowar-attacks');
  };

  const handleSaveAmmo = (ammo: AmmoStore) => {
    dispatch(addAmmo(ammo));
    snack('Ammo Added', 'success');
  };

  return (
    <Box maxWidth={1000} marginY={6} marginX="auto" padding={2}>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <Typography variant="h5">
          {infoWarAttack ? 'Edit' : 'Add'} InfoWar Attack
        </Typography>
        <Button color="primary" variant="contained" onClick={toggleModal}>
          Add Ammo
        </Button>
      </Box>
      <Paper className={classes.root}>
        <InfoWarAttackForm
          onSave={
            infoWarAttack ? handleUpdateInfoWarAttack : handleAddInfoWarAttack
          }
          infoWarAttack={infoWarAttack}
        />
      </Paper>
      <AmmoModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onSave={handleSaveAmmo}
      />
    </Box>
  );
};

export default InfoWarAttackFormPage;
