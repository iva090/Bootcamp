import { useCallback, useState } from "react";
import api from "../../features/axios";

export const useGetFeaturedCourses = (onSuccess) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchFeaturedCourses = useCallback(async (onSuccess) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await api.get('/courses/featured');
            if (onSuccess) onSuccess(response.data);
            console.log(response.data)
            return { success: true, data: response.data };
        } catch (err) {
            const apiError = err.response?.data?.message || "Something went wrong";
            setError(apiError);
            return { success: false, error: apiError };
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { fetchFeaturedCourses, isLoading, error };
};