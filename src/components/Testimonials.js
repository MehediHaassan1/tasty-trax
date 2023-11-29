import React from 'react';
import { PiFolderStarBold } from "react-icons/pi";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa6";

const Testimonials = () => {
    return (
        <div className='bg-[#F4F6F5] rounded-md mb-10'>
            <div className='h-[55vh] lg:h-[50vh] overflow-hidden relative'>
                <div className='hidden md:block absolute -top-16 -left-10 lg:-top-28 lg:-left-20'>
                    <img src="https://i.ibb.co/sbHWPbT/testimonial-corner-logo.png" alt="testimonial-corner-logo" className='w-32 lg:w-80' />
                </div>
                <div className='text-center'>
                    <h1 className='w-[300px] md:w-[500px] lg:w[600px] mx-auto text-3xl md:text-6xl font-semibold mt-10 text-primary'>What our happy client say</h1>
                    <p className='mt-6 w-[280px] md:w-[350px] lg:w-[450px] mx-auto text-lg text-secondary'>The top-notch pet nutrition and convenient service have made caring for my pets a breeze.</p>
                </div>
                <div className='w-16 h-16 bg-white rounded-full flex justify-center items-center absolute right-12 top-56'>
                    <PiFolderStarBold className='w-8 h-8 text-red-400' />
                </div>
                <div>

                </div>
            </div>
            <div className='md:flex justify-evenly items-center p-4 md:p-0'>
                <div>
                    <img src="https://i.ibb.co/h8rGzhS/review-man-1.png" alt="review-man-1" />
                    <FaStar className='hidden' />
                </div>
                <div className='md:flex flex-col'>
                    <h3 className='text-3xl text-primary my-6 font-semibold'>TastyTrax</h3>
                    <p className='text-lg w-72 font-semibold text-secondary my-6'>Absolutely thrilled with TastyTrax! Their commitment to quality pet care shines through in every order. The variety of premium nutrition and hassle-free delivery have made me a loyal customer.</p>
                    <h4 className='text-primary text-2xl font-semibold my-2'>Larry Diamond</h4 >
                    <div className='w-40 flex items-center justify-between mt-4'>
                        <FaArrowLeft className='w-6 h-6 text-accent cursor-pointer' />
                        <FaArrowRight className='w-6 h-6 text-accent cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials