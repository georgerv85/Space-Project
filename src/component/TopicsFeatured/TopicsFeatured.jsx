import React from 'react'
import './TopicsFeatured.css'
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'

function TopicsFeatured() {
  return (
    <div className='TopicsFeatured container'>
      <div className='TopicsSection'>

        <div className='TopicsTitle'>
          <h1>Recently Published</h1>
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

          <div className='TopicsBoxImage'>
            <img src={image4} alt="image1" className='image1' />
          </div>

          <div className='TopicsBoxText'>
            <p>NASA has a long record of monitoring Earth’s sea surface height, information critical not only for tracking how the ocean changes over time but also for hurricane forecasting. These extreme storms can cost the United States billions of dollars each year, wreaking havoc on lives and property. Meteorologists have worked to improve forecasts for a hurricane’s path, or track, as well as its intensity, measured as surface wind speed. Sentinel-6B, the U.S.-European satellite launching later this year, will help in that effort. </p>
          </div>

        </div>

      </div>
      
    </div>
  )
}

export default TopicsFeatured
