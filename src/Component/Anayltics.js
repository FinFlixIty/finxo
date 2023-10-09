import React from 'react'
import image from '../assest/images.jpeg'
const Anayltics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w[1240px] mx-auto grid md:grid-cols-2'>
            <img src={image}  className='w-[500px] mx-auto my-2 '/>
            <div className='flex flex-col justify-center text-center '>
                <p className='text-[#00df9a] '>Small intro</p>
                <h1 className='text-black uppercase md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Main Blog / Hottest Blog Heading</h1>
                <p className='text-black '>jansdknaskdjnakndskasjndkjasn details of it </p>
                <button className='bg-[#00df9a] w-[200px] rounded-xl font-medium my-6 mx-auto py-3 md:mx-0 text-black'>Create your own blog</button>
            </div>
        </div>
        
    </div>
  )
}

export default Anayltics
