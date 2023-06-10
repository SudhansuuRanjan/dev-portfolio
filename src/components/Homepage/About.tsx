import React from 'react'
import Heading from '../Heading'

const About = () => {
  return (
    <div className='w-full'>
      <Heading heading='About me' emoji="🧑🏼‍💻" desc='More about me' />

      <p className='lg:w-[34rem] w-auto text-gray-300'>
        Hello stranger! 👋, Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I&apos;ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.
      </p>

      <p className='lg:w-[34rem] w-auto my-5 text-gray-300'>
        Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today.
      </p>
    </div>
  )
}

export default About