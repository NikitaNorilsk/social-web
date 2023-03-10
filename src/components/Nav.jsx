import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';

export default function Nav() {
    return (
        <div>
            <nav className='nav bg-blue-300 p-4 h-[80vh] text-xl'>
                <div>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs">Messages</NavLink>
                </div>
                <div>
                    <NavLink to="/news">News</NavLink>
                </div>
                <div>
                    <NavLink to="music">Music</NavLink>
                </div>
                <div>
                    <NavLink to="settings">Settings</NavLink>
                </div>
            </nav>
        </div>
    )
}
