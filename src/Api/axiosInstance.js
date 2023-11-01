import AppUrl from './AppUrl';
import axios from 'axios';
import store from '../state/store';

var token = store.getState().user.token;

export const configCategoryInstance = {
  baseURL: AppUrl.BaseURL,
  headers: {
    'Authorization': `Bearer ${AppUrl.categoryToken}`,
    'Content-Type': 'application/json',
  },
};

export const axiosCategoryInstance = axios.create(configCategoryInstance);

export const configProductInstance = {
  baseURL: AppUrl.BaseURL,
  headers: {
    'Authorization': `Bearer ${AppUrl.productToken}`,
    'Content-Type': 'application/json',
  },
};

export const axiosProductInstance = axios.create(configProductInstance);

export const configProductImageInstance = {
  baseURL: AppUrl.BaseURL,
  headers: {
    'Authorization': `Bearer ${AppUrl.productToken}`,
    'Content-Type': 'multipart/form-data',
  },
};
export const axiosProductImageInstance = axios.create(configProductImageInstance);

export const configUserInstance = {
  baseURL: AppUrl.BaseURL,
  headers: {
    'Authorization': `Bearer ${AppUrl.productToken}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
};
export const axiosUserInstance = axios.create(configUserInstance);
