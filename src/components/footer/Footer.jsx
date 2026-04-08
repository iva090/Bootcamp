import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

export default function Footer() {
    return (
        <footer className="bg-[#F3F4F6] pt-16 font-sans border-t border-gray-300">
            <div className="px-50 mx-auto flex flex-wrap justify-between items-start gap-y-12 mb-10">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#4F46E5] flex items-center justify-center shadow-sm">
                            <img src={Logo} alt="logo" className="w-8 h-8 object-contain" />
                        </div>
                        <span className="text-[#130E67] font-bold text-xl tracking-tight">Bootcamp</span>
                    </div>

                    <div className="text-[#3730A3] text-[15px] leading-relaxed font-medium">
                        Your learning journey starts here!<br />
                        Browse courses to get started.
                    </div>

                    <div className="flex items-center gap-5 mt-2">
                        <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#4F46E5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                            <svg width="21" height="21" viewBox="0 0 24 24" fill="#4F46E5"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                        </a>
                        <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="#4F46E5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.359 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.359-2.227.413-1.266.057-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.359-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.359 2.227-.413 1.266-.057 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 5.775.132 4.905.332 4.143.628c-.788.306-1.455.717-2.12 1.382S.935 3.355.63 4.143C.332 4.905.132 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.06 1.277.26 2.148.556 2.91.306.788.717 1.455 1.382 2.12s1.333 1.076 2.12 1.382c.763.296 1.63.496 2.91.556C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.277-.06 2.148-.26 2.91-.556.788-.306 1.455-.717 2.12-1.382s1.076-1.333 1.382-2.12c.296-.763.496-1.63.556-2.91.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.06-1.277-.26-2.148-.556-2.91-.306-.788-.717-1.455-1.382-2.12s-1.333-1.076-2.12-1.382c-.763-.296-1.63-.496-2.91-.556C15.667.014 15.259 0 12 0z" /><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4.162 4.162 0 110-8.324 4.162 4.162 0 010 8.324zM18.406 4.413a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>
                        </a>
                        <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#4F46E5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="#4F46E5"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                        </a>
                    </div>
                </div>

                <div className="flex gap-24 pr-10">
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[#130E67] font-bold text-base">Explore</h4>
                        <ul className="flex flex-col gap-4">
                            <li><Link to='/enrolled' className="text-gray-500 text-[15px] font-medium hover:text-[#4F46E5] transition-colors">Enrolled Courses</Link></li>
                            <li><Link to='/catalog' className="text-gray-500 text-[15px] font-medium hover:text-[#4F46E5] transition-colors">Browse Courses</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="text-[#130E67] font-bold text-base">Account</h4>
                        <ul className="flex flex-col gap-4">
                            <li><a href="#" className="text-gray-500 text-[15px] font-medium hover:text-[#4F46E5] transition-colors">My Profile</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6 min-w-[200px]">
                        <h4 className="text-[#130E67] font-bold text-base">Contact</h4>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-3 text-gray-500 text-[15px] font-medium">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                contact@company.com
                            </li>
                            <li className="flex items-center gap-3 text-gray-500 text-[15px] font-medium">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                (+995) 555 111 222
                            </li>
                            <li className="flex items-center gap-3 text-gray-500 text-[15px] font-medium">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                Aghmashenebeli St.115
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto w-full pt-8 flex flex-row items-center justify-between gap-3">
                    <p className="text-gray-500 text-sm font-medium">Copyright © 2026 Redberry International</p>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <span>All Rights Reserved</span>
                        <span className="mx-1">|</span>
                        <a href="#" className="text-[#4F46E5] hover:underline">Terms and Conditions</a>
                        <span className="mx-1">|</span>
                        <a href="#" className="text-[#4F46E5] hover:underline">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}