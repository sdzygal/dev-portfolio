import React from "react";
import "./button.css";
import { Link } from "react-router-dom";
import cvLink from "../../assets/pdf/Alexandra_Dzygal_Resume.pdf";
import { AnalyticEvent } from "../../utils/google-analytics";


// Button click tracking
const ButtonClickTracking = (buttonName) => {
    AnalyticEvent("Button Click", buttonName);
}


export const ContactButton = () => {
    return (
        <div className="home__contact">
            <Link to="/contact"> <button type="button" onClick={() => {ButtonClickTracking('Contact Me')}}>Hire Me!</button>
            </Link>
        </div>
    );
};

export const DownloadButton = () => {
    return (
    <div className="home__contact">
        <a href={cvLink} rel="noreferrer" target="_blank"> <button type="button" className="resume" onClick={() => {ButtonClickTracking('Resume Download')}}>Download Resume</button> </a>
    </div>
    );
};

