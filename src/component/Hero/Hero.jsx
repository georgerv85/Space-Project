import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero container'>
      
      <div className='hero-text' name='hero'>
        <h1>Cosmic Expansion</h1>
        <p>NASA’s Nancy Grace Roman Space Telescope will be a discovery machine, thanks to its wide field of view and         resulting torrent of data. Scheduled to launch no later than May 2027, with the team working toward launch as early as fall 2026, its near-infrared Wide Field Instrument will capture an area 200 times larger than the Hubble Space Telescope’s infrared camera, and with the same image sharpness and sensitivity.
        </p>
        <button className='hero-button'><a href='https://www.nasa.gov/universe/mapping-the-universes-earliest-structures-with-cosmos-webb/' target='_blank'>Mapping the Universe</a></button>

      </div>

    </div>
  )
}

export default Hero
