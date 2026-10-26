import { useEffect, useRef } from 'react'
import { CheckCircle2, X } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink-950/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="animate-modal-in relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl border border-white/10 bg-ink-800 shadow-2xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="blueprint-grid sticky top-0 z-10 border-b border-white/10 bg-ink-800/95 px-6 py-5 backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-safety-400">{project.status}</p>
              <h3 id="project-modal-title" className="mt-1 text-2xl font-bold text-white">
                {project.title}
              </h3>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="rounded-md p-1.5 text-steel-400 transition hover:bg-white/10 hover:text-white"
              aria-label="Close details"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.categories.map((c) => (
              <li key={c} className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-steel-300">
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8 px-6 py-6">
          <p className="leading-relaxed text-steel-300">{project.overview}</p>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-steel-400">Technical Specs</h4>
            <dl className="mt-3 divide-y divide-white/5 overflow-hidden rounded-lg border border-white/10">
              {project.specs.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[8rem_1fr] gap-4 px-4 py-2.5 text-sm sm:grid-cols-[10rem_1fr]">
                  <dt className="font-mono text-steel-400">{k}</dt>
                  <dd className="text-steel-100">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-steel-400">Design Constraints</h4>
            <ul className="mt-3 space-y-2.5">
              {project.constraints.map((c) => (
                <li key={c} className="flex gap-3 text-sm text-steel-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-safety-400" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-steel-400">Tools &amp; Processes</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <li key={t} className="rounded border border-safety-500/30 bg-safety-500/10 px-2.5 py-1 font-mono text-xs text-safety-300">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
