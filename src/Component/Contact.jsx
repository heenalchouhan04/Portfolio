import React from 'react'
import '../Styles/Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <p className="text">GET IN TOUCH</p>
        <p className="title">Let’s work together</p>
        <p className="discription">I'm open to UI/UX and frontend missions, short or long-term.
          Landing page, full product redesign, or just a second pair of eyes — let's talk.</p>
        <a className="email" href="mailto:[EMAIL_ADDRESS]">heenalchauhan06@gmail.com</a><br />
        <a className="linkdin" href="https://linkedin.com/in/heenal"> linkedin.com/in/heenal</a><br />
        <a className="github" href="https://github.com/heenalchouhan04"> github.com/heenalchouhan04</a>
      </div>
      <form className="message">
        <div className="name-email-row">
          <div className="field-group">
            <label className="name">Name*</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="field-group">
            <label className="gmail">Email*</label>
            <input type="email" placeholder="Your email" />
          </div>
        </div>

        <label className="subject">Subject</label><br />
        <input type="text" placeholder="Project inquiry" className="inp-sub" /><br />

        <label className="messageLabel">Message*</label><br />
        <textarea placeholder="Tell me about your project..."></textarea><br />


        <button type="submit">Send Message →</button>
      </form>
    </section>
  )
}

export default Contact