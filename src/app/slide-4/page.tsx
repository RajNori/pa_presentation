'use client';
import PaanGuruSlide4 from '@/components/PaanGuruSlide4';
import { useRouter } from 'next/navigation';

export default function Slide4Page() {
    const router = useRouter();

    const slideContent = {
        slideNumber: 4,
        title: 'PRODUCT MOAT (DEFENSIBLE & DIFFERENTIATED)',
        bulletPoints: [
            'Top SKUs: Sweet Paan, Chocolate Paan, Rose Khajur',
            '2–3 hour delivery window | HACCP-compliant',
            'Proprietary processes ensure consistency',
            'Retail-ready packaging in place',
        ],
    };

    const handlePrevious = () => {
        router.push('/slide-3');
    };

    const handleNext = () => {
        router.push('/slide-5');
    };

    return (
        <PaanGuruSlide4
            {...slideContent}
            onPrevious={handlePrevious}
            onNext={handleNext}
        />
    );
}
