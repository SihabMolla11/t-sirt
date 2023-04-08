import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tsirt from '../T-Sirt/Tsirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';


const Home = () => {
    const tSirts = useLoaderData();


    const [cart, setCart] = useState([]);

    const handelAddToCart = tSirts => {
        const exist = cart.find(tsirt => tsirt._id === tSirts._id);
        if(exist){
            toast('Here is your toast.')
        }
        else{
        const newCart = [...cart, tSirts ];
        setCart(newCart)
        }
    }

    const handelDeleteTsirt = id =>{
        const remaining = cart.filter(tsirt => tsirt._id !== id)
        setCart(remaining)

    }

    return (
        <div className='home-container'>
            <div className='tsirts-container'>
                {
                    tSirts.map(tsirt => <Tsirt
                        key={tsirt._id}
                        tsirt={tsirt}
                        handelAddToCart={handelAddToCart}
                    ></Tsirt>)
                }
            </div>

            <div className='cart-container'>
                <Cart
                    key={cart._id}
                    cart={cart}
                    handelDeleteTsirt={handelDeleteTsirt}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;