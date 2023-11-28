import React from 'react';
import { BsCashCoin } from "react-icons/bs";
import { GiCash } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";

const Deals = () => {
    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-8 space-x-8 my-8'>
            <div className=''>
                <h1 className='text-3xl lg:text-4xl font-semibold text-secondary flex items-center'>Hot <span>
                    <img src="https://i.ibb.co/5kMFG76/fire.png" alt="fire" className='w-8 ml-4' />
                </span>
                </h1>
                <h1 className='text-3xl lg:text-4xl font-semibold text-secondary mb-6'>deals for you</h1>
                <p className='text-lg mt-2 tracking-wide text-primary'>Online shopping for retail sales direct to consumers.</p>
            </div>
            <div>
                <BsCashCoin className='w-8 h-8 text-accent mb-8' />
                <h1 className='text-3xl lg:text-4xl font-semibold text-secondary mb-6'>1.5% cashback</h1>
                <p className='text-lg mt-2 tracking-wide text-primary'>Shop now on TastyTrax and earn 1.5% cashback on every pet treat and meal. No minimum spend required.</p>
            </div>
            <div>
                <FaCalendarAlt className='w-8 h-8 text-accent mb-8' />
                <h1 className='text-3xl lg:text-4xl font-semibold text-secondary mb-6'>30-days terms</h1>
                <p className='text-lg mt-2 tracking-wide text-primary'>Buy your pet's favorites on TastyTrax and enjoy the convenience of paying in 30 days. No interest or fees. Shop stress-free today!</p>
            </div>
            <div>
                <GiCash className='w-8 h-8 text-accent mb-8' />
                <h1 className='text-3xl lg:text-4xl font-semibold text-secondary mb-6'>Save Money</h1>
                <p className='text-lg mt-2 tracking-wide text-primary'>Unlock savings on premium pet food and treats at TastyTrax. Shop now and enjoy:</p>
            </div>
        </div>
    )
}

export default Deals;