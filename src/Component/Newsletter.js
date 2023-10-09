import React from 'react';

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-black px-4 bg-black text-white'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center'>
                <div className='lg:col-span-2 my-4 text-center'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Slay Ahead With <br/>FINFLEXIGLY'S NEWSLETTER!!!! 
                    </h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center w-full justify-center'>
                        <input
                            className='p-3 flex w-1/4 rounded-md text-white  border-black bg-gray-300'
                            type='email'
                            placeholder='Enter Email'
                        />
                        <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
                            Notify Me
                        </button>
                    </div>
                    <p className='text-center'>
                        We care about the protection of your data. Read our{' '}
                        <span className='text-[#00df9a]'>Privacy Policy.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;