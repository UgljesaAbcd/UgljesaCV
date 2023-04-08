import React from 'react';
import { Outlet, Router, ReactLocation, useNavigate } from 'react-location';
import { useSelector } from 'react-redux';

import { selectLoggedIn } from '@common/slices/userSlice';

import useInterceptors from '@hooks/useInterceptors';

import routes from '@navigation/routes/routes';
import { ROUTER_PATHS } from '@common/constants';

import NavBar from './components/NavBar';

const location = new ReactLocation();

const PublicRoute = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  let pathname = window.location.pathname;
  if (
    !isLoggedIn &&
    pathname !== ROUTER_PATHS.LOGIN &&
    pathname !== ROUTER_PATHS.REGISTER
  ) {
    navigate({ to: ROUTER_PATHS.LOGIN, replace: false });
  }
  useInterceptors();
  return (
    <>
      <Outlet />
    </>
  );
};

const PrivateRoute = ({ isLoggedIn }) => {
  const navigate = useNavigate();
  let pathname = window.location.pathname;
  if (isLoggedIn && pathname === ROUTER_PATHS.LOGIN) {
    navigate({ to: ROUTER_PATHS.HOME, replace: false });
  }
  useInterceptors();
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const AppRouter = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <Router location={location} routes={routes(Boolean(isLoggedIn))}>
      {Boolean(isLoggedIn) ? (
        <PrivateRoute isLoggedIn={isLoggedIn} />
      ) : (
        <PublicRoute isLoggedIn={isLoggedIn} />
      )}
    </Router>
  );
};

export default AppRouter;
