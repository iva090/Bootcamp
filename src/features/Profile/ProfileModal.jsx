import Modal from "../../components/Modal";
import UserDefault from "../../assets/User.png"
import useAuthStore from "../../store/useAuthStore";
import { useEffect, useState } from "react";
import InputBox from "../../components/InputBox";
import AvatarUpload from "../../components/registration/AvatarUpload";
import { useUpdateProfile } from "../auth/hooks/useUpdateProfile";

const validateProfile = (values) => {
    const errors = {};

    if (!values.fullName) {
        errors.fullName = "Name is required";
    } else if (values.fullName.length < 3) {
        errors.fullName = "Name must be at least 3 characters";
    } else if (values.fullName.length > 50) {
        errors.fullName = "Name must not exceed 50 characters";
    }

    const rawPhone = values.mobileNumber.replace(/\s/g, "");
    if (!rawPhone) {
        errors.mobileNumber = "Mobile number is required";
    } else if (!/^5/.test(rawPhone)) {
        errors.mobileNumber = "Georgian mobile numbers must start with 5";
    } else if (!/^\d+$/.test(rawPhone)) {
        errors.mobileNumber = "Mobile number must contain only digits";
    } else if (rawPhone.length !== 9) {
        errors.mobileNumber = "Mobile number must be exactly 9 digits";
    }

    const ageNum = Number(values.age);
    if (!values.age) {
        errors.age = "Age is required";
    } else if (isNaN(ageNum)) {
        errors.age = "Age must be a number";
    } else if (ageNum < 16) {
        errors.age = "You must be at least 16 years old to enroll";
    } else if (ageNum > 120) {
        errors.age = "Please enter a valid age";
    }

    return errors;
};

export default function ProfileModal({ isOpen, onClose }) {
    const user = useAuthStore((state) => state.user);
    const isProfileFilled = useAuthStore((state) => state.isProfileFilled);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobileNumber: "",
        age: ""
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const { submitUpdate, error: apiError } = useUpdateProfile(() => {
        onClose();
    })

    useEffect(() => {
        if (user && isOpen) {
            setFormData({
                fullName: user.fullName || "",
                email: user.email || "",
                mobileNumber: user.mobileNumber || "",
                age: user.age || ""
            });
            setErrors({});
            setTouched({});
        }
    }, [user, isOpen]);

    const handleBlur = (field) => {
        setTouched(prev => ({ ...prev, [field]: true }));
        const validationErrors = validateProfile(formData);
        setErrors(validationErrors);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateProfile(formData);
        if (Object.keys(validationErrors).length === 0) {
            await submitUpdate({ ...formData, age: Number(formData.age) });
        } else {
            setErrors(validationErrors);
            setTouched({ fullName: true, mobileNumber: true, age: true });
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Profile"
            maxWidth="max-w-[480px]"
        >
            <div className="flex items-center gap-4 mb-8">
                <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-100 shadow-sm">
                        <img
                            src={user?.avatar || UserDefault}
                            className="w-full h-full object-cover"
                            alt="Profile"
                        />
                    </div>
                    <span className={`absolute bottom-1 right-0 w-5 h-5 ${isProfileFilled ? 'bg-green-500' : 'bg-yellow-400'} border-3 border-white rounded-full shadow-sm`} />
                </div>

                <div className="text-left">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        {user?.fullName || user?.username}
                    </h3>
                    <p className={`${isProfileFilled ? 'text-green-500' : 'text-yellow-500'} text-xs mt-0.5 font-medium`}>
                        Profile is {isProfileFilled ? "Complete ✓" : "Incomplete"}
                    </p>
                </div>
            </div>

            <form noValidate onSubmit={handleSubmit} className="space-y-4 text-left">
                {typeof apiError === 'string' && (
                    <p className="text-red-500 text-xs bg-red-50 p-2 rounded-lg">{apiError}</p>
                )}

                <InputBox
                    label="Full Name"
                    type="username"
                    name="fullName"
                    value={formData.fullName}
                    formData={formData}
                    setFormData={setFormData}
                    onBlur={() => handleBlur("fullName")}
                    error={touched.fullName && errors.fullName}
                    placeholder={user?.fullName || "Enter full name"}
                />

                <div>
                    <InputBox
                        label="Email"
                        name="email"
                        value={formData.email}
                        formData={formData}
                        setFormData={setFormData}
                        disabledUsername={true}
                    />
                </div>

                <div className="flex gap-4">
                    <div className="flex-[3]">
                        <InputBox
                            label="Mobile Number"
                            className
                            name="mobileNumber"
                            prefix="+995" // Added this
                            value={formData.mobileNumber}
                            formData={formData}
                            setFormData={setFormData}
                            onBlur={() => handleBlur("mobileNumber")}
                            error={touched.mobileNumber && errors.mobileNumber}
                            placeholder="5XXXXXXXX"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="text-sm font-semibold text-gray-700 mb-1 block">Age *</label>
                        <input
                            type="number"
                            className={`w-full p-2.5 border ${touched.age && errors.age ? 'border-red-500' : 'border-gray-200'} rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                            value={formData.age}
                            onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                            onBlur={() => handleBlur("age")}
                        />
                        {touched.age && errors.age && <p className="text-red-500 text-[10px] mt-1">{errors.age}</p>}
                    </div>
                </div>

                <AvatarUpload onFileSelect={(file) => setFormData(prev => ({ ...prev, avatar: file }))} />

                <button type="submit" className="w-full bg-[#5D51E8] text-white font-bold py-3.5 rounded-xl mt-4 hover:bg-[#4A3ED1] transition-all">
                    Update Profile
                </button>
            </form>
        </Modal>
    );
}