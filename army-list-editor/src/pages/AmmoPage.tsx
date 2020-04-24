import {
  Box,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  TextField,
  Typography,
  Button,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';
import ListDrawer from '../components/ListDrawer';
import PageTemplate from '../components/PageTemplate';
import { RootState } from '../store/rootReducer';
import SelectedAmmoPage from './SelectedAmmoPage';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { addAmmo } from '../store/ammoListSlice';
import { AmmoStore } from '../types/weapon';
import AmmoModal from '../components/AmmoModal';
import sortBy from 'lodash/sortBy';

const useStyles = makeStyles(theme => ({
  arrowForwardIcon: {
    marginLeft: theme.spacing(1),
  },
  addButton: {
    marginTop: theme.spacing(2),
  },
}));

const AmmoPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const snack = useAppSnackbar();

  const [isAmmoModalOpen, setIsAmmoModalOpen] = useState(false);

  const ammo = useSelector((state: RootState) => state.ammo);

  const [searchInput, setSearchInput] = useState('');

  const filteredAmmo = ammo.filter(ammo =>
    ammo.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const toggleAmmoModal = () => setIsAmmoModalOpen(isOpen => !isOpen);

  const handleSave = (rule: AmmoStore) => {
    dispatch(addAmmo(rule));
    snack('Ammo Added', 'success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <PageTemplate title="Ammo">
      <ListDrawer>
        <TextField
          id="ammo-search-input"
          label="Search Ammo"
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
          {sortBy(filteredAmmo, ammo => ammo.name).map(ammo => (
            <ListItem
              button
              key={ammo.id}
              component={Link}
              to={`/ammo/${ammo.id}`}
            >
              <ListItemText>{ammo.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </ListDrawer>
      <Switch>
        <Route path="/ammo/:ammoId" exact>
          <SelectedAmmoPage />
        </Route>
        <Route>
          {ammo.length ? (
            <Box>
              <Box display="flex">
                <Typography>
                  Select an ammo type to view its details.
                </Typography>
                <ArrowForwardIcon className={classes.arrowForwardIcon} />
              </Box>
              <Button
                onClick={toggleAmmoModal}
                variant="outlined"
                color="secondary"
                className={classes.addButton}
              >
                Add Ammo
              </Button>
            </Box>
          ) : (
            <Box>
              <Typography>Add an ammo type to get started.</Typography>
              <Button
                onClick={toggleAmmoModal}
                variant="outlined"
                color="secondary"
                className={classes.addButton}
              >
                Add Ammo
              </Button>
            </Box>
          )}
        </Route>
      </Switch>
      <AmmoModal
        isOpen={isAmmoModalOpen}
        onClose={toggleAmmoModal}
        onSave={handleSave}
      />
    </PageTemplate>
  );
};

export default AmmoPage;
