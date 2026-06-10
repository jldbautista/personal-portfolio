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
    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 border-b border-zinc-900 px-6 py-5 text-base sm:px-8">
      {links.map(({ href, label }, index) => {
        const active = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={`group transition-colors ${
              active ? 'text-emerald-300' : 'text-zinc-500 hover:text-white'
            }`}
          >
            <span className={active ? 'text-emerald-300' : 'text-zinc-600 group-hover:text-white'}>
              [{index + 1}]
            </span>{' '}
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
