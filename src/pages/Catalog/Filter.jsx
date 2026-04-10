import { useEffect } from "react"
import { useGetFilters } from "./useGetFilters";
import { Code, Palette, LineChart, Database, Lightbulb } from "lucide-react";
import FilterButton from "./FilterButton";

export default function Filter() {
    const { data: categories, fetchFilters: getCategories } = useGetFilters("categories")
    const { data: topics, fetchFilters: getTopics } = useGetFilters("topics")
    const { data: instructors, fetchFilters: getInstructors } = useGetFilters("instructors")

    console.log(instructors)

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
                    {categories.data?.map((cat) => (
                        <FilterButton
                            key={cat.id}
                            label={cat.name}
                            icon={Icon_map[cat.icon]}
                            onClick={() => handleFilter(cat.id)}
                        />
                    ))}
                </div>
            </div>
            <div>
                <p className="font-bold mb-4">Topics</p>
                <div className="flex flex-wrap gap-2">
                    {topics.data?.map((topic) => (
                        <FilterButton
                            key={topic.id}
                            label={topic.name}
                            onClick={() => handleFilter(topic.id)}
                        />
                    ))}
                </div>
            </div>
            <div>
                <p className="font-bold mb-4">Instructors</p>
                <div className="flex flex-col w-max gap-1.5">
                    {instructors.data?.map((inst) => (
                        <FilterButton
                            key={inst.id}
                            label={inst.name}
                            image={inst.avatar}
                            onClick={() => handleFilter(inst.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}