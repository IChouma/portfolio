import React, { Fragment } from 'react'
import "../about/about.css";
import "./work.css";
import github from "../../images/github-fff.png";
import link from "../../images/link.png";
import eCommerceV from "../../images/E-commerce-v.mp4";
import snakeV from "../../images/snake-v.mp4";
import socialV from "../../images/social-v.mp4";
import fbCloneV from "../../images/fb-clone-v.mp4";
function Work() {
  return (
    <Fragment>
   <section id='work' className='section-p'>
      <div className="title">
        <div></div>
        <h1><span></span>Some Things I’ve Built</h1>
        <div></div>
        </div>
        <div className='example'>
          <video  src={eCommerceV} autoPlay loop> </video>
          <div>
            <h3>Featured Project</h3>
            <h2>E-commerce website</h2>
            <p>Responsive and dynamique website, built with HTML, CSS, Javascript, React.js, redux-toolkit
             
            </p>
               <span> React, Redux Project</span>
               <div>
                <a href="https://github.com/IChouma/E-commerce-ws"><img src={github} alt="" /></a>
                <a href={"https://github.com/IChouma/E-commerce-ws"} ><img src={link} alt="" /></a>
               </div>
          </div>
        </div>
   </section>
   <section  className='section-p ex'>
        <div className='example'>
          <div>
            <h3>Featured Project</h3>
            <h2>Snake-game</h2>
            <p>My first Game,built with  HTML, CSS and Javascript with buttons
               to control Speed and Number of segments added when the snake (White) eat the food (Green).</p>
               <span> Javascript small Game-App</span>
               <div>
                <a href="https://github.com/IChouma/ABDELJABAR-SNAKE-GAME"><img src={github} alt="" /></a>
                <a href="https://ichouma.github.io/Snake-Game/" ><img src={link} alt="" /></a>
               </div>
          </div>
                   <video src={snakeV} autoPlay loop ></video>
        </div>
   </section>
    <section  className='section-p ex2'>
        <div className='example'>
                    <video src={socialV} autoPlay loop></video>

          <div>
            <h3>Featured Project</h3>
            <h2>Simple Portfolio</h2>
            <p>A Portdolio simple built with HTML and CSS Only, with beuatiful
               animation for BUttons, backgrounds and dynamique slideshow.</p>
               <span> HTML and CSS Portfolio</span>
               <div>
                <a href="https://github.com/IChouma/Social-portfolio"><img src={github} alt="" /></a>
                <a href="https://ichouma.github.io/Social-portfolio/" ><img src={link} alt="" /></a>
               </div>
          </div>
        </div>
   </section>
   <section  className='section-p ex'>
        <div className='example'>
          <div>
            <h3>Featured Project</h3>
            <h2>Facebook clone</h2>
            <p>A clone for facebook Home-page, built using HTML, CSS and javascript
               (the react used just to organize hte work). </p>
               <span> facebook Home-page (clone)</span>
               <div>
                <a href="https://github.com/IChouma/facebook-clone"><img src={github} alt="" /></a>
                <a href={"https://github.com/IChouma/facebook-clone"} ><img src={link} alt="" /></a>
               </div>
          </div>
                   <video src={fbCloneV} autoPlay loop></video>
        </div>
   </section>
   </Fragment>
  )
}

export default Work