import axios from 'axios';

const cpqInstance = axios.create();
const baseApiInstance = axios.create();

baseApiInstance.interceptors.response = axios.interceptors.response;
baseApiInstance.defaults.headers = axios.defaults.headers;

export { cpqInstance, baseApiInstance };
