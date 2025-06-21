'use client';
import PaanGuruSlide3 from '@/components/PaanGuruSlide3';
import { useRouter } from 'next/navigation';

export default function Slide13Page() {
    const router = useRouter();

    const slideContent = {
        slideNumber: 13,
        title: 'RETAIL FRANCHISE OPPORTUNITY',
        bulletPoints: [
            '$25K deposit from each franchisee',
            '5% revenue share to PaanGuru',
            'Centralized supply of raw materials',
            'Target: 50+ stores by 2027 in key ethnic hubs',
        ],
        imageSrc: '/paankiosk.jpg',
    };

    const handlePrevious = () => {
        router.push('/slide-12');
    };

    const handleNext = () => {
        router.push('/'); // Final slide, go home
    };

    return (
        <PaanGuruSlide3
            {...slideContent}
            onPrevious={handlePrevious}
            onNext={handleNext}
        />
    );
} 