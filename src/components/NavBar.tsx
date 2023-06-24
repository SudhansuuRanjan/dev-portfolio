import React from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { RxCross2 } from 'react-icons/rx'
import Image from 'next/image'
import Link from 'next/link'
import { Oswald } from 'next/font/google'
const oswald = Oswald({ subsets: ['latin'] })


const NavBar = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <div className='fixed w-[90%] z-[7684358]'>
                <div className='flex self-center justify-between items-center lg:w-[55%] md:w-[80%]  m-auto rounded-3xl px-5 py-5 border-[2px] border-gray-800 bg-slate-800 bg-opacity-50 backdrop-blur-lg'>
                    <Link className='flex items-center gap-2' href="/">
                        <Image className='h-6 w-6' height={300} width={300} alt="logo" src="https://www.adeolaadeoti.xyz/svg/adeola-logo-left.svg" />
                        <p className='text-gray-300'>
                            <span className={oswald.className}>SUDHANSHU</span>
                        </p>
                    </Link>

                    <div onClick={() => setOpen(!open)} className='flex items-center gap-2 cursor-pointer'>
                        <div className='text-gray-400'>
                            <span className={oswald.className}>
                                {
                                    open ? "CLOSE" : "MENU"
                                }
                            </span>
                        </div>
                        <button>
                            {open ? <RxCross2 className='text-gray-400 text-2xl' /> : <HiOutlineMenuAlt4 className='text-gray-400 text-2xl' />}
                        </button>
                    </div>
                </div>
            </div>

            <nav style={{
                transform: open ? 'translateX(0%)' : 'translateX(-100%)',
                transition: 'transform 0.6s ease-in-out',
            }} className="bg-[#141421] fixed inset-0 w-full opa h-screen z-[7688] flex justify-evenly items-center">
                <div className="flex flex-col gap-16">
                    <div className='text-6xl font-bold'>
                        <Link href="/" onClick={() => setOpen(!open)} className='text-transparent font-bold font-outline-white hover:text-white cursor-pointer'>Home</Link>
                    </div>
                    <div className='text-6xl font-bold'>
                        <Link href="/projects" onClick={() => setOpen(!open)} className='text-transparent font-bold font-outline-white hover:text-white cursor-pointer'>Projects</Link>
                    </div>
                    <div className='text-6xl font-bold'>
                        <Link href="/blogs" onClick={() => setOpen(!open)} className='text-transparent font-bold font-outline-white hover:text-white cursor-pointer'>Blogs</Link>
                    </div>
                </div>
                <div className='lg:flex md:flex hidden flex-col items-center justify-center gap-28'>
                    <div className={oswald.className}>

                        <div className='text-center'>
                            <h2 className='text-xl text-gray-400 font-semibold mb-5'> DON&apos;T BE A STRANGER</h2>

                            <div className='flex gap-4 text-2xl font-bold'>
                                <Link className='text-sky-400 hover:text-white' href="/">👾 GH</Link>
                                <Link className='text-sky-400 hover:text-white' href="/">🐦 TW</Link>
                                <Link className='text-sky-400 hover:text-white' href="/">💼 LD</Link>
                                <Link className='text-sky-400 hover:text-white' href="/">📸 IN</Link>
                            </div>
                        </div>

                    </div>

                    <div className='text-center'>
                        <div className={oswald.className}>
                            <p className='text-gray-400 text-lg font-medium mb-5'>HAVE AN IDEA?</p>
                        </div>
                        <Link href="/">
                            <h3 className='text-5xl font-bold hover:text-purple-400'>
                                Tell me about it
                            </h3>
                        </Link>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default NavBar