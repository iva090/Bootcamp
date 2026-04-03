import { Link } from "react-router-dom";

export default function BrowseCourse() {
    return (
        <div className="flex items-center gap-3">
            <Link
                to="/login"
                className="px-6 py-2 text-indigo-600 border border-indigo-600 rounded-md font-medium hover:bg-indigo-50 transition-all"
            >
                Log In
            </Link>

            <Link
                to="/register"
                className="px-6 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 shadow-md transition-all"
            >
                Sign Up
            </Link>
        </div>
    )
}