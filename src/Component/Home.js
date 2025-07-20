import React from 'react'
import img1 from '../Images/website-hosting-icon.svg'

const Home = () => {
    return (
        // <>
        <div className="content" id="contents">
            <div className="contant">
                <div className="headet_intr">
                    <h1 className="header_intro">Hello,</h1>
                    <h2 className="header_intro">I'm /prakash Prajapti</h2>
                    <h3 className="header_intro">Front-End Developer  & Designer</h3>
                <p className="header_para"> 
                    I'm a passionate Web Developer creating responsive and visually appealing websites. I working with HTML, CSS, JavaScript, React.js, PHP, and Flask to turn ideas into interactive digital experiences.
                </p>
                </div>

                <div className="imgsd">
                    <img src={img1} alt="" />
                </div>
            </div>
            <br />

            <div className="skills">
                <ul className="skill">HTML</ul>
                <ul className="skill">CSS</ul>
                <ul className="skill">JavaScript</ul>
                <ul className="skill">PHP</ul>
                <ul className="skill">Flask</ul>
                <ul className="skill">Node Js</ul>
            </div>
        </div>
        // </>
    )
}

export default Home
