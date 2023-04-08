import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SparklesIcon } from '@heroicons/react/24/solid'
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to='/' >
            <SparklesIcon className="h-6-w-6 " />
            <h3>T-Sirt</h3>
            </Link>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/review'>Order Review</NavLink></li>
                <li><NavLink to='/grandpa'>Grandpa</NavLink></li>
                <li><NavLink to='/contract'>Contract</NavLink></li>
            </ul>
        </nav>
    );
};

export default Header;