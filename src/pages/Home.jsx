import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import ChatDemo from '../components/ChatDemo.jsx'

const imgItems = [
  '/ChatGPT Image Jun 3, 2026, 12_32_43 PM.png',
  '/ChatGPT Image Jun 3, 2026, 12_32_49 PM.png',
  '/ChatGPT Image Jun 3, 2026, 12_32_55 PM.png',
  '/ChatGPT Image Jun 3, 2026, 12_33_02 PM.png',
  '/ChatGPT Image Jun 3, 2026, 12_33_08 PM.png',
  '/ChatGPT Image Jun 3, 2026, 12_33_15 PM.png',
  '/ChatGPT Image Jun 3, 2026, 12_33_22 PM.png',
  '/ChatGPT Image Jun 3, 2026, 12_33_28 PM.png',
]

const tickerItems = [
  'Zero Commission', 'Direct Bank Settlement', 'No App Download', '5-Min Setup',
  'Own Your Customers', 'WhatsApp Native', 'India-First Platform', 'Flat Monthly Fee',
]

const bubbleMsgs = [
  { txt: '🍕 BBQ Chicken please!', right: false, x: '10%' },
  { txt: '✅ Order confirmed!', right: true, x: '72%' },
  { txt: 'Reply 1 for Pizzas', right: false, x: '5%' },
  { txt: '💳 Paid via UPI ✓', right: true, x: '68%' },
  { txt: '📍 42 MG Road, Gurgaon', right: false, x: '12%' },
  { txt: '🎉 Order #ZS4821 placed!', right: true, x: '65%' },
  { txt: 'Hi 👋', right: false, x: '8%' },
  { txt: '⚡ 35 min delivery', right: true, x: '70%' },
]

const featCards = [
  { icon: '💸', h: 'Zero commission — payment direct to you', p: 'Keep 100% of every order. Zosata is never in the money flow. Flat monthly fee only. On ₹5L monthly orders, save ₹1.5L+ every month.' },
  { icon: '💬', h: 'Number-based ordering', p: 'Reply 1, 2, 3 to navigate. No typing, no app — as simple as SMS. Works on any phone, any network.' },
  { icon: '📱', h: 'Your own WhatsApp number', p: 'A dedicated WhatsApp Business number fully branded to your restaurant.' },
  { icon: '🗂️', h: 'Custom menu & pricing', p: 'Add, edit, remove items anytime. Run flash sales or update prices in seconds.' },
  { icon: '👥', h: 'Own your customers', p: 'Build your own customer database. Re-market, run loyalty programs — no aggregator gatekeeping.' },
]

const features = [
  { icon: '💬', h: 'Number-based ordering', p: 'Reply 1, 2, 3 to navigate. No typing, no app — as simple as SMS.' },
  { icon: '📱', h: 'Your own WhatsApp number', p: 'A dedicated WhatsApp Business number fully branded to your restaurant.' },
  { icon: '🗂️', h: 'Custom menu & pricing', p: 'Add, edit, remove items anytime. Run flash sales or update prices in seconds.' },
  { icon: '👥', h: 'Own your customers', p: 'Build your own customer database. Re-market, run loyalty programs — no aggregator gatekeeping.' },
  { icon: '⚡', h: '5-minute onboarding', p: 'No tech setup needed. Upload menu, connect WhatsApp, start taking orders — same day.' },
]

const whyPts = [
  { icon: '🏦', h: 'Money goes directly to your bank', p: 'Zosata is never in the payment flow. Customer pays, merchant receives. Instant settlement, no holding periods.' },
  { icon: '💰', h: 'Save 25–35% per order', p: 'Traditional platforms take a massive cut. Zosata replaces it with a simple, predictable monthly fee.' },
  { icon: '🚫', h: 'No middlemen, ever', p: 'Orders go directly from your customer to you. No algorithm burying your listing.' },
  { icon: '📈', h: 'Higher margins from day one', p: 'Zero commission plus direct customer ownership means your net margin improves immediately.' },
]

const compareRows = [
  ['Commission per order', 'Zero commission', '25–35% cut'],
  ['Payment settlement', 'Direct to merchant bank', 'Platform holds & transfers'],
  ['Customer data ownership', '100% yours', 'Platform owns it'],
  ['Menu & pricing control', 'Full control', 'Platform-restricted'],
  ['Ordering channel', 'WhatsApp (no app)', 'Requires app download'],
  ['Brand visibility', 'Your brand always', 'Buried in listings'],
  ['Setup time', 'Under 10 minutes', 'Days to weeks'],
  ['Monthly cost model', 'Flat fee, predictable', '% of every order'],
  ['Re-marketing to customers', 'Full WhatsApp access', 'Not allowed'],
]

const testiRow1 = [
  { av: '🍛', name: 'Rajesh Mehta',   role: 'Owner · Mehta\'s Kitchen, Mumbai',      text: 'We switched from Zomato and Swiggy 4 months ago. Monthly savings are insane — we put that money back into quality ingredients and staff. Zero regrets.' },
  { av: '🌮', name: 'Priya Nair',     role: 'Founder · CloudBite Kitchen, Bangalore', text: 'As a cloud kitchen, margins were thin. Zosata gave us our own ordering channel and profits went up 40% in the first month. Payment settles directly.' },
  { av: '🍜', name: 'Arjun Sharma',   role: 'Owner · Spice Route, Delhi NCR',         text: 'My customers love ordering on WhatsApp — they use it all day anyway. Setup took under an hour. Now I own my customer list and can message them anytime.' },
  { av: '🫕', name: 'Sunita Kapoor',  role: 'Owner · Kapoor\'s Dhabha, Pune',         text: 'The onboarding was seamless — literally had my first order within the same evening. The direct payment feature is a game changer. No more waiting for payouts.' },
]
const testiRow2 = [
  { av: '🍕', name: 'Vikram Reddy',   role: 'Owner · Reddy\'s Biryani House, Hyderabad', text: 'Zosata transformed how we handle orders. Customers love the simplicity of WhatsApp ordering and we love that every rupee goes straight to our account.' },
  { av: '🥗', name: 'Meera Iyer',     role: 'Founder · Green Bowl, Chennai',              text: 'The best decision we made for our restaurant. Zero commission means we can offer better prices to customers while keeping our margins healthy.' },
  { av: '🍱', name: 'Rahul Gupta',    role: 'Owner · Tiffin Express, Ahmedabad',          text: 'Within a week of switching to Zosata, we had 30+ WhatsApp orders daily. The chatbot handles everything perfectly. Highly recommended!' },
  { av: '🥘', name: 'Deepa Krishnan', role: 'Co-founder · Curry Leaf, Kochi',             text: 'No more aggregator nightmares. We own our customers now and our monthly net margin improved by 28% from the very first month with Zosata.' },
]

const testimonials = [
  { av: '🍛', bg: 'rgba(0,230,118,.1)', text: 'We switched from Zomato and Swiggy 4 months ago. Monthly savings are insane — we put that money back into quality ingredients and staff. Zero regrets.', name: 'Rajesh Mehta', role: "Owner · Mehta's Kitchen, Mumbai" },
  { av: '🌮', bg: 'rgba(198,255,0,.08)', text: 'As a cloud kitchen, margins were thin. Zosata gave us our own ordering channel and profits went up 40% in the first month. Payment settles directly in my account.', name: 'Priya Nair', role: 'Founder · CloudBite Kitchen, Bangalore' },
  { av: '🍜', bg: 'rgba(251,191,36,.08)', text: 'My customers love ordering on WhatsApp — they use it all day anyway. Setup took under an hour. Now I own my customer list and can message them anytime.', name: 'Arjun Sharma', role: 'Owner · Spice Route, Delhi NCR' },
  { av: '🫕', bg: 'rgba(0,191,165,.1)', text: 'The onboarding was seamless — literally had my first order within the same evening. The direct payment feature is a game changer. No more waiting for payouts.', name: 'Sunita Kapoor', role: "Owner · Kapoor's Dhabha, Pune" },
]

export default function Home() {
  const location = useLocation()
  const videoRef = useRef(null)
  const bubblesRef = useRef(null)
  const gaugeFillRef = useRef(null)
  const gaugeTextRef = useRef(null)
  const trackRef = useRef(null)

  // Scroll to hash target on navigation
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  // Floating chat bubbles
  useEffect(() => {
    let idx = 0
    const spawn = () => {
      const container = bubblesRef.current
      if (!container) return
      const data = bubbleMsgs[idx % bubbleMsgs.length]
      idx++
      const el = document.createElement('div')
      el.className = 'float-bub' + (data.right ? ' right' : '')
      el.textContent = data.txt
      el.style.left = data.x
      el.style.bottom = Math.random() * 40 + '%'
      el.style.animationDuration = 5 + Math.random() * 4 + 's'
      container.appendChild(el)
      setTimeout(() => el.remove(), 9000)
    }
    spawn()
    const t = setInterval(spawn, 2200)
    return () => clearInterval(t)
  }, [])

  // Scroll reveal + gauge animation
  useEffect(() => {
    const animateGauge = () => {
      const fill = gaugeFillRef.current
      const text = gaugeTextRef.current
      if (!fill) return
      let progress = 0
      const target = 30
      const totalDash = 204
      const targetOffset = 61
      const interval = setInterval(() => {
        progress += 0.8
        if (progress >= target) { progress = target; clearInterval(interval) }
        fill.style.strokeDashoffset = totalDash - (totalDash - targetOffset) * (progress / target)
        if (text) text.textContent = Math.round(progress) + '%'
      }, 30)
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((x) => {
        if (x.isIntersecting) {
          x.target.classList.add('in')
          io.unobserve(x.target)
          if (x.target.classList.contains('why-grid')) animateGauge()
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.rev,.rev-stagger').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Testimonials carousel width
  useEffect(() => {
    const setup = () => {
      const track = trackRef.current
      if (!track) return
      const items = track.querySelectorAll('.testi')
      if (!items.length) return
      const itemW = items[0].offsetWidth
      const half = items.length / 2
      const halfWidth = (itemW + 20) * half
      const style = document.createElement('style')
      style.dataset.carousel = '1'
      style.textContent = `@keyframes carousel-scroll{0%{transform:translateX(0)}100%{transform:translateX(-${halfWidth}px)}}`
      document.head.appendChild(style)
      return style
    }
    const style = setup()
    window.addEventListener('resize', setup)
    return () => {
      window.removeEventListener('resize', setup)
      document.querySelectorAll('style[data-carousel]').forEach((s) => s.remove())
    }
  }, [])

  // Parallax hero grid
  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12
      const y = (e.clientY / window.innerHeight - 0.5) * 8
      const grid = document.querySelector('.hero-grid')
      if (grid) grid.style.transform = `translate(${x * 0.5}px,${y * 0.5}px)`
    }
    document.addEventListener('mousemove', onMove)
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <video
          className="hero-video"
          ref={videoRef}
          src="/vedio_is_velrat_but_show_the_c.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-video-overlay"></div>
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
        <div className="float-bubbles" ref={bubblesRef}></div>
        <div className="hero-eyebrow">
          <span className="eyebrow-dot"></span>
          WhatsApp-native · Zero commission · India-first
        </div>
        <h1>
          Turn WhatsApp Into Your<br />
          <span className="word-outline">Restaurant's</span>&nbsp;<span className="word-green">Revenue Engine</span>
        </h1>
        <p className="hero-desc">Customers browse your menu, reply with a number, and order — all inside WhatsApp. No app download. No aggregator cut. Payment hits your bank directly.</p>
        <div className="hero-btns">
          <a href="#demo" className="btn btn-primary btn-lg btn-pulse">↓ See it live</a>
          <a href="#book-demo" className="btn btn-ghost btn-lg">Book a demo</a>
        </div>
        <div className="hero-proof">
          <div className="proof-cell"><span className="proof-num">35%</span><div className="proof-lbl">Commission saved</div></div>
          <div className="proof-cell"><span className="proof-num">2min</span><div className="proof-lbl">Avg order time</div></div>
          <div className="proof-cell"><span className="proof-num">₹0</span><div className="proof-lbl">Platform commission</div></div>
          <div className="proof-cell"><span className="proof-num">100%</span><div className="proof-lbl">Customer ownership</div></div>
        </div>
      </section>

      {/* IMAGE SCROLLER */}
      <div className="img-ticker">
        <div className="img-ticker-inner">
          {[...imgItems, ...imgItems].map((src, i) => (
            <div className="img-ticker-card" key={i}>
              <img src={src} alt="" draggable="false" />
            </div>
          ))}
        </div>
      </div>

      {/* DEMO */}
      <section className="demo" id="demo">
        <ChatDemo />
      </section>

      {/* HOW */}
      <section id="how" className="how">
        <div className="wrap">
          <div className="eyebrow-tag">Process</div>
          <h2 className="sec-title">Up and running in <em>10 minutes</em></h2>
          <p className="sec-sub">Four steps to a fully automated WhatsApp ordering channel.</p>
          <div className="how-cards-new rev-stagger">

            <div className="how-card-new" style={{'--card-bg':'#FFF0F0','--card-accent':'#FF4B4B'}}>
              <div className="how-card-icon-wrap" style={{background:'#FF4B4B'}}>
                <img src="/1.png" alt="Upload menu" draggable="false" />
              </div>
              <h3>Upload your menu</h3>
              <p>Add your food catalog, set prices and photos — all in your Zosata dashboard. Connect your WhatsApp number in one click.</p>
              <a className="how-card-link">Get started →</a>
            </div>

            <div className="how-card-new" style={{'--card-bg':'#FFFBEC','--card-accent':'#F5A623'}}>
              <div className="how-card-icon-wrap" style={{background:'#F5A623'}}>
                <img src="/3.png" alt="Customers reply" draggable="false" />
              </div>
              <h3>Customers reply & order</h3>
              <p>Customers pick a category, reply with a number, answer quick questions — order confirmed. Everything inside WhatsApp.</p>
              <a className="how-card-link">See demo →</a>
            </div>

            <div className="how-card-new" style={{'--card-bg':'#F0EEFF','--card-accent':'#7B5EA7'}}>
              <div className="how-card-icon-wrap" style={{background:'#7B5EA7'}}>
                <img src="/2.png" alt="Payment hits bank" draggable="false" />
              </div>
              <h3>Payment hits your bank</h3>
              <p>Every payment goes directly to your merchant account. Zero commission, zero middleman — your money, instantly.</p>
              <a className="how-card-link">Learn more →</a>
            </div>

            <div className="how-card-new" style={{'--card-bg':'#EDFFF5','--card-accent':'#00A853'}}>
              <div className="how-card-icon-wrap" style={{background:'#00A853'}}>
                <img src="/4.png" alt="Own your customers" draggable="false" />
              </div>
              <h3>Own your customers</h3>
              <p>Build your full customer database. Run WhatsApp campaigns, loyalty offers and re-orders — with zero aggregator gatekeeping.</p>
              <a className="how-card-link">Explore →</a>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features">
        <div className="wrap">
          <div className="eyebrow-tag">Features</div>
          <h2 className="sec-title">Everything you need, <em>nothing you don't</em></h2>
          <div className="feat-new-grid">

            {/* LEFT — feature image + 0% card */}
            <div className="feat-img-side rev">
              <img src="/feature image.jpg" alt="Zero commission feature" className="feat-main-img" />
              <div className="feat-zero-card">
                <div className="feat-zero-num">0%</div>
                <div className="feat-zero-right">
                  <div className="feat-scroll-icon">💸</div>
                  <div>
                    <h4>Zero commission — payment direct to you</h4>
                    <p>Keep 100% of every order. Zosata is never in the money flow. Flat monthly fee only. On ₹5L monthly orders, save ₹1.5L+ every month.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — vertical scrolling cards */}
            <div className="feat-cards-side">
              <div className="feat-scroll-track">
                {[...featCards, ...featCards].map((f, i) => (
                  <div className="feat-scroll-card" key={i}>
                    <div className="feat-scroll-icon">{f.icon}</div>
                    <div>
                      <h4>{f.h}</h4>
                      <p>{f.p}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* WHY */}
      <section className="why">
        <div className="wrap">
          <div className="eyebrow-tag">Why Zosata</div>
          <h2 className="sec-title">Break free from <em>aggregator dependency</em></h2>
          <div className="why-cards-grid rev-stagger">
            <div className="why-img-card">
              <div className="why-img-top"><img src="/zosata 1.jpg" alt="Money goes directly to your bank" /></div>
              <div className="why-img-body">
                <h4>Money goes directly to your bank</h4>
                <p>Zosata is never in the payment flow. Customer pays, merchant receives. Instant settlement, no holding periods.</p>
              </div>
            </div>
            <div className="why-img-card">
              <div className="why-img-top"><img src="/zosata 2.jpg" alt="Save 25-35% per order" /></div>
              <div className="why-img-body">
                <h4>Save 25–35% per order</h4>
                <p>Traditional platforms take a massive cut. Zosata replaces it with a simple, predictable monthly fee.</p>
              </div>
            </div>
            <div className="why-img-card">
              <div className="why-img-top"><img src="/zosata 3.jpg" alt="No middlemen, ever" /></div>
              <div className="why-img-body">
                <h4>No middlemen, ever</h4>
                <p>Orders go directly from your customer to you. No algorithm burying your listing.</p>
              </div>
            </div>
            <div className="why-img-card">
              <div className="why-img-top"><img src="/zosta 4.jpg" alt="Higher margins from day one" /></div>
              <div className="why-img-body">
                <h4>Higher margins from day one</h4>
                <p>Zero commission plus direct customer ownership means your net margin improves immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section id="compare" className="compare">
        <div className="wrap">
          <div className="eyebrow-tag">Comparison</div>
          <h2 className="sec-title">Zosata vs <em>the old way</em></h2>
          <p className="sec-sub">Why restaurants are ditching aggregator dependency and taking back control.</p>
          <div className="cmp-new-table rev">
            {/* Header */}
            <div className="cmp-new-head">
              <div className="cmp-new-h1">WHY ZOSATA IS BETTER</div>
              <div className="cmp-new-h2"><span className="cmp-dot"></span>ZOSATA</div>
              <div className="cmp-new-h3">AGGREGATORS</div>
            </div>
            {/* Rows */}
            {[
              { icon: '🏦', feature: 'Payment settlement',        yes: 'Direct to merchant bank',   no: 'Platform holds & transfers' },
              { icon: '👥', feature: 'Customer data ownership',   yes: '100% yours',                no: 'Platform owns it' },
              { icon: '🗂️', feature: 'Menu & pricing control',    yes: 'Full control',              no: 'Platform-restricted' },
              { icon: '💬', feature: 'Ordering channel',          yes: 'WhatsApp (no app)',         no: 'Requires app download' },
              { icon: '⭐', feature: 'Brand visibility',          yes: 'Your brand always',         no: 'Buried in listings' },
              { icon: '⏱️', feature: 'Setup time',               yes: 'Under 10 minutes',          no: 'Days to weeks' },
              { icon: '₹',  feature: 'Monthly cost model',        yes: 'Flat fee, predictable',     no: '% of every order' },
              { icon: '📣', feature: 'Re-marketing to customers', yes: 'Full WhatsApp access',      no: 'Not allowed' },
            ].map((r, i) => (
              <div className="cmp-new-row" key={i}>
                <div className="cmp-new-feat">
                  <span className="cmp-feat-icon">{r.icon}</span>
                  <strong>{r.feature}</strong>
                </div>
                <div className="cmp-new-yes">
                  <span className="cmp-check">✓</span>
                  {r.yes}
                </div>
                <div className="cmp-new-no">
                  <span className="cmp-cross">✕</span>
                  {r.no}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testi-section" id="testimonials">
        <div className="wrap">
          <div className="eyebrow-tag">Success Stories</div>
          <h2 className="sec-title">Restaurants <em>love</em> Zosata</h2>
        </div>
        <div className="testi-rows" style={{ marginTop: 48 }}>
          {/* Row 1 — scrolls left */}
          <div className="testi-row-wrap">
            <div className="testi-row testi-row-left">
              {[...testiRow1, ...testiRow1].map((t, i) => (
                <div className="testi-gcard" key={i}>
                  <div className="testi-gcard-top">
                    <div className="testi-gav">
                      <span>{t.av}</span>
                    </div>
                    <div>
                      <div className="testi-gname">{t.name}</div>
                      <div className="testi-grole">{t.role}</div>
                    </div>
                    <div className="testi-google-logo">
                      <svg viewBox="0 0 48 48" width="22" height="22"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
                    </div>
                  </div>
                  <div className="testi-gstars">★★★★★</div>
                  <p className="testi-gtext">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Row 2 — scrolls right */}
          <div className="testi-row-wrap">
            <div className="testi-row testi-row-right">
              {[...testiRow2, ...testiRow2].map((t, i) => (
                <div className="testi-gcard" key={i}>
                  <div className="testi-gcard-top">
                    <div className="testi-gav">
                      <span>{t.av}</span>
                    </div>
                    <div>
                      <div className="testi-gname">{t.name}</div>
                      <div className="testi-grole">{t.role}</div>
                    </div>
                    <div className="testi-google-logo">
                      <svg viewBox="0 0 48 48" width="22" height="22"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
                    </div>
                  </div>
                  <div className="testi-gstars">★★★★★</div>
                  <p className="testi-gtext">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="wrap">
          <div className="cta-box-new rev">
            <div className="cta-bg-img" style={{ backgroundImage: 'url(/image4.jpg)' }}></div>
            <div className="cta-box-overlay"></div>
            <div className="cta-box-content">
              <div className="eyebrow-tag" style={{ justifyContent: 'center', marginBottom: 20 }}>Get started today</div>
              <h2>Start selling on WhatsApp <em>today</em></h2>
              <p>Join hundreds of restaurants that broke free from aggregators. First 14 days completely free — no credit card needed.</p>
              <div className="cta-btns">
                <a href="#book-demo" className="btn btn-primary btn-lg btn-pulse">Book a live demo</a>
                <a href="https://wa.me/919927270503" target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg">💬 Chat on WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOK DEMO */}
      <section id="book-demo" className="book">
        <div className="contact-new-wrap rev">

          {/* LEFT — contact info */}
          <div className="contact-info-side">
            <div className="eyebrow-tag">Contact Zosata</div>
            <h2 className="contact-info-title">Get in touch with us</h2>
            <p className="contact-info-sub">Have questions or need help getting started? Our team is always ready to assist you with the best solution for your restaurant.</p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">📞</div>
                <div>
                  <div className="contact-info-label">Phone / WhatsApp</div>
                  <a href="https://wa.me/919927270503?text=Hi%20Zosata%2C%20I%20want%20to%20know%20more%20about%20your%20WhatsApp%20ordering%20platform." target="_blank" rel="noreferrer" className="contact-info-val">+91 99272 70503</a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">✉️</div>
                <div>
                  <div className="contact-info-label">Email Address</div>
                  <a href="mailto:contact@zosata.com" className="contact-info-val">contact@zosata.com</a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">⏰</div>
                <div>
                  <div className="contact-info-label">Support Hours</div>
                  <div className="contact-info-val">Mon – Sat: 9:00 AM – 7:00 PM</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">📍</div>
                <div>
                  <div className="contact-info-label">Location</div>
                  <div className="contact-info-val">India — serving restaurants nationwide</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — contact card */}
          <div className="contact-card-new">
            <div className="eyebrow-tag" style={{ justifyContent: 'center', marginBottom: 16 }}>Talk to an Expert</div>
            <h2 className="contact-card-title">Talk to a Zosata expert</h2>
            <p className="contact-card-sub">We would love to hear about your restaurant and help you go commission-free on WhatsApp.</p>

            <div className="contact-details">
              <div className="contact-row">
                <span className="contact-lbl">Email us</span>
                <a href="mailto:contact@zosata.com" className="contact-val green">contact@zosata.com</a>
              </div>
              <div className="contact-row">
                <span className="contact-lbl">Call / WhatsApp</span>
                <a href="https://wa.me/919927270503?text=Hi%20Zosata%2C%20I%20want%20to%20know%20more%20about%20your%20WhatsApp%20ordering%20platform." target="_blank" rel="noreferrer" className="contact-val">+91 99272 70503</a>
              </div>
            </div>

            <div className="cta-row" style={{ marginTop: 28 }}>
              <a href="https://wa.me/919927270503" target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">💬 Chat on WhatsApp</a>
              <a href="mailto:contact@zosata.com" className="btn btn-ghost btn-lg">✉️ Send email</a>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
