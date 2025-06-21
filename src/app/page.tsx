import Link from 'next/link';

export default function Home() {
    return (
        <div className='min-h-screen' style={{ backgroundColor: '#5ca904' }}>
            {/* Hero Section (Fullscreen + CTA) */}
            <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
                {/* Background with ethnic sweets + delivery packaging */}
                <div className='absolute inset-0 bg-gradient-to-br from-green-600 to-green-800'>
                    <div className='absolute inset-0 opacity-10'>
                        {/* Ethnic sweets pattern overlay */}
                        <div className='absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full'></div>
                        <div className='absolute top-40 right-20 w-24 h-24 bg-white/5 rounded-full'></div>
                        <div className='absolute bottom-32 left-1/4 w-28 h-28 bg-white/5 rounded-full'></div>
                        <div className='absolute bottom-20 right-1/3 w-20 h-20 bg-white/5 rounded-full'></div>
                    </div>
                </div>

                {/* Content */}
                <div className='relative z-10 text-center px-4 max-w-6xl mx-auto'>
                    {/* Logo */}
                    <div className='mb-8'>
                        <div className='inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20'>
                            <span className='text-2xl'>🌿</span>
                            <span className='text-xl font-bold text-white'>
                                PaanGuru
                            </span>
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl'>
                        PaanGuru: The Untapped{' '}
                        <span className='text-yellow-300'>$100M</span> Ethnic
                        Food Revolution
                    </h1>

                    {/* Subheadline */}
                    <p className='text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed'>
                        Discover how we&apos;re reshaping Australia&apos;s
                        ethnic food supply chain – one paan at a time.
                    </p>

                    {/* Investor Quote */}
                    <div className='mb-12'>
                        <p className='text-lg text-white/80 italic'>
                            &ldquo;Bootstrapped to $1.1M ARR with 100%
                            retention&rdquo;
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-16'>
                        <Link
                            href='/paan-guru-slide'
                            className='inline-flex items-center space-x-3 bg-white text-green-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105'>
                            <span className='text-2xl'>▶️</span>
                            <span>Start the Presentation</span>
                        </Link>

                        <a
                            href='/Paanguru-investor-deck.pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105 transform'>
                            <span className='text-2xl'>📄</span>
                            <span>Download Pitch Deck</span>
                        </a>

                        <a
                            href='mailto:info@paanguru.com.au'
                            className='inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20'>
                            <span className='text-2xl'>💬</span>
                            <span>Contact CEO</span>
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
                    <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
                        <div className='w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse'></div>
                    </div>
                </div>
            </section>

            {/* Quick Metrics Carousel */}
            <section className='py-16 bg-white/5 backdrop-blur-sm'>
                <div className='container mx-auto px-4'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                        <div className='text-center'>
                            <div className='text-3xl md:text-4xl font-bold text-white mb-2 animate-pulse'>
                                💰 $93.5K
                            </div>
                            <div className='text-white/80 text-sm md:text-base'>
                                Monthly Revenue
                            </div>
                        </div>
                        <div className='text-center'>
                            <div className='text-3xl md:text-4xl font-bold text-white mb-2 animate-pulse'>
                                🔁 130+
                            </div>
                            <div className='text-white/80 text-sm md:text-base'>
                                Wholesale Clients
                            </div>
                        </div>
                        <div className='text-center'>
                            <div className='text-3xl md:text-4xl font-bold text-white mb-2 animate-pulse'>
                                📈 79%
                            </div>
                            <div className='text-white/80 text-sm md:text-base'>
                                Annual Growth
                            </div>
                        </div>
                        <div className='text-center'>
                            <div className='text-3xl md:text-4xl font-bold text-white mb-2 animate-pulse'>
                                🏆 100%
                            </div>
                            <div className='text-white/80 text-sm md:text-base'>
                                Client Retention
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Start Section */}
            <section className='py-20'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl md:text-4xl font-bold text-white text-center mb-12'>
                        Explore the PaanGuru Story
                    </h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto'>
                        {/* The Opportunity */}
                        <Link
                            href='/paan-guru-slide'
                            className='group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105'>
                            <div className='text-4xl mb-4'>💡</div>
                            <h3 className='text-xl font-bold text-white mb-3'>
                                The Opportunity
                            </h3>
                            <p className='text-white/80 text-sm mb-4'>
                                Discover the untapped $100M market potential
                            </p>
                            <div className='text-white/60 text-xs'>
                                Slides 1-2
                            </div>
                        </Link>

                        {/* Traction & Financials */}
                        <Link
                            href='/slide-3'
                            className='group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105'>
                            <div className='text-4xl mb-4'>📊</div>
                            <h3 className='text-xl font-bold text-white mb-3'>
                                Traction & Financials
                            </h3>
                            <p className='text-white/80 text-sm mb-4'>
                                See our explosive growth and financial
                                performance
                            </p>
                            <div className='text-white/60 text-xs'>
                                Slides 3-7
                            </div>
                        </Link>

                        {/* Market & Moat */}
                        <Link
                            href='/slide-8'
                            className='group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105'>
                            <div className='text-4xl mb-4'>🌏</div>
                            <h3 className='text-xl font-bold text-white mb-3'>
                                Market & Moat
                            </h3>
                            <p className='text-white/80 text-sm mb-4'>
                                Understand our competitive advantage and market
                                size
                            </p>
                            <div className='text-white/60 text-xs'>
                                Slides 8-10
                            </div>
                        </Link>

                        {/* The Team & Ask */}
                        <Link
                            href='/slide-11'
                            className='group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105'>
                            <div className='text-4xl mb-4'>👥</div>
                            <h3 className='text-xl font-bold text-white mb-3'>
                                The Team & Ask
                            </h3>
                            <p className='text-white/80 text-sm mb-4'>
                                Meet our dream team and investment opportunity
                            </p>
                            <div className='text-white/60 text-xs'>
                                Slides 11-13
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className='bg-white/5 backdrop-blur-sm border-t border-white/10 py-8'>
                <div className='container mx-auto px-4 text-center'>
                    <div className='flex items-center justify-center space-x-3 mb-4'>
                        <span className='text-2xl'>🌿</span>
                        <span className='text-xl font-bold text-white'>
                            PaanGuru
                        </span>
                    </div>
                    <p className='text-white/60 text-sm'>
                        Revolutionizing Traditional Paan Business with Modern
                        Technology
                    </p>
                    <div className='mt-4'>
                        <a
                            href='mailto:info@paanguru.com.au'
                            className='text-white/80 hover:text-white transition-colors duration-300'>
                            info@paanguru.com.au
                        </a>
                    </div>
                    <div className='mt-2'>
                        <a
                            href='/Paanguru-investor-deck.pdf'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-white/80 hover:text-white transition-colors duration-300 underline'>
                            📄 Download Investor Deck
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
