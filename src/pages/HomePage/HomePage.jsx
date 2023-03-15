import React, { useState } from 'react';

import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CelebrationIcon from '@mui/icons-material/Celebration';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PhotoIcon from '@mui/icons-material/Photo';
import HomeIcon from '@mui/icons-material/Home';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';
import useMediaQuery from '@mui/material/useMediaQuery';

import cvPic from '@assets/myPic.jpg';
import {
  personalDetails,
  careerDetails,
  skillsDetails
} from './helpers/constants';

const HomePage = () => {
  const matches = useMediaQuery('(min-width:700px)');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ mt: 0, overflowY: 'hidden', height: '100vh' }}
    >
      {matches && (
        <Grid
          item
          xs={4}
          sx={{
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

      <Grid item xs={matches ? 8 : 12} zeroMinWidth>
        <Box
          sx={{
            overflowY: 'auto',
            overflowX: 'hidden',
            height: 'calc(100vh - 70px)',
            pt: 0,
            pl: 1,
            pb: 2,
            pr: 2
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
          {careerDetails.map(
            ({ groupName, groupList, iconName }, groupIndex) => (
              <Paper key={groupIndex} elevation={3} sx={{ mt: 2 }}>
                <Box sx={{ pl: 3, pt: 2 }}>
                  <Typography variant='h6'>{groupName}</Typography>
                  {groupList.map((detail, index) => (
                    <Box key={index} sx={{ py: 1, display: 'flex' }}>
                      <Box sx={{ pr: 2 }}>
                        {iconName === 'education' && (
                          <SchoolIcon
                            sx={{ top: '30%', position: 'relative' }}
                          />
                        )}
                        {iconName === 'experience' && (
                          <WorkOutlineIcon
                            sx={{ top: '30%', position: 'relative' }}
                          />
                        )}
                      </Box>
                      <Box>
                        <Typography>{detail.label1}</Typography>
                        <Typography>{detail.label2}</Typography>
                        <Typography>{detail.label3}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Paper>
            )
          )}
          <Paper elevation={3} sx={{ mt: 2 }}>
            <Box sx={{ mt: 2, pt: 2, pl: 3, pb: 2 }}>
              <Typography variant='h6'>Skills</Typography>
              <Box
                sx={{
                  py: 1,
                  display: 'flex',
                  flexWrap: 'wrap',
                  rowGap: '10px',
                  columnGap: '20px'
                }}
              >
                {skillsDetails.map(skill => (
                  <CardMedia
                    key={skill.label}
                    sx={{
                      height: '70px',
                      width: '70px',
                      objectFit: 'contain'
                    }}
                    image={skill.techLogo}
                    title={skill.label}
                    alt='Picture not available'
                  />
                ))}
              </Box>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomePage;
