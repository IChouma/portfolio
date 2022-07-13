import './App.css';
import React,{Fragment} from 'react';
import Header from "./components/header/header"
import Intro from "./components/intro/intro"
import About from './components/about/about';
import Work from './components/work/work';
import Project from './components/projects/project';
import Contact from './components/contact/contact';



function App() {
  return (
    <Fragment>
    <Header/>
    <Intro/>
    <About/>
    <Work/>
    <Project/>
    <Contact/>
  
    </Fragment>
  )
}

export default App;

