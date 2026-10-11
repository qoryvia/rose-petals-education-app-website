export default function SectionHeading({ eyebrow, title, children, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}>
      {eyebrow && <p className="text-sm font-bold text-gold-dark">{eyebrow}</p>}
      <h2 className="mt-1 text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className={`mt-3 h-1 w-14 rounded bg-gold ${center ? 'mx-auto' : ''}`} />
      {children && <p className="mt-4 leading-relaxed">{children}</p>}
    </div>
  )
}
