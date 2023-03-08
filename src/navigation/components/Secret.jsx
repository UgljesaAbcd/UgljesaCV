import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-location';

import { postByPathAndData } from '@services/BaseApi';

import { ROUTER_PATHS } from '@common/constants';

const Secret = () => {
  const navigate = useNavigate();

  return <div>loader secret page</div>;
};

export default Secret;
