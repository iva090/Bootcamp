import Modal from "../../components/Modal";

export default function ProfileModal({ isOpen, onClose }) {
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                title="Logout"
                maxWidth="max-w-[320px]"
            >
                <p></p>
                <button className="bg-red-500 text-white w-full py-2 mt-4 rounded-lg">
                    Yes, Logout
                </button>
            </Modal>
        </div>
    )
}