import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    width: '100%',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 0,
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: '#1b1b1b',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    textTransform: 'uppercase',
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(0),
    backgroundColor: '#121212',
  },
}))(MuiExpansionPanelDetails);

const NavigationAccordion: React.FC<NavigationAccordionProps> = ({
  title,
  children,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setIsExpanded(newExpanded);
  };

  return (
    <ExpansionPanel square expanded={isExpanded} onChange={handleChange}>
      <ExpansionPanelSummary
        aria-controls={`${title}-contents`}
        id={`${title}-header`}
        expandIcon={<ArrowDropUpIcon />}
      >
        <Typography>{title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default NavigationAccordion;

interface NavigationAccordionProps {
  title: string;
}
