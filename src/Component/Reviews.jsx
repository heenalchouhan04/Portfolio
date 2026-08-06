import React from 'react';
import '../Styles/Reviews.css';

function Reviews() {
  return (
    <section className="reviews" id='reviews'>
    <div className="reviews-content">

    <p className="reviews-label">SOCIAL PROOF</p>
    <h2 className="reviews-title">What clients say</h2>
    </div>

    <div className='reviews-cards'>

      <div className='review-card-1'>
        <p className='review-card-1-description'><i>"Eliott delivered our redesign in record time and the quality blew us away. Our conversion rate jumped 28% in the first month. Absolutely recommend."</i></p>
        <img src='https://thumbs.dreamstime.com/b/female-symbol-simple-icon-woman-black-background-vector-logo-161137318.jpg'></img>
        <p className='review-name-1'>Sarah Müller <span className='review-name'> CPO, Novu </span></p>
      </div>

      <div className='review-card-2'>
        <p className='review-card-2-description'><i>"Working with Eliott is a dream. He asks the right questions, moves fast, and the final result always exceeds what we imagined. Our best hire of 2024."</i></p>
        <img src='https://thumbs.dreamstime.com/b/female-symbol-simple-icon-woman-black-background-vector-logo-161137318.jpg'></img>
        <p className='review-name-2'>Thomas Renault <span className='review-name'> Founder, Finlo </span></p>
      </div>

      <div className='review-card-3'>
        <p className='review-card-3-description'><i>"We had a tight deadline and a vague brief. Eliott turned both into a polished site in under two weeks. Clean code, zero hand-holding needed."</i></p>
        <img src='https://thumbs.dreamstime.com/b/female-symbol-simple-icon-woman-black-background-vector-logo-161137318.jpg'></img>
        <p className='review-name-3'>Camille Dufresne <span className='review-name'> Creative Director, Orea </span></p>
      </div>

    
    </div>
    </section>
  )
}

export default Reviews