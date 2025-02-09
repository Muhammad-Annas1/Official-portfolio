'use client'
import {
  animate,
  easeOut,
  useInView,
  useIsomorphicLayoutEffect
} from 'framer-motion'
import { useRef } from 'react'

type AnimatedCounterProps = {
  from: number
  to: number
}

export default function AnimatedCounter({ from, to }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useIsomorphicLayoutEffect(() => {
    const element = ref.current
    if (!element || !inView) return

    element.textContent = String(from) // Start from initial value

    const controls = animate(from, to, {
      duration: 1.5,
      ease: easeOut, // ✅ Fix: Correct easing function
      delay: 0.6,
      onUpdate(value) {
        if (element) {
          element.textContent = value.toFixed(0)
        }
      }
    })

    return () => {
      controls.stop()
    }
  }, [inView, from, to])

  return <span ref={ref} />
}
