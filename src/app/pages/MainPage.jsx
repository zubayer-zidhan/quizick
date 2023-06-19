import React from 'react';

import Navbar from '../components/Navbar';
import Cards from './Cards';

const MainPage = () => {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center mt-32'>
                <Cards />
            </div>
        </div>
    )
}

export default MainPage;