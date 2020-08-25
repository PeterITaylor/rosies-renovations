import React from 'react';
import './header.css'
import { Link, useHistory } from 'react-router-dom';

export const Header = ({children}) => {
    const history = useHistory();

    return (
        <header className='App-header'>
            Rosie's Renovations
            {children}
            <Link to="/">Home </Link>
            <Link to="/contact">Contact Us </Link>
            <Link to="/comments">Comments </Link>
        </header>
    )
}