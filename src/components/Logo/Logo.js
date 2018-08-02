import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import icon from './icon-human-head.png';
 
const Logo = () =>{

    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 130, width: 130 }} >
                <div className="Tilt-inner pa4"> 
                    <img style={{paddingTop: '5px'}} alt="logo" src={icon}/>
                </div>
            </Tilt>
        </div>
    )
}
export default Logo;