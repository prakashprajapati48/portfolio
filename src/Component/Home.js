import React from 'react'
import img1 from '../Images/website-hosting-icon.svg'

const Home = () => {
    return (
        // <>
        <div className="content" id="contents">
            <div className="contant">
                <div className="headet_intr">
                    <h1 className="header_intro">Hello,</h1>
                    <h2 className="header_intro">I'm Aakash</h2>
                    <h3 className="header_intro">Front-End Developer  & Designer</h3>
                <p className="header_para"> 
                    I build responsive, user-friendly websites and interfaces using
                    <strong> HTML</strong>, <strong> CSS</strong>, <strong> JavaScript</strong>,
                    <strong> React</strong> and more. I love bringing ideas to life
                    through clean code and creative design.
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
