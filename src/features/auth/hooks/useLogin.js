import { useState } from "react";
import api from "../../axios";

export const useLogin = (onSuccess) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const submitLogin = async (data) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await api.post('/login', data);

            if (onSuccess) onSuccess(response.data);
            return { success: true, data: response.data };
        } catch (err) {
            const apiError = err.response?.data?.errors || err.response?.data?.message || "Something went wrong";
            setError(apiError);
            return { success: false, error: apiError };
        } finally {
            setIsLoading(false);
        }
    };

    return { submitLogin, isLoading, error };
};