import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { categories, projects } from '../data/content'
import ProjectModal from './ProjectModal'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const visible = filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))
  const countFor = (c) => (c === 'All' ? projects.length : projects.filter((p) => p.categories.includes(c)).length)

  return (
    <section id="projects" className="relative border-t border-white/5 bg-ink-950/50 py-24">
      <div className="blueprint-grid absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="02" eyebrow="Projects" title="Things I’ve designed and built">
          Personal builds, team projects, and club hardware. Open any card for specs and design constraints.
        </SectionHeading>

        <div className="-mx-4 mb-10 overflow-x-auto px-4 sm:mx-0 sm:px-0" role="tablist" aria-label="Filter projects">
          <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={filter === c}
                onClick={() => setFilter(c)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${
                  filter === c
                    ? 'border-safety-500 bg-safety-500 text-ink-950'
                    : 'border-white/10 bg-white/5 text-steel-300 hover:border-white/25 hover:text-white'
                }`}
              >
                {c}
                <span className={`ml-2 font-mono text-xs ${filter === c ? 'text-ink-950/70' : 'text-steel-400'}`}>
                  {countFor(c)}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={`${filter}-${p.id}`} delay={(i % 3) * 80}>
              <ProjectCard project={p} index={projects.indexOf(p)} onOpen={() => setSelected(p)} />
            </Reveal>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}

function ProjectCard({ project, index, onOpen }) {
  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-white/10 bg-ink-800/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-safety-500/50 hover:shadow-xl hover:shadow-safety-500/5">
      <span className="absolute left-0 top-6 h-8 w-0.5 bg-safety-500 opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-center justify-between font-mono text-xs">
        <span className="text-steel-400">P-{String(index + 1).padStart(3, '0')}</span>
        <span className="rounded border border-safety-500/30 bg-safety-500/10 px-2 py-0.5 text-safety-300">
          {project.status}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-semibold leading-snug text-white">{project.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-400">{project.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.tools.map((t) => (
          <li key={t} className="rounded bg-white/5 px-2 py-1 font-mono text-[11px] text-steel-300">
            {t}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onOpen}
        className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-safety-400 transition hover:text-safety-300"
      >
        View Details
        <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        <span className="absolute inset-0" aria-hidden="true" />
      </button>
    </article>
  )
}
