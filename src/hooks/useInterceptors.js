import { useEffect } from 'react';
import axios from 'axios';

import { getByPathAndParams } from '@services/BaseApi';

import { NETWORK_STATUSES } from '@common/constants';
// import { USER } from '@common/network/ApiPaths';

const useInterceptors = (token, dispatch, navigate, userId) => {
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const { data } = await getByPathAndParams({
  //         path: USER.GET_USER_BY_ID,
  //         pathVariables: {
  //           id: userId
  //         },
  //         headers: {
  //           'Content-Type': 'application/json',
  //           authorization: `Bearer ${token}`
  //         }
  //       });

  //       if (token && data?.email) {
  //         dispatch({
  //           type: 'setUserData',
  //           payload: {
  //             email: data.email,
  //             isAdmin: data.is_admin,
  //             userLevel: data.user_level,
  //             status: data.status,
  //             plant: data.plant,
  //             unitSystem: data?.unit_system
  //               ? data.unit_system.toUpperCase()
  //               : null,
  //             language: data.default_language_id,
  //             expertModeAllowed: Boolean(data?.expert_mode_allowed)
  //           }
  //         });
  //       }
  //     } catch (e) {
  //       console.log('error', e);
  //     }
  //   };
  //   fetchUserData();
  // }, []);

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

    // axios.defaults.headers.authorization = `Bearer ${token}`;
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
