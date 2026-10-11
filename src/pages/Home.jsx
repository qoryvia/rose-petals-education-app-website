import { Link } from 'react-router-dom'
import { FaArrowRight, FaStar, FaGraduationCap, FaFutbol, FaPalette, FaPencilAlt, FaLock } from 'react-icons/fa'
import SectionHeading from '../components/SectionHeading.jsx'
import AdmissionBand from '../components/AdmissionBand.jsx'
import { site, highlights, stats, facilities } from '../data/siteData.js'

const tones = {
  navy: 'bg-navy text-white',
  gold: 'bg-gold text-navy-dark',
  crimson: 'bg-crimson text-white',
  leaf: 'bg-leaf text-white',
}

const lifeCards = [
  { icon: FaFutbol, title: 'Sports & Recreation', text: 'Physical education, athletics and team games on a dedicated playground.' },
  { icon: FaPalette, title: 'Creative Projects', text: 'Student exhibitions like “Maths City” and architectural design showcases.' },
  { icon: FaPencilAlt, title: 'Custom Assignments', text: 'Work shaped around each learner to build understanding, not just marks.' },
  { icon: FaLock, title: 'Safe Campus', text: 'Security protocols across the campus for complete peace of mind.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="rays relative pb-28 pt-12 sm:pt-16 lg:pb-32">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-crimson/10 px-4 py-1.5 text-sm font-bold text-crimson">
              <FaStar className="text-gold-dark" /> Admissions open {site.session}
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {site.name}, <span className="text-crimson">Kushinagar</span>
            </h1>
            <p className="mt-3 font-display text-2xl font-semibold text-gold-dark sm:text-3xl">{site.tagline}</p>
            <div className="my-6 h-1 w-14 rounded bg-gold" />
            <p className="max-w-xl text-lg leading-relaxed">
              A premier co-educational, English-medium convent school in Kasia Bazaar, affiliated with the CBSE
              pattern and teaching from Nursery to Class VIII.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/academics" className="btn btn-navy">Explore academics <FaArrowRight /></Link>
              <Link to="/admissions" className="btn btn-outline">Apply for admission</Link>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-navy">
              <span className="flex text-gold">{[...Array(4)].map((_, i) => <FaStar key={i} />)}</span>
              Rated 4.4/5 by students and parents
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
            <img src="/logo.png" alt={`${site.name} emblem`} className="emblem-in w-full drop-shadow-2xl" />
            <div className="absolute -bottom-6 right-0 max-w-[14rem] rounded-xl bg-navy p-5 text-white shadow-card sm:-right-4">
              <FaGraduationCap className="text-3xl text-gold" />
              <p className="mt-2 text-sm text-white/80">Curriculum</p>
              <p className="font-display text-lg font-bold">CBSE pattern, Nursery to Class VIII</p>
            </div>
          </div>
        </div>

        {/* Highlights strip overlapping the hero */}
        <div className="container-x absolute inset-x-0 -bottom-24 z-10 hidden lg:block">
          <HighlightStrip />
        </div>
      </section>
      <div className="container-x -mt-16 mb-12 lg:hidden"><HighlightStrip /></div>
      <div className="hidden h-24 lg:block" />

      {/* Welcome */}
      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="Welcome" title="Welcome to Rose Petals Convent School" />
          </div>
          <div className="space-y-4 leading-relaxed lg:col-span-3">
            <p>
              Welcome to Rose Petals Convent School, a premier co-educational, English-medium convent institution
              located in the heart of Kasia Bazaar, Kushinagar, Uttar Pradesh. Affiliated with the CBSE curriculum,
              we deliver high-quality elementary education from Nursery to Class VIII.
            </p>
            <p>
              Our mission is to foster academic excellence, character development and holistic growth in a highly
              disciplined yet nurturing environment. By balancing expert pedagogy with affordable structures, we
              prepare young minds to become tomorrow's confident leaders.
            </p>
            <Link to="/about" className="btn btn-crimson mt-2">More about us <FaArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-cream py-16">
        <div className="container-x">
          <SectionHeading eyebrow="Learning at Rose Petals" title="Spaces built for young learners" center>
            Every part of the campus supports learning, play and safety.
          </SectionHeading>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {facilities.map(({ icon: Icon, title, short }) => (
              <Link key={title} to="/academics" className="card group overflow-hidden transition-transform hover:-translate-y-1">
                <div className="grid h-28 place-items-center bg-gradient-to-br from-navy to-crimson">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-gold text-2xl text-navy-dark"><Icon /></span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="mt-1 text-sm">{short}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-crimson">Explore <FaArrowRight className="text-xs" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-navy py-10 text-white">
        <div className="container-x grid grid-cols-2 gap-8 text-center lg:grid-cols-4 lg:divide-x lg:divide-white/15">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl font-bold text-gold sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-white/80">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Life at school */}
      <section className="py-16">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-crimson-dark via-crimson to-navy p-10 text-white shadow-card">
            <div className="absolute inset-0 opacity-20 [background:repeating-conic-gradient(from_0deg_at_50%_120%,#F6D77A_0_5deg,transparent_5deg_10deg)]" />
            <img src="/logo.png" alt="" className="relative mx-auto h-40 w-40 object-contain" />
            <p className="relative mt-6 text-center font-display text-3xl font-bold">{site.motto}</p>
          </div>
          <div>
            <SectionHeading eyebrow="Life at Rose Petals" title="More than lessons, a whole childhood" />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {lifeCards.map(({ icon: Icon, title, text }) => (
                <div key={title} className="card p-5">
                  <Icon className="text-2xl text-crimson" />
                  <h3 className="mt-3 text-base font-bold">{title}</h3>
                  <p className="mt-1 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdmissionBand />
    </>
  )
}

function HighlightStrip() {
  return (
    <div className="card grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-100">
      {highlights.map(({ icon: Icon, title, text, tone }) => (
        <div key={title} className="flex gap-4 lg:px-4 first:lg:pl-0">
          <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full text-xl ${tones[tone]}`}><Icon /></span>
          <div>
            <h3 className="text-base font-bold">{title}</h3>
            <p className="mt-1 text-xs leading-relaxed">{text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
