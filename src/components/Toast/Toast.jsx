import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function Toast({
  open = false,
  handleClose = () => {},
  message = '',
  status = undefined,
  autoHideDuration = 2000
}) {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
      >
        {
          {
            error: (
              <Alert
                severity='error'
                onClose={handleClose}
                sx={{
                  width: '100%',
                  backgroundColor: theme => theme.palette.error.main
                }}
              >
                {message}
              </Alert>
            ),
            warning: (
              <Alert
                severity='warning'
                onClose={handleClose}
                sx={{ width: '100%' }}
              >
                {message}
              </Alert>
            ),
            info: (
              <Alert
                severity='info'
                onClose={handleClose}
                sx={{
                  width: '100%',
                  backgroundColor: theme => theme.palette.primary.main
                }}
              >
                {message}
              </Alert>
            ),
            success: (
              <Alert
                severity='success'
                onClose={handleClose}
                sx={{
                  width: '100%',
                  backgroundColor: theme => theme.palette.primary.main
                }}
              >
                {message}
              </Alert>
            )
          }[status]
        }
      </Snackbar>
    </Stack>
  );
}
