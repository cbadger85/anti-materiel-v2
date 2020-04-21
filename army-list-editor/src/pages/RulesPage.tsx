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
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListDrawer from '../components/ListDrawer';
import PageTemplate from '../components/PageTemplate';
import RuleModal from '../components/RuleModal';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { RootState } from '../store/rootReducer';
import { removeRule, updateRule } from '../store/ruleSlice';
import { BaseRule } from '../types/rule';

const RulesPage = () => {
  const rules = useSelector((state: RootState) => state.rules);

  const [isRuleModalOpen, setIsRuleModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [selectedRule, setSelectedRule] = useState<BaseRule>();

  const dispatch = useDispatch();
  const snack = useAppSnackbar();

  const filteredRules = rules.filter(rule =>
    rule.name.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const toggleRuleModal = () => setIsRuleModalOpen(isOpen => !isOpen);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleDelete = (ruleId: string) => {
    dispatch(removeRule(ruleId));
    snack('Rule Removed', 'success');
    setSelectedRule(undefined);
  };

  const handleUpdate = (rule: BaseRule) => {
    dispatch(updateRule(rule));
    snack('Rule Updated', 'success');
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
              onClick={() => setSelectedRule(rule)}
            >
              <ListItemText>{rule.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </ListDrawer>
      {selectedRule && (
        <Box
          component={Paper}
          paddingX={3}
          paddingY={3}
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <div>
            <Typography variant="h6">{selectedRule.name}</Typography>
            <Link href={selectedRule.link}>{selectedRule.link}</Link>
          </div>
          <Box>
            <IconButton onClick={toggleRuleModal} size="small">
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => handleDelete(selectedRule.id)}
              size="small"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      )}
      <RuleModal
        isOpen={isRuleModalOpen}
        onClose={toggleRuleModal}
        onSave={handleUpdate}
        rule={selectedRule}
      />
    </PageTemplate>
  );
};

export default RulesPage;
