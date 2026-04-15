import { ChevronDown, ChevronUp } from 'lucide-react';

export default function EnrollmentSection({ id, title, isOpen, onOpen, isCompleted, isDisabled, children, isSelected }) {
    return (
        <div className={`mb-4 ${id !== 1 ? 'border-t border-gray-50 pt-2' : ''}`}>
            <button
                disabled={isDisabled}
                onClick={onOpen}
                className={`w-full flex justify-between items-center py-2 ${isDisabled ? 'opacity-40' : ''}`}
            >
                <span className={`flex items-center gap-3 text-xl font-semibold ${isCompleted ? 'text-green-500' : 'text-[#130E67]'}`}>
                    <span className={`w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs ${isSelected ? 'bg-[#130E67] text-white' : 'bg-white text-[#130E67]'}`}>{id}</span>
                    {title}
                </span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isOpen && <div className="mt-4">{children}</div>}
        </div>
    );
}