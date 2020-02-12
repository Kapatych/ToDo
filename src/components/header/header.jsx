import React from 'react';
import './header.css'

const Header = ( {todo, done} ) => {
    return (
        <header className='header d-flex'>
            <h1>ToDo List</h1>
            <h2>{todo} more to do, {done} done</h2>
        </header>
    )
};

export default Header;