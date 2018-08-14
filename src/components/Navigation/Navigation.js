import React from 'react';

const Navigation = ({ onRouteChange, isLogged }) => {

    if (isLogged) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signOut')} className='f5 link dim black pa3 pointer'>Sign out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                {/* <p onClick={() => onRouteChange('login')} className='f4 link dim black pa3 pointer'>Sign in</p>
                <p onClick={() => onRouteChange('register')} className='f4 link dim black pa3 pointer'>Register</p> */}
            </nav>
         
        )
    }
}
export default Navigation;