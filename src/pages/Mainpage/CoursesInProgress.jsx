import api from "../../features/axios";

export default function CoursesInProgress() {
    try {
        const response = api.get('/courses/in-progress')
        return response.data
    } catch (err) {
        console.error(err)
    }

    return (
        
    )
}