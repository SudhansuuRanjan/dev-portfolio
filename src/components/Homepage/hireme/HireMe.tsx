import React from 'react'
import Heading from '@/components/Heading'
import Link from 'next/link'

const HireMe = (): React.JSX.Element => {
    return (
        <div>
            <Heading heading='Sold Yet?' emoji="🤙" desc='' />
            <p className='lg:text-4xl md:text-4xl text-3xl text-[#c9c9c9] text-justify font-semibold leading-10'>
                Thanks for stopping by, I&apos;m currently looking to join a new team of creative designers and developers. If you think we might be a good fit for one another, send me an  <Link className='text-white hover:underline font-bold' href={"mailto:sudhanshuranjan2k18@gmail.com"}>
                email 📧</Link>.
            </p>

        </div>
    )
}

export default HireMe