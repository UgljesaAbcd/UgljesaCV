import React, { useState, useRef, useEffect, useMemo } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import {
  getThemeColors,
  codeOfUsePreviousHook,
  editorCode
} from './helpers/utils';

import usePrevious from '@hooks/usePrevious';

const Editor = () => {
  const theme = useTheme();
  const currentTheme = useMemo(() => {
    return getThemeColors(theme);
  }, [theme]);
  return (
    <Box
      sx={{
        width: '100%',
        px: 2,
        pt: 1,
        height: 'calc(100vh - 40px)',
        overflowY: 'scroll'
      }}
    >
      <Box>
        <Typography sx={{ py: 1 }} variant='subtitle1'>
          usePrevious hook code
        </Typography>
        <Box sx={{ backgroundColor: '#282A36' }}>
          <LiveProvider
            code={codeOfUsePreviousHook}
            scope={{ useRef, useEffect }}
            theme={currentTheme}
            disabled
          >
            <LiveEditor disabled />
          </LiveProvider>
        </Box>
        <Typography sx={{ pb: 2, pt: 3 }} variant='subtitle1'>
          Usage of hook - result of below code:
        </Typography>
        <Box sx={{ backgroundColor: '#282A36' }}>
          <LiveProvider
            code={editorCode}
            scope={{ useState, usePrevious, Grid, Button, Typography }}
            theme={currentTheme}
          >
            <Box
              sx={{
                backgroundColor: theme => theme.palette.background.default,
                pb: 1
              }}
            >
              <LivePreview />
            </Box>

            <LiveEditor />
            <LiveError />
          </LiveProvider>
        </Box>

        <br />
      </Box>
    </Box>
  );
};

export default Editor;
