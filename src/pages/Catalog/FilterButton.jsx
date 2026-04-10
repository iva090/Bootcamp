export default function FilterButton({
    label,
    icon,
    image,
    isActive,
    onClick
}) {
    return (
        <button
            onClick={onClick}
            className={`
        group flex items-center gap-2 px-4 py-2 border border-none rounded-xl shadow-sm 
        font-medium transition-all duration-200 text-sm
        ${isActive
                    ? 'bg-[#f1f0ff] text-[#5d51e8] border-[#5d51e8]/50 shadow-md'
                    : 'bg-white text-gray-600 hover:bg-[#f1f0ff] hover:text-[#5d51e8] hover:border-[#5d51e8]/30 hover:shadow-md'
                }
      `}
        >
            {icon && (
                <span className={`transition-colors ${isActive ? 'text-[#5d51e8]' : 'text-gray-400 group-hover:text-[#5d51e8]'}`}>
                    {icon}
                </span>
            )}
            {image && (
                <img src={image} alt={label} className="w-6 h-6 rounded-md object-cover" />
            )}

            <span>{label}</span>
        </button>
    );
}