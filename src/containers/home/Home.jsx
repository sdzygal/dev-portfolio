import React from "react";
import './home.css';
import {ContactButton, DownloadButton} from "../../components/buttons/Buttons";
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
      <DownloadButton />
            <ContactButton />
        </div>
        </div>

    );
};

export default Home;