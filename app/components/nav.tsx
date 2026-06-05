'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'home' },
  { href: '/experiences', label: 'experiences' },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-8 px-8 py-6">
      {links.map(({ href, label }) => {
        const active = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={active ? 'text-white' : 'text-zinc-500 hover:text-zinc-300 transition-colors'}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
