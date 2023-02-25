import React from "react";
import './home.css';
import {Link} from "react-router-dom";


const Home = () => {
    return (
        <div className="home">
    <div className="home__content">
        <h1>Hello, I am Alexandra
        <br/>
            Fullstack Web Developer
        </h1>
    </div>

            <div className="home__contact">
              <button type="button" className="resume">Download Resume</button>
               <Link to="/contact"> <button type="button">Hire Me!</button>
             </Link>
            </div>

        </div>
    );
};

export default Home;