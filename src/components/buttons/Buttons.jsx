import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

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
        <button type="button" className="resume">Download Resume</button>
    </div>
    );
};