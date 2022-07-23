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
                    <a href="https://github.com/IChouma/Courses-ws"><img src={github} alt="" /></a>
                    <a href="https://courses-ws.netlify.app/"><img src={link} alt="" /></a>
                </div>
                <h2>Demo Courses Website </h2>
                <p>Simple website built built from UI/UX design, with HTML, CSS and react (just to organize sections)</p>
                <span> HTML CSS React</span>
            </div>
            <div className="file">
                <div>
                   <a href="https://github.com/IChouma/JUMP-GMAE-FROM-ABDELJABAR"><img src={github} alt="" /></a>
                    <a href="https://ichouma.github.io/JUMP-GMAE-FROM-ABDELJABAR/"><img src={link} alt="" /></a>
                </div>
                <h2>Small and simple Jump-Game</h2>
                <p>Small JUmp-Game using HTML and CSS animaton </p>
                <span> HTML CSS</span>
            </div>
            <div className="file">
                <div>
                   <a href="https://github.com/IChouma/kasper"><img src={github} alt="" /></a>
                    <a href="https://ichouma.github.io/kasper/"><img src={link} alt="" /></a>
                </div>
                <h2>My first Project Kasper</h2>
                <p>This is my first CSS project,built from UI/UX design, Responsive  and amazing</p>
                <span> HTML  CSS</span>
            </div> 
        </div>
    </section>
</Fragment>
  )
}

export default Project
