import { useState } from "react";
import api from "../../features/axios";

export const useGetFeaturedCourses = (onSuccess) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const submitRegistration = async (data) => {
        setIsLoading(true);
        setError(null);
        try {

            const response = await api.get('/register/featured');

            if (onSuccess) onSuccess(response.data);
            console.log(response.data)
            return { success: true, data: response.data };
        } catch (err) {
            const apiError = err.response?.data?.errors || err.response?.data?.message || "Something went wrong. Please try again";
            setError(apiError);
            return { success: false, error: apiError };
        } finally {
            setIsLoading(false);
        }
    };

    return { submitRegistration, isLoading, error };
};