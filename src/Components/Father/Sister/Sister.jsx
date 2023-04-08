import React, { useContext } from 'react';
import { Moneycontext } from '../../Grandpa/Grandpa';

const Sister = () => {

    const money = useContext(Moneycontext)

    return (

        <div>
            <p> <small>Grandpa have money {money}</small></p>
            <p>Sister page</p>
        </div>
    );
};

export default Sister;