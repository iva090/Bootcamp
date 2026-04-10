import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom"

export default function PathBar() {
    const location = useLocation();

    const isCatalog = location.pathname === '/catalog';

    return (
        <div className="flex items-center">
            <Link to="/" className="text-bold text-gray-500 hover:underline">
                Home
            </Link>
            <ChevronRight className="w-5 h-6 mx-0.5 text-gray-500" strokeWidth={2} />
            <Link to="/catalog" className={`${isCatalog ? 'text-[#736BEA]' : 'text-gray-500'} hover:underline`}>
                Browse
            </Link>
        </div >
    )
}