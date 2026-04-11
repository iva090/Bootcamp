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
                    <span className="mr-1"><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2932 8.17501C17.4349 8.47691 17.7177 8.68831 18.0474 8.73867L23.888 9.63081C24.6926 9.75372 25.0212 10.7351 24.4527 11.3177L20.1644 15.7128C19.9427 15.94 19.8421 16.259 19.8932 16.5722L20.8972 22.7252C21.0317 23.5491 20.1571 24.1653 19.4265 23.7615L14.2957 20.9255C13.9946 20.7591 13.6292 20.7591 13.3281 20.9255L8.19806 23.7614C7.46751 24.1653 6.59295 23.5492 6.72729 22.7253L7.73067 16.5722C7.78175 16.2589 7.6811 15.9401 7.45946 15.7129L3.17106 11.3177C2.60263 10.7351 2.93119 9.75372 3.73581 9.63081L9.57636 8.73867C9.90604 8.68831 10.1889 8.47691 10.3306 8.17501L12.9066 2.68645C13.2666 1.91962 14.3572 1.91962 14.7171 2.68645L17.2932 8.17501Z" fill="#F4A316" />
                    </svg>
                    </span>
                    <span className="text-gray-800">{Rating || "N/A"}</span>
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">
                {Title}
            </h3>
            <p className="text-gray-500 text-md mb-6 line-clamp-3">
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