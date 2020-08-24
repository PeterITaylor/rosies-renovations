import React from 'react';
import logo from '../../assets/logo.svg';
import './header.css'
import { Link, useHistory } from 'react-router-dom';

export const Header = ({children}) => {
    const history = useHistory();

    return (
        <header className='App-header'>
            {children}
            <Link to="/">Home </Link>
            <Link to="/about">About </Link>
            <Link to="/shop">Shop </Link>
        </header>
    )
}