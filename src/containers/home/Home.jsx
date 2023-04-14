import React from "react";
import './home.css';
import { ContactButton, DownloadButton } from "../../components/buttons/Buttons";
import { motion as m } from "framer-motion";



const Home = () => {
    return (
        <div className="home">
    <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="home__content">
        <h1>Hello, <span>I</span> <span>am Alexandra</span>
        <br/>
            Full-Stack<span> Web</span> <span>Developer</span>
        </h1>
    </m.div>

            <div className="home__contact">
                <DownloadButton />
            <ContactButton />
        </div>
        </div>

    );
};

export default Home;