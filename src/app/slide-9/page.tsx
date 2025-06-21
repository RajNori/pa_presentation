'use client';
import PaanGuruSlide3 from '@/components/PaanGuruSlide3';
import { useRouter } from 'next/navigation';

export default function Slide9Page() {
    const router = useRouter();

    const slideContent = {
        slideNumber: 9,
        title: "COMPETITION (WE'RE CREATING THE CATEGORY)",
        bulletPoints: [
            'No direct wholesale paan competitors',
            'Indirect: fragmented local sweet shops',
            'Speed: 2–3 hour delivery | Scale: B2B model',
            'First-mover + regulatory + recipe moat',
        ],
        imageSrc: '/slide9.webp',
    };

    const handlePrevious = () => {
        router.push('/slide-8');
    };

    const handleNext = () => {
        router.push('/slide-10');
    };

    return (
        <PaanGuruSlide3
            {...slideContent}
            onPrevious={handlePrevious}
            onNext={handleNext}
        />
    );
}
