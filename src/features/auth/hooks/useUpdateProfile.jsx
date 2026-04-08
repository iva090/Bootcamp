import { useState } from "react";
import api from "./axios";
import useAuthStore from "../../../store/useAuthStore";

export const useUpdateProfile = (onSuccess) => {
    const user = useAuthStore((state) => state.user);
    const updateProfile = useAuthStore((state) => state.updateProfile);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const submitUpdate = async (values) => {
        setIsLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append("_method", "PUT");
            formData.append("full_name", values.fullName);
            formData.append("mobile_number", values.mobileNumber);
            formData.append("age", values.age);

            if (values.avatar instanceof File) {
                formData.append("avatar", values.avatar);
            }

            const response = await api.put('/profile', formData);

            updateProfile(response.data);

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

    return { submitUpdate, isLoading, error };
};