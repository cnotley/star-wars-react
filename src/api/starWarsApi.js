import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchPlanets = async (key) => {
    const searchTerm = key[1];

    if (!searchTerm || searchTerm.length < 2) {
        return [];
    }

    try {
        const response = await axiosInstance.get(`/planets/?search=${searchTerm}`);
        if (response.status !== 200 || !response.data || !Array.isArray(response.data.results)) {
            throw new Error('Invalid API response');
        }

        return response.data.results;
    } catch (error) {
        console.error('Error fetching planets:', error);
        throw error;
    }
};