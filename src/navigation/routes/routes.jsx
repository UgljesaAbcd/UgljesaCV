import HomePage from '@pages/HomePage/HomePage';
import Editor from '@pages/Editor/Editor';
import Secret from '@navigation/components/Secret';
import My3D from '@pages/My3D/My3D';
import Game from '@pages/Game/Game';
import Login from '@pages/Login/Login';
import Register from '@pages/Register/Register';

import { ROUTER_PATHS } from '@common/constants';

export default isLoggedIn => [
  {
    path: ROUTER_PATHS.HOME,
    exact: true,
    element: <HomePage />
  },
  {
    path: ROUTER_PATHS.EDITOR,
    exact: true,
    element: <Editor />
  },
  {
    path: ROUTER_PATHS._3D,
    exact: true,
    element: <My3D />
  },
  {
    path: ROUTER_PATHS.GAME,
    exact: true,
    element: <Game />
  },
  {
    path: ROUTER_PATHS.REGISTER,
    exact: true,
    element: <Register />
  },
  {
    path: ROUTER_PATHS.LOGIN,
    exact: true,
    element: <Login />
  },
  {
    path: ROUTER_PATHS.OTHER,
    exact: true,
    element: isLoggedIn ? <HomePage /> : <Login />
  }
];
