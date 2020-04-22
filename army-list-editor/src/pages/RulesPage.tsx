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
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import ListDrawer from '../components/ListDrawer';
import PageTemplate from '../components/PageTemplate';
import RuleModal from '../components/RuleModal';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { RootState } from '../store/rootReducer';
import { addRule } from '../store/ruleSlice';
import { BaseRule } from '../types/rule';
import SelectedRulePage from './SelectedRulePage';

const useStyles = makeStyles(theme => ({
  arrowForwardIcon: {
    marginLeft: theme.spacing(1),
  },
  addButton: {
    marginTop: theme.spacing(2),
  },
}));

const RulesPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const snack = useAppSnackbar();

  const [isRuleModalOpen, setIsRuleModalOpen] = useState(false);

  const rules = useSelector((state: RootState) => state.rules);

  const [searchInput, setSearchInput] = useState('');

  const filteredRules = rules.filter(rule =>
    rule.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const toggleRuleModal = () => setIsRuleModalOpen(isOpen => !isOpen);

  const handleSave = (rule: BaseRule) => {
    dispatch(addRule(rule));
    snack('Rule Added', 'success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <PageTemplate title="Rules">
      <ListDrawer>
        <TextField
          id="rule-search-input"
          label="Search Rules"
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
          {filteredRules.map(rule => (
            <ListItem
              button
              key={rule.id}
              component={Link}
              to={`/rules/${rule.id}`}
            >
              <ListItemText>{rule.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </ListDrawer>
      <Switch>
        <Route path="/rules/:ruleId" exact>
          <SelectedRulePage />
        </Route>
        <Route>
          {rules.length ? (
            <Box>
              <Box display="flex">
                <Typography>Select a rule to view it's details</Typography>
                <ArrowForwardIcon className={classes.arrowForwardIcon} />
              </Box>
              <Button
                onClick={toggleRuleModal}
                variant="outlined"
                color="secondary"
                className={classes.addButton}
              >
                Add Rule
              </Button>
            </Box>
          ) : (
            <Box>
              <Typography>Add a rule to get started</Typography>
              <Button
                onClick={toggleRuleModal}
                variant="outlined"
                color="secondary"
                className={classes.addButton}
              >
                Add Rule
              </Button>
            </Box>
          )}
        </Route>
      </Switch>
      <RuleModal
        isOpen={isRuleModalOpen}
        onClose={toggleRuleModal}
        onSave={handleSave}
      />
    </PageTemplate>
  );
};

export default RulesPage;
