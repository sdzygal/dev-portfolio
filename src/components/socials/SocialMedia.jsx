import React from "react";
import "./socials.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";


const SocialMedia = () => {
    return (
        <div className="socialMedia__container">
            <div className="socialMedia__container-icons">
            <a href="https://www.linkedin.com/in/sdzyhal/" rel="noreferrer" target="_blank"><AiFillLinkedin className="linkedin" /></a>
            <a href="https://github.com/sdzygal" target="_blank"><AiFillGithub className="git" /></a>
            </div>
        </div>
    );
}

export default SocialMedia;