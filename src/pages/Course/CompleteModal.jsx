import { useState } from "react";
import SuccessLogo from "../../assets/Complete_Modal.png"
import NotifModal from "../../components/notifModal";
import api from "../../features/axios"

export default function CompleteModal({ isOpen, onClose, courseName, courseId }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleDone = async () => {
        try {
            await api.post(`/courses/${courseId}/reviews`, {
                "rating": rating
            });
            window.location.reload();
        } catch (err) {
            window.location.reload();
        }
    }

    return (
        <NotifModal
            isOpen={isOpen}
            onClose={onClose}
            image={SuccessLogo}
            title="Congratulations!"
            subtitle={
                <>
                    You've completed <span className="font-semibold text-gray-900">"{courseName}"</span> Course!
                </>
            }
        >
            <div className="flex flex-col items-center">
                <p className="text-[#5D51E8] text-sm mb-3">Rate your experience</p>
                <div className="flex gap-2 mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            className="transition-transform active:scale-90"
                            onClick={() => setRating(star)}
                            onMouseEnter={() => setHover(star)}
                            onMouseLeave={() => setHover(0)}
                        >
                            <svg
                                className={`w-10 h-10 ${(hover || rating) >= star ? 'text-orange-400' : 'text-gray-200'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </button>
                    ))}
                </div>

                <button
                    onClick={handleDone}
                    className="w-full bg-[#5D51E8] text-white font-semibold py-3.5 rounded-xl hover:bg-[#4A3ED1] transition-all"
                >
                    Done
                </button>
            </div>
        </NotifModal>
    );
}