import { fetchAPI } from '../utils/api';

export const authService = {
    login: async ({ email, password }: any) => {
        return await fetchAPI('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });
    },

    register: async ({ name, email, password }: any) => {
        return await fetchAPI('/auth/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password })
        });
    }
};
