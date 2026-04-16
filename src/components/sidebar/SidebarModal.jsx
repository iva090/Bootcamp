export default function SidebarModal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 z-[998] bg-black/60"
                onClick={onClose}
            />

            <div className="fixed top-0 right-0 z-[999] h-full w-[794px] bg-white shadow-2xl flex flex-col">
                <div className="flex items-center justify-between p-8 pl-14 border-b border-gray-100">
                    {title && <h2 className="text-4xl font-semibold text-gray-900">{title}</h2>}
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors text-xl ml-auto"
                    >
                        ✕
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    {children}
                </div>
            </div>
        </>
    );
}