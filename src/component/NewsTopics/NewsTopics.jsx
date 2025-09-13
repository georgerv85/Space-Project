import React from 'react'
import './NewsTopics.css'
import News1 from '../../assets/images/News1.png'

function NewsTopics() {
  return (
    <section className='news_topics_section'>

        <div className='news_section'>

            <div className='news_text'>

                <h1>Featured News</h1>

            </div>

            <div className='news_image_container'>

                <div className='news_image_box'>

                    <img src={News1} alt="" className='photonews'/>

                    <div className="overlay">
                        Space Station
                    </div>
                    
                </div>

                <div className='news_text_box'>

                    <h1>Epic Research Can Help Mars Missions
                        The parachute of the Enhancing Parachutes by Instrumenting the Canopy test experiment deploys following an air launch from an Alta X drone on June 4, 2025, at NASA’s Armstrong Flight Research Center in Edwards, California.
                    </h1>

                </div>

                

            </div>


        </div>

    </section>
  )
}

export default NewsTopics
