import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
    const [prices,setPrices] = useState([])

    useEffect(()=>{
        fetch('price.json')
        .then(res=>res.json())
        .then(data=>setPrices(data))
    },[])

    return (
        <div>
            <h2 className='text-5xl text-center bg-orange-400 font-bold p-4'>Affortable prices</h2>
           <div className='grid md:grid-cols-4 gap-4 mx-8'>
           {
                prices.map(price=><PriceCart key={price.id} price={price}></PriceCart>)
            }
           </div>
        </div>
    );
};

export default PriceList;