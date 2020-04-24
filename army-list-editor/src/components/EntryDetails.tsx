import React from 'react';
import { Sectorial } from '../types/army';
import { Box, Typography, Chip } from '@material-ui/core';

const EntryDetails: React.FC<EntryDetailsProps> = ({
  name,
  isc,
  sectorials,
}) => {
  return (
    <Box>
      <Box marginBottom={1}>
        {sectorials.map(sectorial => (
          <Chip key={sectorial} variant="outlined" label={sectorial} />
        ))}
      </Box>
      <Typography variant="h6" color="secondary">
        {name}
      </Typography>
      <Typography>{isc && `ISC: ${isc}`}</Typography>
    </Box>
  );
};

export default EntryDetails;

interface EntryDetailsProps {
  name: string;
  isc?: string;
  sectorials: Sectorial[];
}
