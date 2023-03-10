import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { ThemeProvider } from '@mui/material/styles';

import createCustomTheme from './customTheme';

const Theme = ({ children }) => {
  // const colorMode = useSelector(selectColorMode);
  // const theme = createCustomTheme();
  const [mode] = useState('light');
  const theme = useMemo(() => createCustomTheme(mode), [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
