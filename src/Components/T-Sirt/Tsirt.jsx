import React from 'react';
import "./Tsirt.css"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Tsirt = ({tsirt, handelAddToCart}) => {
    const {name, price, picture, gender} = tsirt;

    return (
        <div>
            <div className='tsirt-card'>
                <img src={picture} alt="" />
                <div className='card-info'>
                    <h3>Name: {name}</h3>
                    <h2>Price: ${price}</h2>
                    <button onClick={()=>handelAddToCart(tsirt)}>Buy Now  <ShoppingBagIcon className="h-t-w-6 " /></button>
                </div>
            </div>
        </div>
    );
};

export default Tsirt;