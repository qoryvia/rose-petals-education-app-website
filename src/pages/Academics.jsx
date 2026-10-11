import { FaCheckCircle } from 'react-icons/fa'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import AdmissionBand from '../components/AdmissionBand.jsx'
import { curriculum, facilities } from '../data/siteData.js'

const levels = [
  { name: 'Pre-Primary', classes: ['Nursery', 'LKG', 'UKG'] },
  { name: 'Upper Primary', classes: ['Class I', 'Class II', 'Class III', 'Class IV', 'Class V', 'Class VI', 'Class VII', 'Class VIII'] },
]

export default function Academics() {
  return (
    <>
      <PageHeader title="Academics & Facilities" subtitle="A CBSE-pattern, English-medium curriculum in a campus built for learning." />

      <section className="py-16">
        <div className="container-x">
          <SectionHeading eyebrow="Curriculum structure" title="How learning is organised" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {curriculum.map((c) => (
              <div key={c.label} className="card border-t-4 border-t-crimson p-6">
                <p className="text-sm font-bold text-gold-dark">{c.label}</p>
                <p className="mt-2 font-display text-xl font-bold text-navy">{c.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {levels.map((l) => (
              <div key={l.name} className="rounded-xl bg-cream p-6">
                <h3 className="text-xl font-bold">{l.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {l.classes.map((c) => (
                    <span key={c} className="rounded-full bg-white px-4 py-1.5 text-sm font-bold text-crimson shadow-sm">{c}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="container-x">
          <div className="max-w-xl">
            <p className="text-sm font-bold text-gold">Campus facilities</p>
            <h2 className="mt-1 text-3xl font-bold text-white sm:text-4xl">Everything a growing child needs</h2>
            <div className="mt-3 h-1 w-14 rounded bg-gold" />
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold text-xl text-navy-dark"><Icon /></span>
                <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-x">
          <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
            {['Smart classrooms', 'Resource library', 'Playground and sports', 'Creative project labs'].map((t) => (
              <li key={t} className="flex items-center gap-3 font-semibold text-navy"><FaCheckCircle className="text-leaf" /> {t}</li>
            ))}
          </ul>
        </div>
      </section>

      <AdmissionBand />
    </>
  )
}
