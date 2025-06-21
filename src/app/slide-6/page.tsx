'use client';
import PaanGuruSlide6 from '@/components/PaanGuruSlide6';

export default function Slide6Page() {
    const slideData = {
        slideNumber: 6,
        title: 'FINANCIAL SNAPSHOT (FY2023 → FY2024)',
        bulletPoints: [
            'Revenue: $700K → $1.19M (70% YoY Growth)',
            'Gross Profit: ~$370K (Stable)',
            'Net Profit positive while scaling',
            'Total Assets: $660K',
        ],
        backgroundColor: '#5ca904',
        textColor: '#ffffff',
    };

    const handlePrevious = () => {
        window.location.href = '/slide-5';
    };

    const handleNext = () => {
        window.location.href = '/slide-7';
    };

    return (
        <PaanGuruSlide6
            {...slideData}
            onPrevious={handlePrevious}
            onNext={handleNext}
        />
    );
}
