import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import './Experience.css';
import { MDBContainer } from "mdb-react-ui-kit";
import Rewardwise from "../assets/img/logo.png";

export const Experience = () => {
    return (
        <section className="experience" id="experience">
            <div className='container'>
                <h2 className='header'>Experience</h2>
                <div>
                    <p className='subtitle'>A glimpse into my career journey</p>
                </div>
                <div className='timeline-container'>
                    <MDBContainer className="py-5">
                        <ul className="timeline">
                            <li className="timeline-item mb-5">
                                <div className='cards'>
                                    <div className='cards-header'>
                                        <div>
                                            <img className='image-style' src={Rewardwise} alt="Header Img" />
                                        </div>
                                        <div>
                                            <h5 className="fw-bold">Full Stack Developer</h5>
                                            <p className="timeline-details mb-2 fw-bold">Rewardwise.co<br />01 August 2024</p>

                                        </div>
                                    </div>
                                    <div className="btn-box-experience">
                                        <a href="https://play.google.com/store/apps/details?id=co.rewardwise&hl=en_IN&pli=1"><button className="">App</button></a>
                                        <a href="https://rewardwise.co/"><button className="">Website</button></a>
                                    </div>
                                    <p className="timeline-details">

                                        As a full-time Full Stack Developer, I design user interfaces, establish microservices using AWS, develop websites, implement REST APIs with Django, and manage CI/CD pipelines to ensure scalable and efficient application delivery.
                                    </p>
                                </div>
                            </li>
                            <li className="timeline-item mb-5">
                                <div className='cards'>
                                    <h5 className="fw-bold">Full Stack Developer Intern</h5>
                                    <p className="timeline-details mb-2 fw-bold">Rewardwise.co<br />01 February 2024 - 31 July 2024</p>
                                    <p className="timeline-details">
                                        During my internship, I contributed to developing an Android application with React Native for the frontend and Django for the backend. I implemented OTP authentication for secure user logins, integrated email and OTP login functionality, and created a KYC verification module for user identity validation. Additionally, I was involved in web development and managed deployment through AWS to ensure smooth and scalable operations.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </MDBContainer>
                </div>

            </div>
            <img className="background-image-left" src={colorSharp} alt="Skills-background" />
        </section>
    )
}
