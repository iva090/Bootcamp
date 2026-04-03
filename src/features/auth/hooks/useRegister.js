import { useState } from "react";
import axios from "axios";

export const useRegister = (onSuccess) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const submitRegistration = async (formData) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('https://api.redclass.redberryinternship.ge/api/register', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (onSuccess) onSuccess(response.data);
            return { success: true };

        } catch (err) {
            const errorMessage = err.response?.data?.message || "Registration failed";
            setError(errorMessage);
            return { success: false };
        } finally {
            setIsLoading(false);
        }
    };

    return { submitRegistration, isLoading, error };
};