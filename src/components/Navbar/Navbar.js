import React from 'react';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <a href="/" className="brand"><h1>Samuel Park</h1></a>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;