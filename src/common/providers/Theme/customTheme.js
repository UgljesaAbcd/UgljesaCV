import { createTheme } from '@mui/material';

import lightPalette from './lightPalette';
import darkPalette from './darkPalette';

const getColors = isDark => {
  const colors = {
    palette: lightPalette,
    scrollInactive: lightPalette.primary[500],
    scrollActive: lightPalette.primary[600],
    scrollBackground: lightPalette.primary[50]
  };
  if (isDark) {
    colors.palette = darkPalette;
    colors.scrollInactive = '#6b6b6b';
    colors.scrollActive = '#959595';
    colors.scrollBackground = '#2b2b2b';
  }
  return colors;
};

const createCustomTheme = mode => {
  const colorOptions = getColors(mode === 'dark');
  return createTheme({
    palette: colorOptions.palette,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: `${colorOptions.scrollInactive} ${colorOptions.scrollBackground}`,
            '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
              backgroundColor: colorOptions.scrollBackground
            },
            '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
              borderRadius: 8,
              backgroundColor: colorOptions.scrollInactive,
              minHeight: 24,
              border: `3px solid ${colorOptions.scrollBackground}`
            },
            '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
              {
                backgroundColor: colorOptions.scrollActive
              },
            '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
              {
                backgroundColor: colorOptions.scrollActive
              },
            '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
              {
                backgroundColor: colorOptions.scrollActive
              },
            '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
              backgroundColor: colorOptions.scrollBackground
            }
          }
        }
      }
    }
  });
};

export default createCustomTheme;
