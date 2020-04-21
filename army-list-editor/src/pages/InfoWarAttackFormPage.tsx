import { makeStyles, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import AmmoModal from '../components/AmmoModal';
import InfoWarAttackForm from '../components/InfoWarAttackForm';
import PageTemplate from '../components/PageTemplate';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { addAmmo } from '../store/ammoSlice';
import {
  addInfoWarAttack,
  updateInfoWarAttack,
} from '../store/infoWarAttackSlice';
import { RootState } from '../store/rootReducer';
import { InfoWarAttackStore } from '../types/infoWarAttack';
import { AmmoStore } from '../types/weapon';

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
    <PageTemplate title={infoWarAttack ? 'Edit InfoWar' : 'Add InfoWar'}>
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
    </PageTemplate>
  );
};

export default InfoWarAttackFormPage;
