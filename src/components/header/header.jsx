import React, {Fragment } from 'react';

import "./header.css"


function  Header() {
   function close(){
    const nav=document.getElementById('navbar');
      nav.classList.remove("active");

  };

 function active(){
    const nav=document.getElementById('navbar');
    const mobile=document.getElementById('mobile');
      nav.classList.add("active");
      mobile.remove();
  }
    return (
    <Fragment>
       <header id='header' >
        <nav >
         <a href="https://github.com/IChouma" className='logo' ><img  alt="" />A</a>
         <div>
          <ul id='navbar'>
            <li > <a href="https://github.com/IChouma"  >About</a></li>
            <li > <a href="https://github.com/IChouma">Portfolio</a></li>
            <li > <a href="https://github.com/IChouma">Conatct</a></li>
            <li  className='resume' > <a href="" className='resume'>Resume</a></li>
            <span href="https://github.com/IChouma" className='close' onClick={close} >
                <hr className='hr1' /><hr className='hr2' />
              </span>
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


