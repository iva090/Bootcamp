import { useState } from "react";
import { useRegister } from "../hooks/useRegister";
import InputBox from "../../../components/InputBox";
import AvatarUpload from "../../../components/registration/AvatarUpload";

const EmailStep = ({ onNext, formData, setFormData, apiError }) => (
    <div className="flex flex-col gap-4 animate-fadeIn">
        <InputBox
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            formData={formData}
            setFormData={setFormData}
            placeholder="you@example.com"
            error={apiError?.email}
        />
        <button
            disabled={!formData.email.includes('@', '.') || formData.email.length < 3}
            onClick={onNext}
            className="w-full bg-[#5D51E8] disabled:bg-gray-300 text-white font-semibold py-3 rounded-xl hover:bg-[#4A3ED1] transition-all mt-2"
        >
            Next
        </button>
    </div>
);

const PasswordStep = ({ onNext, formData, setFormData, apiError }) => {
    const isMatching = formData.password === formData.confirmPassword;
    const isValid = formData.password.length >= 3 && isMatching;

    return (
        <div className="flex flex-col gap-4 animate-fadeIn">
            <InputBox
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                formData={formData}
                setFormData={setFormData}
                placeholder="••••••••"
            />
            <InputBox
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                formData={formData}
                setFormData={setFormData}
                placeholder="••••••••"
                error={formData.confirmPassword && !isMatching ? "Passwords do not match" : null}
            />
            <button
                disabled={!isValid}
                onClick={onNext}
                className="w-full bg-[#5D51E8] disabled:bg-gray-300 text-white font-semibold py-3 rounded-xl hover:bg-[#4A3ED1] transition-all mt-2"
            >
                Continue
            </button>
        </div>
    );
};

const FinalStep = ({ onSubmit, formData, setFormData, isLoading, apiError }) => {
    const isValid = formData.username.length >= 3;

    return (
        <div className="flex flex-col gap-5 animate-fadeIn">
            <InputBox
                label="Username"
                type="text"
                name="username"
                value={formData.username}
                formData={formData}
                setFormData={setFormData}
                placeholder="johndoe123"
                error={apiError?.username}
            />

            <AvatarUpload />

            <button
                onClick={onSubmit}
                disabled={isLoading || !isValid}
                className="w-full bg-[#5D51E8] disabled:bg-gray-300 text-white font-bold py-3.5 rounded-xl hover:bg-[#4A3ED1] transition-all shadow-md active:scale-[0.98]"
            >
                {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Signing Up...
                    </span>
                ) : "Sign Up"}
            </button>
        </div>
    );
};

export const RegisterModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        avatar: null
    });

    const { submitRegistration, isLoading, error: apiError } = useRegister(() => {
        onClose();
    });

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-[448px] relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl">✕</button>

                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
                    <p className="text-gray-500 text-sm mt-1">Join and start learning today</p>
                </div>

                <div className="flex gap-2 mb-8">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className={`h-1.5 flex-1 rounded-full transition-colors ${step >= s ? 'bg-[#5D51E8]' : 'bg-gray-100'}`} />
                    ))}
                </div>

                {step === 1 && <EmailStep onNext={() => setStep(2)} formData={formData} setFormData={setFormData} apiError={apiError} />}
                {step === 2 && <PasswordStep onNext={() => setStep(3)} formData={formData} setFormData={setFormData} apiError={apiError} />}
                {step === 3 && <FinalStep onSubmit={() => submitRegistration(formData)} formData={formData} setFormData={setFormData} isLoading={isLoading} />}

                <div className="text-center text-sm text-gray-500 mt-6 pt-6 border-t border-gray-100">
                    Already have an account?
                    <button className="font-semibold text-[#5D51E8] ml-2 hover:underline">Log In</button>
                </div>
            </div>
        </div>
    );
};