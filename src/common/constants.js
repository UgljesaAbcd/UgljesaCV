const API = {
  API_URL: process.env.REACT_APP_API_URL
};

const NETWORK_STATUSES = {
  BAD_REQUEST: 400,
  PAGE_NOT_FOUND: 404,
  NOT_AUTHORIZED: 401
};

const ROUTER_PATHS = Object.freeze({
  home: '/',
  secret: '/secret',
  myapp: '/myapp'
});

export { ROUTER_PATHS, NETWORK_STATUSES, API };
