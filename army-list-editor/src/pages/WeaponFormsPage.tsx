import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import AmmoModal from '../components/AmmoModal';
import RuleModal from '../components/RuleModal';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { addAmmo } from '../store/ammoSlice';
import { RootState } from '../store/rootReducer';
import { addRule } from '../store/ruleSlice';
import { addWeapon, updateWeapon } from '../store/weaponSlice';
import { BaseRule } from '../types/rule';
import { AmmoStore, WeaponStore, WeaponModeStore } from '../types/weapon';
import shortid from 'shortid';
import WeaponForm from '../components/WeaponForm';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  ammoButton: {
    marginRight: theme.spacing(2),
  },
}));

const WeaponsFormPage = () => {
  const [isAmmoModalOpen, setIsAmmoModalOpen] = useState(false);
  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
  const dispatch = useDispatch();
  const snack = useAppSnackbar();
  const classes = useStyles();
  const history = useHistory();
  const { weaponId } = useParams<{ weaponId: string }>();
  const { weapons, rules } = useSelector(({ weapons, rules }: RootState) => ({
    weapons,
    rules,
  }));

  const weapon = weapons.find(weapon => weapon.id === weaponId);

  if (!weapon && weaponId) {
    history.push('/new/weapons');
  }

  const toggleAmmoModal = () => setIsAmmoModalOpen(isOpen => !isOpen);
  const toggleRulesModal = () => setIsRulesModalOpen(isOpen => !isOpen);

  const handleAddWeapon = (weapon: WeaponStore) => {
    const suppressiveFireModes = weapon.modes
      .filter(mode =>
        mode.traitIds
          .map(traitId => rules.find(rule => rule.id === traitId)?.name)
          .toString()
          .toLowerCase()
          .includes('suppressive'),
      )
      .map<WeaponModeStore>(mode => ({
        ...mode,
        id: shortid(),
        name: `${mode.name} Suppressive Fire Mode`,
        shortRange: '0-8" 0',
        mediumRange: '8-16" 0',
        longRange: '16-24" -3',
        maximumRange: '',
        burst: '3',
        traitIds: mode.traitIds.filter(
          traitId =>
            !rules
              .find(rule => rule.id === traitId)
              ?.name.toString()
              .toLowerCase()
              .includes('suppressive'),
        ),
      }));

    dispatch(
      addWeapon({
        ...weapon,
        modes: [...weapon.modes, ...suppressiveFireModes],
      }),
    );
    snack('Weapon Added', 'success');
    history.push('/weapons');
  };

  const handleUpdateWeapon = (weapon: WeaponStore) => {
    dispatch(updateWeapon(weapon));
    snack('InfoWar Attack Added', 'success');
    history.push('/weapons');
  };

  const handleSaveAmmo = (ammo: AmmoStore) => {
    dispatch(addAmmo(ammo));
    snack('Ammo Added', 'success');
  };

  const handleSaveRule = (rule: BaseRule) => {
    dispatch(addRule(rule));
    snack('Ammo Added', 'success');
  };

  return (
    <Box maxWidth={1000} marginY={6} marginX="auto" padding={2}>
      <Box display="flex" justifyContent="space-between" marginBottom={2}>
        <Typography variant="h5">{weapon ? 'Edit' : 'Add'} Weapon</Typography>
        <div>
          <Button
            color="primary"
            variant="contained"
            onClick={toggleAmmoModal}
            className={classes.ammoButton}
          >
            Add Ammo
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={toggleRulesModal}
          >
            Add Rule
          </Button>
        </div>
      </Box>
      <Paper className={classes.root}>
        <WeaponForm
          onSave={weapon ? handleUpdateWeapon : handleAddWeapon}
          weapon={weapon}
        />
      </Paper>
      <AmmoModal
        isOpen={isAmmoModalOpen}
        onClose={toggleAmmoModal}
        onSave={handleSaveAmmo}
      />
      <RuleModal
        isOpen={isRulesModalOpen}
        onClose={toggleRulesModal}
        onSave={handleSaveRule}
      />
    </Box>
  );
};

export default WeaponsFormPage;
