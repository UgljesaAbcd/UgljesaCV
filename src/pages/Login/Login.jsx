import React from 'react';
import { useNavigate } from 'react-location';
import { Formik, Field, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';

import { ROUTER_PATHS } from '@common/constants';
import { loginSubmit } from '@common/slices/userSlice';

const FORM_CONFIG = [
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    component: TextField
  },
  {
    id: 'password',
    name: 'password',
    label: 'Password',
    component: TextField
  }
];

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = async (values, actions) => {
    dispatch(loginSubmit(values));
  };
  return (
    <Container maxWidth='xs' sx={{ height: '100vh', overflowY: 'auto' }}>
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
            initialValues={{
              email: '',
              password: ''
            }}
            onSubmit={(values, actions) => onSubmit(values, actions)}
          >
            {({
              isSubmitting,
              handleSubmit,
              handleChange,
              isValid,
              setFieldValue,
              values,
              setValues
            }) => (
              <Form>
                {FORM_CONFIG.map(field => (
                  <FormControl key={field.id} fullWidth sx={{ pb: 1 }}>
                    <Field
                      id={field.id}
                      name={field.name}
                      label={field.label}
                      onChange={handleChange}
                      component={field.component}
                    />
                  </FormControl>
                ))}

                <Button
                  color='secondary'
                  variant='contained'
                  fullWidth
                  sx={{ mb: 5 }}
                  onClick={handleSubmit}
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
