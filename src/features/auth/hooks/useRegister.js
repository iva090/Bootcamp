import { useState } from "react";
import api from "./axios";

export const useRegister = (onSuccess) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const submitRegistration = async (data) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await api.post('/register', data);

            if (onSuccess) onSuccess(response.data);
            console.log(response.data)
            return { success: true, data: response.data };
        } catch (err) {
            const apiError = err.response?.data?.errors || err.response?.data?.message;
            setError(apiError);
            return { success: false, error: apiError };
        } finally {
            setIsLoading(false);
        }
    };

    return { submitRegistration, isLoading, error };
};