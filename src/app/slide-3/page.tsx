'use client';
import PaanGuruSlide3 from '@/components/PaanGuruSlide3';
import { useRouter } from 'next/navigation';

export default function Slide3Page() {
    const router = useRouter();

    const slideContent = {
        slideNumber: 3,
        title: "EXPLOSIVE TRACTION (THE NUMBERS DON'T LIE)",
        bulletPoints: [
            'Weekly Sales: 8,500 units | Monthly Revenue: $93.5K',
            'Monthly Growth: 5% | 79% compounded annually',
            '130+ wholesale clients | 100% retention',
            'Self-funded to $1.1M ARR',
        ],
    };

    const handlePrevious = () => {
        router.push('/slide-2');
    };

    const handleNext = () => {
        router.push('/slide-4');
    };

    return (
        <PaanGuruSlide3
            {...slideContent}
            onPrevious={handlePrevious}
            onNext={handleNext}
        />
    );
}
