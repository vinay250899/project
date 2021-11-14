import React from 'react'
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                   
                </ul>

                <footer className="footer">
                    <p>
                        @2021 Project
                    </p>
            </footer>
            </nav>
            
        </div>
    )
}

export default Navbar;