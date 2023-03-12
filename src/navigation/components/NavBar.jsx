import React from 'react';
import { useNavigate } from 'react-location';
import { useDispatch } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';

import { setColorMode } from '@common/slices/userSlice';

import { ROUTER_PATHS } from '@common/constants';

const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
};

const NAVBAR_OPTIONS = {
  optionOne: 'HOME',
  optionTwo: 'EDITOR',
  optionThree: '3D',
  optionFour: 'GAME'
};

const NavBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    const path = {
      0: ROUTER_PATHS.HOME,
      1: ROUTER_PATHS.EDITOR,
      2: ROUTER_PATHS._3D,
      3: ROUTER_PATHS.GAME
    }[newValue];
    setValue(newValue);
    navigate({ to: path, replace: false });
  };

  const toggleColorMode = mode => {
    dispatch(setColorMode(mode));
  };

  return (
    <AppBar
      position='static'
      sx={{
        boxShadow: 0,
        display: 'inline-block',
        background: theme.palette.primary.main
      }}
    >
      <Box sx={{ float: 'left' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='secondary'
          aria-label='secondary tabs example'
          sx={{
            '& button': {
              color: theme.palette.primary.contrastText,
              '&.Mui-selected': {
                color: theme.palette.primary.contrastText
              }
            }
          }}
        >
          <Tab label={NAVBAR_OPTIONS.optionOne} {...a11yProps(0)} />
          <Tab label={NAVBAR_OPTIONS.optionTwo} {...a11yProps(1)} />
          <Tab label={NAVBAR_OPTIONS.optionThree} {...a11yProps(2)} />
          <Tab label={NAVBAR_OPTIONS.optionFour} {...a11yProps(3)} />
        </Tabs>
      </Box>
      <Box sx={{ float: 'right', display: 'flex' }}>
        <Typography sx={{ mt: 1.5 }}>{theme.palette.mode} mode</Typography>
        <IconButton
          sx={{ ml: 1, mt: 0.5 }}
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
