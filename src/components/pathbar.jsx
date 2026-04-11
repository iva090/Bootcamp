import { ChevronRight } from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom"

export default function PathBar({ courseName }) {
    const location = useLocation();
    const { id } = useParams();
    const isCatalog = location.pathname === '/catalog';
    const isCoursePage = location.pathname.startsWith('/course/');

    return (
        <div className="flex items-center">
            <Link to="/" className="text-bold text-gray-500 hover:underline">
                Home
            </Link>
            <ChevronRight className="w-5 h-6 mx-0.5 text-gray-500" strokeWidth={2} />
            <Link to="/catalog" className={`${isCatalog ? 'text-[#736BEA]' : 'text-gray-500'} hover:underline`}>
                Browse
            </Link>
            {isCoursePage && (
                <div className="flex items-center">
                    <ChevronRight className="w-5 h-6 mx-0.5 text-gray-500" strokeWidth={2} />
                    <Link className="text-bold text-gray-500 hover:underline" to={`/course/${id}`}>
                        <span className="text-[#736BEA]">
                            {courseName || "Development"}
                        </span>
                    </Link>
                </div>
            )}
        </div >
    )
}