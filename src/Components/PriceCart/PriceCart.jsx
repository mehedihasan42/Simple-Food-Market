import React from 'react';
import Features from '../Feature/Features';

const PriceCart = ({price}) => {
    return (
        <div className='bg-orange-200 mt-8 p-4 rounded'>
            <h2 className='text-3xl text-center font-extrabold'>{price.name}</h2>
            <p className='text-center'><span className='text-2xl text-orange-600 font-bold'>{price.price}</span><span className='font-bold'>/kg</span></p>
        
            <p><span className='font-bold text-orange-600 text-2xl'>Features:</span>
            {
                price.features.map((feature,idx)=><Features
                key={idx} feature={feature}
                ></Features>)
            }

            </p>
            <div className='text-center m-auto'>
            <button className='bg-orange-400 p-2 rounded mt-2 hover:bg-orange-500'>Buy Now</button>
            </div>
        </div>
    );
};

export default PriceCart;