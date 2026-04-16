import { Star } from 'lucide-react';
import SampleCard from '../../assets/SampleImage.png';

export default function MockCard({ Image, Lecturer, Rating, Title, Progress, Id }) {
    const course = {
        lecturer: 'Marilyn Mango',
        title: 'Advanced React & TypeScript Development',
        rating: 4.9,
        progress: 65,
    };

    return (
        <div className="card max-w-[550px] p-6 rounded-3xl shadow-sm bg-white flex flex-col gap-4">
            <div className="flex gap-6">
                <div className="flex-shrink-0 w-[140px] h-[123px]">
                    <img
                        src={Image || SampleCard}
                        alt="Course Thumbnail"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                <div className="flex-grow pt-2">
                    <div className="flex justify-between items-start mb-1">
                        <p className="text-sm text-slate-500">
                            Lecturer <span className="text-slate-800 font-semibold">{Lecturer || course.lecturer}</span>
                        </p>
                        <div className="flex items-center gap-1 text-amber-500 font-bold">
                            <Star className="w-5 h-5 fill-current" />
                            <span className="text-slate-700">{Rating || course.rating.toFixed(1)}</span>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                        {Title || course.title}
                    </h3>
                </div>
            </div>
            <div className="flex items-end gap-8">
                <div className="flex-grow space-y-2">
                    <p className="text-sm font-bold text-slate-800">
                        {Progress || course.progress}% Complete
                    </p>
                    <div className="w-full h-[14px] bg-[#e6e7ff] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#5d51e8] rounded-full transition-all duration-500"
                            style={{ width: `${Progress || course.progress}%` }}
                        />
                    </div>
                </div>
                <button className="flex-shrink-0 px-10 py-2.5 rounded-xl border-2 border-[#a8a2f8] text-[#5d51e8] font-bold text-lg hover:bg-indigo-50 transition-colors">
                    View
                </button>
            </div>
        </div>
    );
}