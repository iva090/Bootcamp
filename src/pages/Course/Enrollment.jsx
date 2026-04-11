import { ChevronDown, ChevronUp, Monitor, Users, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';
import useAuthStore from '../../store/useAuthStore';

export default function Enrollment({ basePrice = 299 }) {
    const [openSection, setOpenSection] = useState(1);
    const [selectedSession, setSelectedSession] = useState('online');
    const isProfileFilled = useAuthStore((state) => state.isProfileFilled);

    const sessionOptions = [
        { id: 'online', icon: <Monitor size={18} />, title: 'Online', desc: 'Google Meet', price: 0, status: '50 Seats Available', badge: 'Included' },
        { id: 'person', icon: <Users size={18} />, title: 'In-Person', desc: 'Chavchavadze St. 34', price: 30, status: 'Only 3 Seats Remaining', warning: true },
        { id: 'hybrid', icon: <LinkIcon size={18} />, title: 'Hybrid', desc: 'Chavchavadze St. 34', price: 50, status: '130 Seats Available' }
    ];

    const currentExtra = sessionOptions.find(s => s.id === selectedSession)?.price || 0;

    return (
        <div className="flex flex-col gap-6 w-full ">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-50">
                <div className="mb-4">
                    <button
                        onClick={() => setOpenSection(openSection === 1 ? null : 1)}
                        className="w-full flex justify-between items-center py-2"
                    >
                        <span className="flex items-center gap-3 font-bold text-[#5c52e5]">
                            <span className="w-6 h-6 rounded-full border-2 border-[#5c52e5] flex items-center justify-center text-xs">1</span>
                            Session Type
                        </span>
                        {openSection === 1 ? <ChevronUp size={20} className="text-[#5c52e5]" /> : <ChevronDown size={20} className="text-gray-400" />}
                    </button>

                    {openSection === 1 && (
                        <div className="grid grid-cols-3 gap-3 mt-4">
                            {sessionOptions.map((opt) => (
                                <div key={opt.id} className="flex flex-col">
                                    <button
                                        onClick={() => setSelectedSession(opt.id)}
                                        className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all h-[120px] justify-center ${selectedSession === opt.id ? 'border-[#5c52e5] bg-white' : 'border-gray-100 bg-white'
                                            }`}
                                    >
                                        <div className={`${selectedSession === opt.id ? 'text-[#5c52e5]' : 'text-gray-400'}`}>{opt.icon}</div>
                                        <span className="text-sm font-bold mt-2 text-gray-800">{opt.title}</span>
                                        <span className="text-[10px] text-gray-400 text-center leading-tight mt-1">{opt.desc}</span>
                                        <span className={`text-[10px] font-bold mt-2 ${opt.id === 'online' ? 'text-[#5c52e5]' : 'text-blue-500'}`}>
                                            {opt.badge ? opt.badge : `+ $${opt.price}`}
                                        </span>
                                    </button>
                                    <p className={`text-[9px] mt-2 text-center font-medium ${opt.warning ? 'text-orange-400' : 'text-gray-400'}`}>
                                        {opt.warning && <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.3499 16.164L12.8347 3.11271C12.6469 2.79296 12.3788 2.52784 12.057 2.34362C11.7352 2.15941 11.3708 2.0625 10.9999 2.0625C10.6291 2.0625 10.2647 2.15941 9.94291 2.34362C9.62108 2.52784 9.35298 2.79296 9.16518 3.11271L1.64995 16.164C1.46925 16.4733 1.37402 16.8251 1.37402 17.1833C1.37402 17.5415 1.46925 17.8932 1.64995 18.2025C1.83534 18.5242 2.10298 18.7907 2.42541 18.9748C2.74784 19.1589 3.11345 19.2539 3.48471 19.2501H18.5152C18.8862 19.2536 19.2514 19.1585 19.5735 18.9744C19.8956 18.7903 20.163 18.5239 20.3482 18.2025C20.5292 17.8934 20.6247 17.5417 20.625 17.1835C20.6253 16.8253 20.5304 16.4735 20.3499 16.164ZM19.158 17.5141C19.0925 17.6259 18.9984 17.7182 18.8855 17.7816C18.7725 17.8451 18.6447 17.8773 18.5152 17.8751H3.48471C3.35518 17.8773 3.22739 17.8451 3.11443 17.7816C3.00147 17.7182 2.90741 17.6259 2.8419 17.5141C2.78255 17.4136 2.75125 17.2991 2.75125 17.1824C2.75125 17.0657 2.78255 16.9512 2.8419 16.8507L10.3571 3.79935C10.424 3.68813 10.5185 3.59609 10.6314 3.53219C10.7443 3.4683 10.8719 3.43472 11.0017 3.43472C11.1314 3.43472 11.259 3.4683 11.3719 3.53219C11.4849 3.59609 11.5794 3.68813 11.6462 3.79935L19.1614 16.8507C19.2203 16.9515 19.251 17.0662 19.2504 17.1829C19.2498 17.2996 19.2179 17.414 19.158 17.5141ZM10.3124 12.3751V8.93756C10.3124 8.75522 10.3849 8.58035 10.5138 8.45142C10.6427 8.32249 10.8176 8.25006 10.9999 8.25006C11.1823 8.25006 11.3572 8.32249 11.4861 8.45142C11.615 8.58035 11.6874 8.75522 11.6874 8.93756V12.3751C11.6874 12.5574 11.615 12.7323 11.4861 12.8612C11.3572 12.9901 11.1823 13.0626 10.9999 13.0626C10.8176 13.0626 10.6427 12.9901 10.5138 12.8612C10.3849 12.7323 10.3124 12.5574 10.3124 12.3751ZM12.0312 15.4688C12.0312 15.6728 11.9707 15.8721 11.8574 16.0417C11.7441 16.2113 11.583 16.3435 11.3946 16.4216C11.2062 16.4996 10.9988 16.52 10.7988 16.4802C10.5987 16.4405 10.415 16.3422 10.2707 16.198C10.1265 16.0538 10.0283 15.87 9.98851 15.67C9.94872 15.4699 9.96914 15.2626 10.0472 15.0742C10.1252 14.8857 10.2574 14.7247 10.427 14.6114C10.5966 14.498 10.796 14.4376 10.9999 14.4376C11.2734 14.4376 11.5358 14.5462 11.7291 14.7396C11.9225 14.933 12.0312 15.1953 12.0312 15.4688Z" fill="#F4A316" />
                                        </svg>
                                        }{opt.status}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {[
                    { id: 2, label: 'Time Slot' },
                    { id: 3, label: 'Select Weekly Schedule' }
                ].map((step) => (
                    <div key={step.id} className="border-t border-gray-50">
                        <button className="w-full flex justify-between items-center py-4 text-gray-400 font-bold opacity-60">
                            <span className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center text-xs">{step.id}</span>
                                {step.label}
                            </span>
                            <ChevronDown size={20} />
                        </button>
                    </div>
                ))}

                <div className="mt-8 pt-8 border-t border-gray-100">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-400 font-medium">Total Price</span>
                        <span className="text-4xl font-extrabold text-gray-900">${basePrice + currentExtra}</span>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Base Price</span>
                            <span className="text-gray-900 font-bold">+ $0</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Session Type</span>
                            <span className="text-gray-900 font-bold">+ ${currentExtra}</span>
                        </div>
                    </div>

                    <button
                        disabled={!isProfileFilled}
                        className={`w-full py-4 rounded-2xl font-bold mt-8 transition-colors ${!isProfileFilled
                            ? 'bg-[#EEEDFC] text-[#B7B3F4] cursor-not-allowed'
                            : 'bg-[#f0efff] text-[#5c52e5] hover:bg-[#e6e4ff]'
                            }`}
                    >
                        Enroll Now
                    </button>
                </div>
            </div>

        </div>
    );
}