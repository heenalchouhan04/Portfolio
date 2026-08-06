import React from 'react'
import '../Styles/Header.css'

function Header() {
  return (
    <header className="site-header" id="header">
      <nav className="nav-bar">
        <a href="#home" className="brand">
          eli<span className='ott'>ott</span>
        </a>

      <div className="app-container">
        <a href="#services" className="nav-link">Services</a>
        <a href="#work" className="nav-link">Work</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#reviews" className="nav-link">Reviews</a>
        <a href="#blog" className="nav-link">Blog</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>

        <a className="btn nav-btn" href="#contact">Hire Me →</a>
      </nav>
    </header>
  )
}

export default Header