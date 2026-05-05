'use client'

import { useState, useEffect } from 'react'

const WORDS = ['Convert.', 'Rank.', 'Grow.']

export default function HeroTypewriter() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = WORDS[wordIndex]

    if (!deleting && displayed === word) {
      const t = setTimeout(() => setDeleting(true), 2200)
      return () => clearTimeout(t)
    }

    if (deleting && displayed === '') {
      setDeleting(false)
      setWordIndex(i => (i + 1) % WORDS.length)
      return
    }

    const speed = deleting ? 55 : 95
    const next = deleting
      ? word.slice(0, displayed.length - 1)
      : word.slice(0, displayed.length + 1)

    const t = setTimeout(() => setDisplayed(next), speed)
    return () => clearTimeout(t)
  }, [displayed, deleting, wordIndex])

  return (
    <span
      className="nh-hero-typewriter-fm"
      aria-label={WORDS.join(', ')}
    >
      {/* Invisible longest word keeps container width stable */}
      <span
        aria-hidden="true"
        style={{ visibility: 'hidden', userSelect: 'none', whiteSpace: 'nowrap' }}
      >
        Convert.
      </span>

      {/* Typed text overlaid — never shifts surrounding layout */}
      <span className="nh-hero-typewriter-fm-inner">
        {displayed}
      </span>
    </span>
  )
}
