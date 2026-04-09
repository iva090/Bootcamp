import FeaturedCourses from "./featuredCourses";
import CourseCarousel from "./courseCarousel";
import InProgress from "./InProgress";

export default function Mainpage() {
    return (
        <div className="px-50 mt-10">
            <div className="mb-15">
                <CourseCarousel />
            </div>
            <div className="mb-15">
                <div className="mb-10">
                    <h2 className="text-4xl font-bold text-gray-900">Start Learning Today</h2>
                    <p className="text-gray-600 text-lg mt-2">Choose from our most popular courses and begin your journey</p>
                </div>
                <FeaturedCourses />
            </div>
            <div className="mb-15">
                <div className="mb-10">
                    <h2 className="text-4xl font-bold text-gray-900">Continue Learning</h2>
                    <p className="text-gray-600 text-lg mt-2">Pick up where you left off</p>
                </div>
                <InProgress />
            </div>
        </div>
    )
}