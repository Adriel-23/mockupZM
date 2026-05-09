import { fetchAPI } from '../utils/api';

export const favoriteService = {
    getFavorites: async () => {
        return await fetchAPI('/users/favorites');
    },

    toggleFavorite: async (productId: string) => {
        return await fetchAPI(`/users/favorites/${productId}`, {
            method: 'POST'
        });
    }
};
