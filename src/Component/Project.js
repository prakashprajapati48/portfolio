import React, { useState } from 'react'
import project_img1 from '../Images/Project_img/project_img1.png'
import project_img2 from '../Images/Project_img/project_img2.png'
import project_img3 from '../Images/Project_img/project_img3.png'
import project_img4 from '../Images/Project_img/project_img4.png'

const Project = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const modalsimg = (id) => {

        if (id === 1) {
            setSelectedImage(project_img1)
        }

        else if (id === 2) {
            setSelectedImage(project_img2)
        }

        else if (id === 3) {
            setSelectedImage(project_img3)
        }

        else {
            setSelectedImage(project_img4)
        }
    }

    let close_btn = () => {
        setSelectedImage("")
    }

    return (
        <>
            <div className="project">
                <h2 className="project_header">Project</h2>
                {selectedImage && (<>
                    <img src="https://www.svgrepo.com/show/499592/close-x.svg" onClick={close_btn} alt="" className="close_icon" />
                    <div className="projectsi" id="projectsi">
                        <i className="click_img" id="click_img">
                            <img src={selectedImage} id="projectsimg" alt="projectimg" />
                        </i>
                    </div>
                </>
                )}

                {!selectedImage && (
                    <>
                        <div className="project_details_img">
                            <div className="container">
                                <a href="https://myidiscused.rf.gd" target="_blank" rel="noopener noreferrer" className="project_link">
                                    <h5 className="project_title">Forum Website</h5>
                                </a>
                                <p className="project_details_para">
                                    This forum Website creating Php language use. In website some people they problem share with world and any people can know how to solve this probelm thet will share solution with person and other. If prople maybe wrong solution they can share this solution is not working etc.
                                </p>
                            </div>
                            <div className="project-img-list" id="project-img-list">
                                <img src={project_img1} alt="" className="project-img" onClick={() => modalsimg(1)} value="1" />
                                <img src={project_img2} alt="" className="project-img" onClick={() => modalsimg(2)} value="2" />
                                <img src={project_img3} alt="" className="project-img" onClick={() => modalsimg(3)} value="3" />
                                <img src={project_img4} alt="" className="project-img" onClick={() => modalsimg(4)} value="4" />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Project
