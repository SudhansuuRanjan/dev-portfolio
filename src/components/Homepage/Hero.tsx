import Link from "next/link"
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'] })

const Hero = () => {
  return (
    <>
      <div className=''>
        <h1 className='font-extrabold lg:text-7xl md:text-6xl text-5xl  text-white lg:mb-5 md:mb-5 mb-5'>turning ideas into</h1>
        <h1 className='font-extrabold lg:text-7xl md:text-6xl text-5xl text-white lg:mb-5 md:mb-5 mb-5'>real life products</h1>
        <h1 className='font-extrabold lg:text-7xl md:text-6xl h-32 text-5xl bg-clip-text text-transparent bg-gradient-to-l from-pink-600 to-purple-500'>is my calling.</h1>
      </div>

      <div className="flex gap-5 items-center my-10">
        <Link className={oswald.className} href="/cv"><div className="font-medium text-lg text-gray-300 hover:text-gray-400 border-b transition-all ease-in-out delay-[30ms] border-pink-400 w-[65%] hover:w-full">RESUME</div></Link>
        <Link className={oswald.className} href="/projects"><div className="font-medium text-lg text-gray-300 hover:text-gray-400 border-b transition-all ease-in-out delay-[30ms] border-sky-400 w-[65%] hover:w-full">PROJECTS</div></Link>
      </div>
    </>
  )
}

export default Hero