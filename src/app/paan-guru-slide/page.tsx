'use client';
import PaanGuruSlide from '@/components/PaanGuruSlide';
import { useRouter } from 'next/navigation';

export default function PaanGuruSlidePage() {
    const router = useRouter();

    const slideContent = {
        slideNumber: 1,
        title: 'PAAN GURU: THE UNTAPPED $100M OPPORTUNITY',
        subtitle: "Dominating Australia's Ethnic Food Revolution",
        bulletPoints: [
            '$100M ethnic premium food market – no wholesale player',
            'Only wholesale fresh paan manufacturer in Australia',
            'Backed by 100% customer retention',
        ],
    };

    const handlePrevious = () => {
        // Navigate to previous slide when available
        router.push('/');
    };

    const handleNext = () => {
        router.push('/slide-2');
    };

    return (
        <PaanGuruSlide
            {...slideContent}
            onPrevious={handlePrevious}
            onNext={handleNext}
        />
    );
}
