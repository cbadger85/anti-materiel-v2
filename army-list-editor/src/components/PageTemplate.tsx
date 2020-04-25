import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { ListDrawerWidth } from './ListDrawer';
import { useDispatch } from 'react-redux';
import { changeTitle } from '../store/titleSlice';
import { drawerWidth } from './NavigationDrawer';

const PageTemplate: React.FC<PageTemplateProps> = ({
  title = '',
  children,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle(title));
  }, [dispatch, title]);

  return (
    <Box
      maxWidth={1000}
      marginTop={12}
      marginLeft={`${drawerWidth + 24}px`}
      marginRight={`${ListDrawerWidth + 24}px`}
      height="auto"
      overflow="scroll"
    >
      {children}
    </Box>
  );
};

export default PageTemplate;

interface PageTemplateProps {
  title?: string;
}
