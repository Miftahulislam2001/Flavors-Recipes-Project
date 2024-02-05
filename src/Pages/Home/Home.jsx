import React from 'react';
import Header from '../../Components/Header/Header/Header';
import Recipes from '../../Components/Header/Recipes/Recipes';


const Home = () => {
    return (
        <div className='w-full flex flex-col'>
            
            <Header title={
                <p>Taste the world with <br /> FlavorsRecipes</p>
            }
            type='home'
            />
            <section id="recipes" className='md:max-w-[1440px] mx-auto px-4 md:px-20'>
        <Recipes />
      </section>
        </div>
    );
};

export default Home;