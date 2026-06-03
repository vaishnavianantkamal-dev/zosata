import { useEffect, useState } from 'react'

function getInitialTheme() {
  const stored = localStorage.getItem('theme')
  if (stored) return stored
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

// Shared theme state across components
let listeners = []
let current = getInitialTheme()

function apply(theme) {
  const root = document.documentElement
  root.setAttribute('data-theme', theme)
  root.classList.toggle('light', theme === 'light')
}

export function useTheme() {
  const [theme, setTheme] = useState(current)

  useEffect(() => {
    apply(current)
    const fn = (t) => setTheme(t)
    listeners.push(fn)
    return () => { listeners = listeners.filter((l) => l !== fn) }
  }, [])

  const toggle = () => {
    current = current === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', current)
    apply(current)
    listeners.forEach((l) => l(current))
  }

  return { theme, toggle }
}
