import { ArrowUp, Download, Mail, Phone } from 'lucide-react'
import { profile } from '../data/content'
import { LinkedinIcon } from './BrandIcons'
import Reveal from './Reveal'

const YEAR = new Date().getFullYear()

export default function Contact() {
  const channels = [
    { href: `mailto:${profile.email}`, label: 'Email', value: profile.email, icon: <Mail className="h-5 w-5" /> },
    { href: profile.linkedin, label: 'LinkedIn', value: 'Connect on LinkedIn', icon: <LinkedinIcon />, external: true },
    { href: `tel:${profile.phone.replace(/\D/g, '')}`, label: 'Phone', value: profile.phone, icon: <Phone className="h-5 w-5" /> },
  ]

  return (
    <>
      <section id="contact" className="relative overflow-hidden border-t border-white/5 py-24">
        <div className="blueprint-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_bottom,black_20%,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety-400">
              <span className="text-steel-400">05 /</span> Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">Let&rsquo;s build something.</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-steel-300">
              I&rsquo;m actively looking for Summer 2027 internships and co-ops. If you have a role, a project, or
              just want to talk shop, my inbox is open.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-safety-500 px-6 py-3 font-semibold text-ink-950 transition hover:bg-safety-400"
              >
                <Mail className="h-4 w-4" /> Say Hello
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-safety-500/60 hover:bg-white/5"
              >
                <Download className="h-4 w-4" /> Resume (PDF)
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-14 grid gap-4 text-left sm:grid-cols-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-ink-800/70 p-5 transition hover:-translate-y-0.5 hover:border-safety-500/50"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-white/5 text-steel-300 transition group-hover:bg-safety-500 group-hover:text-ink-950">
                      {c.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-xs uppercase tracking-widest text-steel-400">{c.label}</span>
                      <span className="block truncate font-medium text-white">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-steel-400 sm:flex-row sm:px-6">
          <p>
            &copy; {YEAR} {profile.name} · Built with React &amp; Tailwind CSS
          </p>
          <div className="flex items-center gap-4">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
              <LinkedinIcon />
            </a>
            <a href="#top" className="inline-flex items-center gap-1 transition hover:text-safety-400">
              Back to top <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
