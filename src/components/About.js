import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col md:flex-row md:justify-between md:items-center px-4 md:py-20 md:my-20'>
            <div>
                <h1 className='text-primary text-3xl font-semibold mb-6'>About Us</h1>
                <p className='text-secondary text-lg mb-4 md:w-[500px]'>Your go-to for premium pet🐾 nutrition and treats. Convenience, quality, and joy for your furry friends. Experience the TastyTrax difference today! </p>
            </div>
            <div>
                <button className='text-lg rounded py-2 px-4 font-bold bg-neutral text-secondary hover:bg-transparent hover:text-neutral hover:outline hover:outline-1 hover:outline-neutral transition-all duration-300'>Learn More</button>
            </div>
        </div>
    )
}

export default About