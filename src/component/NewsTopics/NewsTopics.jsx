import React from 'react'
import './NewsTopics.css'
import News1 from '../../assets/images/News1.png'
import News2 from '../../assets/images/News2.png'
import { useState } from "react";

 

function NewsTopics() {
    const [isOpen, setIsOpen] = useState(false);
    
  return (
    <section className='news_topics_section'>

        <div className='news_section'>

            <div className='news_text'>

                <h1>Featured News</h1>

            </div>

            <div className='news_image_container'>

                <div className='news_image_box'>
                    <img src={News1} alt="Epic Research" className="photonews" onClick={() => setIsOpen(true)} />
                </div>

                <div className='news_text_box'>
                    <p>A sample collected by NASA’s Perseverance Mars rover from an ancient dry riverbed in Jezero Crater could preserve evidence of ancient microbial life. Taken from a rock named “Cheyava Falls” last year, the sample, called “Sapphire Canyon,” contains potential biosignatures, according to a paper published Wednesday in the journal Nature.
                    </p>
                </div>

                <div className='news_text_box'>
                    <p>On Sept. 16, the Cygnus XL spacecraft’s main engine shut down earlier than planned during two orbit-raising burns for its space station rendezvous. NASA and Northrop Grumman delayed its arrival while flight controllers assessed an alternate approach plan. The early shutdown was triggered by a conservative software safeguard. The spacecraft has been cleared for its approach to the orbiting laboratory.
                    </p>
                </div>

                <div className='news_image_box'>
                    <img src={News2} alt="Epic Research" className="photonews" onClick={() => setIsOpen(true)} />
                </div>

            </div>

            <div className="divider"></div>


        </div>

            {isOpen && (
                <div className="lightbox" onClick={() => setIsOpen(false)}>
                    <img src={News1} alt="zoomed" className="lightbox-img" />
                </div>
            ) }

    </section>
  )
}

export default NewsTopics
