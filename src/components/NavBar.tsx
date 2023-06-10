import React from 'react'
import { HiOutlineMenuAlt2, HiOutlineMenuAlt4 } from 'react-icons/hi'
import Image from 'next/image'


const NavBar = () => {
    return (
        <div className='fixed w-[90%] z-[7684358]'>
            <div className='flex self-center justify-between items-center lg:w-[55%] md:w-[80%]  m-auto rounded-3xl px-5 py-4 border-[2px] border-gray-800 bg-slate-800 bg-opacity-50 backdrop-blur-lg'>
                <div>
                    <Image className='h-6 w-6' height={300} width={300} alt="logo" src="https://www.adeolaadeoti.xyz/svg/adeola-logo-left.svg" />
                </div>

                <div>
                    <button>
                        <HiOutlineMenuAlt4 size={28} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBar