export default function NotifModal({ isOpen, onClose, title, image, subtitle, children, maxWidth = "max-w-[380px]" }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 transition-opacity"
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
                {image &&
                    <div className="w-full flex items-center justify-center p-6 text-center">
                        <img src={image} alt={title} className="w-20 h-20 rounded-t-lg" />
                    </div>}
                {(title || subtitle) && (
                    <div className="text-center mb-6">
                        {title && <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>}
                        {subtitle && <p className="pt-3 text-sm mt-1">{subtitle}</p>}
                    </div>
                )}
                {children}
            </div>
        </div>
    );
}