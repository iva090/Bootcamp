import { useState } from "react";
import { useRegister } from "../hooks/useRegister";
import InputBox from "../../../components/InputBox";
import AvatarUpload from "../../../components/registration/AvatarUpload";
import RegFooter from "./RegFooter";
import useAuthStore from "../../../store/useAuthStore";

const EmailStep = ({ onNext, formData, setFormData, apiError }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 animate-fadeIn">
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
                disabled={!formData.email.includes('@') || !formData.email.includes('.') || formData.email.length < 3}
                type="submit"
                className="w-full bg-[#5D51E8] disabled:bg-gray-300 text-white font-semibold py-3 rounded-xl hover:bg-[#4A3ED1] transition-all mt-2"
            >
                Next
            </button>
        </form>
    );
};

const PasswordStep = ({ onNext, formData, setFormData }) => {
    const isMatching = formData.password === formData.confirmPassword;
    const isValid = formData.password.length >= 3 && isMatching;

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 animate-fadeIn">
            <InputBox
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                formData={formData}
                setFormData={setFormData}
                autocomplete="new-password"
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
                autocomplete="new-password"
                error={formData.confirmPassword && !isMatching ? "Passwords do not match" : null}
            />
            <button
                disabled={!isValid}
                type="submit"
                className="w-full bg-[#5D51E8] disabled:bg-gray-300 text-white font-semibold py-3 rounded-xl hover:bg-[#4A3ED1] transition-all mt-2"
            >
                Continue
            </button>
        </form>
    );
};

const FinalStep = ({ onSubmit, formData, setFormData, isLoading, apiError }) => {
    const isValid = formData.username.length >= 3;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 animate-fadeIn">
            <InputBox
                label="Username"
                type="text"
                name="username"
                value={formData.username}
                formData={formData}
                setFormData={setFormData}
                placeholder="Username"
                error={apiError?.username}
            />

            <AvatarUpload
                onFileSelect={(file) => setFormData({ ...formData, avatar: file })}
                error={apiError?.avatar}
            />

            <button
                disabled={isLoading || !isValid}
                type="submit"
                className="w-full bg-[#5D51E8] disabled:bg-gray-300 text-white font-bold py-3.5 rounded-xl hover:bg-[#4A3ED1] transition-all shadow-md active:scale-[0.98]"
            >
                {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
        </form>
    );
};

export const RegisterModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const login = useAuthStore((state) => state.login);


    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        avatar: null
    });

    const { submitRegistration, isLoading, error: apiError } = useRegister((responseData) => {
        if (responseData?.user) {
            login(responseData.user);
        }

        onClose();

        setTimeout(() => {
            setStep(1);
            setFormData({
                email: '',
                username: '',
                password: '',
                confirmPassword: '',
                avatar: null
            });
        }, 300);
    });

    if (!isOpen) return null;

    const handleFinalSubmit = () => {
        const data = new FormData();
        data.append('email', formData.email);
        data.append('username', formData.username);
        data.append('password', formData.password);
        data.append('password_confirmation', formData.confirmPassword);
        if (formData.avatar) data.append('avatar', formData.avatar);

        submitRegistration(data);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 ">
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
                {step === 2 && <PasswordStep onNext={() => setStep(3)} formData={formData} setFormData={setFormData} />}
                {step === 3 && (
                    <FinalStep
                        onSubmit={handleFinalSubmit}
                        formData={formData}
                        setFormData={setFormData}
                        isLoading={isLoading}
                        apiError={apiError}
                    />
                )}
                <RegFooter />
            </div>
        </div>
    );
};