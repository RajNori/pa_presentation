'use client';
import PaanGuruSlide3 from '@/components/PaanGuruSlide3';
import { useRouter } from 'next/navigation';

export default function Slide12Page() {
    const router = useRouter();

    const slideContent = {
        slideNumber: 12,
        title: 'THE ASK: INVEST IN THE ETHNIC FOOD REVOLUTION',
        bulletPoints: [
            'Raising: 30% equity',
            'Use of Funds: 50% Factory | 30% Retail | 20% Working Cap',
            'Target Valuation: $1.5M–$2M pre-money',
            'Path: $10M revenue + FMCG exit | 10x ROI potential',
        ],
        imageSrc: '/slide7.jpg',
    };

    const handlePrevious = () => {
        router.push('/slide-11');
    };

    const handleNext = () => {
        router.push('/slide-13');
    };

    return (
        <PaanGuruSlide3
            {...slideContent}
            onPrevious={handlePrevious}
            onNext={handleNext}
        />
    );
}
