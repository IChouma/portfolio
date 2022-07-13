import React, {Fragment } from 'react';

import "./header.css"


function  Header() {
   function close(){
    const nav=document.getElementById('navbar');
      nav.classList.remove("active");
      const mobile=document.getElementById('mobile');
      mobile.style.display="block";


  };

 function active(){
    const nav=document.getElementById('navbar');
    const mobile=document.getElementById('mobile');
      nav.classList.add("active");
      mobile.style.display="none";
  }
    return (
    <Fragment>
       <header id='header' >
        <nav >
         <button  className='logo' ><img  alt="" />A</button>
         <div>
          <ul id='navbar'>
            <li > <button  >About</button></li>
            <li > <button >Portfolio</button></li>
            <li > <button >Conatct</button></li>
            <li  className='resume' > <button href="" className='resume'>Resume</button></li>
            <span className='close' onClick={close} >
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


