import React from 'react';
import './Profile.css';

function Profile({isAuth, setAuth}) {

    return (
        <>
            <div className="content">
                <h1>Profile</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac vehicula enim. Nulla facilisi. Vestibulum id dapibus tortor, eget convallis lorem. Nulla facilisi. Nam id ultricies tortor, a luctus tellus.</p>
                <button className="logout-button" type="button" onClick={ () => setAuth(prev => !prev)}>Uitloggen</button>
            </div>

        </>
    )
}

export default Profile;