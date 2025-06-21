'use client';
import { useEffect } from 'react';
import LogoWithReflection from './LogoWithReflection';
import StickySlideNavigator from './StickySlideNavigator';

interface PaanGuruSlide5Props {
    slideNumber: number;
    title: string;
    bulletPoints: string[];
    backgroundColor?: string;
    textColor?: string;
    onPrevious?: () => void;
    onNext?: () => void;
}

export default function PaanGuruSlide5({
    slideNumber,
    title,
    bulletPoints,
    backgroundColor = '#5ca904',
    textColor = '#ffffff',
    onPrevious,
    onNext,
}: PaanGuruSlide5Props) {
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

                        {/* Legend */}
                        <div className='mt-4 grid grid-cols-3 gap-2 text-xs sm:text-sm'>
                            <div className='flex items-center space-x-2'>
                                <div
                                    className='w-3 h-3 rounded-full'
                                    style={{
                                        backgroundColor: '#4CAF50',
                                    }}></div>
                                <span style={{ color: textColor }}>
                                    85% Paan
                                </span>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <div
                                    className='w-3 h-3 rounded-full'
                                    style={{
                                        backgroundColor: '#2196F3',
                                    }}></div>
                                <span style={{ color: textColor }}>
                                    10% Raw
                                </span>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <div
                                    className='w-3 h-3 rounded-full'
                                    style={{
                                        backgroundColor: '#FF9800',
                                    }}></div>
                                <span style={{ color: textColor }}>
                                    5% Seasonal
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - CSS Pie Chart */}
                    <div className='w-full md:w-1/2 flex items-center justify-center overscroll-none'>
                        <div className='w-full max-w-lg'>
                            <div
                                className='w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl flex items-center justify-center'
                                style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255, 255, 255, 0.1)',
                                }}>
                                {/* CSS Pie Chart */}
                                <div
                                    className='relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full shadow-lg'
                                    style={{
                                        background:
                                            'conic-gradient(from 0deg, #4CAF50 0deg 306deg, #2196F3 306deg 342deg, #FF9800 342deg 360deg)',
                                        animation: 'rotate 20s linear infinite',
                                    }}>
                                    {/* Center circle for donut effect */}
                                    <div
                                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full'
                                        style={{
                                            background:
                                                'rgba(255, 255, 255, 0.1)',
                                            backdropFilter: 'blur(5px)',
                                            border: '2px solid rgba(255, 255, 255, 0.2)',
                                        }}></div>

                                    {/* Percentage labels */}
                                    <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 text-center'>
                                        <div
                                            className='text-sm sm:text-base font-bold'
                                            style={{ color: textColor }}>
                                            85%
                                        </div>
                                        <div
                                            className='text-xs'
                                            style={{
                                                color: textColor,
                                                opacity: 0.8,
                                            }}>
                                            Paan
                                        </div>
                                    </div>
                                    <div className='absolute top-1/2 -right-8 transform translate-y-1/2 text-center'>
                                        <div
                                            className='text-sm sm:text-base font-bold'
                                            style={{ color: textColor }}>
                                            10%
                                        </div>
                                        <div
                                            className='text-xs'
                                            style={{
                                                color: textColor,
                                                opacity: 0.8,
                                            }}>
                                            Raw
                                        </div>
                                    </div>
                                    <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center'>
                                        <div
                                            className='text-sm sm:text-base font-bold'
                                            style={{ color: textColor }}>
                                            5%
                                        </div>
                                        <div
                                            className='text-xs'
                                            style={{
                                                color: textColor,
                                                opacity: 0.8,
                                            }}>
                                            Seasonal
                                        </div>
                                    </div>
                                </div>
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

            {/* CSS Animation */}
            <style jsx>{`
                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
}
