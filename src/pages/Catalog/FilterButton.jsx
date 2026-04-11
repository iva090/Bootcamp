export default function FilterButton({
    label,
    icon,
    image,
    active,
    onClick
}) {
    return (
        <button
            onClick={onClick}
            className={`
        group flex items-center gap-2 px-4 py-2 border border-${active ? '1' : 'none'} rounded-xl shadow-sm 
        font-medium transition-all duration-200 text-sm
        ${active
                    ? 'bg-[#f1f0ff] text-[#5d51e8] border-[#5d51e8]/50 shadow-md'
                    : 'bg-white text-gray-600 hover:bg-[#dddbfa] hover:text-[#362dd5] hover:border-[#5d51e8]/30 hover:shadow-md'
                }
      `}
        >
            {icon && (
                <span className={`transition-colors ${active ? 'text-[#5d51e8]' : 'text-gray-600 font-bold group-hover:text-[#281ed2]'}`}>
                    {icon}
                </span>
            )}
            {image && (
                <img src={image} alt={label} className="w-6 h-6 rounded-md object-cover" />
            )}

            <span className="font-semibold">{label}</span>
        </button>
    );
}