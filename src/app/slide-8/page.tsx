'use client';
import PaanGuruSlide8 from '@/components/PaanGuruSlide8';
import { useRouter } from 'next/navigation';

export default function Slide8Page() {
    const router = useRouter();

    const slideData = {
        slideNumber: 8,
        title: 'MASSIVE MARKET OPPORTUNITY',
        bulletPoints: [
            'Primary: Indian restaurants, groceries, caterers',
            'Secondary: Retail chains, food distributors',
            'Emerging: Direct-to-consumer subscriptions',
        ],
        tam: '$100M',
        sam: '$80M',
        som: '$8–10M',
    };

    const handlePrevious = () => router.push('/slide-7');
    const handleNext = () => router.push('/slide-9');

    return (
        <PaanGuruSlide8
            {...slideData}
            onPrevious={handlePrevious}
            onNext={handleNext}
        />
    );
}
