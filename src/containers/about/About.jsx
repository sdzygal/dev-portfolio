import React from "react";
import './about.css';


const About = () => {
    return (
        <div className="about">
            <div className="about__content">
                <div className="about__content-header">
                <h1>About Me</h1>
                <p>My experience</p>
            </div>
                <img src="#" className="about__content-img" />

                <div className="about__content-data">
                    <p className="about__content-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veritatis assumenda adipisci
                        eveniet, iure natus amet aliquam consectetur omnis aspernatur deserunt sapiente porro aperiam
                        repudiandae molestiae eius facilis? Incidunt, accusamus.
                    </p>
                </div>

                <div className="about__content-info">
                    <div>
                        <span className="about__content-infoTitle">01+</span>
                        <span className="about__content-infoName">Years <br/> experience </span>
                    </div>

                    <div>
                        <span className="about__content-infoTitle">10+</span>
                        <span className="about__content-infoName">Completed <br/> projects</span>
                    </div>

                    <div>
                        <span className="about__content-infoTitle">08+</span>
                        <span className="about__content-infoName">Companies <br/> worked with</span>
                    </div>
                </div>
        </div>
            </div>

    );
};

export default About;