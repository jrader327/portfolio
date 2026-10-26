import { Cpu, DraftingCompass, Wrench } from 'lucide-react'
import { skillGroups } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const icons = { compass: DraftingCompass, wrench: Wrench, cpu: Cpu }

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-white/5 bg-ink-950/50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="04" eyebrow="Skills" title="Software & shop matrix">
          The tools I use to go from sketch to finished part.
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.icon]
            return (
              <Reveal key={g.name} delay={i * 100}>
                <div className="h-full rounded-xl border border-white/10 bg-ink-800/60 p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-safety-500/10 text-safety-400">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-white">{g.name}</h3>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <li
                        key={s}
                        className="cursor-default rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-steel-300 transition hover:-translate-y-0.5 hover:border-safety-500/50 hover:text-white"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
