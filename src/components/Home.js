import React from 'react'

const Home = () => {
    return (
        <div className='md:h-screen  lg:my-8 -z-50 overflow-hidden'>
            <div className='relative'>
                <div className='flex justify-end '>
                    <img src="https://i.ibb.co/fnjB336/hero-banner-1.jpg" alt="hero-banner-1" className='w-full h-full md:w-[800px]' />
                </div>
                <div className='absolute top-0 w-full p-4 backdrop-opacity-20 backdrop-invert bg-white/30 rounded h-full
                md:w-[600px] md:translate-x-1/4 md:translate-y-1/4 md:h-fit
                lg:p-16'>
                    <h1 className='w-[250px] md:w-[350px] text-3xl md:text-5xl tracking-wide font-semibold'>We Help You Find The Best <span className='text-accent'>Pet Food</span></h1>
                    <p className='w[450px] md:w-[520px] md:text-lg md:mt-4 font-semibold'>Indulge your pets with premium <span className='text-secondary md:text-2xl'>flavors and nutrition</span>. Explore a world of <span className='text-accent md:text-2xl'>delightful treats and nutritious meals</span>, delivered to your doorstep. Because <span className='text-secondary md:text-2xl'>every wag deserves the best</span>.</p>
                </div>
                <div className='absolute top-0 left-20 z-[-1000001]'>
                    <img src="https://i.ibb.co/QkyryT6/dotted-image.png" alt="dotted-pic" />
                </div>
            </div>
        </div >
    )
}

export default Home