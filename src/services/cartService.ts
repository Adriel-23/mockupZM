import { fetchAPI } from '../utils/api';

export const cartService = {
    getCart: async () => {
        return await fetchAPI('/users/cart');
    },

    addItem: async (productId: string, quantity: number = 1) => {
        return await fetchAPI(`/users/cart/${productId}`, {
            method: 'POST',
            body: JSON.stringify({ quantity })
        });
    },

    removeItem: async (productId: string) => {
        return await fetchAPI(`/users/cart/${productId}`, {
            method: 'DELETE'
        });
    }
};
