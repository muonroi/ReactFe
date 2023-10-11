import AppUrl from './AppUrl'
import axios from 'axios'

export const configCategoryInstance = {
    baseURL: AppUrl.BaseURL,
    headers: {
        'Authorization': `Bearer ${AppUrl.categoryToken}`,
        'Content-Type': 'application/json'
    },
};
export const axiosCategoryInstance = axios.create(configCategoryInstance);


export const configProductInstance = {
    baseURL: AppUrl.BaseURL,
    headers: {
        'Authorization': `Bearer ${AppUrl.productToken}`,
        'Content-Type': 'application/json'
    },
};
export const axiosProductInstance = axios.create(configProductInstance);

export const configProductImageInstance = {
    baseURL: AppUrl.BaseURL,
    headers: {
        'Authorization': `Bearer ${AppUrl.productToken}`,
        'Content-Type': 'multipart/form-data'
    },
};
export const axiosProductImageInstance = axios.create(configProductImageInstance);