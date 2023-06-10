import React from 'react'

type headingType = {
    heading: string,
    desc: string,
    emoji: string
}

const Heading = ({ heading, desc, emoji }: headingType) => {
    return (
        <div className='pt-32 pb-12'>
            <div className='flex items-center gap-2'>
                <h2 className='font-extrabold lg:text-5xl md:text-4xl h-16 text-3xl bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-pink-300 to-pink-400'>{heading}</h2><h2 className='lg:text-5xl md:text-4xl h-16 text-3xl'>{emoji}</h2>
            </div>
            <p className='text-gray-400'>{desc}</p>
        </div>
    )
}

export default Heading