import { createTheme } from '@mui/material';
import darkScrollbar from '@mui/material/darkScrollbar';

import lightPalette from './lightPalette';
import darkPalette from './darkPalette';

const createCustomTheme = mode =>
  createTheme({
    palette: mode === 'dark' ? darkPalette : lightPalette
    // components: {
    //   MuiCssBaseline: {
    //     styleOverrides: themeParam => ({
    //       body: mode === 'dark' ? darkScrollbar() : null
    //     })
    //   }
    // }
  });

export default createCustomTheme;
