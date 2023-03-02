import React from "react";
import './home.css';
import { ContactButton, DownloadButton } from "../../components/buttons/Buttons";



const Home = () => {
    return (
        <div className="home">
    <div className="home__content">
        <h1>Hello, <span>I</span> <span>am Alexandra</span>
        <br/>
            Fullstack<span> Web</span> <span>Developer</span>
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