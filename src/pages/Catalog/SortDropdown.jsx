import { useState } from "react";

const sortOptions = [
    { label: "Newest First", value: "newest" },
    { label: "Price: Low to High", value: "price_asc" },
    { label: "Price: High to Low", value: "price_desc" },
    { label: "Most Popular", value: "popularity" },
    { label: "Title: A-Z", value: "title_asc" },
];

export default function SortDropdown({ currentSort, onSortChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const activeLabel = sortOptions.find(opt => opt.value === currentSort)?.label || "Newest First";

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors z-50"
            >
                <span className="text-gray-500 text-sm">Sort By:</span>

                <span className="flex items-center gap-2 text-indigo-600 font-medium">
                    {activeLabel}
                    <span className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.4443 7.50122L11.1501 12.7952C11.0282 12.9171 10.8835 13.0138 10.7243 13.0798C10.565 13.1457 10.3943 13.1797 10.222 13.1797C10.0496 13.1797 9.87891 13.1457 9.71966 13.0798C9.56041 13.0138 9.41571 12.9171 9.29384 12.7952L3.99984 7.50097"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </span>
            </button>

            {isOpen && (
                <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                    <div className="absolute right-0 mt-2 w-52 rounded-xl bg-white shadow-xl border border-gray-100 z-20 overflow-hidden">
                        {sortOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => {
                                    onSortChange(option.value);
                                    setIsOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-3 text-sm transition-colors ${currentSort === option.value
                                    ? "bg-indigo-50 text-indigo-700 font-semibold"
                                    : "text-gray-700 hover:bg-gray-50"
                                    }`}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}