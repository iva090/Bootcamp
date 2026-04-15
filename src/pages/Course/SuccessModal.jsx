import SuccessLogo from "../../assets/Success_Icon.png"
import NotifModal from "../../components/notifModal";

export default function SuccessModal({ isOpen, onClose, courseName }) {

    return (
        <NotifModal
            isOpen={isOpen}
            onClose={onClose}
            image={SuccessLogo}
            title="Enrollment Confirmed!"
            subtitle={<>You have successfully enrolled to the <span className="font-semibold text-gray-900">"{courseName}"</span> Course!</>}
        >
            <div>
                <button onClick={() => window.location.reload()} className="w-full bg-[#5D51E8] text-white font-semibold py-3.5 rounded-xl mt-1 hover:bg-[#4A3ED1] transition-all">Done</button>
            </div>
        </NotifModal>
    );
}