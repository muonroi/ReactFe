import { axiosCategoryInstance } from './axiosInstance'
export const categoryApi = {
    getAll(params) {
        var url = '/categories';
        return axiosCategoryInstance.get(url, { params })
    },
    get(id) {
        var url = `/categories/${id}`;
        return axiosCategoryInstance.get(url)
    },
    add(data) {
        var url = `/categories`
        return axiosCategoryInstance.post(url, data)
    },
    update(id, data) {
        var url = `/categories/${id}`
        return axiosCategoryInstance.put(url, data)
    },
    del(id) {
        var url = `/categories/${id}`
        return axiosCategoryInstance.delete(url)
    }
}