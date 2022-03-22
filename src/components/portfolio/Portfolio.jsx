import React from 'react'
import './portfolio.css'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <h3>Title</h3>
            <a href='https://github.com' className='btn'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio