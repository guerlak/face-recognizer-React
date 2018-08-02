import React from 'react';

const Navigation = ({ onRouteChange, isLogged }) => {

    if (isLogged) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signOut')} className='f3 link dim black underline pa3 pointer'>Sign out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('login')} className='f3 link dim black underline pa3 pointer'>Sign in</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
         
        )
    }
}
export default Navigation;