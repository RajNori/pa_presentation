// eslint-disable-next-line @typescript-eslint/no-explicit-any
'use client';
import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import LogoWithReflection from './LogoWithReflection';
import StickySlideNavigator from './StickySlideNavigator';

// Register Chart.js components
Chart.register(...registerables);

interface PaanGuruSlide6Props {
    slideNumber: number;
    title: string;
    bulletPoints: string[];
    backgroundColor?: string;
    textColor?: string;
    onPrevious?: () => void;
    onNext?: () => void;
}

export default function PaanGuruSlide6({
    slideNumber,
    title,
    bulletPoints,
    backgroundColor = '#5ca904',
    textColor = '#ffffff',
    onPrevious,
    onNext,
}: PaanGuruSlide6Props) {
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

                // Custom 3D effect plugin
                const threeDPlugin = {
                    id: 'threeDEffect',
                    beforeDraw: (chart: Chart) => {
                        const { ctx } = chart;

                        // Create gradient for 3D effect
                        chart.data.datasets.forEach(
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            (dataset: any, datasetIndex: number) => {
                                const meta = chart.getDatasetMeta(datasetIndex);
                                if (meta.visible) {
                                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                    meta.data.forEach(
                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                        (bar: any, index: number) => {
                                            const {
                                                x,
                                                y,
                                                width: barWidth,
                                                height: barHeight,
                                            } = bar;

                                            // Create 3D top face
                                            ctx.save();
                                            ctx.fillStyle =
                                                dataset.backgroundColor[index];
                                            ctx.shadowColor =
                                                'rgba(0, 0, 0, 0.4)';
                                            ctx.shadowBlur = 6;
                                            ctx.shadowOffsetX = 3;
                                            ctx.shadowOffsetY = 3;

                                            // Draw main bar with 3D effect
                                            ctx.fillRect(
                                                x - barWidth / 2,
                                                y,
                                                barWidth,
                                                barHeight
                                            );

                                            // Draw top face (lighter)
                                            ctx.fillStyle =
                                                dataset.backgroundColor[index]
                                                    .replace('0.9', '1')
                                                    .replace('1)', '0.7)');
                                            ctx.fillRect(
                                                x - barWidth / 2,
                                                y,
                                                barWidth,
                                                4
                                            );

                                            // Draw right face (darker)
                                            ctx.fillStyle =
                                                dataset.backgroundColor[index]
                                                    .replace('0.9', '0.6')
                                                    .replace('1)', '0.6)');
                                            ctx.fillRect(
                                                x + barWidth / 2,
                                                y,
                                                4,
                                                barHeight
                                            );

                                            ctx.restore();
                                        }
                                    );
                                }
                            }
                        );
                    },
                };

                // Create new chart
                chartInstance.current = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['FY2023', 'FY2024'],
                        datasets: [
                            {
                                label: 'Revenue ($K)',
                                data: [700, 1190],
                                backgroundColor: [
                                    'rgba(76, 175, 80, 0.9)',
                                    'rgba(76, 175, 80, 1)',
                                ],
                                borderColor: [
                                    'rgba(76, 175, 80, 1)',
                                    'rgba(76, 175, 80, 1)',
                                ],
                                borderWidth: 3,
                                borderRadius: 8,
                                borderSkipped: false,
                                // 3D effect properties
                                borderDash: [],
                                borderDashOffset: 0,
                            },
                            {
                                label: 'Gross Profit ($K)',
                                data: [370, 370],
                                backgroundColor: [
                                    'rgba(33, 150, 243, 0.9)',
                                    'rgba(33, 150, 243, 1)',
                                ],
                                borderColor: [
                                    'rgba(33, 150, 243, 1)',
                                    'rgba(33, 150, 243, 1)',
                                ],
                                borderWidth: 3,
                                borderRadius: 8,
                                borderSkipped: false,
                                // 3D effect properties
                                borderDash: [],
                                borderDashOffset: 0,
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
                                        return `${label}: $${value}K`;
                                    },
                                },
                            },
                        },
                        scales: {
                            x: {
                                display: true,
                                grid: {
                                    display: false,
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
                        // Enhanced 3D effect
                        elements: {
                            bar: {
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderWidth: 2,
                                borderColor: 'rgba(255, 255, 255, 0.2)',
                            },
                        },
                    },
                    plugins: [threeDPlugin],
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

                        {/* Growth Highlight */}
                        <div className='mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20'>
                            <div className='text-center'>
                                <div className='text-2xl sm:text-3xl md:text-4xl font-bold text-green-300 mb-2'>
                                    70% YoY Growth
                                </div>
                                <div
                                    className='text-sm sm:text-base opacity-80'
                                    style={{ color: textColor }}>
                                    Revenue Growth FY2023 → FY2024
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
