import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DescriptionIcon from '@material-ui/icons/Description';
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useAppSnackbar } from '../hooks/useAppSnackbar';
import { BaseRule } from '../types/rule';
import { addRule } from '../store/ruleSlice';
import NavigationAccordion from './NavigationAccordion';
import { NavLink } from 'react-router-dom';
import RuleModal from './RuleModal';

const useStyles = makeStyles(theme => ({
  toolbar: { ...theme.mixins.toolbar, width: '100%' },
  listItemText: {
    paddingLeft: theme.spacing(2),
  },
  listItemIcon: {
    marginRight: theme.spacing(2),
  },
}));

const NavigationAccordionRule = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const snack = useAppSnackbar();

  const [isRuleModalOpen, setIsRuleModalOpen] = useState(false);

  const toggleRuleModal = () => setIsRuleModalOpen(isOpen => !isOpen);

  const handleAddRule = (rule: BaseRule) => {
    dispatch(addRule(rule));
    snack('Rule Added', 'success');
  };

  return (
    <NavigationAccordion title="rule">
      <RuleModal
        isOpen={isRuleModalOpen}
        onClose={toggleRuleModal}
        onSave={handleAddRule}
      />
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
          <ListItem button onClick={toggleRuleModal}>
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
  );
};

export default NavigationAccordionRule;
