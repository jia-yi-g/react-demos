import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobal } from './context'


const Hero = () => {
  const {closeSubm}=useGlobal()
  return (
    <section className="hero" onMouseOver={closeSubm}>
      <div className="hero-center">
        <div className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className='btn'>start now</button>
        </div>
        <article className='hero-images'>
        <img src={phoneImg} className='phone-img'></img>
        </article>
      </div>
    </section>
  );
}

export default Hero
