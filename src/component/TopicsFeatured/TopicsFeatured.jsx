import React from 'react'
import './TopicsFeatured.css'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'

function TopicsFeatured() {
  return (
    <div className='TopicsFeatured container'>
      <div className='TopicsSection'>

        <div className='TopicsTitle'>
          Recently Published
        </div>

        <div className='TopicsMediaContainer'>
               
          <div className='TopicsBoxImage'>
            <img src={image1} alt="image1" className='image1' />
          </div>

          <div className='TopicsBoxText'>
            <p>When NASA sends the first astronauts to explore near the lunar South Pole, moonwalkers will wear spacesuits provided by Axiom Space. NASA selected the company to develop the modern suits for the Artemis III mission and participated in activities when the first prototype was revealed Wednesday during an event at Space Center Houston in Texas.</p>
          </div>

          <div className='TopicsBoxImage'>
            <img src={image2} alt="image1" className='image1' />
          </div>

          <div className='TopicsBoxText'>
            <p>In January 1986, NASA’s Voyager 2 became the first, and so far the only, spacecraft to explore Uranus, the second to last stop on its journey through the outer solar system. NASA’s Jet Propulsion Laboratory in Pasadena, California, manages Voyagers 1 and 2, twin spacecraft launched in 1977 to explore the outer planets.</p>
          </div>

          <div className='TopicsBoxImage'>
            <img src={image3} alt="image1" className='image1' />
          </div>

          <div className='TopicsBoxText'>
            <p>Today, Voyager 1 is the most distant spacecraft from Earth, more than 14 billion miles away and continuing on its journey out of our solar system. Forty years ago, it made its closest approach to Saturn. Although it was not the first to explore the giant ringed planet, as the Pioneer 11 spacecraft completed the first flyby in 1979, Voyager carried sophisticated instruments to conduct more in-depth investigations. </p>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default TopicsFeatured
