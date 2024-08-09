import Image from "next/image"
import Link from "next/link"
import { FaGlobeAfrica, FaGithub } from 'react-icons/fa'
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'] })

type projcetProp = {
    id: string
    title: string
    tags: string[]
    desc: string
    img: string
    link: string
    github: string
    readme: string
}

const Projectcard = ({ id, title, tags, desc, img, link, github, readme }: projcetProp) => {
    return (
        <div className='relative bg-[linear-gradient(180deg,rgba(35,37,49,.5),rgba(15,15,24,.5));] lg:w-fit md:w-fit w-[100%]  h-[30rem] border border-gray-700 rounded-[3rem] flex items-center lg:p-10 md:p-10 p-6'>
            <h1 className="text-[10rem] z-20 absolute left-[-3rem] top-[-5rem] text-transparent font-bold font-outline-2">
                {id}
            </h1>
            <div className="lg:mr-8 md:mr-8 mr-4 z-30">
                <h1 style={{
                    writingMode: "vertical-rl", textOrientation: "mixed"
                }} className='text-sm h-full rotate-180  text-center text-gray-500'>
                    {
                        tags.join(', ')
                    }
                </h1>
            </div>
            <div className="h-fit">
                <div className="flex flex-col items-end">
                    <Link target="_blank" href={link}>
                        <Image className="rounded-3xl lg:w-[24rem] md:w-[20rem] w-[18rem]" src={img} width={700} height={350} alt={title} />
                    </Link>
                    <Link target="_blank" href={link}>
                        <h3 className="my-5 text-3xl font-bold text-right"><span className={oswald.className}>{title}</span></h3>
                    </Link>
                    <p className="text-slate-400 lg:w-[24rem] md:w-[24rem] w-auto text-right">
                        {desc}
                    </p>
                </div>


                <div className="flex justify-between my-6">
                    <Link target="_blank" className={oswald.className} href={readme}><div className="font-medium text-lg text-gray-400 border-b transition-all ease-in-out delay-[30ms] border-gray-400 w-[65%] hover:w-full">DETAILS</div></Link>
                    <div className="flex gap-3">
                        <Link target="_blank" href={link}>
                            <div className="font-medium text-lg text-gray-400 transition-all ease-in-out delay-[30ms] hover:text-gray-500 ">
                                <FaGlobeAfrica size={22} />
                            </div>
                        </Link>
                        <Link target="_blank" href={github}>
                            <div className="font-medium text-lg text-gray-400 hover:text-gray-500 transition-all ease-in-out delay-[30ms] ">
                                <FaGithub size={22} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projectcard