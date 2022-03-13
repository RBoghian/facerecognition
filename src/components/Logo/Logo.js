import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import Micro from './Micro.JPG'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"><img alt ='logo' src={Micro}/></div>
            </Tilt>
        </div>
    );
}

export default Logo;