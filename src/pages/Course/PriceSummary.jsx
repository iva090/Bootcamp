import { AlertTriangle } from 'lucide-react';

export default function PriceSummary({ base = 0, extra = 0, onEnroll, canEnroll }) {
    const total = (Number(base) + Number(extra)).toFixed(2);

    return (
        <div className="mt-8 pt-8 border-t border-gray-100">
            <div className="flex justify-between items-center mb-6">
                <span className="text-gray-400 font-medium">Total Price</span>
                <span className="text-4xl font-extrabold text-gray-900">${total}</span>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Base Price</span>
                    <span className="text-gray-900 font-bold">$ {Number(base).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Session Add-on</span>
                    <span className="text-gray-900 font-bold">+ $ {Number(extra).toFixed(2)}</span>
                </div>
            </div>

            <button
                disabled={!canEnroll}
                onClick={onEnroll}
                className={`w-full py-4 rounded-2xl font-bold mt-8 transition-colors ${!canEnroll
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-[#f0efff] text-[#5c52e5] hover:bg-[#e6e4ff]'
                    }`}
            >
                Enroll Now
            </button>

        </div>
    );
}