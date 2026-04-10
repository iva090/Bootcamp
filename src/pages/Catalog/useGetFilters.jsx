import { useCallback, useState } from "react";
import api from "../../features/axios";

export const useGetFilters = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchFilters = useCallback(async (params = {}) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await api.get(`/${endpoint}`, { params });
            setData(response.data);
            return { success: true, data: response.data };
        } catch (err) {
            const apiError = err.response?.data?.message || "Failed to load data";
            setError(apiError);
            return { success: false, error: apiError };
        } finally {
            setIsLoading(false);
        }
    }, [endpoint]);

    return { data, fetchFilters, isLoading, error };
};