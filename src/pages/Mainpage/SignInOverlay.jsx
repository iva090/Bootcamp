import { Lock } from 'lucide-react';

export default function SignInOverlay() {
    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6 backdrop-blur-sm">
            <div className="card w-full max-w-[500px] p-12 bg-white rounded-3xl shadow-2xl border border-surface-100 flex flex-col items-center text-center">
                <div className="w-[110px] h-[110px] mb-8 rounded-full bg-[#f1f0ff] text-[#5d51e8] flex items-center justify-center">
                    <Lock className="w-[50px] h-[50px]" strokeWidth={2.5} />
                </div>
                <h2 className="text-xl font-bold text-surface-900 leading-tight mb-8">
                    Sign in to track your learning progress
                </h2>
                <button className="w-full max-w-[120px] px-8 py-3.5 rounded-2xl bg-[#5d51e8] text-white font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg">
                    Log In
                </button>
            </div>
        </div>
    );
}