import React from "react";
import "./skills.css";
import SkillsToggle from "./SkillsToggle";


const Skills = () => {

    return (
        <div className="skills">
            <div className="skills__header-content">
            <h1>Skills</h1>
                <p>My Technical Stack</p>
        </div>
        <SkillsToggle />
        </div>
    );
};

export default Skills;