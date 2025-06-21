'use client';
import PaanGuruSlide2 from '@/components/PaanGuruSlide2';
import { useRouter } from 'next/navigation';

export default function Slide2Page() {
    const router = useRouter();

    const slideContent = {
        slideNumber: 2,
        title: 'THE IRRESISTIBLE OPPORTUNITY',
        subtitle:
            "We're not just selling paan—we're capturing an overlooked ethnic market",
        bulletPoints: [
            "Australia's food tech: 688+ companies, $50B+ revenue",
            'Zero players in wholesale ethnic confections',
        ],
        ceoInfo: 'Veera Venkat Manyam | CEO | info@paanguru.com.au',
    };

    const handlePrevious = () => {
        router.push('/paan-guru-slide');
    };

    const handleNext = () => {
        router.push('/slide-3');
    };

    return (
        <PaanGuruSlide2
            {...slideContent}
            onPrevious={handlePrevious}
            onNext={handleNext}
        />
    );
}
