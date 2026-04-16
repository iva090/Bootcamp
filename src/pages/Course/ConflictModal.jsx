import WarningIcon from "../../assets/Conflict_Icon.png"
import NotifModal from "../../components/notifModal";

export default function ConflictModal({ isOpen, onClose, onContinue, conflictInfo }) {
    return (
        <NotifModal
            isOpen={isOpen}
            onClose={onClose}
            title="Schedule Conflict"
            image={WarningIcon}
            subtitle={
                <>
                    You already have an enrollment with the same schedule.
                    {conflictInfo && (
                        <span className="font-semibold text-gray-900"> Are you sure you want to continue?</span>
                    )}
                </>
            }
        >
            <div className="flex gap-3 mt-1">
                <button
                    onClick={onClose}
                    className="w-full border border-gray-300 text-gray-700 font-semibold py-3.5 rounded-xl hover:bg-gray-50 transition-all"
                >
                    Cancel
                </button>
                <button
                    onClick={onContinue}
                    className="w-full bg-[#5D51E8] text-white font-semibold py-3.5 rounded-xl hover:bg-[#4A3ED1] transition-all"
                >
                    Continue Anyway
                </button>
            </div>
        </NotifModal>
    );
}