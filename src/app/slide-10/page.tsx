'use client';
import PaanGuruSlide3 from '@/components/PaanGuruSlide3';
import { useRouter } from 'next/navigation';

export default function Slide10Page() {
    const router = useRouter();

    const slideContent = {
        slideNumber: 10,
        title: 'GO-TO-MARKET DOMINATION',
        bulletPoints: [
            'Phase 1: B2B expansion to Sydney, Melbourne, Brisbane, Adelaide',
            'Phase 2: Retail packaging launch',
            'Phase 3: D2C subscriptions',
            'Top ROI Channels: WhatsApp, Social, Field Sales',
        ],
        imageSrc: '/sweet-paan.jpeg',
    };

    const handlePrevious = () => {
        router.push('/slide-9');
    };

    const handleNext = () => {
        router.push('/slide-11');
    };

    return (
        <PaanGuruSlide3
            {...slideContent}
            onPrevious={handlePrevious}
            onNext={handleNext}
        />
    );
}
