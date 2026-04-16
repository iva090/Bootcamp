import api from "../../features/axios";

export const getCourseDetails = async (id) => {
    try {
        const response = await api.get(`/courses/${id}`);
        return response.data.data;
    } catch (error) {
        console.error(`Error fetching course with id ${id}: `, error);
        throw error;
    }
};