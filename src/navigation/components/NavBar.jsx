import React, { useContext } from 'react';
import { useNavigate } from 'react-location';

import AppBar from '@mui/material/AppBar';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import { ROUTER_PATHS } from '@common/constants';

const NavBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  let pathname = window.location.pathname;

  const onLogoClick = () => {
    navigate({ to: ROUTER_PATHS.analyzer, replace: false });
  };

  return (
    <AppBar
      position='static'
      sx={{
        height: '62px',
        boxShadow: 0,
        display: 'inline-block',
        background: theme.palette.primary.main
      }}
    >
      <Box sx={{ float: 'left' }}>
        <Button
          onClick={onLogoClick}
          sx={{
            backgroundColor: theme =>
              pathname === ROUTER_PATHS.analyzer
                ? `${theme.palette.primary.dark}`
                : 'none'
          }}
          color='inherit'
          variant='raised'
          style={{ backgroundColor: 'transparent' }}
          disabled={true}
        ></Button>
      </Box>
      <Box sx={{ float: 'right' }}></Box>
    </AppBar>
  );
};

export default NavBar;
