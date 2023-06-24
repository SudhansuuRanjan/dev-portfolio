import React from 'react'
import Heading from '@/components/Heading'
import Projectcard from './Projectcard'
import Link from 'next/link'

const About = (): React.JSX.Element => {
  return (
    <div >
      <Heading heading='Yeah, I work hard' emoji="💼" desc='Each project is unique. Here are some of my works.' />

      <div className='flex my-16 flex-col items-center justify-center gap-16'>
        <Projectcard id="1" />
        <Projectcard id="2" />
        <Projectcard id="3" />
      </div>

      <div className='flex items-center justify-center'>
        <Link href="/projects">
          <button className='custom-button m-auto'>
            View All
          </button>
        </Link>
      </div>
    </div>
  )
}

export default About