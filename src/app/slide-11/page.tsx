'use client';
import PaanGuruSlide3 from '@/components/PaanGuruSlide3';
import { useRouter } from 'next/navigation';

export default function Slide11Page() {
    const router = useRouter();

    const slideContent = {
        slideNumber: 11,
        title: 'EXECUTION-READY DREAM TEAM',
        bulletPoints: [
            'Veera – Founder/CEO',
            '100% retention = strong execution',
            'Bootstrapped to $1.1M ARR',
        ],
        imageSrc: '/slide9.jpg',
    };

    const handlePrevious = () => {
        router.push('/slide-10');
    };

    const handleNext = () => {
        router.push('/slide-12');
    };

    return (
        <PaanGuruSlide3
            {...slideContent}
            onPrevious={handlePrevious}
            onNext={handleNext}
        />
    );
}
