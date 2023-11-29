import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";



const Products = () => {
    const products = [
        {
            "_id": "65668a54ba6a2a525f18a5fd",
            "index": 0,
            "previousPrice": "$52.98",
            "offerPrice": "$43.18",
            "picture": "https://i.ibb.co/bd1Xjmt/pet-food-1.png",
            "name": "Bernadine Macdonald"
        },
        {
            "_id": "65668a540963fe048727c553",
            "index": 1,
            "previousPrice": "$68.65",
            "offerPrice": "$38.12",
            "picture": " https://i.ibb.co/xgWw3p0/pet-food-2.png",
            "name": "Clements Alston"
        },
        {
            "_id": "65668a54682ba2480a5b0bb5",
            "index": 2,
            "previousPrice": "$28.16",
            "offerPrice": "$25.74",
            "picture": "https://i.ibb.co/TWpVfDQ/pet-food-3.png",
            "name": "Dixon Good"
        },
        {
            "_id": "65668a547108f9da9a93814b",
            "index": 3,
            "previousPrice": "$69.76",
            "offerPrice": "$19.99",
            "picture": " https://i.ibb.co/TWMKWRg/pet-food-4.png",
            "name": "Hazel Taylor"
        },
        {
            "_id": "65668a54ddcf4c92a6aaa786",
            "index": 4,
            "previousPrice": "$49.34",
            "offerPrice": "$46.05",
            "picture": "https://i.ibb.co/WWBsxdC/pet-food-5.png",
            "name": "Esmeralda Ruiz"
        },
        {
            "_id": "65668a5479d45e3366e429ea",
            "index": 5,
            "previousPrice": "$41.93",
            "offerPrice": "$31.96",
            "picture": " https://i.ibb.co/1XFj16w/pet-food-6.png",
            "name": "Kirk Bender"
        },
        {
            "_id": "65668a549badc545d61a7d03",
            "index": 6,
            "previousPrice": "$46.00",
            "offerPrice": "$38.81",
            "picture": "https://i.ibb.co/rks2kBW/pet-food-7.png",
            "name": "Mccoy Rivera"
        },
        {
            "_id": "65668a5487c703f4ce6c1be0",
            "index": 7,
            "previousPrice": "$32.07",
            "offerPrice": "$19.93",
            "picture": " https://i.ibb.co/8mdmWK8/pet-food-8.png",
            "name": "Wood Soto"
        },
        {
            "_id": "65668a54e5f1637c255911c4",
            "index": 8,
            "previousPrice": "$33.22",
            "offerPrice": "$25.24",
            "picture": " https://i.ibb.co/LngP96q/pet-food-9.png",
            "name": "Torres Gross"
        }
    ]
    return (
        <div className='mx-4 my-6 md:mx-10 md:my-12 lg:mx-16 lg:my-20'>
            <div className='flex justify-between items-center'>
                <div>
                    <h1 className='text-3xl text-primary'>Products</h1>
                </div>
                <div>
                    <p className='flex items-center text-lg text-secondary font-semibold'>
                        See All <FaArrowRight className='w-6 h-6 text-accent ml-4 ' />
                    </p>
                </div>
            </div>

            <div className='hidden md:mx-8 md:my-8 md:flex justify-evenly items-center'>
                <p className='text-lg text-primary font-semibold'>All</p>
                <p className='text-lg text-gray-500 font-semibold'>Cat</p>
                <p className='text-lg text-gray-500 font-semibold'>Dog</p>
                <p className='text-lg text-gray-500 font-semibold'>Rabbit</p>
                <p className='text-lg text-gray-500 font-semibold'>Fish</p>
                <p className='text-lg text-gray-500 font-semibold'>Bird</p>

            </div>

            <div className='my-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12'>
                {
                    products.map(product => <div
                        key={product._id}
                        className='relative h-[500px]'
                    >
                        <div className='bg-neutral rounded h-72 p-8'>
                            <h1 className='text-2xl'>{product.name}</h1>
                            <div className='flex items-center my-2'>
                                <p className='text-lg text-secondary'>{product.offerPrice}</p>
                                <p className='text-lg text-secondary ml-6 line-through'>{product.previousPrice}</p>
                            </div>
                        </div>
                        <div className='absolute top-28 flex justify-center'>
                            <img src={product.picture} alt={product.name} className='h-96' />
                        </div>
                        <div className='w-8 h-8 bg-secondary text-white rounded-full flex justify-center items-center absolute -top-4 right-6 cursor-pointer'>
                            <IoCartOutline className='w-5 h-5' />
                        </div>
                    </div>)
                }
            </div>

        </div>
    )
}

export default Products