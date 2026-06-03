import { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useTheme } from '../theme.js'
import AuroraCanvas from './AuroraCanvas.jsx'

function Navbar({ onBurger }) {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <Link to="/" className="logo">
        <div className="logo-mark">Z</div>
        Zosata
      </Link>
      <ul className="nav-links">
        <li><Link to={{ pathname: '/', hash: '#how' }}>How it works</Link></li>
        <li><Link to={{ pathname: '/', hash: '#demo' }}>Demo</Link></li>
        <li><Link to={{ pathname: '/', hash: '#features' }}>Features</Link></li>
        <li><Link to={{ pathname: '/', hash: '#compare' }}>vs Aggregators</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
      </ul>
      <div className="nav-end">
        <button className="theme-toggle" onClick={toggle} type="button" aria-label="Toggle theme">
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
        <a href="https://app.zosata.com" target="_blank" rel="noreferrer" className="btn btn-ghost">Log in</a>
        <Link to="/contact" className="btn btn-primary">Get started →</Link>
      </div>
      <div className="burger" onClick={onBurger}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  )
}

function MobileNav({ open, onClose }) {
  return (
    <div className={'mobile-nav' + (open ? ' open' : '')}>
      <button className="mobile-nav-close" onClick={onClose} type="button">✕</button>
      <Link to={{ pathname: '/', hash: '#how' }} onClick={onClose}>How it works</Link>
      <Link to={{ pathname: '/', hash: '#demo' }} onClick={onClose}>Demo</Link>
      <Link to={{ pathname: '/', hash: '#features' }} onClick={onClose}>Features</Link>
      <Link to={{ pathname: '/', hash: '#compare' }} onClick={onClose}>vs Aggregators</Link>
      <Link to="/pricing" onClick={onClose}>Pricing</Link>
      <Link to="/integrations" onClick={onClose}>Integrations</Link>
      <Link to="/about" onClick={onClose}>About</Link>
      <Link to="/contact" onClick={onClose}>Contact</Link>
      <Link to="/contact" className="btn btn-primary" onClick={onClose}>Get started →</Link>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <div className="foot-top">
        <div className="foot-brand">
          <Link to="/" className="logo"><div className="logo-mark">Z</div>Zosata</Link>
          <p>WhatsApp-native food ordering for restaurants. Zero commission. Payments direct to your bank. Full control.</p>
          <div className="socials">
            <a href="#" className="soc">💬</a>
            <a href="#" className="soc">📸</a>
            <a href="#" className="soc">💼</a>
            <a href="#" className="soc">𝕏</a>
          </div>
        </div>
        <div className="foot-col">
          <h5>Product</h5>
          <ul>
            <li><Link to={{ pathname: '/', hash: '#how' }}>How it works</Link></li>
            <li><Link to={{ pathname: '/', hash: '#features' }}>Features</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/integrations">Integrations</Link></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Company</h5>
          <ul>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Contact</h5>
          <ul>
            <li><a href="mailto:contact@zosata.com">contact@zosata.com</a></li>
            <li><a href="tel:+919927270503">+91 99272 70503</a></li>
            <li style={{ marginTop: 8 }}><span className="wa-ping">WhatsApp support</span></li>
          </ul>
        </div>
      </div>
      <div className="foot-bot">
        <span>© 2026 Zosata. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 20 }}>
          <Link to="/legal">Privacy</Link>
          <Link to="/legal">Terms</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <AuroraCanvas />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <Navbar onBurger={() => setMobileOpen(true)} />
      <Outlet />
      <Footer />
      <a href="https://wa.me/919927270503" className="float-btn" target="_blank" rel="noreferrer">💬</a>
    </>
  )
}
