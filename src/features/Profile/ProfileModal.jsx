import Modal from "../../components/Modal";
import UserDefault from "../../assets/User.png"
import useAuthStore from "../../store/useAuthStore";

export default function ProfileModal({ isOpen, onClose }) {
    const user = useAuthStore((state) => state.user);
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                title="Logout"
                maxWidth="max-w-[320px]"
            >
                <img src={user?.avatar || UserDefault}
                    alt={user?.username || "Profile"}
                    className="w-full h-full object-cover rounded-full bg-gray-50" />
            </Modal>
        </div>
    )
}