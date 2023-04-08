import React from 'react';
import Cousin from '../Uncle/Cousin/Cousin';

const Unty = () => {
    return (
        <div>
            <h2>this is Uny page</h2>
            <section className='flex'>
                <Cousin/>
                <Cousin/>
            </section>
        </div>
    );
};

export default Unty;