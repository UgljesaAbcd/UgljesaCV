import React from 'react';
import { useNavigate } from 'react-location';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme, styled } from '@mui/material/styles';

import { ROUTER_PATHS } from '@common/constants';

const StyledButton = styled(({ isActive, ...rest }) => (
  <Button color='inherit' variant='raised' {...rest} />
))(({ theme, isActive }) => ({
  backgroundColor: isActive
    ? theme.palette.primary.dark
    : theme.palette.primary.main
}));

const NavBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  let pathname = window.location.pathname;

  const onLogoClick = path => {
    navigate({ to: path, replace: false });
  };

  return (
    <AppBar
      position='static'
      sx={{
        // height: '32px',
        boxShadow: 0,
        display: 'inline-block',
        background: theme.palette.primary.main
      }}
    >
      <Box sx={{ float: 'right' }}>
        <StyledButton
          onClick={() => onLogoClick(ROUTER_PATHS.HOME)}
          isActive={pathname === ROUTER_PATHS.HOME}
        >
          Home
        </StyledButton>
        <StyledButton
          onClick={() => onLogoClick(ROUTER_PATHS.EDITOR)}
          isActive={pathname === ROUTER_PATHS.EDITOR}
        >
          Editor
        </StyledButton>
        <StyledButton
          onClick={() => onLogoClick(ROUTER_PATHS._3D)}
          isActive={pathname === ROUTER_PATHS._3D}
        >
          3d
        </StyledButton>
        <StyledButton
          onClick={() => onLogoClick(ROUTER_PATHS.GAME)}
          isActive={pathname === ROUTER_PATHS.GAME}
        >
          Game
        </StyledButton>
      </Box>
      <Box sx={{ float: 'right' }}></Box>
    </AppBar>
  );
};

export default NavBar;
