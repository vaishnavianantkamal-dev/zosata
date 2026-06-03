import { useEffect } from 'react'

// Replicates the IntersectionObserver reveal from the original site.
// Adds the `in` class to `.rev` / `.rev-stagger` elements when they enter view.
export function useScrollReveal(onReveal) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add('in')
            io.unobserve(x.target)
            if (onReveal) onReveal(x.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.rev,.rev-stagger').forEach((el) => io.observe(el))
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
