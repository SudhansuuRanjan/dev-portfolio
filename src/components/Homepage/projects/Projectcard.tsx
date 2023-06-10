import Image from "next/image"
import Link from "next/link"
import { FaGlobeAfrica, FaGithub } from 'react-icons/fa'

const Projectcard = () => {
    return (
        <div className='bg-[linear-gradient(180deg,rgba(35,37,49,.5),rgba(15,15,24,.5));] lg:w-fit md:w-fit w-[100%]  h-[30rem] border border-gray-700 rounded-[3rem] flex items-center lg:p-10 md:p-10 p-6'>
            <div className="lg:mr-8 md:mr-8 mr-4">
                <h1 style={{
                    writingMode: "vertical-rl", textOrientation: "mixed"
                }} className='text-sm h-full rotate-180  text-center text-gray-500'>NEXT JS, LOCOMOTIVE SCROLL, PRISMA</h1>
            </div>
            <div className="h-fit">
                <div className="flex flex-col items-end">
                    <Image className="rounded-3xl lg:w-[24rem] md:w-[20rem] w-[18rem]" src='/images/Kaizen-banner.png' width={700} height={350} alt="KAIZEN" />
                    <h3 className="my-5 text-3xl font-bold text-right">KAIZEN 2023</h3>
                    <p className="text-slate-400 lg:w-[24rem] md:w-[24rem] w-auto text-right">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quisquam voluptatibus.
                    </p>
                </div>


                <div className="flex justify-between my-6">
                    <Link href="/cv"><div className="font-medium text-lg text-gray-400 border-b transition-all ease-in-out delay-[30ms] border-gray-400 w-[65%] hover:w-full">DETAILS</div></Link>
                    <div className="flex gap-3">
                        <Link href="/cv">
                            <div className="font-medium text-lg text-gray-400 transition-all ease-in-out delay-[30ms] hover:text-gray-500 ">
                                <FaGlobeAfrica size={22} />
                            </div>
                        </Link>
                        <Link href="/cv">
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