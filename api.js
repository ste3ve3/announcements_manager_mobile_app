import axios from 'axios';
import useSWR from 'swr';
// import { REACT_APP_BASE_URL } from '@env';

export const API = axios.create({
    baseURL: "https://test.toplineglobalhrconsulting.com",
    withCredentials: true
});

/**
 *
 * @param {string} path
 */
export const fetcher = async (path) => {
    return API.get(path)
        .then((res) => res.data)
        .catch((error) => {
            throw error.response?.data?.message || error.message || 'Unknown error occurred';
        });
};

/**
 *
 * @param {string} pathname
 */
export const useFetcher = (pathname, opts) => {
    const { data, error, isLoading } = useSWR(pathname, fetcher, opts);
    return {
        data,
        isLoading: isLoading || (!error && !data),
        isError: error
    };
};
