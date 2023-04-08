import React, { useContext } from 'react';
import { RingContext } from '../../../Grandpa/Grandpa';

const Speasial = ({ring}) => {

    const angti = useContext(RingContext)

    return (
        <div>
            <p>Speasial wif : {angti}</p>
        </div>
    );
};

export default Speasial;