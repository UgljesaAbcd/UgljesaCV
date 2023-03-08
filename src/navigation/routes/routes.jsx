import HomePage from '@pages/HomePage/HomePage';
import CVPage from '@pages/CVPage/CVPage';
import Secret from '@navigation/components/Secret';

import { ROUTER_PATHS } from '@common/constants';

export default isLoggedIn => [
  {
    path: ROUTER_PATHS.home,
    exact: true,
    element: <HomePage />
  },
  {
    path: ROUTER_PATHS.secret,
    exact: true,
    element: <Secret />
  },
  {
    path: ROUTER_PATHS.other,
    exact: true,
    element: isLoggedIn ? <CVPage /> : <HomePage />
  }
];
