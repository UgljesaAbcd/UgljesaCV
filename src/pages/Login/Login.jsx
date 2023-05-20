import React, { useState } from 'react';
import { useNavigate } from 'react-location';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

import { ROUTER_PATHS } from '@common/constants';
import { TOAST_INITIAL_STATE, TOAST_ERROR_STATE } from '@common/toastConstants';
import { loginSubmit } from '@common/slices/userSlice';
import Toast from '@components/Toast/Toast';
import FORM_CONFIG from './config/formConfig';
import { validateLoginSchema } from './config/validateLogin';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [uploadToastState, setUploadToastState] = useState(TOAST_INITIAL_STATE);

  const setUploadToastToInitial = () =>
    setUploadToastState(TOAST_INITIAL_STATE);

  const onSubmit = async values => {
    dispatch(loginSubmit(values))
      .unwrap()
      .catch(err => {
        setUploadToastState({
          ...TOAST_ERROR_STATE,
          message: err.message
        });
      });
  };
  return (
    <Container maxWidth='xs' sx={{ height: '100vh', overflowY: 'auto' }}>
      <Toast
        open={uploadToastState.open}
        handleClose={setUploadToastToInitial}
        status={uploadToastState.status}
        message={uploadToastState.message}
      />
      <Box sx={{ my: 3 }}>
        <Typography variant='h4' sx={{ mb: 3 }}>
          Welcome to my CV
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Please login with you account credentials in order to continue. If you
          still don't have account, you can create account on Register page.
        </Typography>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Formik
            validateOnMount
            initialValues={{
              email: '',
              password: ''
            }}
            onSubmit={values => onSubmit(values)}
            validationSchema={validateLoginSchema}
          >
            {({ handleSubmit, handleChange, handleBlur, errors, touched }) => (
              <Form>
                {FORM_CONFIG.map(field => (
                  <FormControl key={field.id} fullWidth sx={{ pb: 3 }}>
                    <Field
                      id={field.id}
                      name={field.name}
                      label={field.label}
                      onChange={handleChange}
                      component={field.component}
                      onBlur={handleBlur}
                      error={Boolean(touched[field.name] && errors[field.name])}
                    />
                    {touched[field.name] && errors[field.name] && (
                      <FormHelperText id='component-helper-text'>
                        {errors[field.name]}
                      </FormHelperText>
                    )}
                  </FormControl>
                ))}

                <Button
                  color='secondary'
                  variant='contained'
                  fullWidth
                  sx={{ mb: 5 }}
                  onClick={handleSubmit}
                  disabled={Boolean(errors?.email || errors?.password)}
                >
                  Login
                </Button>
                <Button
                  color='secondary'
                  variant='contained'
                  fullWidth
                  onClick={() => {
                    navigate({ to: ROUTER_PATHS.REGISTER, replace: false });
                  }}
                >
                  Go to Register
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
