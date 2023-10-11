import {axiosProductInstance ,axiosProductImageInstance} from './axiosInstance'
export const productApi = {
    getAll(params) {
        var url = '/products';
        return axiosProductInstance.get(url, { params })
    },
    get(id,params) {
        var url = `/products/${id}`;
        return axiosProductInstance.get(url,{ params })
    },
    add(data) {
        var url = `/products`
        return axiosProductInstance.post(url, data)
    },
    update(id, data) {
        var url = `/products/${id}`
        return axiosProductInstance.put(url, data)
    },
    del(id) {
        var url = `/products/${id}`
        return axiosProductInstance.delete(url)
    },
    upload(data) {
        var url = `/upload`
        return axiosProductImageInstance.post(url,data)
    }
}