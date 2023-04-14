import React from "react";
import LazyLoad from 'react-lazyload';
import './about.css';
import imgUrl from '../../assets/ph2.png';
import {Animate} from "react-simple-animate";
import {DownloadButton} from "../../components/buttons/Buttons";
import SocialMedia from "../../components/socials/SocialMedia";

const professionalSummary = ' I am a promising and passionate software developer who is continuously learning and growing. I specialize in working with both front-end and back-end development. I always focus on writing highly readable, easily maintainable and scalable code, and understand the importance of creating intuitive user interfaces and testing things so they can work and optimize your code for the best performance you can make of it.';
const About = () => {
    return (
        <div className="about">

            <div className="about__content">
                <div className="about__content-header">
                <h1>About Me</h1>
                <p>My experience</p>
            </div>
                <Animate
                play
                duration={1}
                delay={0}
                start={{
                    transform: "translateX(-200px)"
                }}
                end={{
                    transform: "translateX(0px)"
                }}
            >
                <div className="about__content-data">
                    <SocialMedia />
                    <LazyLoad>
                        <img src={imgUrl} alt="headshot" className="about__content-img" />
                    </LazyLoad>
                    <div className="dashboard">
                        <span className="about__content-description">
                            <p>I am a passionate software developer with expertise in front-end and back-end development. My focus is on creating scalable and maintainable code with intuitive user interfaces that are thoroughly tested for optimal performance. </p>
                            <p> Thank you for considering me, and I look forward to working with you.</p>
                                                        </span>

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
                        <div className="about-btn">
                            <DownloadButton  />
                            </div>
              </div>
                </div></Animate>
  </div>

        </div>

    );
};

export default About;