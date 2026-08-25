import React from 'react'
import '../Styles/Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-text">AVAILABLE FOR WORK</p>
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Heenal</span>
        </h1>
        <h2 className="hero-work">
          Freelance <span className="white">UI/UX Designer & Frontend Developer</span>.
        </h2>
        <p className="description">
          I design and build digital products that people love to use — fast, clean, and accessible.
        </p>
        <div className="btns">
          <a className="hero-btn" href="#work">View My Work →</a>
          <a className="hero-btn-2" href="#contact">Get in touch</a>
        </div>

        <div className="stats">
          <div>
            <span>34+</span> Projects done
          </div>
          <div>
            <span>21+</span> Happy clients
          </div>
          <div>
            <span>5y</span> Experience
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="https://m.media-amazon.com/images/I/41mSIgdsHvL._AC_UF1000,1000_QL80_.jpg" alt="Heenal" />
        <p className="tertiary">Open to projects</p>
      </div>
    </section>
  )
}

export default Hero
