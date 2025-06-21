'use client';
import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import LogoWithReflection from './LogoWithReflection';
import StickySlideNavigator from './StickySlideNavigator';

// Register Chart.js components
Chart.register(...registerables);

interface PaanGuruSlide8Props {
    slideNumber: number;
    title: string;
    bulletPoints: string[];
    tam: string;
    sam: string;
    som: string;
    backgroundColor?: string;
    textColor?: string;
    onPrevious?: () => void;
    onNext?: () => void;
}

export default function PaanGuruSlide8({
    slideNumber,
    title,
    bulletPoints,
    tam,
    sam,
    som,
    backgroundColor = '#5ca904',
    textColor = '#ffffff',
    onPrevious,
    onNext,
}: PaanGuruSlide8Props) {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }

                chartInstance.current = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: ['Primary', 'Secondary', 'Emerging'],
                        datasets: [
                            {
                                data: [60, 30, 10],
                                backgroundColor: [
                                    'rgba(76, 175, 80, 0.9)',
                                    'rgba(33, 150, 243, 0.9)',
                                    'rgba(255, 152, 0, 0.9)',
                                ],
                                borderColor: 'rgba(255, 255, 255, 0.2)',
                                borderWidth: 3,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: true,
                                position: 'bottom' as const,
                                labels: {
                                    color: '#333',
                                    font: {
                                        size: 12,
                                        weight: 'bold',
                                    },
                                    usePointStyle: true,
                                    pointStyle: 'circle',
                                },
                            },
                            tooltip: {
                                callbacks: {
                                    label: function (context) {
                                        const label = context.label || '';
                                        const value = context.parsed;
                                        return `${label}: ${value}%`;
                                    },
                                },
                            },
                        },
                        animation: {
                            animateRotate: true,
                            animateScale: true,
                            duration: 1500,
                        },
                    },
                });
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [textColor]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'ArrowLeft':
                case 'a':
                case 'A':
                    event.preventDefault();
                    onPrevious?.();
                    break;
                case 'ArrowRight':
                case 'd':
                case 'D':
                    event.preventDefault();
                    onNext?.();
                    break;
                case ' ':
                case 'Enter':
                case 'Return':
                    event.preventDefault();
                    onNext?.();
                    break;
                case 'Escape':
                    event.preventDefault();
                    onPrevious?.();
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [onPrevious, onNext]);

    const handleContact = () => {
        window.open('mailto:info@paanguru.com.au', '_blank');
    };

    return (
        <div
            className='w-full overflow-hidden overscroll-none'
            style={{
                backgroundColor,
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem',
            }}>
            <div
                className='w-full max-w-7xl mx-auto relative overscroll-none'
                style={{ height: '90vh' }}>
                {/* Logo with Reflection - Top Left */}
                <LogoWithReflection />

                {/* Main Content */}
                <div
                    className='h-full flex flex-col md:flex-row items-center justify-center overscroll-none pt-8 sm:pt-10 md:pt-12 pb-20'
                    style={{ gap: '2rem' }}>
                    {/* Left Side: Content */}
                    <div className='w-full md:w-1/2 text-center md:text-left overscroll-none'>
                        <h1
                            className='text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 drop-shadow-lg break-words'
                            style={{ color: textColor }}>
                            {title}
                        </h1>

                        <div className='space-y-3 sm:space-y-4 mb-6 sm:mb-8'>
                            {bulletPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className='bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20 hover:bg-white/15 transition-all duration-300'>
                                    <p
                                        className='text-xs sm:text-sm md:text-base lg:text-lg font-medium break-words'
                                        style={{ color: textColor }}>
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center'>
                            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20'>
                                <h3
                                    className='text-sm sm:text-lg font-bold'
                                    style={{ color: textColor }}>
                                    TAM
                                </h3>
                                <p
                                    className='text-lg sm:text-2xl font-semibold'
                                    style={{ color: textColor }}>
                                    {tam}
                                </p>
                            </div>
                            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20'>
                                <h3
                                    className='text-sm sm:text-lg font-bold'
                                    style={{ color: textColor }}>
                                    SAM
                                </h3>
                                <p
                                    className='text-lg sm:text-2xl font-semibold'
                                    style={{ color: textColor }}>
                                    {sam}
                                </p>
                            </div>
                            <div className='bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20'>
                                <h3
                                    className='text-sm sm:text-lg font-bold'
                                    style={{ color: textColor }}>
                                    SOM
                                </h3>
                                <p
                                    className='text-lg sm:text-2xl font-semibold'
                                    style={{ color: textColor }}>
                                    {som}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Pie Chart */}
                    <div className='w-full md:w-1/2 flex items-center justify-center overscroll-none'>
                        <div
                            className='w-full max-w-sm sm:max-w-md h-64 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-4'
                            style={{ backgroundColor: '#F9F9F9' }}>
                            <canvas ref={chartRef}></canvas>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div
                    className='absolute bottom-2 left-2 opacity-50 text-xs'
                    style={{ color: textColor }}>
                    <span className='hidden sm:inline'>
                        ©2025 Paan Guru. All rights reserved{' '}
                    </span>
                    <span className='sm:hidden'>Tap to navigate</span>
                </div>

                {/* Bottom Decoration */}
                <div className='absolute bottom-2 right-2 opacity-10'>
                    <div className='w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-4 border-current rounded-full'></div>
                </div>
            </div>

            {/* Sticky Slide Navigator Footer */}
            <StickySlideNavigator
                currentSlide={slideNumber}
                totalSlides={13}
                onPrevious={onPrevious || (() => {})}
                onNext={onNext || (() => {})}
                onContact={handleContact}
            />
        </div>
    );
}
