import { Briefcase, Flag, MapPin, Rocket } from 'lucide-react'
import { experience } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const typeIcon = { Engineering: Rocket, Leadership: Flag, Industry: Briefcase }

export default function Experience() {
  return (
    <section id="experience" className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="03" eyebrow="Experience & Leadership" title="Teams, shops, and studios" />

        <ol className="relative ml-3 border-l border-white/10 md:ml-0 md:border-none">
          {experience.map((item, i) => {
            const Icon = typeIcon[item.type] ?? Briefcase
            return (
              <li key={item.org} className="relative mb-10 pl-8 last:mb-0 md:grid md:grid-cols-[12rem_1fr] md:gap-10 md:pl-0">
                <span className="absolute left-0 top-1 hidden h-full w-px bg-white/10 md:left-[12rem] md:ml-5 md:block" />
                <div className="mb-2 md:mb-0 md:pr-6 md:pt-1 md:text-right">
                  <p className="font-mono text-sm text-safety-400">{item.dates}</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-steel-400">
                    <MapPin className="h-3 w-3" /> {item.location}
                  </p>
                </div>

                <span className="absolute -left-[17px] top-0 grid h-8 w-8 place-items-center rounded-full border border-safety-500/40 bg-ink-900 text-safety-400 md:left-[12rem] md:ml-1">
                  <Icon className="h-4 w-4" />
                </span>

                <Reveal delay={i * 60} className="md:pl-10">
                  <div className="rounded-xl border border-white/10 bg-ink-800/60 p-6 transition hover:border-safety-500/40">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-white">{item.org}</h3>
                      <span className="rounded bg-white/5 px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-steel-400">
                        {item.type}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium text-steel-300">{item.role}</p>
                    <ul className="mt-4 space-y-2">
                      {item.points.map((pt) => (
                        <li key={pt} className="flex gap-3 text-sm leading-relaxed text-steel-400">
                          <span className="mt-2 h-1 w-3 shrink-0 bg-safety-500/70" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
