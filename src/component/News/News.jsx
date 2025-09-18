import React from 'react'
import './News.css'

function News() {
  return (
    <div className='news_image container'>

      <div className='hero-text' name='hero'>
        <h1>Nasa News</h1>
        <p>Here you can read all the latest news from NASA and about space
        </p>
        <button className='hero-button'><a href='https://www.nasa.gov/news/' target='_blank'>Latest News</a></button>
      </div>
    </div>
    
  )
}

export default News
