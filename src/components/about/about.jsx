import React,{Fragment} from 'react'
import Sk from '../sk/sk'
import "./about.css"

function About() {
  return (
    <Fragment>
    <section id='about' className="section-p">
        <div className="title">
        <div></div>
        <h1><span></span>About</h1>
        <div></div>
        </div>
        <div className='desc'>
            <p>Hello! My name is Abdeljabar and I enjoy creating
                things that live on the internet. My interest in web
                development started back in 2018 when I decided to
                try editing custom Tumblr themes — turns out hacking together
                a custom reblog button taught me a lot about HTML & CSS!
                Fast-forward to today, and I’ve had the privilege of working
                at  an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building accessible,
                inclusive products and digital experiences at Upstatement for a variety of clients.
                <br /><br />
                I also recently build a E-commerce complete website using HTML, CSS JAVASCRIPT, REACT.JS(Class,Hooks), REDUX/REDUX-TOOLKIT.
                <br /><br />
                Here are a few technologies I’ve been working with recently:</p>
            <div>
                <img src="" alt="" />
            </div>
        </div>
        <div className='skills'>
             <Sk/>
        </div>
    </section>
    </Fragment>
  )
}

export default About
