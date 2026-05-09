import { fetchAPI } from '../utils/api';

export const productService = {
    getAll: async () => {
        return await fetchAPI('/products');
    },
    getById: async (id: string) => {
        return await fetchAPI(`/products/${id}`);
    }
};
