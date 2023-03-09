import React from 'react';
import { Outlet, Router, ReactLocation } from 'react-location';
// import { Outlet, ReactLocation, Router, useNavigate } from 'react-location';

import useInterceptors from '@hooks/useInterceptors';

import routes from '@navigation/routes/routes';
// import { ROUTER_PATHS } from '@common/constants';

import NavBar from './components/NavBar';

// import { startsWith } from 'lodash';
const location = new ReactLocation();

const PublicRoute = () => {
  useInterceptors();
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

// const PublicRoute = () => {
//   const navigate = useNavigate();
//   let pathname = window.location.pathname;
//   if (
//     pathname !== ROUTER_PATHS.home &&
//     !startsWith(pathname, ROUTER_PATHS.secret)
//   ) {
//     navigate({ to: ROUTER_PATHS.home, replace: false });
//   }
//   return <Outlet />;
// };

// const PrivateRoute = ({ isLoggedIn, dispatch, token, userId }) => {
//   const navigate = useNavigate();
//   useInterceptors(token, dispatch, navigate, userId);
//   let pathname = window.location.pathname;

//   if (isLoggedIn && pathname === ROUTER_PATHS.home) {
//     navigate({ to: ROUTER_PATHS.myapp, replace: false });
//   }

//   return (
//     <>
//       <NavBar />
//       <Outlet />
//     </>
//   );
// };

const AppRouter = () => {
  const globalState = {};
  return (
    <Router
      location={location}
      routes={routes(Boolean(globalState.isLoggedIn))}
    >
      <PublicRoute />
      {/* {Boolean(globalState.isLoggedIn) ? (
        <PrivateRoute
          isLoggedIn={globalState.isLoggedIn}
          dispatch={dispatch}
          token={globalState?.token}
          rules={globalState?.rules}
          userId={globalState?.userId}
        />
      ) : (
        <PublicRoute isLoggedIn={globalState.isLoggedIn} />
      )} */}
    </Router>
  );
};

export default AppRouter;
