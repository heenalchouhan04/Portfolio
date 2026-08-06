import React from 'react'

function Blog() {
  return (
    <section className='blog' id='blog'>
      <div className='blog-content'>
        <p className='blog-label'>THOUGHTS</p>
        <h2 className='blog-title'>From the blog</h2>
      </div>

      <div className='blog-cards'>
        <div className='blog-card'>
          <img src='' alt='design' />
          <div className='card-body'>
            <div className='span-tags'>
              <span className='tag'>Design</span>
              <span className='date'>Mar 8, 2025</span>
            </div>
            <h3 className='info'>Why I ditched heavy CSS frameworks for Tailwind</h3>
            <p className='info-description'>After years of fighting specificity wars, here's what finally convinced me to make the switch.</p>
            <a href="#" className='read-more'>Read more →</a>
          </div>
        </div>

        <div className='blog-card'>
          <img src='' alt='dev' />
          <div className='card-body'>
            <div className='span-tags'>
              <span className='tag'>Dev</span>
              <span className='date'>Feb 21, 2025</span>
            </div>
            <h3 className='info'>Building a design system from scratch in a weekend</h3>
            <p className='info-description'>Tokens, components, docs — the process I follow to spin up a coherent system in 48 hours.</p>
            <a href="#" className='read-more'>Read more →</a>
          </div>
        </div>

        <div className='blog-card'>
          <img src='' alt='freelance' />
          <div className='card-body'>
            <div className='span-tags'>
              <span className='tag'>Freelance</span>
              <span className='date'>Jan 14, 2025</span>
            </div>
            <h3 className='info'>5 lessons from my first year of full-time freelancing</h3>
            <p className='info-description'>Contracts, pricing, scope creep — the things nobody tells you before you go solo.</p>
            <a href="#" className='read-more'>Read more →</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog