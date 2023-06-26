import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <Image src={"/images/loader.gif"} height={350} width={350} alt='loader'>
      </Image>
    </div>
  )
}

export default loading