import { AlertTriangle } from 'lucide-react';

export default function PriceSummary({ base = 0, extra = 0, onEnroll, canEnroll }) {
    const total = (Number(base) + Number(extra)).toFixed(2);

    return (
        <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400 font-medium">Total Price</span>
                <span className="text-4xl font-semibold text-gray-900">${Number(total).toFixed(0)}</span>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400 font-medium">Base Price</span>
                    <span className="text-gray-900 font-semibold">$ {Number(base).toFixed(0)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400 font-medium">Session Type</span>
                    <span className="text-gray-900 font-semibold">+ $ {Number(extra).toFixed(0)}</span>
                </div>
            </div>

            <button
                disabled={!canEnroll}
                onClick={onEnroll}
                className={`w-full py-4 rounded-2xl font-semibold mt-8 transition-colors ${!canEnroll
                    ? 'bg-[#EEEDFC] text-[#B7B3F4] cursor-not-allowed'
                    : 'bg-[#f0efff] text-[#5c52e5] hover:bg-[#e6e4ff]'
                    }`}
            >
                Enroll Now
            </button>
        </div>
    );
}