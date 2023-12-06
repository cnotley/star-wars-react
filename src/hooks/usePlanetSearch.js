import useSWR from 'swr';
import { fetchPlanets } from '../api/starWarsApi';

const usePlanetSearch = (searchTerm) => {
    const shouldFetch = searchTerm && searchTerm.length >= 2;

    const { data, error } = useSWR(shouldFetch ? ['planets', searchTerm] : null, fetchPlanets, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        dedupingInterval: 60000,
        onError: (err) => {
            console.error(`Error fetching planets: ${err.message}`);
        }
    });

    return {
        planets: data || [],
        isLoading: shouldFetch && !error && !data,
        isError: !!error,
    };
};

export default usePlanetSearch;
