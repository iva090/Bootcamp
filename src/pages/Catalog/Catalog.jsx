import PathBar from "../../components/pathbar";
import Filter from "./Filter";

export default function Catalog() {


    return (
        <div className="px-10 px-40 mt-10">
            <PathBar />

            <div className="flex gap-10 mt-8">

                <aside className="w-90 flex-shrink-0">
                    <Filter />
                </aside>

                <main className="flex-1">
                    <div className="flex justify-between items-center mt-2 mb-6">
                        <h2 className="text-gray-500">Showing 9 out of 90</h2>
                    </div>

                    <div className="grid grid-cols-1 grid-cols-3 gap-6">
                        <div className="h-64 bg-gray-100 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400">
                            Course Card Placeholder
                        </div>
                    </div>
                </main>

            </div>
        </div>
    )
}