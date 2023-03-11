import React, { useState, useRef, useEffect } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import {
  initTheme,
  codeOfUsePreviousHook,
  editorCode
} from './helpers/constants';

import usePrevious from '@hooks/usePrevious';

const Editor = () => {
  return (
    <Box
      sx={{
        width: '100%',
        px: 1,
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
            theme={initTheme}
            contentEditable={false}
          >
            <LiveEditor contentEditable={false} />
          </LiveProvider>
        </Box>
        <Typography sx={{ py: 1 }} variant='subtitle1'>
          Usage of hook
        </Typography>
        <Box sx={{ backgroundColor: '#282A36' }}>
          <LiveProvider
            code={editorCode}
            scope={{ useState, usePrevious, Grid, Button }}
            theme={initTheme}
          >
            <Box sx={{ backgroundColor: 'white', pb: 1 }}>
              <Typography sx={{ pb: 1 }}>Result of below code:</Typography>
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
