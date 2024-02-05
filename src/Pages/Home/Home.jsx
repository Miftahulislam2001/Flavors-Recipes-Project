import React from 'react';
import Header from '../../Components/Header/Header/Header';

const Home = () => {
    return (
        <div className='w-full flex flex-col'>
            <Header title={
                <p>Taste the world with <br /> FlavorsRecipes</p>
            }
            type='home'
            />
        </div>
    );
};

export default Home;