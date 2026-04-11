import { useEffect, useState, useCallback } from "react";
import PathBar from "../../components/pathbar";
import Filter from "./Filter";
import { useGetCourses } from "./useGetCourses";
import Courses from "./Courses";

export default function Catalog() {
    const { courses, totalCourses, totalPages, fetchCourses, isLoading } = useGetCourses();
    const [sortBy, setSortBy] = useState("newest");

    const [activeFilters, setActiveFilters] = useState({
        "categories[]": [],
        "topics[]": [],
        "instructors[]": [],
        sort: "newest",
        page: 1,
    });

    useEffect(() => {
        fetchCourses(activeFilters);
    }, [activeFilters, fetchCourses]);

    const handleSortChange = useCallback((newSort) => {
        setActiveFilters(prev => ({
            ...prev,
            sort: newSort,
            page: 1
        }));
    }, []);

    const handlePageChange = useCallback((newPage) => {
        setActiveFilters(prev => ({ ...prev, page: newPage }));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleFilterUpdate = useCallback((type, id) => {
        setActiveFilters(prev => {
            const currentList = prev[type] || [];
            const isSelected = currentList.includes(id);

            return {
                ...prev,
                page: 1,
                [type]: isSelected
                    ? currentList.filter(itemId => itemId !== id)
                    : [...currentList, id]
            };
        });
    }, []);

    const clearAll = useCallback(() => {
        setActiveFilters({
            "categories[]": [],
            "topics[]": [],
            "instructors[]": [],
            sort: "newest"
        });
    }, []);

    return (
        <div className="px-40 mt-10 mb-10">
            <PathBar />
            <div className="flex gap-10 mt-8">
                <aside className="w-80 flex-shrink-0">
                    <Filter activeFilters={activeFilters} onFilterChange={handleFilterUpdate} onClear={clearAll} />
                </aside>

                <main className="flex-1">
                    <Courses
                        courses={courses}
                        totalCourses={totalCourses}
                        totalPages={totalPages}
                        isLoading={isLoading}
                        currentPage={activeFilters.page}
                        onPageChange={handlePageChange}
                        currentSort={activeFilters.sort}
                        onSortChange={handleSortChange}
                    />
                </main>
            </div>
        </div>
    );
}