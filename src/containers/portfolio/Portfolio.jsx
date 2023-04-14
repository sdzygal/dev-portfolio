import React, { useState } from "react";
import { portfolioData } from "../../utils/portfolioData";
import "./portfolio.css";
import { Link } from "react-router-dom";
import { AnalyticEvent } from "../../utils/google-analytics";
import { motion as m } from "framer-motion";
import PageNotFound from "../not_found/PageNotFound";

const filterData = [
    {
        filterId: 1,
        label: "All",
    },
    {
        filterId: 2,
        label: "Fullstack Development",
    },
    {
        filterId: 3,
        label: "Frontend Development",
    },
];

const Portfolio = () => {
    const [filteredValue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    function handleFilter(currentId) {
        setFilteredValue(currentId);
    }

    function handleHover(index) {
        setHoveredValue(index);
    }

    const filteredItems =
        filteredValue === 1
            ? portfolioData
            : portfolioData.filter((item) => item.id === filteredValue);

    try {
        return (
            <div className="portfolio__container">
                <h1>Projects</h1>
                <p>My portfolio</p>
                <ul className="portfolio__container-filter">
                    {filterData.map((item) => (
                        <li
                            className={item.filterId === filteredValue ? "subactive" : ""}
                            onClick={() => handleFilter(item.filterId)}
                            key={item.filterId}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
                <div className="portfolio__container-cards">
                    {filteredItems.map((item, index) => (
                        <div
                            className="portfolio__container-cards_item"
                            key={`cardItem${item.name.trim()}`}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <m.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.75, ease: "easeOut" }}
                                className="portfolio__container-cards_item-image"
                            >
                                <a>
                                    <img alt="project" src={item.image} />
                                </a>
                            </m.div>

                            <div className="overlay">
                                {index === hoveredValue && (
                                    <div>
                                        <p>{item.name}</p>
                                        <Link
                                            to={item.link}
                                            target="_blank"
                                            onClick={() =>
                                                AnalyticEvent("Repository Visit", "Visited")
                                            }
                                        >
                                            <button>Open</button>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        return <PageNotFound />;
    }
};

export default Portfolio;
