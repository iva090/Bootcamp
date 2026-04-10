import { useModal } from "../../hooks/useModal";
import Lock from '../../assets/Lock.png';
import LoginModal from '../../features/auth/Login/LoginModal';

export default function SignInOverlay() {
    const login = useModal();
    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-6">
            <div className="card w-full max-w-[420px] p-6 bg-white rounded-3xl shadow-md border border-gray-300 flex flex-col items-center text-center">
                <div className="mb-8  text-[#5d51e8] flex items-center justify-center">
                    <img src={Lock} alt="lockimg" className='w-[70px] h-[70px]' />
                </div>
                <h2 className="text-xl font-medium text-surface-900 leading-tight mb-8">
                    Sign in to track your learning progress
                </h2>
                <button
                    onClick={login.openModal}
                    className="w-full max-w-[100px] py-2.5 rounded-lg bg-[#5d51e8] text-white text-lg hover:bg-indigo-700 transition-colors shadow-lg cursor-pointer">
                    Log In
                </button>
            </div>
            <LoginModal isOpen={login.isOpen} onClose={login.closeModal} />
        </div>
    );
}