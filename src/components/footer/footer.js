import React from 'react';
import './footer.css'
import { Link, useHistory } from 'react-router-dom';

export const Footer = ({children}) => {
    return (
        <div className='footer'>
            {children}
        </div>
    )
}