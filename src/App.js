import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Companies from './components/Companies';
import Deals from './components/Deals';

const App = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto'>
                <Home></Home>
                <Companies></Companies>
                <Deals />
            </div>
        </div>
    )
}

export default App