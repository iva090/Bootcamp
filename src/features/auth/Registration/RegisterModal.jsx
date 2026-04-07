import { useState } from "react";
import { useRegister } from "../hooks/useRegister";
import InputBox from "../../../components/InputBox";
import AvatarUpload from "../../../components/registration/AvatarUpload";
import RegFooter from "./RegFooter";
import useAuthStore from "../../../store/useAuthStore";

const EmailStep = ({ onNext, formData, setFormData, apiError }) => {
    const [localError, setLocalError] = useState("");

    const validate = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) return "Email is required";
        if (!emailRegex.test(formData.email)) return "Please enter a valid email address";
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const error = validate();
        if (error) setLocalError(error);
        else {
            setLocalError("");
            onNext();
        }
    };

    return (
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4 animate-fadeIn">
            <InputBox
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                formData={formData}
                setFormData={setFormData}
                placeholder="you@example.com"
                error={apiError?.email || localError}
            />
            <button type="submit" className="w-full bg-[#5D51E8] text-white font-semibold py-3 rounded-xl hover:bg-[#4A3ED1] transition-all mt-2">
                Next
            </button>
        </form>
    );
};

const PasswordStep = ({ onNext, formData, setFormData }) => {
    const [errors, setErrors] = useState({});
    const isMatching = formData.password === formData.confirmPassword;

    const validate = () => {
        let newErrors = {};
        if (formData.password.length < 3) newErrors.password = "Password must be at least 3 characters";
        if (!formData.confirmPassword) newErrors.confirmPassword = "Please confirm your password";
        else if (!isMatching) newErrors.confirmPassword = "Passwords do not match";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const findErrors = validate();
        if (Object.keys(findErrors).length > 0) {
            setErrors(findErrors);
        } else {
            setErrors({});
            onNext();
        }
    };

    return (
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4 animate-fadeIn">
            <InputBox
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                formData={formData}
                setFormData={setFormData}
                autocomplete="new-password"
                placeholder="••••••••"
                error={errors.password}
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
                error={errors.confirmPassword}
            />
            <button
                type="submit"
                className="w-full bg-[#5D51E8] text-white font-semibold py-3 rounded-xl hover:bg-[#4A3ED1] transition-all mt-2"
            >
                Continue
            </button>
        </form>
    );
};

const FinalStep = ({ onSubmit, formData, setFormData, isLoading, apiError }) => {
    const [localError, setLocalError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.username.length < 3) {
            setLocalError("Username must be at least 3 characters");
        } else {
            setLocalError("");
            onSubmit();
        }
    };

    return (
        <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5 animate-fadeIn">
            <InputBox
                label="Username"
                type="text"
                name="username"
                value={formData.username}
                formData={formData}
                setFormData={setFormData}
                placeholder="Username"
                error={apiError?.username || localError}
            />

            <AvatarUpload
                onFileSelect={(file) => setFormData({ ...formData, avatar: file })}
                error={apiError?.avatar}
            />

            <button
                disabled={isLoading}
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
        if (responseData) {
            login(responseData.user);
            onClose();
            setTimeout(() => {
                setStep(1);
                setFormData({ email: '', username: '', password: '', confirmPassword: '', avatar: null });
            }, 300);
        }
    });

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
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Create Account"
            subtitle="Join and start learning today"
        >
            <div className="flex gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                    <div
                        key={s}
                        className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${step >= s ? 'bg-[#5D51E8]' : 'bg-gray-100'
                            }`}
                    />
                ))}
            </div>

            {step === 1 && (
                <EmailStep
                    onNext={() => setStep(2)}
                    formData={formData}
                    setFormData={setFormData}
                    apiError={apiError}
                />
            )}
            {step === 2 && (
                <PasswordStep
                    onNext={() => setStep(3)}
                    formData={formData}
                    setFormData={setFormData}
                />
            )}
            {step === 3 && (
                <FinalStep
                    onSubmit={handleFinalSubmit}
                    formData={formData}
                    setFormData={setFormData}
                    isLoading={isLoading}
                    apiError={apiError}
                />
            )}

            <RegFooter onLoginClick={onClose} />
        </Modal>
    );
};