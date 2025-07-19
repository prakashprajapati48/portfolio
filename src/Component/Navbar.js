import React, { useState } from 'react'
import { Link } from 'react-scroll'
import menu_icon from '../Images/menu-line.svg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const headerStyle = !isOpen ? {} : {
        width: "100%",
        // bottom: "11rem",
        top: "-14rem"
    };

    const navbarscss = !isOpen ? {} : {
        height: "28rem",
        alignContent: "start",
    }

    const contentscss = !isOpen ? {} : {
        display: "block",
        // right: "39rem",
        // bottom: "2rem"
    }

    const list_items_css = !isOpen ? {} : {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "100%",
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navlisthandker = () =>{
        setIsOpen(false)
    }

    return (
        <>
            <nav className="navbars" style={navbarscss}>
                <div className="header" style={headerStyle}>
                    <h4 className="navbar_header">
                        Aakash
                    </h4>
                    <img src={menu_icon} alt="" className="menu_icon" id="menu_icon" value={isOpen} onClick={toggleMenu} />
                </div>
                <div className="contents" id="contents_nav" style={contentscss}>
                    <ul className="list_items" style={list_items_css}>
                        <li className="list_items_list">
                            <Link to="home" onClick={navlisthandker} className="nav-list" smooth={true} duration={500} >
                                Home
                            </Link>
                        </li>
                        <li className="list_items_list">
                            <Link to="about" onClick={navlisthandker} className="nav-list" smooth={true} duration={500} >
                                About
                            </Link>
                        </li>
                        <li className="list_items_list">
                            <Link to="project" onClick={navlisthandker} className="nav-list" smooth={true} duration={500} >
                                Project
                            </Link>
                        </li>
                        <li className="list_items_list">
                            <Link to="contact" onClick={navlisthandker} className="nav-list" smooth={true} duration={500} >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
