import {
  Dialog,
  DialogContent,
  DialogTitle,
  Link,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/rootReducer';
import { WeaponStore } from '../types/weapon';
import WeaponModeTable from './WeaponModeTable';

const useStyles = makeStyles(theme => ({
  link: {
    marginLeft: theme.spacing(3),
  },
}));

const WeaponModal: React.FC<WeaponModalProps> = ({ weapon, onClose }) => {
  const classes = useStyles();
  const { ammo, rules } = useSelector(({ ammo, rules }: RootState) => ({
    ammo,
    rules,
  }));

  return (
    <Dialog
      open={!!weapon}
      onClose={onClose}
      aria-labelledby="infowar-attack-title"
      maxWidth="md"
      fullWidth
    >
      {!!weapon && (
        <>
          <DialogTitle id="infowar-attack-title">
            {weapon.name}
            <Link
              href={weapon.link}
              variant="subtitle1"
              className={classes.link}
            >
              {weapon.link}
            </Link>
          </DialogTitle>
          <DialogContent>
            {weapon.modes.map(mode => (
              <WeaponModeTable weaponMode={mode} ammo={ammo} traits={rules} />
            ))}
          </DialogContent>
        </>
      )}
    </Dialog>
  );
};

export default WeaponModal;

interface WeaponModalProps {
  weapon?: WeaponStore;
  onClose: () => void;
}
