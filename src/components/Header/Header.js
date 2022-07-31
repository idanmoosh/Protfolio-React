import './header.css'
import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {

    return (
        <div className='header'>
            <h1 className='logo'> Idan Haim</h1>
            <ul >
                <li><Link to="/" className='Link'>Home</Link></li>
                <li><Link to="/work" className='Link'>Work</Link></li>
                <li><Link to="/about" className='Link'>About</Link></li>
            </ul>

        </div>
    )


}