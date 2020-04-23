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
import ListDrawer from '../components/ListDrawer';
import PageTemplate from '../components/PageTemplate';
import { RootState } from '../store/rootReducer';
import { openAddWeaponDrawer } from '../store/weaponDrawerSlice';
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

  const weapons = useSelector((state: RootState) => state.weapons);

  const [searchInput, setSearchInput] = useState('');

  const filteredWeapons = weapons.filter(weapon =>
    weapon.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const handleOpenWeaponDrawer = () => {
    dispatch(openAddWeaponDrawer());
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
          {weapons.length ? (
            <Box>
              <Box display="flex">
                <Typography>Select a weapon to view its details.</Typography>
                <ArrowForwardIcon className={classes.arrowForwardIcon} />
              </Box>
              <Button
                onClick={handleOpenWeaponDrawer}
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
                onClick={handleOpenWeaponDrawer}
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
    </PageTemplate>
  );
};

export default WeaponsPage;
