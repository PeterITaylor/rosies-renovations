import React, { useState } from 'react';
import './home.css'

export const Home = () => {
    const [shells, setShells] = useState(0);
    const [level, setLevel] = useState(1);

    const updateShells = (value) => {
        setShells(shells+value)
    }

    const levelUp = (value) => {
        if (shells >= 10) {
            setShells(shells-10)
            setLevel(level+value)
        }
        return
    }
    return (
        <div className='home'>
            {shells} <br />
            <button onClick={() => updateShells(level)}>Need More</button>
            <button onClick={() => updateShells(-1*level)}>Need Less</button>
            <button onClick={() => levelUp(1)}>Level Up</button>
            <button onClick={() => levelUp(1)}>Level Up</button>
        </div>
    )
}