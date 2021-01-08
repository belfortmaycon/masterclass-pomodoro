import React, { useState } from 'react';

import { IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const MenuItems: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpened = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const menuItems = [
    {
      menuTitle: 'Home',
      pageURL: '/',
    },
    {
      menuTitle: 'Configurações',
      pageURL: '/config',
    },
  ];
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        arial-label="menu"
        onClick={handleMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={menuOpened}
        onClose={() => setAnchorEl(null)}
      >
        {menuItems.map((item) => {
          const { menuTitle, pageURL } = item;
          return (
            <MenuItem>{menuTitle}</MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default MenuItems;
