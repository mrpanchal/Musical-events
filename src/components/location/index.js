import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
           
           <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5616521452575!2d72.53511851448913!3d23.039861721464334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84b94ea3d3fb%3A0x50fab4b71c638080!2sGMDC+Ground!5e0!3m2!1sen!2sin!4v1544956937900" 
                width="100%" 
                height="500px" 
                frameBorder="0"                 
                allowFullScreen>
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        
        </div>
    );
};

export default Location;