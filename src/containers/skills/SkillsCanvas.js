import React, { useEffect } from "react";
import {skillsData} from "../../utils/skillsData";
import "../../utils/tagcanvas";


const SkillsCanvas = () => {
    useEffect(() => {
        console.log('Loading TagCanvas...');
        const TagCanvas = window.TagCanvas;
        const tagCanvasOptions = {
            textColour: '#435acb',
            outlineThickness: 0.5,
            outlineColour: 'transparent',
            maxSpeed: 0.02,
            freezeActive: true,
            shape: 'sphere',
            zoom: 0.8,
            wheelZoom: false,
            noSelect: true,
            textFont: '\'Poppins\', sans-serif',
            fadeIn: 3000,
            initial: [0.3, -0.1],
            depth: 1.5,
        };
        try {
            TagCanvas.Start('tag-canvas', 'tags', tagCanvasOptions);
        } catch (e) {
            console.log('Canvas error.');
            console.log(e);
        }
    }, []);

    return (
        <div className='canvas-container'>
            <canvas
                id='tag-canvas'
                width='820'
                height='600'
                style={{
                    maxWidth: '1000px',
                    width: '100%',
                    zIndex: '99',
                    position: 'relative',
                    margin: '-3rem 0 0 -2rem',
                }}
                className='to-fade-in fast-anim'
            ></canvas>
            <div id='tags' style={{ display: 'none' }}>
                <ul>
                    {skillsData.map(({title, href}) => (
                        <li key={title}>
                            <a href={href}>{title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default SkillsCanvas;