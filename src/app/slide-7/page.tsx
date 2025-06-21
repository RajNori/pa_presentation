'use client';
import PaanGuruSlide7 from '@/components/PaanGuruSlide7';

export default function Slide7Page() {
    const slideData = {
        slideNumber: 7,
        title: 'FORECAST DASHBOARD (FY2025–2028)',
        bulletPoints: [
            'FY25–26 Revenue: $1.52M | Cashflow: $344K',
            'FY26–27 Revenue: $1.73M | Cashflow: $406K',
            'FY27–28 Revenue: $1.95M | Cashflow: $470K',
            'Margins stable: Gross ~70%, Operating ~22–24%',
        ],
        backgroundColor: '#5ca904',
        textColor: '#ffffff',
    };

    const handlePrevious = () => {
        window.location.href = '/slide-6';
    };

    const handleNext = () => {
        window.location.href = '/slide-8';
    };

    return (
        <PaanGuruSlide7
            {...slideData}
            onPrevious={handlePrevious}
            onNext={handleNext}
        />
    );
}
