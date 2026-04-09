export default function Card({ Image, Lecturer, Title, Description, Price, Rating }) {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 p-4">
            <div className="rounded-xl overflow-hidden mb-4">
                <img
                    src={Image}
                    alt={Title}
                    className="w-full h-70 object-cover"
                />
            </div>

            <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-500 font-medium">Lecturer {Lecturer}</span>
                <div className="flex items-center text-orange-400 text-sm font-bold">
                    <span className="mr-1">★</span>
                    <span className="text-gray-800">{Rating || "N/A"}</span>
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
                {Title}
            </h3>
            <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                {Description}
            </p>

            <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-50">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider">Starting from</span>
                    <span className="text-2xl font-bold text-gray-900">
                        ${Number(Price || 0).toFixed(0)}
                    </span>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors">
                    Details
                </button>
            </div>
        </div>
    )
}