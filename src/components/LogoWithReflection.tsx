'use client';

interface LogoWithReflectionProps {
    className?: string;
}

export default function LogoWithReflection({
    className = '',
}: LogoWithReflectionProps) {
    return (
        <div
            className={`absolute top-4 left-4 z-20 hidden md:block ${className}`}>
            <div className='relative'>
                {/* Main Logo */}
                <img
                    src='/logo.png'
                    alt='PaanGuru Logo'
                    className='w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 object-contain drop-shadow-lg'
                />

                {/* Mirror Reflection */}
                <div className='absolute top-full left-0 w-full h-full transform scale-y-[-0.3] opacity-30'>
                    <img
                        src='/logo.png'
                        alt='PaanGuru Logo Reflection'
                        className='w-full h-full object-contain'
                        style={{
                            filter: 'blur(1px)',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
