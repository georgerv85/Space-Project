import React from 'react'
import './Footer.css'
import nasa from "../../assets/images/nasa.png"


function programms() {
  return (
    <div className='footer-lower2'>
        <h3>National Aeronautics and Space Administration</h3>
        <img src={nasa} alt="nasa" className='logo' />
        <p>NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.</p>
        <p>About NASA's Mission</p> 
        <hr />
        <div className='end'>
          <p>© Page Last Updated: Aug 22, 2025</p>
          <p>Web Developer : George Arvanitis</p>
        </div>
    </div> 
  )
}

export default programms
