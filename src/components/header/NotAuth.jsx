import { Link } from "react-router-dom";
import { useModal } from "../../hooks/useModal";
import { RegisterModal } from "../../features/auth/Registration/RegisterModal"

export default function BrowseCourse() {
    const login = useModal();
    const register = useModal();
    return (
        <div className="flex items-center gap-3">
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 shadow-md transition-all">
                Log In
            </button>

            <button
                onClick={register.openModal}
                className="px-6 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 shadow-md transition-all"
            >
                Sign Up
            </button>

            <RegisterModal isOpen={register.isOpen} onClose={register.closeModal} />
        </div>
    )
}