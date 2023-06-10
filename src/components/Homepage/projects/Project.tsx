import React from 'react'
import Heading from '@/components/Heading'
import Projectcard from './Projectcard'

const About = () => {
  return (
    <div >
      <Heading heading='Yeah, I work hard' emoji="💼" desc='Each project is unique. Here are some of my works.' />

      <div className='flex my-16 flex-col items-center justify-center gap-16'>
        <Projectcard id="1" />
        <Projectcard id="2"/>
        <Projectcard id="3"/>
      </div>
    </div>
  )
}

export default About