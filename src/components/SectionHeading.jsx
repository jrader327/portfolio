import Reveal from './Reveal'

export default function SectionHeading({ index, eyebrow, title, children }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety-400">
        <span className="text-steel-400">{index} /</span> {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-steel-300 leading-relaxed">{children}</p>}
    </Reveal>
  )
}
