import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.redclass.redberryinternship.ge/api',
    headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
    }
});

api.interceptors.request.use((config) => {

    const authStorage = JSON.parse(localStorage.getItem('auth-storage'));
    const token = authStorage?.state?.token;

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;