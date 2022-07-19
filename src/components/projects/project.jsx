import React from 'react'
import { Fragment } from 'react'
import "./project.css";
import github from "../../images/github-fff.png";
import link from "../../images/link.png";

function Project
() {
  return (
<Fragment>
    <section id='project' className='section-p'>
        <h1>Other Noteworthy Projects</h1>
        <h3>view the archive</h3>
        <div className="archive">
            <div className="file">
                <div>
                    <a href=""><img src={github} alt="" /></a>
                    <a href=""><img src={link} alt="" /></a>
                </div>
                <h2>Demo Courses Website </h2>
                <p>Simple website built with HTML, CSS and react (just to organize sections)</p>
                <span> HTML CSS React</span>
            </div>
            <div className="file">
                <div>
                   <a href=""><img src={github} alt="" /></a>
                    <a href=""><img src={link} alt="" /></a>
                </div>
                <h2>Small and simple Jump-Game</h2>
                <p>Small JUmp-Game using HTML and CSS animaton </p>
                <span> HTML CSS</span>
            </div>
            <div className="file">
                <div>
                   <a href=""><img src={github} alt="" /></a>
                    <a href=""><img src={link} alt="" /></a>
                </div>
                <h2>TMy first Project</h2>
                <p>This is my first CSS project, Responsive  and amazing</p>
                <span> HTML  CSS</span>
            </div>
        </div>
    </section>
</Fragment>
  )
}

export default Project
