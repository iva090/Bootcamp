import Modal from "../../components/Modal";

export default function SuccessModal({ isOpen, onClose, courseName }) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Enrollment Successful!"
            subtitle={`You have successfully registered to the ${courseName} Course!`}
        >
            <div>

            </div>
        </Modal>
    );
}