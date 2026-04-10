import { useEffect } from "react"
import { useGetFilters } from "./useGetFilters";
import { Code, Palette, LineChart, Database, Lightbulb } from "lucide-react";

export default function Filter() {
    const { data: categories, fetchFilters: getCategories } = useGetFilters("categories")
    const { data: topics, fetchFilters: getTopics } = useGetFilters("topics")
    const { data: instructors, fetchFilters: getInstructors } = useGetFilters("instructors")

    const Icon_map = {
        "development": <Code size={18} />,
        "design": <Palette size={18} />,
        "business": <LineChart size={18} />,
        "data-science": <Database size={18} />,
        "marketing": <Lightbulb size={18} />
    }

    useEffect(() => {
        getCategories();
        getTopics();
        getInstructors();
    }, [getCategories, getTopics, getInstructors]);

    return (
        <div className="flex flex-col gap-8">
            <div>
                <p className="font-bold mb-4">Categories</p>
                <div className="flex flex-wrap gap-2">
                    {categories.data?.map((category) => (
                        <button
                            key={category.id}
                            className="group flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-xl shadow-sm text-gray-600 font-medium transition-all duration-200 hover:bg-[#f1f0ff] hover:text-[#5d51e8] hover:border-[#5d51e8]/30 hover:shadow-md"
                        >
                            <span className="text-gray-400 group-hover:text-[#5d51e8] transition-colors">
                                {Icon_map[category.icon] || <Code size={18} />}
                            </span>

                            <span>{category.name}</span>
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <p className="font-bold mb-4">Topics</p>
                <div className="flex flex-wrap gap-2">
                    {topics.data?.map((topic) => (
                        <button
                            key={topic.id}
                            className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-gray-600 text-sm font-medium hover:bg-gray-50 transition-colors"
                        >
                            {topic.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}