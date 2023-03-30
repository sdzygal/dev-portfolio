import React from "react";
import "./socials.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { AnalyticEvent } from "../../utils/google-analytics";

const socialTrackingEvent = (socialName) => {
    AnalyticEvent("Social Link Click", socialName);
}


const SocialMedia = () => {
    return (
        <div className="socialMedia__container">
            <div className="socialMedia__container-icons">
           <a href="https://www.linkedin.com/in/sdzyhal/" rel="noreferrer" target="_blank" onClick={() => socialTrackingEvent('LinkedIn')}><AiFillLinkedin className="linkedin" /></a>
           <a href="https://github.com/sdzygal" rel="noreferrer" target="_blank" onClick={() => socialTrackingEvent('GitHub')}><AiFillGithub className="git" /></a>
            </div>
        </div>
    );
}

export default SocialMedia;