import React, { useState } from "react";
import {skillsData} from "./skillsData";
import {Line} from "rc-progress";
import {Animate, AnimateKeyframes} from "react-simple-animate";
import { BsChevronDown } from "react-icons/bs";


function SkillsToggle(skill) {
        const [toggle, setToggle] = useState(false);

    const toggleHandler = () => {
        setToggle((prevState) => !prevState);
    };

    return (
        <div>
            {skillsData.map((item, i) => (
                <div key={i} className="skills__content-wrapper">
                {/*<Animate*/}
                {/*    play*/}
                {/*    duration={1}*/}
                {/*    delay={0.3}*/}
                {/*    start={{*/}
                {/*        transform: 'translateX(-200px)'*/}
                {/*    }}*/}

                {/*    end={{transform: 'translateX(0px)'*/}
                {/*}}>*/}
                    <div className="skills__button-wrapper">
                        <i className="skillsIcon"> {item.icon}</i>
                    <button className="skills-btn" onClick={toggleHandler}>{item.label}</button>
                        <BsChevronDown className="arrowIcon"/>
                </div>
                        {
                            item.data.map((skillItem, j) => (
                                <AnimateKeyframes
                                play
                                duration={1}
                                keyframes={["opacity: 1", "opacity: 0" ]}
                                iterationCount="1"
                                >
                                    {toggle && (
                                <div className="progressBar" key={j}>
                                <p>{skillItem.skillName}</p>
                                    <Line
                                    percent={skillItem.percentage}
                                    strokeWidth="2"
                                    strokeColor="var(--first-color)"
                                    trailWidth="2"
                                    trailColor="var(--first-color-lighter)"
                                    strokeLinecap="round"
                                    />
                                </div>)}
                                </AnimateKeyframes>
                            ))
                        }

                {/*</Animate>*/}
                </div>
            ))}
        </div>
    );


}

export default SkillsToggle;