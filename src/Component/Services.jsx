import React from 'react'
import '../Styles/Services.css'

function Services() {
  return (
    <section className="service" id="services">
      <div className="service-content">
        <p className="service-text">WHAT I DO</p>
        <h1 className="service-title">Services</h1>
      </div>

      <div className="card-container">
        <div className="card-1">
          <h2 className="card-1-title">UI/UX Design</h2>
          <p className="card-1-description">From wireframes to polished Figma prototypes. Intuitive, visually 
             compelling interfaces that convert visitors into users and put usability first.</p>
        </div>

        <div className="card-2">
          <h2 className="card-2-title">Frontend Dev</h2>
          <p className="card-2-description">Production-grade code with Tailwind CSS and Alpine.js. 
             Pixel-perfect, fully responsive, SEO-friendly and blazing fast — no bloat, no heavy frameworks.</p>
        </div>

        <div className="card-3">
          <h2 className="card-3-title">Landing Pages</h2>
          <p className="card-3-description">High-converting pages for SaaS, apps and personal brands. 
             Designed to communicate value instantly and drive action from the first scroll.</p>
        </div>
      </div>
    </section>
  )
}

export default Services