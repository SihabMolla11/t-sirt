import React, { useContext } from 'react';
import { RingContext } from '../../Grandpa/Grandpa';

const Brotehr = () => {

    const angti = useContext(RingContext)

    return (
        <div>
            <p>Brother section: {angti}</p>
        </div>
    );
};

export default Brotehr;