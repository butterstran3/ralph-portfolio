import React from "react";
import './portfolio.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpeg';
import image5 from '../../assets/image5.jpeg';
import project1 from '../../assets/BuildingDesign2017.pdf';

const data = [
    {
        id: 1,
        image: image1,
        project_file: project1
    },
    {
        id: 2,
        image: image2,
        project_file: project1
    },
    {
        id: 3,
        image: image3,
        project_file: project1
    },
    {
        id: 4,
        image: image4,
        project_file: project1
    },
    {
        id: 5,
        image: image5,
        project_file: project1
    }
]

const Portfolio = () => {

    return (
        <section id='portfolio'>
            <div className='container portfolio__container'>
                {
                    data.map(({id, image, project_file}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className='portfolio__item-image'>
                                    <img className="image" src={image}/>
                                    <a className="btn view__button" href={project_file} download>Download Project</a>
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