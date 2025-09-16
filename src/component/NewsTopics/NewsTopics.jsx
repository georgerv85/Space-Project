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

                    {/* <div className="overlay">
                        Space Station
                    </div> */}
                    
                </div>

                <div className='news_text_box'>

                    <h1>A sample collected by NASA’s Perseverance Mars rover from an ancient dry riverbed in Jezero Crater could preserve evidence of ancient microbial life. Taken from a rock named “Cheyava Falls” last year, the sample, called “Sapphire Canyon,” contains potential biosignatures, according to a paper published Wednesday in the journal Nature.
                    </h1>

                </div>

                

            </div>


        </div>

    </section>
  )
}

export default NewsTopics
