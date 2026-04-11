import LoginModal from "../../features/auth/Login/LoginModal";
import ProfileModal from "../../features/Profile/ProfileModal";
import { useModal } from "../../hooks/useModal";
import useAuthStore from "../../store/useAuthStore"

export default function Authorization() {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const isProfileFilled = useAuthStore((state) => state.isProfileFilled);
    const login = useModal();
    const profile = useModal();

    if (!isLoggedIn) {
        return (
            <div className="bg-[F8FAFC] rounded-2xl p-4 border border-gray-100 flex items-center justify-between shadow-sm">
                <div className="flex-1">
                    <div className="flex items-center gap-2 ">
                        <svg
                            className="w-6 h-6 mt-0.5 text-[#F4A316]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <h4 className="text-lg font-semibold text-[#2D333A]">Authentication Required</h4>
                    </div>
                    <p className="text-sm mt-2 text-[#6C757F]">
                        You need sign in to your profile before enrolling in this course.
                    </p>
                </div>

                <button onClick={login.openModal} className="flex items-center p-3 gap-1.5 bg-[#EEECFF] border border-[#b7b3f4] rounded-lg text-[#3325F3] font-medium transition-colors hover:bg-[#E3E0FF]">
                    Sign In
                    <svg className="mt-0.5" width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8538 8.35403L9.35375 12.854C9.25993 12.9478 9.13268 13.0006 9 13.0006C8.86732 13.0006 8.74007 12.9478 8.64625 12.854C8.55243 12.7602 8.49972 12.633 8.49972 12.5003C8.49972 12.3676 8.55243 12.2403 8.64625 12.1465L12.2931 8.50028H2.5C2.36739 8.50028 2.24021 8.4476 2.14645 8.35383C2.05268 8.26006 2 8.13289 2 8.00028C2 7.86767 2.05268 7.74049 2.14645 7.64672C2.24021 7.55296 2.36739 7.50028 2.5 7.50028H12.2931L8.64625 3.85403C8.55243 3.76021 8.49972 3.63296 8.49972 3.50028C8.49972 3.3676 8.55243 3.24035 8.64625 3.14653C8.74007 3.05271 8.86732 3 9 3C9.13268 3 9.25993 3.05271 9.35375 3.14653L13.8538 7.64653C13.9002 7.69296 13.9371 7.74811 13.9623 7.80881C13.9874 7.86951 14.0004 7.93457 14.0004 8.00028C14.0004 8.06599 13.9874 8.13105 13.9623 8.19175C13.9371 8.25245 13.9002 8.30759 13.8538 8.35403Z" fill="currentColor" />
                    </svg>
                </button>
                <LoginModal isOpen={login.isOpen} onClose={login.closeModal} />
            </div>

        );
    }

    if (isLoggedIn && !isProfileFilled) {
        return (
            <div className="bg-[F8FAFC] rounded-2xl gap-1 p-4 border border-gray-100 flex items-center justify-between shadow-sm">
                <div className="flex-1">
                    <div className="flex items-center gap-2 ">
                        <svg
                            className="w-6 h-6 mt-0.5 text-[#F4A316]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <h4 className="text-lg font-semibold text-[#2D333A]">Complete Your Profile</h4>
                    </div>
                    <p className="text-sm mt-2 text-[#6C757F]">
                        You need to fill in your profile details before enrolling in this course.
                    </p>
                </div>

                <button onClick={profile.openModal} className="flex items-center p-3 gap-1.5 bg-[#EEECFF] border border-[#b7b3f4] rounded-lg text-[#3325F3] font-medium transition-colors hover:bg-[#E3E0FF]">
                    Complete
                    <svg className="mt-0.5" width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8538 8.35403L9.35375 12.854C9.25993 12.9478 9.13268 13.0006 9 13.0006C8.86732 13.0006 8.74007 12.9478 8.64625 12.854C8.55243 12.7602 8.49972 12.633 8.49972 12.5003C8.49972 12.3676 8.55243 12.2403 8.64625 12.1465L12.2931 8.50028H2.5C2.36739 8.50028 2.24021 8.4476 2.14645 8.35383C2.05268 8.26006 2 8.13289 2 8.00028C2 7.86767 2.05268 7.74049 2.14645 7.64672C2.24021 7.55296 2.36739 7.50028 2.5 7.50028H12.2931L8.64625 3.85403C8.55243 3.76021 8.49972 3.63296 8.49972 3.50028C8.49972 3.3676 8.55243 3.24035 8.64625 3.14653C8.74007 3.05271 8.86732 3 9 3C9.13268 3 9.25993 3.05271 9.35375 3.14653L13.8538 7.64653C13.9002 7.69296 13.9371 7.74811 13.9623 7.80881C13.9874 7.86951 14.0004 7.93457 14.0004 8.00028C14.0004 8.06599 13.9874 8.13105 13.9623 8.19175C13.9371 8.25245 13.9002 8.30759 13.8538 8.35403Z" fill="currentColor" />
                    </svg>
                </button>
                <ProfileModal isOpen={profile.isOpen} onClose={profile.closeModal} />
            </div>
        );
    }
}