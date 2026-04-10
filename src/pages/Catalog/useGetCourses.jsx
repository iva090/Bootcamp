import { useCallback, useState } from "react";
import api from "../../features/axios";

export const useGetCourses = () => {
    const [courses, setCourses] = useState([]);
    const [totalCourses, setTotalCourses] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchCourses = useCallback(async (filters = {}) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await api.get("/courses", {
                params: filters
            });

            const root = response.data;
            const courseData = root.data || [];
            const meta = root.meta || {};

            setCourses(courseData);
            setTotalCourses(meta.total || courseData.length);
            setTotalPages(meta.lastPage || 1);

            return { success: true, data: root };
        } catch (err) {
            const apiError = err.response?.data?.message || "Failed to load courses";
            setError(apiError);
            return { success: false, error: apiError };
        } finally {
            setIsLoading(false);
        }
    }, []);

    return { courses, totalCourses, totalPages, fetchCourses, isLoading, error };
};