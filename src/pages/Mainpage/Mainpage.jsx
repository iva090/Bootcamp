import FeaturedCourses from "./featuredCourses";

export default function Mainpage() {
    return (
        <div className="px-50 mt-10">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-900">Start Learning Today</h2>
                <p className="text-gray-600 mt-2">Choose from our most popular courses and begin your journey</p>
            </div>
            <FeaturedCourses />
        </div>
    )
}