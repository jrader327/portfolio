import { useEffect, useState } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { profile } from '../data/content'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the nav link for whichever section is in the middle of the viewport.
  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-ink-900/85 backdrop-blur-lg' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-md border border-safety-500/40 bg-safety-500/10 font-mono text-sm font-bold text-safety-400 transition group-hover:bg-safety-500 group-hover:text-ink-950">
            {profile.initials}
          </span>
          <span className="font-semibold tracking-tight text-white">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                active === l.href ? 'text-white' : 'text-steel-400 hover:text-white'
              }`}
            >
              {l.label}
              <span
                className={`mx-auto mt-0.5 block h-px bg-safety-500 transition-all duration-300 ${
                  active === l.href ? 'w-full' : 'w-0'
                }`}
              />
            </a>
          ))}
          <a
            href={profile.resume}
            download
            className="ml-3 inline-flex items-center gap-2 rounded-md bg-safety-500 px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-safety-400"
          >
            <Download className="h-4 w-4" /> Resume
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-steel-300 hover:text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 px-4 pb-5 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-3 text-base font-medium text-steel-300 hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.resume}
            download
            className="mt-3 flex items-center justify-center gap-2 rounded-md bg-safety-500 px-4 py-3 font-semibold text-ink-950"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </div>
      )}
    </header>
  )
}
