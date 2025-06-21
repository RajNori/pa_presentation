// import Image from 'next/image';

interface SlideshowCardProps {
    imageUrl: string;
    imageAlt: string;
    badge: string;
    title: string;
    description: string;
    // author: {
    //     name: string;
    //     avatar?: string;
    //     initials?: string;
    //     date: string;
    // };
}

export default function SlideshowCard({
    imageUrl,
    imageAlt,
    // badge,
    title,
    description,
    // author,
}: SlideshowCardProps) {
    return (
        <div className='max-w-sm w-full lg:max-w-full lg:flex bg-white rounded-lg shadow-xl overflow-hidden border-2 border-green-100 hover:border-green-300 transition-all duration-300'>
            <div
                className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden'
                style={{ backgroundImage: `url('${imageUrl}')` }}
                title={imageAlt}></div>
            <div className='border-r border-b border-l border-green-200 lg:border-l-0 lg:border-t lg:border-green-200 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                <div className='mb-8'>
                    {/* <p className='text-sm text-green-600 flex items-center font-medium'>
                        <svg
                            className='fill-current text-green-500 w-3 h-3 mr-2'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'>
                            <path d='M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z' />
                        </svg>
                        {badge}
                    </p> */}
                    <div className='text-green-800 font-bold text-xl mb-2'>
                        {title}
                    </div>
                    <p className='text-gray-700 text-base leading-relaxed'>
                        {description}
                    </p>
                </div>
                {/* <div className='flex items-center'>
                    {author.avatar ? (
                        <Image
                            className='w-10 h-10 rounded-full mr-4'
                            src={author.avatar}
                            alt={`Avatar of ${author.name}`}
                            width={40}
                            height={40}
                        />
                    ) : (
                        <div className='w-10 h-10 rounded-full mr-4 bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center'>
                            <span className='text-white font-semibold text-sm'>
                                {author.initials ||
                                    author.name
                                        .split(' ')
                                        .map((n) => n[0])
                                        .join('')}
                            </span>
                        </div>
                    )}
                    <div className='text-sm'>
                        <p className='text-green-800 leading-none font-medium'>
                            {author.name}
                        </p>
                        <p className='text-green-600'>{author.date}</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
