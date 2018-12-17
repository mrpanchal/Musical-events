import React from 'react';
import Carrousle from './Carrousel';
import Countdown from './Countdown';

const Featured = () => {
    return (
        <div style={{ position: 'relative' }}>

             <Carrousle />   
            
            <div className="artist_name">    
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>

            <Countdown />
        
        </div>
    );
};

export default Featured;