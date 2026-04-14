import api from "../../features/axios"

const courseEnroll = {
    enrollInCourse: async (enrollmentData) => {
        try {
            const response = await api.post('/enrollments', {
                courseId: Number(enrollmentData.courseId),
                courseScheduleId: Number(enrollmentData.courseScheduleId),
                force: enrollmentData.force || false
            });

            return response.data;
        } catch (error) {
            if (error.response?.status === 409) {
                return {
                    hasConflict: true,
                    conflicts: error.response.data.conflicts,
                    message: "Schedule conflict detected."
                };
            }
            throw error;
        }
    }
};

export default courseEnroll;