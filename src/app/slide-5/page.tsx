'use client';
import PaanGuruSlide5 from '@/components/PaanGuruSlide5';
import { useRouter } from 'next/navigation';

export default function Slide5Page() {
    const router = useRouter();

    const slideContent = {
        slideNumber: 5,
        title: 'BUSINESS MODEL (BUILT TO SCALE)',
        bulletPoints: [
            '85% paan products | 10% raw leaves | 5% seasonal',
            'AOV: $8.5K–$9K | Gross Margin: $1.50–$2.25/unit',
            'CAC: $1.25 | LTV:CAC > 50:1',
            'Recurring B2B = predictable revenue',
        ],
    };

    const handlePrevious = () => {
        router.push('/slide-4');
    };

    const handleNext = () => {
        // Navigate to next slide when available
        router.push('/slide-6');
    };

    return (
        <PaanGuruSlide5
            {...slideContent}
            onPrevious={handlePrevious}
            onNext={handleNext}
        />
    );
}
