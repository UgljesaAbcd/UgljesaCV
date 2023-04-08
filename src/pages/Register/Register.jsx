import React from 'react';
import { useNavigate } from 'react-location';
import { Formik, Field, Form } from 'formik';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import FormControl from '@mui/material/FormControl';

import { ROUTER_PATHS } from '@common/constants';

const FORM_CONFIG = [
  {
    id: 'firstName',
    name: 'firstName',
    label: 'First name',
    component: TextField
  },
  {
    id: 'lastName',
    name: 'lastName',
    label: 'Last name',
    component: TextField
  },
  {
    id: 'email',
    name: 'email',
    label: 'Email',
    component: TextField
  },
  {
    id: 'confirmationEmail',
    name: 'confirmationEmail',
    label: 'Confirmation email',
    component: TextField
  },
  {
    id: 'company',
    name: 'company',
    label: 'Company name',
    component: TextField
  },
  {
    id: 'password',
    name: 'password',
    label: 'Password',
    component: TextField
  },
  {
    id: 'confirmationPassword',
    name: 'confirmationPassword',
    label: 'Confirmation password',
    component: TextField
  }
];

const Register = () => {
  const navigate = useNavigate();

  const onSubmit = async values => {
    await new Promise(resolve => setTimeout(resolve, 500));
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <Container maxWidth='xs' sx={{ height: '100vh', overflowY: 'auto' }}>
      <Box sx={{ my: 2 }}>
        <Typography variant='h4' sx={{ mb: 3 }}>
          Welcome to register page
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Please note that after register is submitted, your account is going to
          be inactive until admin confirm registration. After activation of
          account, you gonna receive email notification.
        </Typography>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              company: '',
              password: '',
              confirmationPassword: ''
            }}
            onSubmit={onSubmit}
          >
            {({
              isSubmitting,
              handleSubmit,
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
                      component={field.component}
                    />
                  </FormControl>
                ))}

                <Button
                  color='secondary'
                  variant='contained'
                  fullWidth
                  onClick={handleSubmit}
                  sx={{ mb: 5 }}
                >
                  Register
                </Button>
                <Button
                  color='secondary'
                  variant='contained'
                  fullWidth
                  onClick={() => {
                    navigate({ to: ROUTER_PATHS.LOGIN, replace: false });
                  }}
                >
                  Go to Login
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>
    </Container>
  );
};

export default Register;
