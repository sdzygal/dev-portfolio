import React, { useEffect } from "react";
import TagCloud from "TagCloud";
import "./skills.css";


const SkillsCanvas = () => {
    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = [
                "Git",
                "JSON",
                "Railway",
                "HTML",
                "React",
                "REST",
                "SQL",
                "MongoSB",
                "AWS",
                "Bootstrap",
                "npm",
                "CSS",
                "jQuery",
                "JavaScript",
                "Express.js",
                "Passport.js",
                "Redux",
                "Mongoose",
                "NUX",
                "Postman",
                "IDEE",
                "NodeJS",
                "Webstorm",
                "Google Cloud",
                "Figma",
                "Illustrator",
                "Visual Studio Code",
                "Three.js",
                "Stripe",
                "Canvas",
            ];

            const options = {
              radius: 280,
                margin: '-3rem 0 0 -2rem',
                textFont: '\'Poppins\', sans-serif',
                depth: 1.5,
                maxSpeed: "normal",
                initSpeed: "normal",
                keep: true,
            };
            TagCloud(container, texts, options);
        };
    }, []);

    return (
        <>
        <div className='canvas-container'>
                <ul>
                    <span className="tagcloud"></span>
                </ul>
            </div>
        </>
    );
};


export default SkillsCanvas;