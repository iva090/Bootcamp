export default function InputBox({ label, type, name, value, formData, setFormData, placeholder }) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">{label}*</label>
            <input
                type={type}
                value={value}
                onChange={(e) => setFormData({ ...formData, [name]: e.target.value })}
                placeholder={placeholder}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#5D51E8] outline-none"
            />
        </div>
    )
}