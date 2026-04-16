import FeaturedCourses from "./featuredCourses";
import CourseCarousel from "./courseCarousel";
import InProgress from "./InProgress";
import MockCard from "./MockCard";
import useAuthStore from "../../store/useAuthStore";

export default function Mainpage() {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

    return (
        <div className="px-50 py-15 bg-[#f5f5f5] z-1">
            <div className="mb-15">
                <CourseCarousel />
            </div>
            {isLoggedIn ? (
                <>
                    <section className="mb-15">
                        <div className="mb-10">
                            <h2 className="text-4xl font-bold text-gray-900">Continue Learning</h2>
                            <p className="text-gray-600 text-lg mt-2">Pick up where you left off</p>
                        </div>
                        <InProgress />
                    </section>

                    <section className="mb-15">
                        <div className="mb-10">
                            <h2 className="text-4xl font-bold text-gray-900">Start Learning Today</h2>
                            <p className="text-gray-600 text-lg mt-2">Explore more popular courses</p>
                        </div>
                        <FeaturedCourses />
                    </section>
                </>
            ) : (
                <>
                    <section className="mb-15">
                        <div className="mb-10">
                            <h2 className="text-4xl font-bold text-gray-900">Start Learning Today</h2>
                            <p className="text-gray-600 text-lg mt-2">Choose from our most popular courses and begin your journey</p>
                        </div>
                        <FeaturedCourses />
                    </section>
                    <section className="mb-15">
                        <div className="mb-10">
                            <h2 className="text-4xl font-bold text-gray-900">Continue Learning</h2>
                            <p className="text-gray-600 text-lg mt-2">Pick up where you left off</p>
                        </div>
                        <InProgress />
                    </section>
                </>
            )}
        </div>
    )
}