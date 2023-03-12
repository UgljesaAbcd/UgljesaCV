import React, { useState } from 'react';

import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CelebrationIcon from '@mui/icons-material/Celebration';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PhotoIcon from '@mui/icons-material/Photo';
import HomeIcon from '@mui/icons-material/Home';
import useMediaQuery from '@mui/material/useMediaQuery';

import cvPic from '@assets/myPic.jpg';
import { personalDetails, experienceDetails } from './helpers/constants';

const HomePage = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ mt: 0, overflowY: 'hidden', height: '100vh' }}
        direction='column'
      >
        {matches && (
          <Grid
            item
            xs={4}
            sm={0}
            sx={{
              minWidth: '200px',
              '&.MuiGrid-item': { pt: 0 }
            }}
          >
            <CardMedia
              sx={{ minHeight: '100vh', objectFit: 'contain' }}
              image={cvPic}
              title='my pic'
              alt='Picture not available'
            />
          </Grid>
        )}

        <Grid item xs={8}>
          <Box
            sx={{
              overflowY: 'auto',
              overflowX: 'hidden',
              height: 'calc(100vh - 70px)',
              pt: 0,
              pl: 1
            }}
          >
            <Box sx={{ display: 'flex' }}>
              {!matches && (
                <>
                  <IconButton
                    color='secondary'
                    onClick={toggleDrawer}
                    sx={{
                      borderRadius: 0,
                      border: 0,
                      mr: 2,
                      mt: 0.5,
                      '&.MuiButtonBase-root': {
                        width: '30px',
                        height: '30px'
                      }
                    }}
                  >
                    <PhotoIcon
                      sx={{
                        width: '30px',
                        height: '30px'
                      }}
                    />
                  </IconButton>
                  <Drawer
                    anchor={'left'}
                    open={drawerOpen}
                    onClose={toggleDrawer}
                  >
                    <Box
                      sx={{
                        width: '300px'
                      }}
                    >
                      <CardMedia
                        sx={{
                          minHeight: '100vh',
                          objectFit: 'contain'
                        }}
                        image={cvPic}
                        title='my pic'
                        alt='Picture not available'
                      />
                    </Box>
                  </Drawer>
                </>
              )}
              <Typography variant='h4' sx={{ mb: 3 }}>
                {personalDetails.name}
              </Typography>
            </Box>

            <Box sx={{ display: 'flex' }}>
              <CelebrationIcon sx={{ mr: 2 }} />
              <Typography>{personalDetails.birth}</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <MailOutlineIcon sx={{ mr: 2 }} />
              <Typography>{personalDetails.email}</Typography>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <PhoneAndroidIcon sx={{ mr: 2 }} />
              <Typography>{personalDetails.phone}</Typography>
            </Box>
            <Box sx={{ display: 'flex', mb: 3 }}>
              <HomeIcon sx={{ mr: 2 }} />
              <Typography>{personalDetails.address}</Typography>
            </Box>
            <Divider />

            <Box sx={{ mt: 2 }}>
              <Typography variant='h6'>Experience</Typography>
              {experienceDetails.map((work, index) => (
                <Box key={index} sx={{ py: 1 }}>
                  <Typography>{`Workplace: ${work.workplace}`}</Typography>
                  <Typography>{`Company: ${work.company}`}</Typography>
                  <Typography>{work.duration}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
