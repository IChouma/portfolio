import React, {Fragment } from 'react';

import "./header.css"


function  Header() {
   function close(){
    const close=document.getElementById('close');
    const nav=document.getElementById('navbar');
      nav.classList.remove("active");

  };

 function active(){
    const bar=document.getElementById('bar');
    const nav=document.getElementById('navbar');
    const mobile=document.getElementById('mobile');
      nav.classList.add("active");
      mobile.remove();
  }
    return (
    <Fragment>
       <header id='header' >
        <nav >
         <a href="" className='logo' ><img  alt="" />A</a>
         <div>
          <ul id='navbar'>
            <li > <a href="  go to #about"  >About</a></li>
            <li > <a href=" go to #work">Portfolio</a></li>
            <li > <a href="go to #contact">Conatct</a></li>
            <li  className='resume' > <a href="" className='resume'>Resume</a></li>
            <a href="" className='close' onClick={close} >
                <hr className='hr1' /><hr className='hr2' />
              </a>
          </ul>
          </div>
          <div id="mobile">
            <i id="bar" onClick={active} ><div  className='far-fa-shopping-bag bar-hr '>
              <hr />
              <hr />
              <hr />
              </div></i>
          </div>
        </nav>
       </header>
    </Fragment>
    
  )
}


export default Header


