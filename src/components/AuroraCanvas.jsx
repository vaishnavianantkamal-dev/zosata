import { useEffect, useRef } from 'react'

// Animated aurora background — ported from the original index.html canvas script.
export default function AuroraCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext('2d')
    let W, H
    let raf
    const blobs = []
    const colsDark = ['rgba(0,230,118,', 'rgba(0,191,165,', 'rgba(198,255,0,', 'rgba(0,149,255,']
    const colsLight = ['rgba(0,168,83,', 'rgba(0,137,123,', 'rgba(85,139,0,', 'rgba(0,100,200,']
    const getCols = () =>
      document.documentElement.getAttribute('data-theme') === 'light' ? colsLight : colsDark

    function resize() {
      W = c.width = window.innerWidth
      H = c.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 6; i++) {
      blobs.push({
        x: Math.random() * 1200,
        y: Math.random() * 800,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 420 + 200,
        colIdx: Math.floor(Math.random() * 4),
        a: Math.random() * 0.04 + 0.012,
      })
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      const cols = getCols()
      blobs.forEach((b) => {
        b.x += b.vx
        b.y += b.vy
        if (b.x < -b.r) b.x = W + b.r
        if (b.x > W + b.r) b.x = -b.r
        if (b.y < -b.r) b.y = H + b.r
        if (b.y > H + b.r) b.y = -b.r
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r)
        g.addColorStop(0, cols[b.colIdx] + b.a + ')')
        g.addColorStop(1, cols[b.colIdx] + '0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2)
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas id="bg-canvas" ref={ref} />
}
