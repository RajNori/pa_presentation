import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'PaanGuru Investor Pitch Deck',
    description:
        'Revolutionary approach to traditional paan business with modern technology and sustainable practices for exponential growth. Discover the untapped $100M ethnic food market opportunity.',
    keywords:
        'PaanGuru, investor pitch deck, ethnic food, paan business, investment opportunity, Australia, sustainable business, food supply chain',
    authors: [{ name: 'PaanGuru Team' }],
    creator: 'PaanGuru',
    publisher: 'PaanGuru',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://paanguru.com.au'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'PaanGuru Investor Pitch Deck',
        description:
            'Revolutionary approach to traditional paan business with modern technology and sustainable practices for exponential growth.',
        url: 'https://paanguru.com.au',
        siteName: 'PaanGuru',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'PaanGuru Logo',
            },
        ],
        locale: 'en_AU',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'PaanGuru Investor Pitch Deck',
        description:
            'Revolutionary approach to traditional paan business with modern technology and sustainable practices for exponential growth.',
        images: ['/logo.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
            {
                url: '/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
            },
        ],
        other: [
            {
                rel: 'mask-icon',
                url: '/safari-pinned-tab.svg',
                color: '#5ca904',
            },
        ],
    },
    manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    themeColor: '#5ca904',
    colorScheme: 'light',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head>
                <link
                    rel='stylesheet'
                    href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
                />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link
                    rel='preconnect'
                    href='https://fonts.gstatic.com'
                    crossOrigin='anonymous'
                />
            </head>
            <body
                className='min-h-screen'
                style={{ backgroundColor: '#5ca904' }}>
                <main className='container mx-auto px-4 py-8'>{children}</main>
            </body>
        </html>
    );
}
