import {axiosUserInstance} from './axiosInstance'
export const userApi = {
    login(params) {
        var url = '/auth/local';
        return axiosUserInstance.post(url,params)
    },
    register(params) {
        var url = `/auth/local/register`;
        return axiosUserInstance.post(url,params)
    },
    me(params) {
        var url = `/users/me`;
        return axiosUserInstance.get(url,{params})
    }
}