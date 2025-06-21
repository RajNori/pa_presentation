'use client';

interface StickySlideNavigatorProps {
    currentSlide: number;
    totalSlides: number;
    onPrevious: () => void;
    onNext: () => void;
    onContact: () => void;
}

export default function StickySlideNavigator({
    currentSlide,
    totalSlides,
    onPrevious,
    onNext,
    onContact,
}: StickySlideNavigatorProps) {
    return (
        <div className='fixed bottom-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-t border-white/20'>
            <div className='container mx-auto px-4 py-3'>
                <div className='flex items-center justify-between'>
                    {/* Previous Button */}
                    <button
                        onClick={onPrevious}
                        className='p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group shadow-lg hover:shadow-xl'
                        title='Previous (←, A, Escape)'>
                        <div className='flex items-center space-x-2'>
                            <i className='fas fa-leaf text-lg sm:text-xl text-white group-hover:text-green-300 transition-colors duration-300'></i>
                            <span className='text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white'>
                                ←
                            </span>
                        </div>
                    </button>

                    {/* Slide Counter */}
                    <div className='flex items-center space-x-4'>
                        <div className='text-white text-sm font-medium'>
                            Slide {currentSlide} of {totalSlides}
                        </div>
                        {/* Progress Bar */}
                        <div className='hidden sm:block w-32 h-2 bg-white/20 rounded-full overflow-hidden shadow-inner'>
                            <div
                                className='h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-300 shadow-lg'
                                style={{
                                    width: `${
                                        (currentSlide / totalSlides) * 100
                                    }%`,
                                }}></div>
                        </div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={onNext}
                        className='p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group shadow-lg hover:shadow-xl'
                        title='Next (→, D, Space, Enter)'>
                        <div className='flex items-center space-x-2'>
                            <span className='text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white'>
                                →
                            </span>
                            <i className='fas fa-leaf text-lg sm:text-xl text-white group-hover:text-green-300 transition-colors duration-300 transform rotate-180'></i>
                        </div>
                    </button>

                    {/* Contact Button */}
                    <button
                        onClick={onContact}
                        className='p-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group'
                        title='Contact CEO'>
                        <div className='flex items-center space-x-2'>
                            <span className='text-lg group-hover:animate-pulse'>
                                💼
                            </span>
                            <span className='hidden sm:inline text-sm font-medium'>
                                Contact
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
