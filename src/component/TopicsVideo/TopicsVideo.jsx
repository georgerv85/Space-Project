import React from 'react'
import './TopicsVideo.css'

function TopicsVideo() {
  return (
    <div className='topicsVideo container'>

        <div className='topicsVideoSection'>

            <div className='text_and_video_container'>

                <div className='textSection'>

                    <h5>FEATURED VIDEO</h5>
                    <h1>Solving Milky Way Mystery</h1>
                    <p>NASA’s Nancy Grace Roman Space Telescope will help scientists better understand our Milky Way galaxy’s        lesssparkly components—gas and dust strewn between stars, known as the interstellar medium.
                    One of Roman’s major observing programs, the Galactic Plane Survey, will peer through our galaxy to its most distant edge, mapping roughly 20 billion stars—about four times more than have currently been mapped. Scientists will use data from these stars to study the dust their light travels through, contributing to the most complete picture yet of the Milky Way’s structure, star formation, and the origins of our solar system.
                    </p>

                </div>

                <div className='videoSection'>
                    <iframe src="https://www.youtube.com/embed/EM5xPm_jg2w"
                        // width="560" 
                        // height="315"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen frameborder="0">
                    </iframe>
                </div>

            </div>

            

        </div>

    </div>
  )
}

export default TopicsVideo
