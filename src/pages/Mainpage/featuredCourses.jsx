import { useEffect, useState } from "react";
import { useGetFeaturedCourses } from "./useGetFeatureCourses";
import Card from "../../components/Card";

export default function FeaturedCourses() {
    const { fetchFeaturedCourses, isLoading, error } = useGetFeaturedCourses();

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const handleLoad = async () => {
            const result = await fetchFeaturedCourses();

            if (result.success) {
                setCourses(result.data.data);
            } else {
                console.error(result.error)
            }
        };

        handleLoad();
    }, [])

    console.log(courses)

    return (
        <section className="flex mx-auto" >
            <div className="grid grid-cols-3 gap-8">
                {courses?.map((course) => (
                    <Card key={course.id} Image={course.image} Lecturer={course.instructor.name} Title={course.title} Description={course.description} Price={course.basePrice} Rating={course.avgRating} />
                ))
                }
            </div>
        </section >
    );
};