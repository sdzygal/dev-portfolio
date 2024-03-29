import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";
import { Animate } from "react-simple-animate";
import { GiSmartphone, GiEnvelope} from "react-icons/gi";
import Popup from "reactjs-popup";
import { AnalyticEvent } from "../../utils/google-analytics";

const Contact = () => {
    const form = useRef();
    const [modalMessage, setModalMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);

    const openModal = (message) => {
        setModalMessage(message);
        setIsModalOpen(true);
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        try {
            const result = await emailjs.sendForm('service_7t6as7k', 'template_ql1604d', form.current, 'G0YKxxoi0_SlvtXNQ');
            AnalyticEvent("Email", "Sent");
            openModal('Thanks for your email. I will contact you very shortly!');
        } catch (error) {
            AnalyticEvent("Email", "Failed");
            openModal('Something went wrong. Please, try again later');
        }
    };

    return (
        <div className="contact">
            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >
                    <div className="contact__content-header">
                        <h1>Get in touch</h1>
                        <h1 className="projectIdea">Have a project?</h1>
                    </div>
                </Animate>
                <div className="contact__body">
                    <Animate
                        play
                        duration={1}
                        delay={0}
                        start={{
                            transform: "translateX(-200px)"
                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}
                    >
                        <Popup open={isModalOpen} closeOnDocumentClick onClose={closeModal}>
                            <div className="modal">
                                <a href="#" target="_self" className="close" onClick={closeModal}>
                                    &times;
                                </a>
                                <div className="message">
                                    <h2>{modalMessage}</h2>
                                </div>
                            </div>
                        </Popup>
                        <form ref={form} onSubmit={sendEmail} className="contact__content-form">
                            <div className="contact__content-formWrapper">
                                <input required name="name" className="inputName" type="text" placeholder="Your name"  />
                                <input required name="email" className="inputEmail" type="text" placeholder="Your email"  />
                            </div>
                            <textarea name="project" className="inputProject" type="text" rows="0" placeholder="Project details" />
                            <label htmlFor="project" className="projectLabel">
                                <ul>
                                    <li>Your project</li>
                                    <li>Current goals</li>
                                    <li>Success criteria</li>
                                    <li>Your budget</li>
                                </ul>
                            </label>
                            <div className="newDate">
                                <label htmlFor="date" className="startDateLabel">
                                    When would you like to get started?
                                </label>
                                <input name="startDate" className="inputStartDate" type="date" placeholder="Select date..." />
                            </div>
                            <button type="submit">Submit</button>
                    </form>
                    </Animate>

                    <div className="contact__content-form_rightSide">
                        <h2>Tell me about your vision:</h2>
                        <ul>
                            <li>Which challenges are you facing?</li>
                            <li>What are your goals and expectations?</li>
                            <li>What would success look like?</li>
                            <li>How much are you planning to spend to get there?</li>
                        </ul>
                        <div className="contact__contacts">
                        <p><GiSmartphone className="phone" /> +1 780 246 4194</p>
                        <p><GiEnvelope className="email" />sdzygal@gmail.com</p>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default Contact;