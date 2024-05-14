import React from 'react';
import ProductCard from '../custom/common/ProductCard';

const ProductsArray = () => {
    const product = [1, 2, 3, 4, 5];


    return (
        <div className='flex justify-between px-4  w-full bg-slate-100 p-4 mb-6'>
            {
                product.map(item =>
                    <ProductCard></ProductCard>
                )
            }
        </div>
    );
};

export default ProductsArray;