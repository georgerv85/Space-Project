import React, {useState} from 'react'
import './Navbar.css'
import nasa from '../../assets/images/nasa.png'
import menuicon from "../../assets/images/menu-icon2.png"
// import { Link } from "react-scroll"
import { Link } from "react-router-dom"


function Navbar() {

  const [x,setx] = useState(false)
  
  function changeMenu (){
    setx(!x);
  }

  const [y,sety] = useState(false)
    window.addEventListener("scroll",()=>{
    (window.scrollY > 120 ) ? sety(true) : sety(false);
  })
  

  return (
    <nav className="container">
      <nav class={`container ${y ? 'black-nav' : ' ' }`} id='nav'>
    

        <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button>🔍</button>
        </div>

  
        <Link to="/"><img src={nasa} alt="nasa" className='logo' /></Link>

        <ul className={x ? " " : "hide-menu"}>
            <li><Link to="/News">News & Events</Link></li>
            <li><Link to="/Multimedia">Multimedia</Link></li>
            <li><Link to="/Nasa">Nasa +Live</Link></li>
        </ul>

        <img src={menuicon} alt="menuicon"  className='menu-icon' onClick={changeMenu}/>
        </nav>
    </nav>
  )
}

export default Navbar
