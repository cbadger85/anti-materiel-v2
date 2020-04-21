import {
  Box,
  IconButton,
  InputAdornment,
  Link,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
  Button,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AmmoModal from '../components/AmmoModal';
import ListDrawer from '../components/ListDrawer';
import PageTemplate from '../components/PageTemplate';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { addAmmo, removeAmmo } from '../store/ammoSlice';
import { RootState } from '../store/rootReducer';
import { AmmoStore } from '../types/weapon';

const AmmoPage = () => {
  const [isAmmoModalOpen, setIsAmmoModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [selectedAmmo, setSelectedAmmo] = useState<AmmoStore>();

  const snack = useAppSnackbar();
  const dispatch = useDispatch();

  const ammo = useSelector((state: RootState) => state.ammo);

  const filterAmmo = ammo.filter(ammo =>
    ammo.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const toggleAmmoModal = () => setIsAmmoModalOpen(isOpen => !isOpen);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleDelete = (ammoId: string) => {
    dispatch(removeAmmo(ammoId));
    snack('Ammo Removed', 'success');
    setSelectedAmmo(undefined);
  };

  const handleUpdate = (ammo: AmmoStore) => {
    dispatch(addAmmo(ammo));
    snack('Ammo Added', 'success');
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
          {filterAmmo.map(ammo => (
            <ListItem
              button
              key={ammo.id}
              onClick={() => setSelectedAmmo(ammo)}
            >
              <ListItemText>{ammo.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </ListDrawer>
      {selectedAmmo && (
        <Box
          component={Paper}
          paddingX={3}
          paddingY={3}
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <div>
            <Typography variant="h6">{selectedAmmo.name}</Typography>
            <Link href={selectedAmmo.link}>{selectedAmmo.link}</Link>
            <Typography variant="overline">combines:</Typography>
            {selectedAmmo.combinedAmmoIds.length &&
              selectedAmmo.combinedAmmoIds
                .map(ammoId => ammo.find(ammo => ammo.id === ammoId))
                .map(ammo => (
                  <Button onClick={() => setSelectedAmmo(ammo)}>
                    {ammo?.name}
                  </Button>
                ))}
          </div>
          <Box>
            <IconButton onClick={toggleAmmoModal} size="small">
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => handleDelete(selectedAmmo.id)}
              size="small"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      )}
      <AmmoModal
        isOpen={isAmmoModalOpen}
        onClose={toggleAmmoModal}
        onSave={handleUpdate}
        ammo={selectedAmmo}
      />
    </PageTemplate>
  );
};

export default AmmoPage;
