import React from "react";
import "./socials.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";


const SocialMedia = () => {
    return (
        <div className="socialMedia__container">
            <div className="socialMedia__container-icons">
            <a href="#"><AiFillLinkedin className="linkedin" /></a>
            <a href="#"><AiFillGithub className="git" /></a>
            </div>
        </div>
    );
}

export default SocialMedia;