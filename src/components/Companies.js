import React from 'react'

const Companies = () => {
    return (
        <div className='bg-neutral p-4 md:my-16 lg:my-24 rounded-sm'>
            <h3 className='uppercase text-xl my-16 md:text-3xl text-center' >We have more the 35+ <span className='text-primary font-bold'>Feature brands</span></h3>
            <div className='flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center'>
                <img src="https://i.ibb.co/3Fkphjv/inter-nutri-brand-logo-1.png" alt="inter-nutri-brand-logo" className='md:w-24 lg:w-40' />
                <img src="https://i.ibb.co/xs0HXxW/friskies-brand-logo.png" alt="friskies-brand-logo" className='md:w-24 lg:w-40' />
                <img src="https://i.ibb.co/zQj2K4h/cat-club.png" alt="cat-club" className='md:w-24 lg:w-40' />
                <img src="https://i.ibb.co/px7KT78/billi-brand-logo-1.png" alt="billi-brand-logo" className='md:w-24 lg:w-40' />
                <img src="https://i.ibb.co/qkGsB3b/felicia-brand-logo-1.png" alt="felicia-brand-logo" className='md:w-24 lg:w-40' />
            </div>
        </div>
    )
}

export default Companies