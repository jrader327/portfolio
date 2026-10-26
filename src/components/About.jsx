import { BookOpen, Target, Wrench } from 'lucide-react'
import { coursework, profile } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const pillars = [
  {
    icon: Wrench,
    title: 'Build-first mindset',
    body: 'I learn fastest at the mill and the 3D printer, turning CAD into parts I can hold, test, and improve.',
  },
  {
    icon: Target,
    title: 'Physical problem solving',
    body: 'From propellant-carrying hardware to coaster track, I like problems where tolerances and loads are real.',
  },
  {
    icon: BookOpen,
    title: 'Grounded in fundamentals',
    body: 'Coursework in thermodynamics, mechanics, and circuits shapes how I approach every design.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative border-t border-white/5 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="01" eyebrow="About" title="Hands-on engineering, from CAD to the shop floor" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-steel-300">
            <p>
              I&rsquo;m a junior studying Mechanical Engineering at{' '}
              <span className="text-white">Boston University&rsquo;s College of Engineering</span>. My path into
              engineering started in an architecture studio, where I built models that carried commercial buildings
              from concept to construction, and it taught me how much I love making ideas physical.
            </p>
            <p>
              Today I machine metal components for the{' '}
              <span className="text-white">BU Rocket Propulsion Group</span>, which is working to send the first
              collegiate liquid-fueled rocket to space, and build track and structure for a competition roller coaster
              with <span className="text-white">Terrier Ride Engineering</span>. On my own time I build robots and
              Raspberry Pi gadgets end to end.
            </p>
            <p>
              I&rsquo;m looking for <span className="font-semibold text-safety-400">summer internships and co-ops</span>{' '}
              in product design, manufacturing, or aerospace and propulsion, where I can contribute in the shop and
              in CAD from day one.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-xl border border-white/10 bg-ink-800/60 p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-steel-400">Education</p>
              <p className="mt-3 font-semibold text-white">{profile.school}</p>
              <p className="text-steel-300">{profile.degree}</p>
              <p className="mt-1 font-mono text-sm text-safety-400">{profile.gradDate}</p>
              <div className="my-5 h-px bg-white/10" />
              <p className="font-mono text-xs uppercase tracking-widest text-steel-400">Relevant Coursework</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <li key={c} className="rounded border border-white/10 bg-white/5 px-2.5 py-1 text-sm text-steel-300">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 100}>
              <div className="group h-full rounded-xl border border-white/10 bg-ink-800/40 p-6 transition hover:-translate-y-1 hover:border-safety-500/40">
                <Icon className="h-6 w-6 text-safety-400 transition group-hover:scale-110" />
                <h3 className="mt-4 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-400">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
