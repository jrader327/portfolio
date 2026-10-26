import { ArrowRight, Download, MapPin, GraduationCap } from 'lucide-react'
import { profile } from '../data/content'

const stats = [
  { value: '7', label: 'Projects built' },
  { value: '2', label: 'Engineering teams' },
  { value: '$10K+', label: 'Raised for St. Jude' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="blueprint-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-safety-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-steel-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Seeking Summer 2027 internships &amp; co-ops
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Mechanical Engineering Student &amp;{' '}
            <span className="bg-gradient-to-r from-safety-400 to-safety-300 bg-clip-text text-transparent">
              Prototyping Enthusiast
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel-300">
            I take ideas from CAD model to machined part to working hardware. Currently building rocket engine
            components, competition roller coaster structures, and robots, with a focus on design for manufacturing
            and hands-on fabrication.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-steel-400">
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4 text-safety-400" /> Boston University · {profile.gradDate}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-safety-400" /> {profile.location}
            </span>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-safety-500 px-6 py-3 font-semibold text-ink-950 shadow-lg shadow-safety-500/20 transition hover:bg-safety-400"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-safety-500/60 hover:bg-white/5"
            >
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>

        <HeroGraphic />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <dl className="grid grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/10 bg-ink-800/60 backdrop-blur">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse px-3 py-5 text-center sm:px-6">
              <dt className="mt-1 text-xs text-steel-400 sm:text-sm">{s.label}</dt>
              <dd className="font-mono text-2xl font-bold text-white sm:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

// Technical-drawing style gear with dimension callouts.
function HeroGraphic() {
  const teeth = 16
  const gearPath = Array.from({ length: teeth }, (_, i) => {
    const a = (i / teeth) * Math.PI * 2
    const step = (Math.PI * 2) / teeth
    const pts = [
      [a - step * 0.28, 112],
      [a - step * 0.18, 132],
      [a + step * 0.18, 132],
      [a + step * 0.28, 112],
    ]
    return pts.map(([ang, r]) => `${(Math.cos(ang) * r).toFixed(2)},${(Math.sin(ang) * r).toFixed(2)}`).join(' L')
  }).join(' L')

  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-md lg:block" aria-hidden="true">
      <div className="absolute inset-0 rounded-2xl border border-white/10 bg-ink-800/50 backdrop-blur-sm" />
      <svg viewBox="-200 -200 400 400" className="relative h-full w-full">
        <g className="text-steel-400" stroke="currentColor" fill="none">
          <line x1="-180" y1="0" x2="180" y2="0" strokeDasharray="14 4 2 4" strokeOpacity="0.4" />
          <line x1="0" y1="-180" x2="0" y2="180" strokeDasharray="14 4 2 4" strokeOpacity="0.4" />
        </g>
        <g className="origin-center animate-[spin_40s_linear_infinite]" style={{ transformBox: 'fill-box' }}>
          <path d={`M${gearPath} Z`} fill="rgb(255 122 26 / 0.06)" stroke="#ff7a1a" strokeWidth="1.5" />
          <circle r="60" fill="none" stroke="#ff7a1a" strokeOpacity="0.7" strokeWidth="1.2" />
          <circle r="24" fill="#0b0f14" stroke="#ff7a1a" strokeWidth="1.5" />
          {Array.from({ length: 6 }, (_, i) => {
            const a = (i / 6) * Math.PI * 2
            return (
              <circle key={i} cx={Math.cos(a) * 86} cy={Math.sin(a) * 86} r="9" fill="none" stroke="#ff7a1a" strokeOpacity="0.6" />
            )
          })}
        </g>
        <g fill="#aeb8c5" fontFamily="JetBrains Mono, monospace" fontSize="10">
          <line x1="-132" y1="160" x2="132" y2="160" stroke="#8b98a8" strokeWidth="0.8" />
          <line x1="-132" y1="150" x2="-132" y2="170" stroke="#8b98a8" strokeWidth="0.8" />
          <line x1="132" y1="150" x2="132" y2="170" stroke="#8b98a8" strokeWidth="0.8" />
          <text x="0" y="178" textAnchor="middle">Ø 264.0 ±0.05</text>
          <line x1="17" y1="-17" x2="110" y2="-110" stroke="#8b98a8" strokeWidth="0.8" />
          <text x="114" y="-114">Ø48 BORE</text>
          <text x="-182" y="-176">DWG-001 · REV A</text>
          <text x="182" y="-176" textAnchor="end">N=16</text>
        </g>
      </svg>
    </div>
  )
}
