import { baseApiInstance } from '@common/libs/myAxios';

import { API } from '@common/constants';
import {
  filterEmptyStrings,
  insertTemplateVariables
} from '@common/helpers/helpers';

const getDefaultOptions = ({
  baseURL = API.API_URL,
  // baseURL = '',
  headers = {
    'Content-Type': 'application/json'
  },
  method = 'get',
  params = undefined,
  data = undefined,
  url = undefined,
  responseType = undefined
}) => {
  return {
    headers,
    baseURL,
    method,
    responseType,
    params,
    data,
    url
  };
};

// params - is object with key value pairs that will be serialized to query string
export const getByPathAndParams = ({
  path = '/',
  params,
  pathVariables,
  headers
} = {}) => {
  return baseApiInstance(
    getDefaultOptions({
      params: filterEmptyStrings(params),
      url: insertTemplateVariables(path, pathVariables),
      headers
    })
  );
};
// data - is value that will be sent as payload
export const putByPathAndData = ({ path = '/', data, pathVariables } = {}) => {
  return baseApiInstance(
    getDefaultOptions({
      url: insertTemplateVariables(path, pathVariables),
      data,
      method: 'put'
    })
  );
};

export const postByPathAndData = ({
  path = '/',
  data,
  pathVariables,
  params,
  headers,
  baseURL
} = {}) => {
  return baseApiInstance(
    getDefaultOptions({
      url: insertTemplateVariables(path, pathVariables),
      params: filterEmptyStrings(params),
      data,
      method: 'post',
      headers,
      baseURL
    })
  );
};

export const deleteByPath = ({ path = '/', pathVariables } = {}) => {
  return baseApiInstance(
    getDefaultOptions({
      url: insertTemplateVariables(path, pathVariables),
      method: 'delete'
    })
  );
};

// configList - is array of path strings
export const getAllByPathList = async (configList = []) => {
  const response = [];
  configList.map(path => {
    response.push(getByPathAndParams({ path }));
  });
  return await Promise.all(response);
};
