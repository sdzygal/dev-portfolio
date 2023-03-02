import React from "react";
import "./skills.css";
import SkillsCanvas from "./SkillsCanvas";
import SocialMedia from "../../components/socials/SocialMedia";


const skillsSummary = 'I specialize in working with both front-end and back-end development. My tech stack: JavaScript, Node.js, React.js, Express, MongoDB, MySQL, working with APIs and very interested in self-development and learning new languages. I persistently learn new technologies and improve as a developer to be a good professional. '

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