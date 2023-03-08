import { createTheme } from '@mui/material';

import lightPalette from './lightPalette';

const createNetzschTheme = mode =>
  createTheme({
    palette: lightPalette,
    components: {}
  });

export default createNetzschTheme;
