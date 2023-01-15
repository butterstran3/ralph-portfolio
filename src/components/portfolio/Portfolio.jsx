import React from "react";
import './portfolio.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpeg';
import image5 from '../../assets/image5.jpeg';
import Spotlight from "../spotlight/Spotlight";

const data = [
    {
        id: 1,
        image: image1
    },
    {
        id: 2,
        image: image2
    },
    {
        id: 3,
        image: image3,
    },
    {
        id: 4,
        image: image4
    },
    {
        id: 5,
        image: image5
    }
]

const Portfolio = () => {

    const imageClick = (image, pdf) => {
        <Spotlight project={image} pdf={pdf}/>;
    }

    return (
        <section id='portfolio'>
            <div className='container portfolio__container'>
                {
                    data.map(({id, image}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img className="image" src={image} onClick={imageClick(image, id)}/>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )

}

export default Portfolio;