import React from 'react';
import Mysalf from './Mysalf/Mysalf';
import Brotehr from './Brotehr/Brotehr';
import Sister from './Sister/Sister';

const Father = ({ring}) => {
    return (
        <div>
            <h2>this is father</h2>
            <section className='flex'>
                <Mysalf ring={ring}/>
                <Brotehr/>
                <Sister/>
            </section>
        </div>
    );
};

export default Father;