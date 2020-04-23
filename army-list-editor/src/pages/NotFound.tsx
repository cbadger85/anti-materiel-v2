import { Box, Divider, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeTitle } from '../store/titleSlice';

const useStyles = makeStyles(theme => ({
  divider: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
}));

const NotFound = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle('Error'));
  }, [dispatch]);

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
