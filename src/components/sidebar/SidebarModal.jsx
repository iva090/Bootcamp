import { useEffect, useState } from "react";
import api from "../../features/axios";
import SidebarNoContent from "./SidebarNoContent";
import SidebarContent from "./SidebarContent";

export default function SidebarModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    const [enrollments, setEnrollments] = useState([]);

    useEffect(() => {
        const fetchEnrollments = async () => {
            try {
                const response = await api.get('/enrollments');
                setEnrollments(response.data.data);
            } catch (err) {
                console.error(err)
            }
        }
        if (isOpen) fetchEnrollments();
    }, [isOpen])

    return (
        <>
            <div
                className="fixed inset-0 z-[998] bg-black/60"
                onClick={onClose}
            />

            <div className="fixed top-0 right-0 z-[999] h-full w-[794px] bg-white shadow-2xl flex flex-col">
                <div className="flex items-center justify-between p-8 pl-14 border-b border-gray-100">
                    <div>

                    </div>
                    <h2 className="text-4xl font-semibold text-gray-900">Enrolled Courses</h2>
                    <p
                        className="text-gray-800 transition-colors text-xl ml-auto"
                    >
                        Total Enrollments {enrollments.length}
                    </p>
                </div>
                {enrollments.length > 0 ?
                    <SidebarContent enrollments={enrollments} /> : <SidebarNoContent closeModal={() => onClose()} />}
            </div>
        </>
    );
}