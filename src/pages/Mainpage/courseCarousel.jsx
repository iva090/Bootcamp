import { Carousel } from '@skeletonlabs/skeleton-react';
import Carousel1 from '../../assets/image.png';
import Carousel2 from '../../assets/image (1).png';
import Carousel3 from '../../assets/image (2).png';
import { Link } from 'react-router-dom';

const slides = [
    {
        title: 'Start learning something new today',
        image: Carousel1,
        buttonText: 'Browse Courses',
        description: 'Explore a wide range of expert-led courses in design, development, business, and more. Find the skills you need to grow your career and learn at your own pace.'
    },
    {
        title: 'Pick up where you left off',
        image: Carousel2,
        buttonText: 'Start Learning',
        description: 'Your learning journey is already in progress. Continue your enrolled courses, track your progress, and stay on track toward completing your goals.'
    },
    {
        title: 'Learn together, grow faster',
        image: Carousel3,
        buttonText: 'Learn More',
        description: 'Join a community of learners, connect with instructors, and stay motivated as you build new skills and advance your knowledge'
    },
];

export default function CourseCarousel() {
    return (
        <Carousel
            slideCount={slides.length}
            slidesPerPage={1}
            spacing="0px"
            loop={false}
            autoplay
            interval={3000}
            className="relative overflow-hidden rounded-3xl group z-50"
        >
            <Carousel.ItemGroup>
                {slides.map((slide, i) => (
                    <Carousel.Item index={i} key={i}>
                        <Link to="/catalog">
                            <div className="relative h-[400px] w-full flex  p-15 text-white">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="absolute inset-0 w-full h-full object-cover -z-10"
                                />
                                <div className="max-w-4xl space-y-3">
                                    <h2 className="text-5xl font-bold leading-tight">
                                        {slide.title}
                                    </h2>
                                    <p className="text-lg opacity-90">
                                        {slide.description}
                                    </p>
                                    <button className="btn mt-5 text-lg variant-filled-primary px-8 py-4 rounded-lg font-semibold bg-[#4f46e5] cursor-pointer">
                                        {slide.buttonText}
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </Carousel.Item>
                ))}
            </Carousel.ItemGroup>

            <div className="absolute bottom-10 w-full px-12 flex justify-between items-center pointer-events-none">
                <div className="flex-1 flex justify-center translate-x-12 pointer-events-auto">
                    <Carousel.IndicatorGroup className="flex gap-2">
                        <Carousel.Context>
                            {(carousel) =>
                                carousel.pageSnapPoints.map((_, i) => (
                                    <Carousel.Indicator
                                        key={i}
                                        index={i}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${carousel.page === i ? 'bg-white w-16' : 'bg-white/30 w-12'
                                            }`}
                                    />
                                ))
                            }
                        </Carousel.Context>
                    </Carousel.IndicatorGroup>
                </div>

                <div className="flex gap-4 pointer-events-auto">
                    <Carousel.PrevTrigger className="z-100 p-2 border border-white/50 rounded-full text-white hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-colors">
                        <span className="sr-only">Back</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </Carousel.PrevTrigger>

                    <Carousel.NextTrigger className="z-100 p-2 border border-white/50 rounded-full text-white hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed transition-colors">
                        <span className="sr-only">Next</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </Carousel.NextTrigger>
                </div>
            </div>
        </Carousel>
    );
}