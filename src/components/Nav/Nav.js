import React from 'react';
import './Nav.css';
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Blog from "../../pages/Blog/Blog";
import {Link} from "react-router-dom";

function Nav({isAuth, setAuth}) {

    console.log(isAuth);

    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {isAuth && <li><Link to="/blogposts">Blog</Link></li>}
                    {isAuth && <li><Link to="/profile">Profile</Link></li>}
                </ul>
                <div className="button-container">
                <button type="button" onClick={ () => setAuth(prev => !prev)}>Inloggen</button>
                </div>
            </nav>
        </>
    )
}

export default Nav;