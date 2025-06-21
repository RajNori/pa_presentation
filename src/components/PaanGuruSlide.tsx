'use client';
import { useEffect } from 'react';
import LogoWithReflection from './LogoWithReflection';
import StickySlideNavigator from './StickySlideNavigator';

interface PaanGuruSlideProps {
    slideNumber: number;
    title: string;
    subtitle: string;
    bulletPoints: string[];
    backgroundColor?: string;
    textColor?: string;
    onPrevious?: () => void;
    onNext?: () => void;
}

export default function PaanGuruSlide({
    slideNumber,
    title,
    subtitle,
    bulletPoints,
    backgroundColor = '#5ca904',
    textColor = '#ffffff',
    onPrevious,
    onNext,
}: PaanGuruSlideProps) {
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
                className='w-full max-w-6xl mx-auto relative overscroll-none'
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
                        <div style={{ marginBottom: '1rem' }}>
                            <h1
                                className='text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight drop-shadow-lg break-words'
                                style={{
                                    color: textColor,
                                    marginBottom: '0.5rem',
                                }}>
                                {title}
                            </h1>
                            <h2
                                className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold opacity-90 drop-shadow-md break-words'
                                style={{ color: textColor }}>
                                {subtitle}
                            </h2>
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
                    </div>

                    {/* Right Side - Image */}
                    <div className='w-full md:w-1/2 flex items-center justify-center overscroll-none'>
                        <div className='w-full max-w-md'>
                            <img
                                src='/opportunity.png'
                                alt='Market Opportunity'
                                className='w-full h-auto rounded-lg shadow-2xl'
                                style={{ maxHeight: '60vh' }}
                            />
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div
                    className='absolute bottom-2 left-2 opacity-50 text-xs'
                    style={{ color: textColor }}>
                    <span className='hidden sm:inline'>
                        © 2025 Paan Guru. All rights reserved{' '}
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
