import { useState } from "react";
import { useRegister } from "../hooks/useRegister";

const EmailStep = ({ onNext, formData, setFormData }) => (
    <div className="flex flex-col gap-4 animate-fadeIn">
        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Email*</label>
            <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#5D51E8] outline-none"
            />
        </div>
        <button
            disabled={!formData.email.includes('@')}
            onClick={onNext}
            className="w-full bg-[#5D51E8] disabled:bg-gray-300 text-white font-semibold py-3 rounded-xl hover:bg-[#4A3ED1] transition-all mt-2"
        >
            Next
        </button>
    </div>
);

const PasswordStep = ({ onNext, formData, setFormData }) => (
    <div className="flex flex-col gap-4 animate-fadeIn">
        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Username*</label>
            <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                placeholder="johndoe123"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#5D51E8] outline-none"
            />
        </div>
        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">Password*</label>
            <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#5D51E8] outline-none"
            />
        </div>
        <button
            disabled={formData.password.length < 6 || !formData.username}
            onClick={onNext}
            className="w-full bg-[#5D51E8] disabled:bg-gray-300 text-white font-semibold py-3 rounded-xl hover:bg-[#4A3ED1] transition-all mt-2"
        >
            Continue
        </button>
    </div>
);

const FinalStep = ({ onSubmit, formData, setFormData, isLoading }) => (
    <div className="flex flex-col gap-4 text-center animate-fadeIn">
        <div className="flex flex-col items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-dashed border-gray-300">
                {formData.avatar ? (
                    <img src={formData.avatar} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                    <span className="text-gray-400 text-xs">No Photo</span>
                )}
            </div>
            <button className="text-[#5D51E8] text-sm font-medium hover:underline">
                Upload Profile Picture
            </button>
        </div>

        <p className="text-sm text-gray-600 px-4">
            By clicking "Complete Registration", you agree to our Terms and Conditions.
        </p>

        <button
            onClick={onSubmit}
            disabled={isLoading}
            className="w-full bg-[#5D51E8] text-white font-semibold py-3 rounded-xl hover:bg-[#4A3ED1] transition-all flex items-center justify-center"
        >
            {isLoading ? "Creating Account..." : "Complete Registration"}
        </button>
    </div>
);

export const RegisterModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ email: '', password: '', name: '', avatar: '' });
    const { submitRegistration, isLoading, error } = useRegister(() => {
        onClose();
    })

    if (!isOpen) return null;

    const nextStep = () => setStep((prev) => prev + 1);


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-[448px] relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">✕</button>

                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
                    <p className="text-gray-500 mt-1">Join and start learning today</p>
                </div>

                <div className="flex gap-2 mb-8">
                    <div className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-[#5D51E8]' : 'bg-gray-100'}`} />
                    <div className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-[#5D51E8]' : 'bg-gray-100'}`} />
                    <div className={`h-2 flex-1 rounded-full ${step >= 3 ? 'bg-[#5D51E8]' : 'bg-gray-100'}`} />
                </div>

                {step === 1 && <EmailStep onNext={nextStep} formData={formData} setFormData={setFormData} />}
                {step === 2 && <PasswordStep onNext={nextStep} formData={formData} setFormData={setFormData} />}
                {step === 3 && <FinalStep onSubmit={() => submitRegistration(formData)} formData={formData} onClose={onClose} />}
                <div className="relative flex justify-center mt-2">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>

                    <div className="relative flex justify-center">
                        <span className="bg-white px-2 text-md text-gray-500">or</span>
                    </div>
                </div>

                <div className="text-center text-sm text-gray-500 mt-5">
                    Already have an account?
                    <button onClick={() => {

                    }} className="font-semibold underline text-gray-900 ml-3">Log  In</button>
                </div>
            </div>
        </div>
    );
};