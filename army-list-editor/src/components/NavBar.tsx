import {
  AppBar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
  Toolbar,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DescriptionIcon from '@material-ui/icons/Description';
import React, { useState } from 'react';
import { Link as NavLink } from 'react-router-dom';
import NavigationAccordion from './NavigationAccordion';
import { useDispatch, useSelector } from 'react-redux';
import { AmmoStore } from '../types/weapon';
import { addAmmo } from '../store/ammoSlice';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { BaseRule } from '../types/rule';
import { addRule } from '../store/ruleSlice';
import AmmoModal from './AmmoModal';
import RuleModal from './RuleModal';
import { RootState } from '../store/rootReducer';

export const drawerWidth = 240;
export const appBarHeight = 64;

const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.primary.main,
    height: appBarHeight,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(3),
  },
  navLink: {
    fontSize: 16,
    marginLeft: theme.spacing(3),
    color: theme.palette.primary.light,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: theme.zIndex.drawer + 2,
  },
  drawerPaper: {
    backgroundColor: '#1b1b1b',
    width: drawerWidth,
  },
  appBar: {
    backgroundColor: '#1b1b1b',
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    height: appBarHeight,
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: { ...theme.mixins.toolbar, width: '100%' },
  listItemText: {
    paddingLeft: theme.spacing(2),
  },
  listItemIcon: {
    marginRight: theme.spacing(2),
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const snack = useAppSnackbar();

  const [isAmmoModalOpen, setIsAmmoModalOpen] = useState(false);
  const [isRuleModalOpen, setIsRuleModalOpen] = useState(false);

  const title = useSelector((state: RootState) => state.app.title);

  const handleAddAmmo = (ammo: AmmoStore) => {
    dispatch(addAmmo(ammo));
    snack('Ammo Added', 'success');
  };

  const handleAddRule = (rule: BaseRule) => {
    dispatch(addRule(rule));
    snack('Rule Added', 'success');
  };

  return (
    <>
      <AmmoModal
        isOpen={isAmmoModalOpen}
        onClose={() => setIsAmmoModalOpen(false)}
        onSave={handleAddAmmo}
      />
      <RuleModal
        isOpen={isRuleModalOpen}
        onClose={() => setIsRuleModalOpen(false)}
        onSave={handleAddRule}
      />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" color="textPrimary">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Typography variant="h6" className={classes.title}>
          Army Editor
        </Typography>
        <NavigationAccordion title="Entry">
          <div className={classes.toolbar}>
            <List>
              <ListItem button component={NavLink} to="/entries">
                <ListItemText className={classes.listItemText}>
                  <Box display="flex" alignItems="center">
                    <DescriptionIcon className={classes.listItemIcon} />
                    Entry List
                  </Box>
                </ListItemText>
              </ListItem>
              <ListItem button component={NavLink} to="/entries">
                <ListItemText className={classes.listItemText}>
                  <Box display="flex" alignItems="center">
                    <AddIcon className={classes.listItemIcon} />
                    Add Entry
                  </Box>
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </NavigationAccordion>
        <NavigationAccordion title="Weapon">
          <div className={classes.toolbar}>
            <List>
              <ListItem button component={NavLink} to="/weapons">
                <ListItemText className={classes.listItemText}>
                  <Box display="flex" alignItems="center">
                    <DescriptionIcon className={classes.listItemIcon} />
                    Weapon List
                  </Box>
                </ListItemText>
              </ListItem>
              <ListItem button component={NavLink} to="new/weapons">
                <ListItemText className={classes.listItemText}>
                  <Box display="flex" alignItems="center">
                    <AddIcon className={classes.listItemIcon} />
                    Add Weapon
                  </Box>
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </NavigationAccordion>
        <NavigationAccordion title="InfoWar">
          <div className={classes.toolbar}>
            <List>
              <ListItem button component={NavLink} to="/infowar-attacks">
                <ListItemText className={classes.listItemText}>
                  <Box display="flex" alignItems="center">
                    <DescriptionIcon className={classes.listItemIcon} />
                    InfoWar List
                  </Box>
                </ListItemText>
              </ListItem>
              <ListItem button component={NavLink} to="new/infowar-attacks">
                <ListItemText className={classes.listItemText}>
                  <Box display="flex" alignItems="center">
                    <AddIcon className={classes.listItemIcon} />
                    Add InfoWar
                  </Box>
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </NavigationAccordion>
        <NavigationAccordion title="ammo">
          <div className={classes.toolbar}>
            <List>
              <ListItem button component={NavLink} to="/ammo">
                <ListItemText className={classes.listItemText}>
                  <Box display="flex" alignItems="center">
                    <DescriptionIcon className={classes.listItemIcon} />
                    Ammo List
                  </Box>
                </ListItemText>
              </ListItem>
              <ListItem button onClick={() => setIsAmmoModalOpen(true)}>
                <ListItemText className={classes.listItemText}>
                  <Box display="flex" alignItems="center">
                    <AddIcon className={classes.listItemIcon} />
                    Add Ammo
                  </Box>
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </NavigationAccordion>
        <NavigationAccordion title="rule">
          <div className={classes.toolbar}>
            <List>
              <ListItem button component={NavLink} to="/rules">
                <ListItemText className={classes.listItemText}>
                  <Box display="flex" alignItems="center">
                    <DescriptionIcon className={classes.listItemIcon} />
                    Rules List
                  </Box>
                </ListItemText>
              </ListItem>
              <ListItem button onClick={() => setIsRuleModalOpen(true)}>
                <ListItemText className={classes.listItemText}>
                  <Box display="flex" alignItems="center">
                    <AddIcon className={classes.listItemIcon} />
                    Add Rule
                  </Box>
                </ListItemText>
              </ListItem>
            </List>
          </div>
        </NavigationAccordion>
      </Drawer>
    </>
  );
};

export default NavBar;
