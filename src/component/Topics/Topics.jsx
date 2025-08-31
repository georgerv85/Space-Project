import React from 'react'
import './Topics.css'
import missions from '../../assets/images/missions.png'
import humans from '../../assets/images/Humans_in_Space.png'
import earth from '../../assets/images/earth.png'
import solar from '../../assets/images/our_solar_system.png'
import universe from '../../assets/images/universe.png'
import science from '../../assets/images/science_mission.png'
import aeronautics from '../../assets/images/aeronautics.png'
import technology from '../../assets/images/technology.png'

function Topics() {
  return (
    <section className='topics_section'>

        <div className='topics'>

            <div className='text'>
                <h2>More topics from Space Technology</h2>
                <p>NASA technology development supports the nation’s innovation economy by creating solutions for space exploration that also generate tangible benefits for life on Earth. NASA is investing in the future of innovation.</p>
            </div>

            <div className='image_container'>
                <div className='image_box'><img src={missions} alt="" className='photo'/></div>
                <div className='image_box'><img src={humans} alt="" className='photo'/></div>
                <div className='image_box'><img src={earth} alt="" className='photo'/></div>
                <div className='image_box'><img src={solar} alt="" className='photo'/></div>
                <div className='image_box'><img src={universe} alt="" className='photo'/></div>
                <div className='image_box'><img src={science} alt="" className='photo'/></div>
                <div className='image_box'><img src={aeronautics} alt="" className='photo'/></div>
                <div className='image_box'><img src={technology} alt="" className='photo'/></div>
            </div>

        </div>
      
    </section>
  )
}

export default Topics
