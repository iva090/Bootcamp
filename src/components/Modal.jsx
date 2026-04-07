export default function Modal({ isOpen, onClose, title, subtitle, children, maxWidth = "max-w-[448px]" }) {
    if (!isOpen) return null;

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 transition-opacity"
            onClick={handleBackdropClick}
        >
            <div
                className={`bg-white p-8 rounded-2xl shadow-2xl w-full ${maxWidth} relative animate-fadeIn`}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors text-xl"
                >
                    ✕
                </button>

                {(title || subtitle) && (
                    <div className="text-center mb-6">
                        {title && <h2 className="text-2xl font-bold text-gray-900">{title}</h2>}
                        {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
                    </div>
                )}

                {children}
            </div>
        </div>
    );
}