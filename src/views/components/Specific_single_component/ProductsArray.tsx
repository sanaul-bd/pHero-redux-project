import React from 'react';
import ProductCard from '../custom/common/ProductCard';

const ProductsArray = () => {
    const product = [1,2,3,4];


    return (
        <div className='flex justify-between px-4  w-full bg-slate-300 p-4'>
            {
                product.map(item =>
                    <ProductCard></ProductCard>
                )
            }
        </div>
    );
};

export default ProductsArray;