import React from 'react';
import { Sectorial } from '../types/army';
import { Box, Typography, Chip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  chip: {
    marginRight: theme.spacing(0.5),
  },
}));

const EntryDetailsDisplay: React.FC<EntryDetailsDisplayProps> = ({
  name,
  isc,
  sectorials,
}) => {
  const classes = useStyles();

  return (
    <Box>
      <Box marginBottom={1}>
        {sectorials.map(sectorial => (
          <Chip
            key={sectorial}
            variant="outlined"
            label={sectorial}
            className={classes.chip}
          />
        ))}
      </Box>
      <Typography variant="h6" color="secondary">
        {name}
      </Typography>
      <Typography>{isc && `ISC: ${isc}`}</Typography>
    </Box>
  );
};

export default EntryDetailsDisplay;

interface EntryDetailsDisplayProps {
  name: string;
  isc?: string;
  sectorials: Sectorial[];
}
