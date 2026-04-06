import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function InputBox({
    label,
    type,
    name,
    value,
    formData,
    setFormData,
    placeholder,
    autocomplete,
    error
}) {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
        <div className="flex flex-col gap-1.5 w-full">
            <label className={`text-sm font-medium ${error ? "text-red-500" : "text-[#1A1A1A]"}`}>
                {label}*
            </label>

            <div className="relative">
                <input
                    type={inputType}
                    value={value}
                    autoComplete={autocomplete}
                    onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                    placeholder={placeholder}
                    className={`w-full border p-3 rounded-xl outline-none transition-all duration-200
                        ${error
                            ? "border-red-500 text-red-500 focus:border-red-500"
                            : "border-gray-300 text-gray-900 focus:border-[#5D51E8] focus:ring-1 focus:ring-[#5D51E8]"
                        } 
                        placeholder:text-gray-400 placeholder:font-light`}
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        {showPassword ? (
                            <Eye className={`w-5 h-5 ${error ? "text-red-500" : ""}`} />
                        ) : (
                            <EyeOff className={`w-5 h-5 ${error ? "text-red-500" : ""}`} />
                        )}
                    </button>
                )}
            </div>
            {error && (
                <span className="text-xs text-red-500 mt-0.5 ml-1 animate-fadeIn">
                    {error}
                </span>
            )}
        </div>
    );
}