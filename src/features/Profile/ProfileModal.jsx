import Modal from "../../components/Modal";
import UserDefault from "../../assets/User.png"
import useAuthStore from "../../store/useAuthStore";
import { useEffect, useState } from "react";
import InputBox from "../../components/InputBox";
import AvatarUpload from "../../components/registration/AvatarUpload";

export default function ProfileModal({ isOpen, onClose }) {
    const user = useAuthStore((state) => state.user.data.user);
    const isProfileFilled = useAuthStore((state) => state.isProfileFilled);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        age: ""
    });

    useEffect(() => {
        if (user) {
            setFormData({
                username: user.username || "",
                email: user.email || "",
                phone: user.phone || "+995 ",
                age: user.age || "29"
            });
        }
    }, [user, isOpen]);

    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                title="Profile"
                maxWidth="max-w-[480px]"
            >
                <div className="flex items-center gap-4 mb-8">
                    <div className="relative flex-shrink-0">
                        <div className="w-15 h-15 rounded-full overflow-hidden border border-gray-100 shadow-sm">
                            <img
                                src={user?.avatar || UserDefault}
                                className="w-full h-full object-cover"
                                alt="Profile"
                            />
                        </div>
                        <span className={`absolute bottom-0 right-1 w-5 h-5 bg-${isProfileFilled ? `green` : `yellow`}-500 border-3 border-white rounded-full shadow-sm`} />
                    </div>

                    <div className="text-left">
                        <h3 className="text-xl font-bold text-gray-900 leading-tight">
                            {user?.username || "Username"}
                        </h3>
                        <p className={`text-${isProfileFilled ? `green` : `red`}-500 text-xs mt-0.5`}>
                            Profile is {isProfileFilled ? "Complete" : "Incomplete"}
                        </p>
                    </div>
                </div>
                <form noValidate className="space-y-4 text-left">
                    <InputBox
                        label="Full Name"
                        name="fullName"
                        value={formData.fullName}
                        formData={formData}
                        setFormData={setFormData}
                        placeholder="Username"
                    />

                    <InputBox
                        label="Email"
                        name="email"
                        value={formData.email}
                        formData={formData}
                        setFormData={setFormData}
                        placeholder="Email@gmail.com"
                    />

                    <div className="flex gap-4">
                        <div className="flex-[3]">
                            <InputBox
                                label="Mobile Number"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                formData={formData}
                                setFormData={setFormData}
                                placeholder="+995 599209820"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="text-sm font-semibold text-gray-700 mb-1 block">Age</label>
                            <select
                                className="w-full p-2.5 border border-gray-200 rounded-xl bg-gray-50 text-gray-400 outline-none"
                                value={formData.age}
                                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                            >
                                <option value="29">29</option>
                            </select>
                        </div>
                    </div>

                    <AvatarUpload
                        onFileSelect={(file) => setFormData({ ...formData, avatar: file })}
                    />

                    <button
                        type="submit"
                        className="w-full bg-[#5D51E8] text-white font-bold py-3 rounded-xl mt-4 hover:bg-[#4A3ED1] transition-all"
                    >
                        Update Profile
                    </button>
                </form>
            </Modal>
        </div>
    )
}