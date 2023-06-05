import React from 'react';
import './Login.css';

function Login({isAuth, setAuth}) {

    return (
        <>
            <div className="content">
                <h1>Login</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac vehicula enim. Nulla facilisi. Vestibulum id dapibus tortor, eget convallis lorem. Nulla facilisi. Nam id ultricies tortor, a luctus tellus.</p>
                <button className="login-button" type="button" onClick={ () => setAuth(prev => !prev)}>Inloggen</button>
            </div>

        </>
    )
}

export default Login;