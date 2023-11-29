import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest } from "react-icons/fa6";

const MyFooter = () => {
    return (
        <div className='bg-primary text-white py-20'>
            <div className='max-w-7xl mx-auto'>
                <div className='px-4'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div>
                            <h1 className='text-3xl lg:text-5xl md:w-[370px] lg:w-[600px]'>
                                Start your business today for $0 state fees
                            </h1>
                        </div>
                        <div className='mt-6 md:mt-0 text-lg font-semibold flex justify-between items-center'>
                            <button className='mx-2 py-2 px-2 lg:py-4 lg:px-8 rounded-3xl bg-white text-primary text-lg lg:text-xl hover:text-white hover:bg-secondary transition-all duration-300'>Get Started</button>
                            <button className='mx-2 py-2 px-2 lg:py-4 lg:px-4 rounded-3xl bg-secondary text-white text-lg lg:text-xl hover:text-secondary hover:bg-white transition-all duration-300'>Contact Sales</button>
                        </div>
                    </div>
                    <div className='border-b my-4 md:my-20 lg:my-32 border-gray-800'></div>
                </div>

                <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
                    <div className='col-span-2 px-4'>
                        <h3 className='text-3xl mb-4'>TastyTrax</h3>
                        <p className='tracking-wide mb-4'>Elevate pet happiness with TastyTrax. Premium nutrition, delightful treats, and joy in every step.</p>
                        <div className='flex justify-start items-center'>
                            <FaFacebookF className='h-6 w-6 mr-6' />
                            <FaTwitter className='h-6 w-6 mr-6' />
                            <FaLinkedinIn className='h-6 w-6 mr-6' />
                            <FaPinterest className='h-6 w-6 mr-6' />
                        </div>
                    </div>
                    <div className='col-span-2 grid grid-cols-1 gap-4 md:grid-cols-2 md:content-center md:gap-6 lg:grid-cols-4 lg:gap-6 px-4'>
                        <div>
                            <h4 className='text-lg font-bold tracking-wider'>Entity types</h4>
                            <p className='text-sm tracking-wider'>Knowledge base</p>
                            <p className='text-sm tracking-wider'>Security</p>
                            <p className='text-sm tracking-wider'>Privacy Policy</p>
                            <p className='text-sm tracking-wider'>Partners</p>
                            <p className='text-sm tracking-wider'>About us</p>
                            <p className='text-sm tracking-wider'>FAQs</p>
                        </div>
                        <div>
                            <h4 className='text-lg font-bold tracking-wider'>Services</h4>
                            <p className='text-sm tracking-wider'>Contact Us</p>
                            <p className='text-sm tracking-wider'>Press</p>
                            <p className='text-sm tracking-wider'>Payrool</p>
                            <p className='text-sm tracking-wider'>Library</p>
                            <p className='text-sm tracking-wider'>Blog</p>
                            <p className='text-sm tracking-wider'>Help Center</p>
                        </div>
                        <div>
                            <h4 className='text-lg font-bold tracking-wider'>Resources</h4>
                            <p className='text-sm tracking-wider'>Terms</p>
                            <p className='text-sm tracking-wider'>Privacy Policy</p>
                            <p className='text-sm tracking-wider'>Contact Support</p>
                            <p className='text-sm tracking-wider'>FAQS</p>
                            <p className='text-sm tracking-wider'>Pricing</p>
                        </div>
                        <div>
                            <h4 className='text-lg font-bold tracking-wider'>Support</h4>
                            <p className='text-sm tracking-wider'>Contact</p>
                            <p className='text-sm tracking-wider'>Affiliates</p>
                            <p className='text-sm tracking-wider'>Sitemap</p>
                            <p className='text-sm tracking-wider'>Cancelation Policy</p>
                            <p className='text-sm tracking-wider'>Pricing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MyFooter