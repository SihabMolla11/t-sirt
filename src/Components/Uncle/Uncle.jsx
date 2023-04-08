import React, { useContext } from 'react';
import Cousin from './Cousin/Cousin';
import { Moneycontext } from '../Grandpa/Grandpa';

const Uncle = () => {

    const [money, setMoney] = useContext(Moneycontext)

    return (
        <div>
            <h2>this is uncle</h2>
            <p><small>Grandpa have monye {money}</small></p>
            <button onClick={()=> setMoney(money + 1000)}>sent to grandapa 1000taka</button>
            <section className='flex'>
                <Cousin></Cousin>
                <Cousin></Cousin>
            </section>
        </div>
    );
};

export default Uncle;