'use client';
import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import LogoWithReflection from './LogoWithReflection';
import StickySlideNavigator from './StickySlideNavigator';

// Register Chart.js components
Chart.register(...registerables);

interface PaanGuruSlide7Props {
    slideNumber: number;
    title: string;
    bulletPoints: string[];
    backgroundColor?: string;
    textColor?: string;
    onPrevious?: () => void;
    onNext?: () => void;
}

export default function PaanGuruSlide7({
    slideNumber,
    title,
    bulletPoints,
    backgroundColor = '#5ca904',
    textColor = '#ffffff',
    onPrevious,
    onNext,
}: PaanGuruSlide7Props) {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    // Initialize Chart.js
    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                // Destroy existing chart if it exists
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }

                // Create new chart
                chartInstance.current = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: [
                            'FY2024',
                            'FY2025-26',
                            'FY2026-27',
                            'FY2027-28',
                        ],
                        datasets: [
                            {
                                label: 'Revenue ($M)',
                                data: [1.19, 1.52, 1.73, 1.95],
                                borderColor: 'rgba(76, 175, 80, 1)',
                                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                                borderWidth: 4,
                                fill: true,
                                tension: 0.4,
                                pointBackgroundColor: 'rgba(76, 175, 80, 1)',
                                pointBorderColor: '#ffffff',
                                pointBorderWidth: 3,
                                pointRadius: 8,
                                pointHoverRadius: 12,
                                pointHoverBorderWidth: 4,
                            },
                            {
                                label: 'Cashflow ($K)',
                                data: [370, 344, 406, 470],
                                borderColor: 'rgba(33, 150, 243, 1)',
                                backgroundColor: 'rgba(33, 150, 243, 0.1)',
                                borderWidth: 4,
                                fill: true,
                                tension: 0.4,
                                pointBackgroundColor: 'rgba(33, 150, 243, 1)',
                                pointBorderColor: '#ffffff',
                                pointBorderWidth: 3,
                                pointRadius: 8,
                                pointHoverRadius: 12,
                                pointHoverBorderWidth: 4,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: true,
                                position: 'top' as const,
                                labels: {
                                    color: textColor,
                                    font: {
                                        size: 12,
                                        weight: 'bold',
                                    },
                                    usePointStyle: true,
                                    pointStyle: 'circle',
                                },
                            },
                            tooltip: {
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                titleColor: '#ffffff',
                                bodyColor: '#ffffff',
                                borderColor: 'rgba(255, 255, 255, 0.2)',
                                borderWidth: 1,
                                cornerRadius: 8,
                                displayColors: true,
                                callbacks: {
                                    label: function (context) {
                                        const label =
                                            context.dataset.label || '';
                                        const value = context.parsed.y;
                                        if (label.includes('($M)')) {
                                            return `${label}: $${value.toFixed(
                                                2
                                            )}M`;
                                        }
                                        return `${label}: $${value}K`;
                                    },
                                },
                            },
                        },
                        scales: {
                            x: {
                                display: true,
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.1)',
                                },
                                ticks: {
                                    color: textColor,
                                    font: {
                                        size: 14,
                                        weight: 'bold',
                                    },
                                },
                            },
                            y: {
                                display: true,
                                max: 500,
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.1)',
                                },
                                ticks: {
                                    color: textColor,
                                    font: {
                                        size: 12,
                                    },
                                    callback: function (
                                        value: string | number
                                    ) {
                                        return '$' + value + 'K';
                                    },
                                },
                            },
                        },
                        animation: {
                            duration: 2000,
                            easing: 'easeOutQuart',
                        },
                        elements: {
                            line: {
                                borderWidth: 4,
                            },
                            point: {
                                radius: 8,
                                hoverRadius: 12,
                            },
                        },
                    },
                });
            }
        }

        // Cleanup
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

                {/* Main Content - 50/50 Layout */}
                <div
                    className='h-full flex flex-col md:flex-row items-center justify-center overscroll-none pt-8 sm:pt-10 md:pt-12 pb-20'
                    style={{ gap: '2rem' }}>
                    {/* Left Side - Content */}
                    <div className='w-full md:w-1/2 text-center md:text-left overscroll-none'>
                        {/* Title */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h1
                                className='text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight drop-shadow-lg break-words'
                                style={{
                                    color: textColor,
                                    marginBottom: '0.5rem',
                                }}>
                                {title}
                            </h1>
                        </div>

                        {/* Bullet Points */}
                        <div
                            className='w-full overscroll-none'
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.75rem',
                            }}>
                            {bulletPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className='bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-300 overscroll-none'
                                    style={{ padding: '0.75rem' }}>
                                    <p
                                        className='text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed break-words'
                                        style={{ color: textColor }}>
                                        {point}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Growth Arrow */}
                        <div className='mt-6 flex justify-center md:justify-start'>
                            <div className='relative'>
                                <div className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-b from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse'>
                                    <i className='fas fa-arrow-up text-white text-2xl sm:text-3xl md:text-4xl'></i>
                                </div>
                                <div className='absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce'>
                                    <span className='text-xs sm:text-sm font-bold text-white'>
                                        ↑
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Chart */}
                    <div className='w-full md:w-1/2 flex items-center justify-center overscroll-none'>
                        <div className='w-full max-w-lg'>
                            <div
                                className='w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl p-4'
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}>
                                <canvas
                                    ref={chartRef}
                                    className='w-full h-full'
                                    style={{
                                        filter: 'drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.3))',
                                    }}></canvas>
                            </div>
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
