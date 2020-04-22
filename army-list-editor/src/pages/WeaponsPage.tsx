import {
  Box,
  Button,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SearchIcon from '@material-ui/icons/Search';
import sortBy from 'lodash/sortBy';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import shortid from 'shortid';
import ListDrawer from '../components/ListDrawer';
import PageTemplate from '../components/PageTemplate';
import WeaponDrawer from '../components/WeaponDrawer';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { RootState } from '../store/rootReducer';
import { addWeapon } from '../store/weaponSlice';
import { WeaponModeStore, WeaponStore } from '../types/weapon';
import SelectedWeaponPage from './SelectedWeaponPage';

const useStyles = makeStyles(theme => ({
  arrowForwardIcon: {
    marginLeft: theme.spacing(1),
  },
  addButton: {
    marginTop: theme.spacing(2),
  },
}));

const WeaponsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const snack = useAppSnackbar();

  const [isWeaponDrawerOpen, setIsWeaponDrawerOpen] = useState(false);

  const { rules, ammo, weapons } = useSelector(
    ({ rules, ammo, weapons }: RootState) => ({
      rules,
      ammo,
      weapons,
    }),
  );

  const [searchInput, setSearchInput] = useState('');

  const filteredWeapons = weapons.filter(weapon =>
    weapon.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const toggleWeaponDrawer = () => setIsWeaponDrawerOpen(isOpen => !isOpen);

  const handleSave = (weapon: WeaponStore) => {
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
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <PageTemplate title="Weapons">
      <ListDrawer>
        <TextField
          id="weapon-search-input"
          label="Search Weapon"
          value={searchInput}
          onChange={handleChange}
          color="secondary"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List>
          {sortBy(filteredWeapons, weapon => weapon.name).map(weapon => (
            <ListItem
              button
              key={weapon.id}
              component={Link}
              to={`/weapons/${weapon.id}`}
            >
              <ListItemText>{weapon.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </ListDrawer>
      <Switch>
        <Route path="/weapons/:weaponId" exact>
          <SelectedWeaponPage />
        </Route>
        <Route>
          {ammo.length ? (
            <Box>
              <Box display="flex">
                <Typography>Select a weapon to view its details.</Typography>
                <ArrowForwardIcon className={classes.arrowForwardIcon} />
              </Box>
              <Button
                onClick={toggleWeaponDrawer}
                variant="outlined"
                color="secondary"
                className={classes.addButton}
              >
                Add Weapon
              </Button>
            </Box>
          ) : (
            <Box>
              <Typography>Add a weapon to get started.</Typography>
              <Button
                onClick={toggleWeaponDrawer}
                variant="outlined"
                color="secondary"
                className={classes.addButton}
              >
                Add Weapon
              </Button>
            </Box>
          )}
        </Route>
      </Switch>
      <WeaponDrawer
        isOpen={isWeaponDrawerOpen}
        onClose={toggleWeaponDrawer}
        ammo={ammo}
        traits={rules}
        onSave={handleSave}
      />
    </PageTemplate>
  );
};

export default WeaponsPage;
