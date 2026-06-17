import { useState, useEffect } from 'react'

export function useTypewriter(texts: string[], speed = 60, deleteSpeed = 30, pause = 2000) {
  const [displayed, setDisplayed] = useState('')
  const [i, setI] = useState(0)
  const [charI, setCharI] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[i]
    if (!current) return

    if (!deleting) {
      if (charI < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charI + 1))
          setCharI(charI + 1)
        }, speed)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setDeleting(true), pause)
        return () => clearTimeout(t)
      }
    } else {
      if (charI > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charI - 1))
          setCharI(charI - 1)
        }, deleteSpeed)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => {
          setDeleting(false)
          setI((i + 1) % texts.length)
        }, 500)
        return () => clearTimeout(t)
      }
    }
  }, [charI, deleting, i, texts, speed, deleteSpeed, pause])

  return displayed
}
