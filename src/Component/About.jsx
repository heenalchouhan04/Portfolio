import React from 'react'
import '../Styles/About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">

        {/* Left — Photo */}
        <div className="about-image">
          <img
            src="https://m.media-amazon.com/images/I/41mSIgdsHvL._AC_UF1000,1000_QL80_.jpg"
            alt="Heenal"
          />
        </div>

        {/* Right — Content */}
        <div className="about-content">
          <p className="about-label">About Me</p>
          <h2 className="about-title">A bit about<br />who I am</h2>

          <p className="about-body">
            I'm Heenal, a freelance designer and frontend developer based in Paris with
            5 years of experience shipping digital products for startups, agencies, and
            scale-ups across Europe. I thrive at the intersection of great design and
            clean code.
          </p>
          <p className="about-body">
            I believe great interfaces are invisible — they get out of the user's way.
            My work is fast, accessible and built to last. When I'm not coding, you'll
            find me hiking or hunting for a good espresso.
          </p>

          <p className="stack-label">Stack & Tools</p>
          <div className="stack-tags">
            <span>Tailwind CSS</span>
            <span>Alpine.js</span>
            <span>Figma</span>
            <span>HTML / CSS</span>
            <span>JavaScript</span>
            <span>Symfony</span>
            <span>Framer</span>
            <span>Webflow</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About