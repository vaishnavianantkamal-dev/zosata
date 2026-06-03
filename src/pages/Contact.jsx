import { useEffect } from 'react'
import { useScrollReveal } from '../useScrollReveal.js'

export default function Contact() {
  useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <section className="sub-hero">
        <span className="pill">Contact</span>
        <h1>Talk to a Zosata expert</h1>
        <p>Book a walkthrough to launch your direct WhatsApp ordering channel.</p>
      </section>
      <main className="sub-main">
        <div className="grid contact-grid">
          <article className="card rev contact-card-item">
            <div className="contact-icon">✉️</div>
            <h3>Email support</h3>
            <p className="contact-meta">Fastest way for product and onboarding queries.</p>
            <a href="mailto:contact@zosata.com" className="contact-link">contact@zosata.com</a>
          </article>
          <article className="card rev contact-card-item">
            <div className="contact-icon">📞</div>
            <h3>Call / WhatsApp</h3>
            <p className="contact-meta">Speak directly with our team for immediate help.</p>
            <a href="tel:+919927270503" className="contact-link">+91 99272 70503</a>
          </article>
          <article className="card rev contact-card-item">
            <div className="contact-icon">📅</div>
            <h3>Demo booking</h3>
            <p className="contact-meta">Same-day consult with onboarding recommendations for your brand.</p>
            <a href="https://wa.me/919927270503" className="contact-link" target="_blank" rel="noreferrer">Book your slot on WhatsApp</a>
          </article>
        </div>
        <div className="cta-band rev">
          <h2>Start selling on WhatsApp today</h2>
          <p>Zero commission. Direct payments. Full customer ownership.</p>
          <a href="https://wa.me/919927270503" className="btn btn-primary" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
        </div>
      </main>
    </>
  )
}
