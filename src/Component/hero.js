import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
            <div className='max-w-{-96px} w-full h-screen nx-auto flex flex-col text-center justify-center' >
                <p className='text-[#00df9a] font-bold p-2'>Small heading</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6  ' >Main Heading</h1>
                <div className='flex justify-center items-center mt-3'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold pl-3 py-2'> small heading-2</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-xl font-md my-6 mx-auto py-3 text-black'>Get Start</button>
            </div>
    </div>
  )
}

export default Hero
