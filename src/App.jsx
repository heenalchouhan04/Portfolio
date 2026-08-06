import './App.css'
import './Styles/About.css'
import './Styles/Services.css'
import './Styles/Contact.css'
import './Styles/Header.css'
import './Styles/Hero.css'
import './Styles/Work.css'
import './Styles/Reviews.css'
import './Styles/Blog.css'
import Header from './Component/Header'
import Hero from './Component/Hero'
import Services from './Component/Services'
import Work from './Component/Work'
import About from './Component/About'
import Reviews from './Component/Reviews'
import Blog from './Component/Blog'
import Contact from './Component/Contact'
import Footer from './Component/Footer'

function App() {
  return (
    <div>
      <Header />
      <Hero/>
      <Services/>
      <Work/>
      <About/>
      <Reviews/>
      <Blog/>
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
