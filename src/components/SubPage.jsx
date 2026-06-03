import { useEffect } from 'react'
import { useScrollReveal } from '../useScrollReveal.js'

// Shared shell for the simple content subpages.
export default function SubPage({ pill, title, subtitle, children }) {
  useScrollReveal()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <section className="sub-hero">
        <span className="pill">{pill}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </section>
      <main className="sub-main">{children}</main>
    </>
  )
}

export function Cards({ items }) {
  return (
    <div className="grid">
      {items.map((it, i) => (
        <article className="card rev" key={i}>
          <h3>{it.h}</h3>
          <p>{it.p}</p>
        </article>
      ))}
    </div>
  )
}

export function CtaBand({ title, text, action }) {
  return (
    <div className="cta-band rev">
      <h2>{title}</h2>
      <p>{text}</p>
      {action}
    </div>
  )
}
