import { useState } from "react";
import InputBox from "../../../components/InputBox";
import useAuthStore from "../../../store/useAuthStore";
import LogFooter from "./LogFooter";
import { useLogin } from "../hooks/useLogin";
import Modal from "../../../components/Modal";

export default function LoginModal({ isOpen, onClose }) {
    const login = useAuthStore((state) => state.login);
    const [formData, setFormData] = useState({ email: "", password: "" });

    const { submitLogin, isLoading, error: apiError } = useLogin((data) => {
        if (data) {
            login(data.user || data);
            if (data.token) localStorage.setItem('auth_token', data.token);
            onClose();
            setFormData({ email: "", password: "" });
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        submitLogin(formData);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Welcome Back"
            subtitle="Log in to continue your learning"
        >
            <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4">
                <InputBox
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    formData={formData}
                    setFormData={setFormData}
                    placeholder="you@example.com"
                    error={apiError?.email || (typeof apiError === 'string' ? apiError : null)}
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
        </Modal>
    );
}