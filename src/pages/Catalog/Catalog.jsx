import { useEffect, useState, useCallback } from "react";
import PathBar from "../../components/pathbar";
import Filter from "./Filter";
import { useGetCourses } from "./useGetCourses";
import Courses from "./Courses";

export default function Catalog() {
    const { courses, totalCourses, fetchCourses, isLoading } = useGetCourses();

    const [activeFilters, setActiveFilters] = useState({
        "categories[]": [],
        "topics[]": [],
        "instructors[]": [],
        sort: "newest"
    });

    useEffect(() => {
        fetchCourses(activeFilters);
    }, [activeFilters, fetchCourses]);

    const handleFilterUpdate = useCallback((type, id) => {
        setActiveFilters(prev => {
            const currentList = prev[type] || [];
            const isSelected = currentList.includes(id);

            return {
                ...prev,
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
        <div className="px-10 lg:px-40 mt-10">
            <PathBar />

            <div className="flex gap-10 mt-8">
                <aside className="w-80 flex-shrink-0">
                    <Filter
                        activeFilters={activeFilters}
                        onFilterChange={handleFilterUpdate}
                        onClear={clearAll}
                    />
                </aside>

                <main className="flex-1">
                    <Courses
                        courses={courses}
                        totalCourses={totalCourses}
                        isLoading={isLoading}
                    />
                </main>
            </div>
        </div>
    );
}