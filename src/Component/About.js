import React from 'react'
import webdesing from '../Images/webdesign_icon.svg'
import webhosting from '../Images/hosting_hosting_icon.svg'
import webdevelopment from '../Images/webdevelopment.svg'

const About = () => {
    return (
        <>
            <div className="about">
                <div className="specfic">
                    <i className="specficationsi">

                        <img src={webdevelopment} alt="" className="specfic_img" />
                        <h5 className="specfications">Web Development</h5> <br />
                        <p className="skill_description">Building full-stack websites and apps using modern frameworks.</p>
                    </i>
                    <i className="specficationsi">

                        <img src={webdesing} alt="" className="specfic_img" />
                        <h5 className="specfications">Web Design</h5> <br />
                        <p className="skill_description">Designing intuitive, modern, and responsive UI/UX layouts.</p>
                    </i>
                    <i className="specficationsi" id="specficationsi">
                        <img src={webhosting} alt="" className="specfic_img" id="specfic_img" />
                        <h5 className="specfications">Web Hosting</h5> <br />
                        <p className="skill_description" id="skill_description">Deploying and managing websites on hosting platforms.</p>
                    </i>
                </div>

                <div className="about_me">
                    <h4 className="about_header" >About Us</h4>

                    {/* Hi, I'm Web Developer Build websites and Design. Creating in HTML,CSS,JS,PHP,Flask,React js. */}
                    I'm a passionate <strong>Web Developer</strong> with experience in building responsive and creative websites using technologies like <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>PHP</strong>, and <strong>Flask</strong>. I love transforming ideas into beautiful digital experiences.
                </div>
            </div>
        </>
    )
}

export default About
