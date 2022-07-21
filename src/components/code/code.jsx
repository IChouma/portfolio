import React from 'react';
import  "./code.css";
import ech1 from "../../images/ech1.png";
import ech2 from "../../images/ech2.png";
import ech3 from "../../images/ech3.png";
function Code() {
  return (
 <section id="code">
        <h1>few codes screenshot</h1>
    <div className='section-p'>
        <img src={ech1} alt="" />
        <img src={ech2} alt="" />
        <img src={ech3} alt="" />
    </div>
 </section>
  )
}

export default Code
