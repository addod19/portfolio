import React from 'react';

import './Banner.css';

const Banner = ( {children , title, subtitle} ) => {
    return(
        <div className="banner">
            <h1>{title}</h1>
            <div>hey guys</div>
            <p>{subtitle}</p>
            { children }
        </div>
    )
}

export default Banner;