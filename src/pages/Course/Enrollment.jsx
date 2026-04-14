import { useState, useEffect } from 'react';
import useAuthStore from '../../store/useAuthStore';
import api from "../../features/axios";
import EnrollmentSection from './EnrollmentSection.jsx';
import SessionOption from './SessionOptions';
import PriceSummary from './PriceSummary';

function WeeklyScheduleStep({ courseId, isOpen, onOpen, selectedId, onSelect }) {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        const fetchInitial = async () => {
            try {
                const res = await api.get(`/courses/${courseId}/weekly-schedules`);
                setSchedules(res.data.data || []);
            } catch (err) { console.error(err); }
        };
        if (courseId) fetchInitial();
    }, [courseId]);

    return (
        <EnrollmentSection id={1} title="Weekly Schedule" isOpen={isOpen} onOpen={onOpen} isCompleted={!!selectedId}>
            <div className="grid grid-cols-1 gap-2">
                {schedules.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => onSelect(s.id)}
                        className={`p-3 rounded-xl border-2 text-left transition-all ${selectedId === s.id ? 'border-[#5c52e5] bg-blue-50/30' : 'border-gray-100'}`}
                    >
                        <span className="font-bold text-sm text-gray-800">{s.label}</span>
                    </button>
                ))}
            </div>
        </EnrollmentSection>
    );
}

function TimeSlotStep({ courseId, weeklyId, isOpen, onOpen, selectedId, onSelect }) {
    const [slots, setSlots] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!weeklyId) {
            setSlots([]);
            return;
        }
        const fetchSlots = async () => {
            setLoading(true);
            try {
                const res = await api.get(`/courses/${courseId}/time-slots`, { params: { weekly_schedule_id: weeklyId } });
                setSlots(res.data.data || []);
            } catch (err) { console.error(err); }
            finally { setLoading(false); }
        };
        fetchSlots();
    }, [courseId, weeklyId]);

    return (
        <EnrollmentSection id={2} title="Time Slot" isOpen={isOpen} onOpen={onOpen} isCompleted={!!selectedId} isDisabled={!weeklyId}>
            {loading ? <p className="text-sm text-gray-400">Loading...</p> : (
                <div className="grid grid-cols-2 gap-2">
                    {slots.map((t) => (
                        <button key={t.id} onClick={() => onSelect(t.id)} className={`p-3 rounded-xl border-2 transition-all ${selectedId === t.id ? 'border-[#5c52e5] bg-blue-50/30' : 'border-gray-100'}`}>
                            <span className="font-bold text-sm">{t.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </EnrollmentSection>
    );
}

function SessionTypeStep({ courseId, weeklyId, timeSlotId, isOpen, onOpen, selectedId, onSelect }) {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        if (!weeklyId || !timeSlotId) {
            setTypes([]);
            return;
        }
        const fetchTypes = async () => {
            try {
                const res = await api.get(`/courses/${courseId}/session-types`, {
                    params: { weekly_schedule_id: weeklyId, time_slot_id: timeSlotId }
                });
                setTypes(res.data.data || []);
            } catch (err) { console.error(err); }
        };
        fetchTypes();
    }, [courseId, weeklyId, timeSlotId]);

    return (
        <EnrollmentSection id={3} title="Session Type" isOpen={isOpen} onOpen={onOpen} isCompleted={!!selectedId} isDisabled={!timeSlotId}>
            <div className="grid grid-cols-3 gap-3">
                {types.map((opt) => (
                    <SessionOption
                        key={opt.id}
                        opt={{
                            ...opt,
                            additionalPrice: parseFloat(opt.priceModifier) || 0
                        }}
                        isSelected={selectedId === opt.id}
                        onSelect={() => onSelect(opt)}
                    />
                ))}
            </div>
        </EnrollmentSection>
    );
}

export default function Enrollment({ courseId }) {
    const [openSection, setOpenSection] = useState(1);
    const [selectedWeeklyId, setSelectedWeeklyId] = useState(null);
    const [selectedTimeSlotId, setSelectedTimeSlotId] = useState(null);
    const [selectedSession, setSelectedSession] = useState(null);
    const [courseBasePrice, setCourseBasePrice] = useState(0);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const res = await api.get(`/courses/${courseId}`);
                setCourseBasePrice(Number(res.data.data.basePrice) || 0);
            } catch (err) { console.error(err); }
        };
        if (courseId) fetchCourse();
    }, [courseId]);

    const extraPrice = selectedSession?.priceModifier
        ? parseFloat(selectedSession.priceModifier)
        : 0;

    const isProfileFilled = useAuthStore((state) => state.isProfileFilled);

    const handleEnroll = async () => {
        if (!selectedSession) return;

        try {
            await api.post('/enrollments', {
                courseId: Number(courseId),
                courseScheduleId: selectedSession.courseScheduleId
            });
            alert("Enrolled!");
        } catch (err) {
            alert("Enrollment failed");
        }
    };

    return (
        <div className="flex flex-col gap-6 w-full bg-white rounded-3xl p-6 shadow-sm border border-gray-50">
            <WeeklyScheduleStep
                courseId={courseId}
                isOpen={openSection === 1}
                onOpen={() => setOpenSection(1)}
                selectedId={selectedWeeklyId}
                onSelect={(id) => { setSelectedWeeklyId(id); setSelectedTimeSlotId(null); setSelectedSession(null); setOpenSection(2); }}
            />

            <TimeSlotStep
                courseId={courseId}
                weeklyId={selectedWeeklyId}
                isOpen={openSection === 2}
                onOpen={() => setOpenSection(2)}
                selectedId={selectedTimeSlotId}
                onSelect={(id) => { setSelectedTimeSlotId(id); setSelectedSession(null); setOpenSection(3); }}
            />

            <SessionTypeStep
                courseId={courseId}
                weeklyId={selectedWeeklyId}
                timeSlotId={selectedTimeSlotId}
                isOpen={openSection === 3}
                onOpen={() => setOpenSection(3)}
                selectedId={selectedSession?.id}
                onSelect={(sessionObj) => setSelectedSession(sessionObj)}
            />

            <PriceSummary
                base={courseBasePrice}
                extra={extraPrice}
                canEnroll={isProfileFilled && !!selectedSession}
                onEnroll={handleEnroll}
                needsAuth={!isProfileFilled}
            />
        </div>
    );
}