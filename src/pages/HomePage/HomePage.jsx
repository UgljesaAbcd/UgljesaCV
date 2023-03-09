import React from 'react';

import { Box, CardMedia } from '@mui/material';

import cvPic from '@assets/myPic.jpg';

const HomePage = () => {
  return (
    <Box>
      <CardMedia
        sx={{ height: 667, width: 667 }}
        image={cvPic}
        title='green iguana'
      />
    </Box>
  );
};

export default HomePage;
