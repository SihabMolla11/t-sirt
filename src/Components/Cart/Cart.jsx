import React from 'react';
import "./Cart.css"

const Cart = ({cart, handelDeleteTsirt}) => {

    let massage
     if(cart.length === 0){
        massage = <p>please sum product for </p>
    }
    else{
       massage =  <div>
       <h2>your are a Borolok</h2>
       <small>thanks for westing money on it</small>
   </div>
    }


    return (
        <div>
            <h2 className={cart.length === 1 ? 'orange' : 'none'}>Order summary {cart.length}</h2>
            <p className={`bold  ${cart.length === 3 ? 'tomato' : ''}`}>conditional styles</p>
            {massage}
            {
                cart.length > 2 ? <span>good aro kino</span> : <span>tumi ki fokir naki aro kino </span>
            }
           {
            cart.map(tsirt =>  <div key={tsirt._id}>
                <p > <span className='tsier'>{tsirt.name} <button onClick={()=> handelDeleteTsirt(tsirt._id)}>Delete t-sirt</button></span> </p>
            </div>)
           }
           {
            cart.length === 2 && <p>vai ato sasra mi koro keno ar koi akt a kino na</p>
           }

           {
            cart.length === 3 || <p>tumi to logical || use kore fleco</p>
           }
        </div>
    );
};

export default Cart;


/*
*CONDITIONAL RENDERING
*1. USE -- if else line number 6
*
*2. USE TERNARY OPERATOR : condition ? 'true value' : 'false Value'
*
*LOGICAL && (if: the condition is true then the text thing will be display)
*
*LOGICAL || (if: the condition is false the the text thing will be display)
*/



/*
*  CONDITIONAL STYLE
*   CONDITIONAL CSS CLASS
*/