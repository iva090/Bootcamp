import { useState } from "react";
import InputBox from "../../../components/InputBox";
import useAuthStore from "../../../store/useAuthStore";
import LogFooter from "./LogFooter";
import { useLogin } from "../hooks/useLogin";

export default function LoginModal({ isOpen, onClose }) {
    const login = useAuthStore((state) => state.login);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { submitLogin, isLoading, error: apiError } = useLogin((data) => {
        if (data?.user) {
            login(data.user);
            if (data.token) localStorage.setItem('auth_token', data.token);
        }
        onClose();
        setFormData({ email: "", password: "" });
    });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        submitLogin(formData);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-[448px] relative animate-fadeIn">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
                >
                    ✕
                </button>

                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
                    <p className="text-gray-500 text-sm mt-1">Log in to continue your learning</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <InputBox
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        formData={formData}
                        setFormData={setFormData}
                        placeholder="you@example.com"
                        error={apiError?.email || apiError?.message}
                    />
                    <InputBox
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        formData={formData}
                        setFormData={setFormData}
                        placeholder="••••••••"
                        error={apiError?.password}
                    />

                    <button
                        type="submit"
                        disabled={isLoading || !formData.email || !formData.password}
                        className="w-full mt-2 bg-[#5D51E8] disabled:bg-gray-300 text-white font-semibold py-3 rounded-xl hover:bg-[#4A3ED1] transition-all shadow-md active:scale-[0.98]"
                    >
                        {isLoading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <LogFooter onRegisterClick={onClose} />
            </div>
        </div>
    );
}