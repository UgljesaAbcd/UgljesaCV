import { useEffect } from 'react';
import axios from 'axios';

import { NETWORK_STATUSES } from '@common/constants';

const useInterceptors = token => {
  useEffect(() => {
    const handleErrors = err => {
      switch (err?.response?.status) {
        case NETWORK_STATUSES.PAGE_NOT_FOUND:
          console.log('page not found');
          break;
        case NETWORK_STATUSES.BAD_REQUEST:
          console.log('bad request');
          break;
        case NETWORK_STATUSES.NOT_AUTHORIZED:
          console.log('not authorized');
          break;
        default:
          console.log('unhandled error');
          break;
      }
    };
    if (token) {
      axios.defaults.headers.authorization = `Bearer ${token}`;
    } else {
      axios.defaults.headers.authorization = undefined;
    }

    axios.interceptors.response.use(
      res => res,
      err => {
        handleErrors(err);
        return err;
      }
    );
  }, [token]);
};

export default useInterceptors;
