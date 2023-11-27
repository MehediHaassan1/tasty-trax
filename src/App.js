import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
    return (
        <div>
            <Navbar />
            <div className='max-w-7x mx-auto'>
            <Home></Home>
            </div>
        </div>
    )
}

export default App