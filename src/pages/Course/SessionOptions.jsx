import { Monitor, Users, Link as LinkIcon, Lock } from 'lucide-react';

export default function SessionOptions({ opt, isSelected, onSelect }) {
    const isFull = opt.availableSeats <= 0;

    const getIcon = (name) => {
        if (isFull) return <Lock size={18} className="text-red-400" />;
        const lowerName = name.toLowerCase();
        if (lowerName.includes('online')) return <Monitor size={18} />;
        if (lowerName.includes('person') || lowerName.includes('hybrid')) return <Users size={18} />;
        return <LinkIcon size={18} />;
    };

    return (
        <div className="flex flex-col">
            <button
                disabled={isFull}
                onClick={() => onSelect(opt.id)}
                className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all h-[120px] justify-center 
                    ${isSelected ? 'border-[#5c52e5] bg-blue-50/30' : 'border-gray-100'} 
                    ${isFull ? 'opacity-50 cursor-not-allowed bg-gray-50' : 'hover:border-blue-200'}`}
            >
                <div className={isSelected ? 'text-[#5c52e5]' : 'text-gray-400'}>
                    {getIcon(opt.name)}
                </div>

                <span className="text-sm font-bold mt-2 text-gray-800 capitalize">
                    {(opt.name || "").replace(/_/g, ' ')}
                </span>

                <span className="text-[10px] text-gray-400 text-center mt-1 capitalize">
                    {(opt.location || "Online").replace(/_/g, ' ')}
                </span>

                <span className="text-[10px] font-bold mt-2 text-blue-500">
                    {Number(opt.additionalPrice) === 0
                        ? 'Included'
                        : `+ $${Number(opt.additionalPrice).toFixed(2)}`}
                </span>
            </button>

            <p className={`text-[9px] mt-2 text-center font-medium ${isFull ? 'text-red-500' : 'text-gray-400'}`}>
                {isFull ? 'Fully Booked' : `${opt.availableSeats} Seats Left`}
            </p>
        </div>
    );
}