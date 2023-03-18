import React from "react";
import "./skills.css";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import {TagCloudOptions} from "@frank-mayer/react-tag-cloud";



const SkillsCanvas = () => (
                <TagCloud options={(w: Window & typeof globalThis): TagCloudOptions => ({
                    radius: Math.min(500, w.innerWidth, w.innerHeight) / 2,
                    maxSpeed: "normal", initSpeed: "normal",
                    keep: true, margin: '-5rem 0 0 -2rem', textFont: '\'Poppins\', sans-serif', depth: 1.5,
                    })}
                          onClick={(tag: string, ev: MouseEvent) => alert(tag)}
                          onClickOptions={{ passive: true }}

                >
                    {[
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
            ]}
                    </TagCloud>
);



export default SkillsCanvas;