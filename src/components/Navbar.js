import React, { useState } from 'react';
import Hamburger from 'hamburger-react';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);


    const menu = [
        { id: 1, title: 'Home', link: '/home' },
        { id: 3, title: 'Discover', link: '/discover' },
        { id: 4, title: 'Favorites', link: '/favorites' },
        { id: 2, title: 'About', link: '/about' },
        { id: 5, title: 'Blog', link: '/blog' },
    ];
    return (
        <div className='bg-primary py-4 sticky top-0 left-0 right-0 z-[1000001]'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center'>
                    {/* logo starts */}
                    <div>
                        <a href="/" className='flex items-center'>
                            <img src="https://i.ibb.co/9YtxM2b/main-logo-main.png" alt="logo" />
                            <span className='text-secondary text-xl font-bold'>TastyTrax</span>
                        </a>
                    </div>
                    {/* logo ends */}

                    {/* menu starts */}
                    <div className='hidden md:flex justify-center items-center'>
                        {
                            menu.map(nav => <div
                                key={nav.id}

                            >
                                <a href={nav.link} className='text-white text-lg mx-2 hover:text-secondary transition-all duration-300'>{nav.title}</a>
                            </div>)
                        }
                    </div>
                    {/* menu ends */}

                    {/* icon for mobile starts */}
                    <div className='md:hidden'>
                        <Hamburger
                            color="#C44900"
                            direction='right'
                            duration={0.6}
                            className="w-6 h-6" size={24}
                            toggled={isOpen}
                            toggle={setOpen}
                        />
                    </div>
                    {/* icon for mobile ends */}



                    {/* btn starts */}
                    <div className='hidden md:flex justify-between items-center'>
                        <button className='text-lg rounded mx-2 py-2 px-4 font-bold bg-neutral text-secondary hover:bg-transparent hover:text-neutral hover:outline hover:outline-1 hover:outline-neutral transition-all duration-300'>Login</button>
                        <button className='text-lg rounded mx-2 py-2 px-4 font-bold outline outline-1 outline-neutral text-neutral hover:outline-none hover:bg-neutral hover:text-secondary  transition-all duration-300'>Start for free</button>
                    </div>
                    {/* btn ends */}
                </div>

                {/* Menu starts */}
                <div className={`${isOpen ? 'fixed top-[80px] left-0 bg-primary w-full transition-all duration-300 block md:hidden' : 'hidden'} `}>
                    {
                        menu.map(nav => <div
                            key={nav.id}
                        >
                            <a href={nav.link} className='text-white text-lg mx-2 hover:text-secondary transition-all duration-300'>{nav.title}</a>
                        </div>)
                    }
                </div>
                {/* Menu ends */}
            </div>
        </div >
    )
}

export default Navbar