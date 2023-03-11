import React from 'react';

import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import CelebrationIcon from '@mui/icons-material/Celebration';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HomeIcon from '@mui/icons-material/Home';

import cvPic from '@assets/myPic.jpg';
import { personalDetails } from './helpers/constants';

const HomePage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ mt: 0 }}>
        <Grid
          item
          xs={4}
          sx={{
            height: '100vh',
            minWidth: '350px',
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
        <Grid
          item
          xs={8}
          sx={{
            overflowY: 'scroll',
            overflowX: 'hidden',
            height: 'calc(100vh - 40px)',
            '&.MuiGrid-item': { pt: 0 }
          }}
        >
          <Typography variant='h4' sx={{ mb: 3 }}>
            {personalDetails.name}
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <CelebrationIcon sx={{ mr: 1 }} />
            <Typography>{personalDetails.birth}</Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <MailOutlineIcon sx={{ mr: 1 }} />
            <Typography>{personalDetails.email}</Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <PhoneAndroidIcon sx={{ mr: 1 }} />
            <Typography>{personalDetails.phone}</Typography>
          </Box>
          <Box sx={{ display: 'flex', mb: 3 }}>
            <HomeIcon sx={{ mr: 1 }} />
            <Typography>{personalDetails.address}</Typography>
          </Box>
          <Divider />
          <Box sx={{ mt: 2 }}>
            <Typography>Javascript developer</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
