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
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTheme, styled, alpha } from '@mui/material/styles';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Modal from '@mui/material/Modal';

import { setColorMode, setLogout } from '@common/slices/userSlice';

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

const StyledMenu = styled(props => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        )
      }
    }
  }
}));

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const NavBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const handleModalOpen = () => setOpenModal(true);

  const handleModalClose = () => setOpenModal(false);

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

  const onLogoutClick = () => {
    dispatch(setLogout());
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
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={styleModal}>test modal</Box>
      </Modal>
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
      <Box sx={{ float: 'right', mt: 0.5 }}>
        <IconButton
          id='demo-customized-button'
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          variant='contained'
          onClick={handleClick}
        >
          <SettingsIcon />
        </IconButton>
        <StyledMenu
          id='demo-customized-menu'
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button'
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={onLogoutClick} disableRipple>
            <LogoutIcon />
            Logout
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleModalOpen();
              handleClose();
            }}
            disableRipple
          >
            <EditIcon />
            Customize themes
          </MenuItem>
          <MenuItem
            onClick={() => {
              toggleColorMode(theme.palette.mode === 'dark' ? 'light' : 'dark');
              handleClose();
            }}
            disableRipple
          >
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
            <Typography>{theme.palette.mode} mode</Typography>
          </MenuItem>
        </StyledMenu>
      </Box>
    </AppBar>
  );
};

export default NavBar;
