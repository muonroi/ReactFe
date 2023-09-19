import axiosProductInstance from './axiosInstance'
export const productApi = {
    getAll(params) {
        var url = '/products';
        return axiosProductInstance.get(url, { params })
    },
    get(id) {
        var url = `/products/${id}`;
        return axiosProductInstance.get(url)
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
    }
}