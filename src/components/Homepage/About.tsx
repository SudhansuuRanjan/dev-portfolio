import React from 'react'
import Heading from '../Heading'

const About = () => {
  return (
    <div className=''>
      <Heading heading='About me' emoji="🧑🏼‍💻" desc='More about me' />

      <p className='lg:w-[34rem] w-auto text-gray-300'>
        Hello stranger! 👋, I am a self taught software developer at <span className='font-medium'>Oracle</span> with a passion for building digital services/stuff. I have a knack for all things building products, from planning and designing all the way to solving real-life problems with code.
      </p>

      <p className='lg:w-[34rem] w-auto my-5 text-gray-300'>
        Back in 2021, I decided to try my hand at creating some project in a hackathon and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today.
      </p>
    </div>
  )
}

export default About
