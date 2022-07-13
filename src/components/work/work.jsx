import React, { Fragment } from 'react'
import "../about/about.css"
import "./work.css"
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
          <img src="" alt="" />
          <div>
            <h3>Featured Project</h3>
            <h2>Halcyon Theme</h2>
            <p>A minimal, dark blue theme for VS Code, Sublime Text, 
              Atom, iTerm, and more. Available on Visual Studio Marketplace,
               Package Control, Atom Package Manager, and npm.</p>
               <span> VS Code  Sublime Text Atom iTerm2 Hyper</span>
               <div>
                <button><img src="" alt="" /></button>
                <button ><img src="" alt="" /></button>
               </div>
          </div>
        </div>
   </section>
   <section  className='section-p ex'>
        <div className='example'>
          <div>
            <h3>Featured Project</h3>
            <h2>Halcyon Theme</h2>
            <p>A minimal, dark blue theme for VS Code, Sublime Text, 
              Atom, iTerm, and more. Available on Visual Studio Marketplace,
               Package Control, Atom Package Manager, and npm.</p>
               <span> VS Code  Sublime Text Atom iTerm2 Hyper</span>
               <div>
                <button><img src="" alt="" /></button>
                <button><img src="" alt="" /></button>
               </div>
          </div>
          <img src="" alt="" />

        </div>
   </section>
    <section  className='section-p ex2'>
        <div className='example'>
          <img src="" alt="" />
          <div>
            <h3>Featured Project</h3>
            <h2>Halcyon Theme</h2>
            <p>A minimal, dark blue theme for VS Code, Sublime Text, 
              Atom, iTerm, and more. Available on Visual Studio Marketplace,
               Package Control, Atom Package Manager, and npm.</p>
               <span> VS Code  Sublime Text Atom iTerm2 Hyper</span>
               <div>
                <button><img src="" alt="" /></button>
                <button><img src="" alt="" /></button>
               </div>
          </div>
        </div>
   </section>
   </Fragment>
  )
}

export default Work