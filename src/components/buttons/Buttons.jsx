import React from "react";
import "./button.css";
import { Link } from "react-router-dom";
import cvLink from "../../assets/pdf/Alexandra Dzygal Resume -  Web Developer.pdf";

export const ContactButton = () => {
    return (
        <div className="home__contact">
            <Link to="/contact"> <button type="button">Hire Me!</button>
            </Link>
        </div>
    );
};

export const DownloadButton = () => {
    return (
    <div className="home__contact">
        <a href={cvLink} rel="noreferrer" target="_blank"> <button type="button" className="resume">Download Resume</button> </a>
    </div>
    );
};