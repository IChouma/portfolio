import React from 'react';
import "./intro.css";
import js from "../../images/js.png";
import bootstrap from "../../images/bootstrap.png";
import git from "../../images/git.png";
import css3 from "../../images/css3.png";
import react from "../../images/reactb.png";

function Intro() {
  return (
    <section id="intro" className='section-p'>
        <h3>My name is </h3>
        <h1>Abdeljabar CHOUMA.</h1>
        <h2>I build things for the web.</h2>
        <p>I’m a software developper specializing in building 
            (and occasionally designing) exceptional digital web experiences. </p>
             <div>
              <img src={js} alt="" />
              <img src={bootstrap} alt="" />
              <img src={git} alt="" />
              <img src={css3} alt="" />
              <img src={react} alt="" />
             </div>
    </section>
  )
}

export default Intro