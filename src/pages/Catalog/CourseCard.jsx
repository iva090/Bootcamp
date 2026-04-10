import { Code, Star } from "lucide-react";

export default function CourseCard({ Image, Lecturer, Duration, Title, Category, Price, Rating }) {
    return (
        <div className="flex flex-col bg-white rounded-3xl p-5 w-full shadow-sm border border-gray-100 min-h-[480px]">
            <div className="rounded-2xl overflow-hidden mb-4 shrink-0">
                <img
                    src={Image}
                    alt={Title}
                    className="w-full h-48 object-cover"
                />
            </div>

            <div className="flex justify-between items-center mb-2">
                <div className="text-xs text-gray-400 font-medium">
                    {Lecturer} <span className="mx-1">|</span> {Duration} Weeks
                </div>
                <div className="flex items-center gap-1 text-gray-900 font-bold">
                    <span className="text-orange-400">★</span>
                    <span>{Rating?.toFixed(1)}</span>
                </div>
            </div>

            <h3 className="text-3xl font-semibold text-gray-950 mb-3 leading-tight line-clamp-2">
                {Title}
            </h3>

            <div className="mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-[#5D51E8] rounded-xl text-xs font-semibold">
                    <span>{`</>`}</span> {Category}
                </span>
            </div>

            <div className="flex-grow"></div>

            <div className="flex justify-between items-end pt-4 border-t border-gray-50">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Starting from
                    </span>
                    <span className="text-2xl font-semibold text-gray-700 leading-none">
                        ${Price}
                    </span>
                </div>

                <button className="bg-[#5D51E8] hover:bg-[#4a40d1] text-white px-7 py-3 rounded-2xl font-bold text-sm transition-all active:scale-95">
                    Details
                </button>
            </div>
        </div>
    );
}