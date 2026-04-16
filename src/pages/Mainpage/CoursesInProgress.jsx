import { useEffect, useState } from "react";
import api from "../../features/axios";
import MockCard from "./MockCard";

export default function CoursesInProgress() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await api.get('/courses/in-progress');
                setCourses(response.data.data || []);
                console.log("Fetched enrollments:", response.data.data);
            } catch (err) {
                console.error("Failed to fetch courses:", err);
            }
        };
        fetchCourses();
    }, []);


    return (
        <div className="grid grid-cols-3 gap-4">
            {courses.slice(0, 3).map((item) => (
                <MockCard
                    key={item.id}
                    Image={item.course.image}
                    Lecturer={item.course.instructor.name}
                    Rating={item.course.avgRating}
                    Title={item.course.title}
                    Progress={item.progress}
                    Id={item.id}
                />
            ))}
        </div>
    );
}