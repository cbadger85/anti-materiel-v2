import { Box, Divider, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  divider: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex" alignItems="center">
        <Typography variant="h3">404</Typography>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <Typography variant="h4">Not Found</Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
