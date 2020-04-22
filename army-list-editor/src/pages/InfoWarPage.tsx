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
import { sortBy } from 'lodash';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import InfoWarDrawer from '../components/InfoWarDrawer';
import ListDrawer from '../components/ListDrawer';
import PageTemplate from '../components/PageTemplate';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { addInfoWar } from '../store/infoWar';
import { RootState } from '../store/rootReducer';
import { InfoWarStore } from '../types/infoWarAttack';
import SelectedInfoWarPage from './SelectedInfoWarPage';

const useStyles = makeStyles(theme => ({
  arrowForwardIcon: {
    marginLeft: theme.spacing(1),
  },
  addButton: {
    marginTop: theme.spacing(2),
  },
}));

const InfoWarAttackPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const snack = useAppSnackbar();

  const [isInfoWarDrawerOpen, setIsInfpWarDrawerOpen] = useState(false);

  const infoWar = useSelector((state: RootState) => state.infoWar);

  const [searchInput, setSearchInput] = useState('');

  const filteredInfoWar = infoWar.filter(infoWar =>
    infoWar.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const toggleInfoWarDrawer = () => setIsInfpWarDrawerOpen(isOpen => !isOpen);

  const handleSave = (infoWar: InfoWarStore) => {
    dispatch(addInfoWar(infoWar));
    snack('InfoWar Added', 'success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <PageTemplate title="InfoWar">
      <ListDrawer>
        <TextField
          id="infowar-search-input"
          label="Search InfoWar"
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
          {sortBy(filteredInfoWar, infoWar => infoWar.name).map(infoWar => (
            <ListItem
              button
              key={infoWar.id}
              component={Link}
              to={`/infowar/${infoWar.id}`}
            >
              <ListItemText>{infoWar.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </ListDrawer>
      <Switch>
        <Route path="/infowar/:infoWarId" exact>
          <SelectedInfoWarPage />
        </Route>
        <Route>
          {infoWar.length ? (
            <Box>
              <Box display="flex">
                <Typography>
                  Select an InfoWar action to view its details.
                </Typography>
                <ArrowForwardIcon className={classes.arrowForwardIcon} />
              </Box>
              <Button
                onClick={toggleInfoWarDrawer}
                variant="outlined"
                color="secondary"
                className={classes.addButton}
              >
                Add InfoWar
              </Button>
            </Box>
          ) : (
            <Box>
              <Typography>Add an InfoWar action to get started.</Typography>
              <Button
                onClick={toggleInfoWarDrawer}
                variant="outlined"
                color="secondary"
                className={classes.addButton}
              >
                Add InfoWar
              </Button>
            </Box>
          )}
        </Route>
      </Switch>
      <InfoWarDrawer
        isOpen={isInfoWarDrawerOpen}
        onClose={toggleInfoWarDrawer}
        onSave={handleSave}
      />
    </PageTemplate>
  );
};

export default InfoWarAttackPage;
