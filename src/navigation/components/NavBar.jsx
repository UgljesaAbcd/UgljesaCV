import React from 'react';
import { useNavigate } from 'react-location';
import { useDispatch } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme, styled } from '@mui/material/styles';

import { setColorMode } from '@common/slices/userSlice';

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
  const dispatch = useDispatch();
  let pathname = window.location.pathname;
  const onLogoClick = path => {
    navigate({ to: path, replace: false });
  };

  const toggleColorMode = mode => {
    console.log('mode: ', mode);
    dispatch(setColorMode(mode));
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
      <Box sx={{ float: 'left' }}>
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
      <Box sx={{ float: 'right' }}>
        {theme.palette.mode} mode
        <IconButton
          sx={{ ml: 1 }}
          onClick={() =>
            toggleColorMode(theme.palette.mode === 'dark' ? 'light' : 'dark')
          }
          color='inherit'
        >
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
    </AppBar>
  );
};

export default NavBar;
