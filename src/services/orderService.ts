import { fetchAPI } from '../utils/api';

export const orderService = {
    getOrders: async () => {
        return await fetchAPI('/orders');
    },

    createOrder: async () => {
        return await fetchAPI('/orders', {
            method: 'POST'
        });
    }
};
