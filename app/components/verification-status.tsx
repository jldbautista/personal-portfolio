'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'

const sequenceLabels = ['CHECKING CREDENTIALS...', 'PROFILE MATCHED', 'VERIFIED'] as const

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === 'undefined') {
    return () => {}
  }

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  mediaQuery.addEventListener('change', callback)

  return () => {
    mediaQuery.removeEventListener('change', callback)
  }
}

function getReducedMotionSnapshot() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getReducedMotionServerSnapshot() {
  return false
}

export default function VerificationStatus() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  )
  const [sequenceIndex, setSequenceIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const timers = [
      window.setTimeout(() => {
        setSequenceIndex(1)
      }, 700),
      window.setTimeout(() => {
        setSequenceIndex(2)
      }, 1400),
    ]

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer))
    }
  }, [prefersReducedMotion])

  const label = prefersReducedMotion ? 'VERIFIED' : sequenceLabels[sequenceIndex]
  const isComplete = prefersReducedMotion || sequenceIndex === sequenceLabels.length - 1
  const displayLabel = isComplete && isHovered ? 'IDENTITY CONFIRMED' : label

  return (
    <span
      className="verification-status"
      aria-label="Developer credential status: verified identity confirmed"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      tabIndex={0}
    >
      {isComplete && <span className="verification-dot" aria-hidden="true" />}
      <span>{displayLabel}</span>
    </span>
  )
}
