import React from 'react';
import PhotoAlbum from "react-photo-album";


const About = () => {

    const photos = [
        { src: "https://i.ibb.co/3dY8y5R/about-pet-1.jpg", width: 800, height: 600 },
        { src: "https://i.ibb.co/YLckgdX/about-pet-2.jpg", width: 1600, height: 900 },
        { src: "https://i.ibb.co/Lp6R13M/about-pet-3.jpg", width: 800, height: 600 },
        { src: "https://i.ibb.co/859jNvx/about-pet-4.jpg", width: 1600, height: 900 },
    ];

    return (
        <div>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center px-4 md:py-20 md:my-20'>
                <div>
                    <h1 className='text-primary text-3xl font-semibold mb-6'>About Us</h1>
                    <p className='text-secondary text-lg mb-4 md:w-[500px]'>Your go-to for premium pet🐾 nutrition and treats. Convenience, quality, and joy for your furry friends. Experience the TastyTrax difference today! </p>
                </div>
                <div>
                    <button className='text-lg rounded py-2 px-4 font-bold bg-neutral text-secondary hover:bg-transparent hover:text-neutral hover:outline hover:outline-1 hover:outline-neutral transition-all duration-300'>Learn More</button>
                </div>
            </div>

            <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-10 lg:h-screen overflow-hidden'>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10'>
                    <div>
                        <h1 className='text-3xl font-semibold text-primary mb-4'>1.</h1>
                        <h1 className='text-3xl font-semibold text-primary mb-4'>Who we are</h1>
                        <p className='text-secondary text-lg'>TastyTrax: Your go-to for top-notch pet nutrition. Bringing joy to your furry friends, effortlessly.</p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-semibold text-primary mb-4'>2.</h1>
                        <h1 className='text-3xl font-semibold text-primary mb-4'>What do we do</h1>
                        <p className='text-secondary text-lg'>TastyTrax delivers premium pet nutrition with joy. We make caring for your furry friends easy and delightful.</p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-semibold text-primary mb-4'>3.</h1>
                        <h1 className='text-3xl font-semibold text-primary mb-4'>How We Help</h1>
                        <p className='text-secondary text-lg'>TastyTrax: Simple pet care with premium nutrition for happy, healthy furry friends.</p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-semibold text-primary mb-4'>4.</h1>
                        <h1 className='text-3xl font-semibold text-primary mb-4'>Our Commitment</h1>
                        <p className='text-secondary text-lg'>TastyTrax: Committed to quality pet care. Convenient. Premium. Always.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <PhotoAlbum
                            layout="masonry"
                            photos={photos}
                            columns={2}
                            spacing={10}
                            padding={0}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About