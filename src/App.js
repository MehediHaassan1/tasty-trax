import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Companies from './components/Companies';
import Deals from './components/Deals';
import About from './components/About';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import MyFooter from './components/MyFooter';

const App = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto'>
                <Home></Home>
                <Companies></Companies>
                <Deals />
                <About />
                <Products />
                <Testimonials />
                <MyFooter />
            </div>
        </div>
    )
}

export default App