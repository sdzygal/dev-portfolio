import React from "react";
import "./skills.css";
import SkillsCanvas from "./SkillsCanvas";
import SocialMedia from "../../components/socials/SocialMedia";


const skillsSummary = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veritatis assumenda adipisci eveniet, iure natus amet aliquam consectetur omnis aspernatur deserunt sapiente porro aperiam repudiandae molestiae eius facilis? Incidunt, accusamus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus veritatis assumenda adipisci eveniet, iure natus amet.'

const Skills = () => {

    return (
        <div className="skills">
            <div className="skills__header-content">
            <h1>Skills</h1>
                <p>My Technical Stack</p>
        </div>
            <div className="skills__main">
                <SocialMedia />
                <p>{skillsSummary}</p>
                  <SkillsCanvas />
            </div>
        </div>
    );
};

export default Skills;