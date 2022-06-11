import React from 'react'
import { Animate } from 'react-simple-animate'
import { FaFacebook, FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa'
import './styles.scss'

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Toby
          <br />
          Full stack Developer.
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: 'translateY(600px)',
        }}
        end={{
          transform: 'translateX(0px)',
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <button>Contact me</button>
            <a href="https://google.com" className="resume" target="_blank" rel="noreferrer">
              Download resume
            </a>
          </div>
          <div className="contact-me__socials-wrapper">
            <FaDiscord size={32} />
            <FaFacebook size={32} />
            <FaTwitter size={32} />
            <FaInstagram size={32} />
          </div>
        </div>
      </Animate>
    </section>
  )
}
