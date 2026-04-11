import CourseCard from "./CourseCard";
import Pagination from "./Pagination";
import SortDropdown from "./SortDropdown";

export default function Courses({ courses, totalCourses, totalPages, isLoading, currentPage, onPageChange, currentSort, onSortChange }) {

    const itemsPerPage = 9;

    return (
        <>
            <div className="flex justify-between items-center mt-2 mb-6">
                <h2 className="text-gray-500">
                    Showing {courses.length} out of {totalCourses}
                </h2>
                <SortDropdown currentSort={currentSort} onSortChange={onSortChange} />
            </div>

            <div className="grid grid-cols-3 gap-6">
                {courses.length > 0 ? (
                    courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            Id={course.id}
                            Image={course.image}
                            Lecturer={course.instructor.name}
                            Title={course.title}
                            Duration={course.durationWeeks}
                            Category={course.category.name}
                            Price={course.basePrice}
                            Rating={course.avgRating}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 text-gray-400">
                        No courses found matching your filters.
                    </div>
                )}
            </div>

            {totalCourses > itemsPerPage && (
                <div className="mt-12">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                    />
                </div>
            )}
        </>
    );
}