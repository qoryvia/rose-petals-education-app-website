import { Link } from 'react-router-dom'

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-crimson-dark via-crimson to-navy text-white">
      <div className="absolute inset-0 opacity-20 [background:repeating-conic-gradient(from_0deg_at_85%_50%,#F6D77A_0_5deg,transparent_5deg_10deg)]" />
      <div className="container-x relative py-14 sm:py-16">
        <p className="text-sm text-gold-light">
          <Link to="/" className="hover:underline">Home</Link> / {title}
        </p>
        <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-white/85">{subtitle}</p>}
      </div>
    </section>
  )
}
