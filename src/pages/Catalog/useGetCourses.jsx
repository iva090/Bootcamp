import { useCallback, useState } from "react";
import api from "../../features/axios";

export const useGetCourses = () => {
    const [courses, setCourses] = useState([]);
    const [totalCourses, setTotalCourses] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCourses = useCallback(async (filters = {}) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await api.get("/courses", {
                params: filters
            });

            const courseData = response.data.data || [];
            setCourses(courseData);
            setTotalCourses(response.data.total || courseData.length);
            console.log(response.data)
            return { success: true, data: response.data };
        } catch (err) {
            const apiError = err.response?.data?.message || "Failed to load courses";
            setError(apiError);
            return { success: false, error: apiError };
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { courses, totalCourses, fetchCourses, isLoading, error };
};