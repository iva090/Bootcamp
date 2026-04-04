import { useState } from "react";
import axios from "axios";

export const useRegister = (onSuccess) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const submitRegistration = async (data) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('https://api.redclass.redberryinternship.ge/api/register', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            });

            if (onSuccess) onSuccess(response.data);
            console.log(response.data);
            return { success: true };
        } catch (err) {
            const apiError = err.response?.data?.errors || err.response?.data?.message;
            setError(apiError);
            return { success: false };
        } finally {
            setIsLoading(false);
        }
    };

    return { submitRegistration, isLoading, error };
};