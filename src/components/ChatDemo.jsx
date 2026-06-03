import { useEffect, useRef, useState } from 'react'

const script = [
  { who: 'out', text: 'Hi 👋', step: 0, time: '10:32' },
  { who: 'in',  text: '👋 Welcome to <b>Pizza Palace!</b>\n\nWhat would you like today?\n\n1️⃣ Pizzas\n2️⃣ Pasta & Sides\n3️⃣ Drinks & Desserts\n\nReply with <b>1, 2 or 3</b>', step: 0, time: '10:32', chips: ['1 – Pizzas', '2 – Pasta', '3 – Drinks'] },
  { who: 'out', text: '1', step: 1, time: '10:33' },
  { who: 'in',  text: '🍕 <b>Pizzas</b>\n\n1️⃣ Margherita — ₹249\n2️⃣ Paneer Tikka — ₹319\n3️⃣ BBQ Chicken — ₹349\n\nReply with item number.', step: 1, time: '10:33', chips: ['1', '2', '3'] },
  { who: 'out', text: '3', step: 2, time: '10:34' },
  { who: 'in',  text: '🔥 <b>BBQ Chicken — ₹349</b>\n\nSize?\n1️⃣ Regular (8")\n2️⃣ Large (12") +₹80', step: 2, time: '10:34', chips: ['1 – Regular', '2 – Large'] },
  { who: 'out', text: '2', step: 2, time: '10:34' },
  { who: 'in',  text: '📍 Share your <b>delivery address.</b>', step: 2, time: '10:34' },
  { who: 'out', text: '12, MG Road, Sector 5, Gurgaon', step: 2, time: '10:35' },
  { who: 'in',  text: '✅ <b>Order Summary</b>\nBBQ Chicken Large — ₹429\nDeliver to: 12 MG Road\n\nReply <b>PAY</b> to checkout.', step: 3, time: '10:35', chips: ['PAY'] },
  { who: 'out', text: 'PAY', step: 3, time: '10:36' },
  { who: 'in',  text: '🎉 <b>Order Confirmed!</b>\n\nOrder <b>#ZS4821</b> · ₹429\nETA ~35 min 🛵\n\nPayment went straight to Pizza Palace 🏦', step: 3, time: '10:37' },
]

const stepData = [
  { n: '1', h: 'Customer says Hi',                  p: 'They message your WhatsApp. Zosata instantly sends your menu categories.',           badge: 'Instant response' },
  { n: '2', h: 'Category selected → items listed',  p: 'Reply with a number to browse any category — no app, no scrolling.',                badge: 'Number replies' },
  { n: '3', h: 'Quick checkout questions',           p: 'Zosata asks for address, size, quantity. Done in under 2 minutes.',                 badge: 'Guided flow' },
  { n: '4', h: 'Payment goes direct to your bank',  p: 'UPI / card payment lands in your merchant account. Zosata never touches it.',       badge: 'Direct settlement 🏦' },
]

export default function ChatDemo() {
  const chatRef   = useRef(null)
  const wrapRef   = useRef(null)
  const timerRef  = useRef(null)
  const idxRef    = useRef(0)
  const started   = useRef(false)
  const [activeStep, setActiveStep] = useState(0)

  function now(t) { return t }

  function appendTyping() {
    const el = document.createElement('div')
    el.className = 'cd-typing'
    el.innerHTML = '<i></i><i></i><i></i>'
    chatRef.current.appendChild(el)
    chatRef.current.scrollTop = chatRef.current.scrollHeight
    return el
  }

  function renderMsg(m, isLast) {
    const body = chatRef.current
    const d = document.createElement('div')
    d.className = 'cd-msg cd-' + m.who

    let html = m.text.replace(/\n/g, '<br>')
    if (m.chips && isLast) {
      html += '<div class="cd-chips">' + m.chips.map(c => `<span class="cd-chip">${c}</span>`).join('') + '</div>'
    }
    html += `<span class="cd-time">${now(m.time)}${m.who === 'out' ? ' <span class="cd-tick">✓✓</span>' : ''}</span>`
    d.innerHTML = html
    body.appendChild(d)
    setTimeout(() => d.classList.add('cd-vis'), 40)
    body.scrollTop = body.scrollHeight
  }

  function next() {
    if (!chatRef.current) return
    const idx = idxRef.current

    if (idx >= script.length) {
      timerRef.current = setTimeout(() => {
        chatRef.current.innerHTML = ''
        idxRef.current = 0
        setActiveStep(0)
        next()
      }, 2800)
      return
    }

    const m = script[idx]
    setActiveStep(m.step)

    if (m.who === 'in') {
      const dots = appendTyping()
      timerRef.current = setTimeout(() => {
        dots.remove()
        renderMsg(m, idx === script.length - 1)
        idxRef.current = idx + 1
        timerRef.current = setTimeout(next, 900)
      }, 950)
    } else {
      renderMsg(m, false)
      idxRef.current = idx + 1
      timerRef.current = setTimeout(next, 700)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          next()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (wrapRef.current) observer.observe(wrapRef.current)
    return () => {
      observer.disconnect()
      if (timerRef.current) clearTimeout(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="cd-wrap" ref={wrapRef}>
      {/* LEFT — steps */}
      <div className="cd-steps">
        <div className="eyebrow-tag">Live Demo</div>
        <h2 className="sec-title">Watch a real order <em>happen</em></h2>
        <p className="sec-sub">Customers reply 1, 2, 3 to navigate — no scrolling, no app. Payment goes straight to your bank.</p>

        <div className="cd-step-list">
          {stepData.map((s, i) => (
            <div className={'cd-step' + (activeStep === i ? ' cd-step-active' : '')} key={i}>
              <div className="cd-step-n">{s.n}</div>
              <div className="cd-step-body">
                <h4>{s.h}</h4>
                <p>{s.p}</p>
                <span className="cd-badge">{s.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — two phones */}
      <div className="cd-phones-row">

        {/* Phone 1 — chat */}
        <div className="cd-phone">
          <div className="cd-notch">
            <div className="cd-cam"></div>
            <div className="cd-led"></div>
          </div>
          <div className="cd-wa-bar">
            <div className="cd-wa-back">‹</div>
            <div className="cd-wa-av">🍕</div>
            <div className="cd-wa-info">
              <div className="cd-wa-name">Pizza Palace</div>
              <div className="cd-wa-status"><span className="cd-wa-dot"></span>online · Zosata</div>
            </div>
            <div className="cd-wa-call">📞</div>
          </div>
          <div className="cd-chat" ref={chatRef}></div>
          <div className="cd-input-bar">
            <div className="cd-input-fake">Type a message…</div>
            <div className="cd-send">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="#000"><path d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
            </div>
          </div>
        </div>

        {/* Phone 2 — video */}
        <div className="cd-phone cd-phone-video">
          <div className="cd-notch">
            <div className="cd-cam"></div>
            <div className="cd-led"></div>
          </div>
          <video
            className="cd-video"
            src="/pinsnap-1033224339530856041.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

      </div>
    </div>
  )
}
