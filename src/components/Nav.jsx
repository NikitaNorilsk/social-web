import React from 'react'
import '../App.css';

export default function Nav() {
    return (
        <div>
            <nav className='nav bg-blue-300 p-4 h-[80vh] text-xl'>
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">Messages</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Music</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
            </nav>
        </div>
    )
}
