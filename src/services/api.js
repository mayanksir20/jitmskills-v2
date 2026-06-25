import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL;


const API_BASE_URL =
    import.meta.env.VITE_API_URL || `${API_URL}`;

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    // 10 seconds timeout taaki request infinite na phanse
    timeout: 10000
});

/**
 * AUTH INTERCEPTOR:
 * Agar aap login system banate hain, toh ye har request mein 
 * Token apne aap add kar dega.
 */
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * RESPONSE INTERCEPTOR:
 * Global error handling ke liye (e.g. agar 401 error aaye toh login page par bhej dega).
 */
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error("Session expired. Please login again.");
        }
        return Promise.reject(error);
    }
);

export default api;