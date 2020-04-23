import {
  IconButton,
  Menu,
  MenuItem,
  Typography,
  ListItemIcon,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import PersonIcon from '@material-ui/icons/Person';
import PublishIcon from '@material-ui/icons/Publish';
import ForwardIcon from '@material-ui/icons/Forward';

const AppMenuIcon = () => {
  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(e.currentTarget);
  };

  const closeMenu = () => setAnchorElement(null);

  return (
    <div>
      <IconButton
        onClick={openMenu}
        aria-controls="app-menu"
        aria-haspopup="true"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="app-menu"
        open={!!anchorElement}
        keepMounted
        onClose={closeMenu}
        anchorEl={anchorElement}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={closeMenu}>
          <ListItemIcon>
            <ForwardIcon />
          </ListItemIcon>
          <Typography>Load</Typography>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <ListItemIcon>
            <SaveIcon />
          </ListItemIcon>
          <Typography>Save</Typography>
        </MenuItem>
        <MenuItem onClick={closeMenu} disabled>
          <ListItemIcon>
            <PublishIcon />
          </ListItemIcon>
          <Typography>Publish</Typography>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <Typography>Login</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default AppMenuIcon;
