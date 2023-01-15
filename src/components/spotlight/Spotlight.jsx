import React from "react";

const Spotlight = (project, pdf) => {
    return(
        <div className="container spotlight__container">
            <div className="image__spotlight">
                <img className="active__image">{project}</img>
                <a href={pdf} download className='btn'>Download CV</a>
            </div>
        </div>
    )
}

export default Spotlight;