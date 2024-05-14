import React, { Children } from 'react';
import DsSlider from '../../components/custom/DsSlider';
import ProductsArray from '../../components/Specific_single_component/ProductsArray';

const Home = () => {
    return (
        <div className='container'>
            <main>
                <div className='py-20'>
                    <DsSlider />
                </div>
                <div className='container '>
                    <h2 className='ms-1 my-3 font-semibold'>Available Shops here</h2>
                    <ProductsArray />
                </div>
            </main>
        </div>
    );
};

export default Home;