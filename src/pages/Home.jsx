import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaStar,
  FaGraduationCap,
  FaFutbol,
  FaPalette,
  FaPencilAlt,
  FaLock,
} from 'react-icons/fa'

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
  {
    icon: FaFutbol,
    title: 'Sports & Recreation',
    text: 'Physical education, athletics and team games on a dedicated playground.',
  },
  {
    icon: FaPalette,
    title: 'Creative Projects',
    text: 'Student exhibitions like “Maths City” and architectural design showcases.',
  },
  {
    icon: FaPencilAlt,
    title: 'Custom Assignments',
    text: 'Work shaped around each learner to build understanding, not just marks.',
  },
  {
    icon: FaLock,
    title: 'Safe Campus',
    text: 'Security protocols across the campus for complete peace of mind.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="rays relative isolate pb-8 pt-8 sm:pb-12 sm:pt-12 lg:overflow-visible lg:pb-32 lg:pt-16">
        <div className="container-x grid min-w-0 grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Hero Content */}
          <div className="min-w-0">
            {/* Admission Badge */}
            <p className="inline-flex max-w-full items-center gap-2 rounded-full bg-crimson/10 px-3 py-2 text-xs font-bold leading-5 text-crimson sm:px-4 sm:text-sm">
              <FaStar className="shrink-0 text-gold-dark" />
              <span>Admissions open {site.session}</span>
            </p>

            {/* Heading */}
            <h1 className="mt-4 break-words text-3xl font-bold leading-tight tracking-tight sm:mt-5 sm:text-4xl md:text-5xl lg:text-6xl">
              {site.name}
              <span className="text-crimson">
                ,&nbsp;Kushinagar
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-3 font-display text-xl font-semibold leading-snug text-gold-dark sm:text-2xl lg:text-3xl">
              {site.tagline}
            </p>

            <div className="my-5 h-1 w-12 rounded-full bg-gold sm:my-6 sm:w-14" />

            {/* Description */}
            <p className="max-w-xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-relaxed">
              A premier co-educational, English-medium convent school in
              Kasia Bazaar, Kushinagar, affiliated with the CBSE pattern
              and teaching from Nursery to Class VIII.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                to="/academics"
                className="btn btn-navy flex w-full items-center justify-center gap-2 sm:w-auto"
              >
                Explore academics
                <FaArrowRight className="shrink-0" />
              </Link>

              <Link
                to="/admissions"
                className="btn btn-outline flex w-full items-center justify-center sm:w-auto"
              >
                Apply for admission
              </Link>
            </div>

            {/* Rating */}
            <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm font-semibold text-navy sm:mt-6">
              <span
                aria-label="4 stars"
                className="flex shrink-0 items-center gap-0.5 text-gold"
              >
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </span>

              <span className="leading-5">
                Rated 4.4/5 by students and parents
              </span>
            </div>
          </div>

          {/* Hero Emblem */}
          <div className="relative mx-auto flex w-full min-w-0 flex-col items-center lg:max-w-lg">
            <div className="grid aspect-square w-full max-w-[17rem] place-items-center sm:max-w-[21rem] lg:max-w-full">
              <img
                src="/logo.png"
                alt={`${site.name} emblem`}
                className="emblem-in h-full w-full object-contain"
              />
            </div>

            {/* Curriculum Card
                Normal flow on mobile, floating card on desktop */}
            <div className="mt-3 flex w-full max-w-xs items-center gap-3 rounded-xl border border-navy/10 bg-white p-4 text-navy sm:max-w-sm sm:p-5 lg:absolute lg:-bottom-5 lg:right-0 lg:mt-0 lg:max-w-[14rem] lg:translate-x-4 lg:border-transparent lg:bg-navy lg:p-5 lg:text-white">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gold text-navy-dark">
                <FaGraduationCap className="text-2xl" />
              </span>

              <div className="min-w-0">
                <p className="text-xs font-medium text-slate-500 lg:text-white/80">
                  Curriculum
                </p>

                <p className="mt-1 text-sm font-bold leading-snug sm:text-base">
                  CBSE pattern, Nursery to Class VIII
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights
            Normal document flow on mobile; overlapping strip on desktop */}
        <div className="container-x mt-8 sm:mt-10 lg:absolute lg:inset-x-0 lg:-bottom-24 lg:z-10 lg:mt-0">
          <HighlightStrip />
        </div>
      </section>

      {/* Reserve space for the overlapping desktop highlights strip */}
      <div className="hidden h-24 lg:block" />

      {/* Welcome */}
      <section className="py-12 sm:py-16">
        <div className="container-x grid gap-6 sm:gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionHeading
              eyebrow="Welcome"
              title="Welcome to Rose Petals Convent School"
            />
          </div>

          <div className="space-y-4 leading-relaxed lg:col-span-3">
            <p>
              Welcome to Rose Petals Convent School, a premier co-educational,
              English-medium convent institution located in the heart of
              Kasia Bazaar, Kushinagar, Uttar Pradesh. Affiliated with the
              CBSE curriculum, we deliver high-quality elementary education
              from Nursery to Class VIII.
            </p>

            <p>
              Our mission is to foster academic excellence, character
              development and holistic growth in a highly disciplined yet
              nurturing environment. By balancing expert pedagogy with
              affordable structures, we prepare young minds to become
              tomorrow's confident leaders.
            </p>

            <Link to="/about" className="btn btn-crimson mt-2">
              More about us <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-cream py-12 sm:py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Learning at Rose Petals"
            title="Spaces built for young learners"
            center
          >
            Every part of the campus supports learning, play and safety.
          </SectionHeading>

          <div className="mt-8 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5">
            {facilities.map(({ icon: Icon, title, short }) => (
              <Link
                key={title}
                to="/academics"
                className="card group overflow-hidden transition-transform hover:-translate-y-1"
              >
                <div className="grid h-24 place-items-center bg-gradient-to-br from-navy to-crimson sm:h-28">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gold text-xl text-navy-dark sm:h-14 sm:w-14 sm:text-2xl">
                    <Icon />
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-bold sm:text-lg">{title}</h3>

                  <p className="mt-1 text-sm leading-relaxed">{short}</p>

                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-crimson">
                    Explore
                    <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-navy py-8 text-white sm:py-10">
        <div className="container-x grid grid-cols-2 gap-x-4 gap-y-7 text-center sm:gap-8 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
          {stats.map((s) => (
            <div key={s.label} className="px-2">
              <p className="font-display text-2xl font-bold text-gold sm:text-4xl">
                {s.value}
              </p>

              <p className="mt-1 text-xs leading-relaxed text-white/80 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Life at School */}
      <section className="py-12 sm:py-16">
        <div className="container-x grid items-center gap-8 sm:gap-10 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-crimson-dark via-crimson to-navy p-6 text-white sm:p-10">
            <div className="absolute inset-0 opacity-20 [background:repeating-conic-gradient(from_0deg_at_50%_120%,#F6D77A_0_5deg,transparent_5deg_10deg)]" />

            <img
              src="/logo.png"
              alt=""
              className="relative mx-auto h-32 w-32 object-contain sm:h-40 sm:w-40"
            />

            <p className="relative mt-5 text-center font-display text-2xl font-bold leading-snug sm:mt-6 sm:text-3xl">
              {site.motto}
            </p>
          </div>

          <div className="min-w-0">
            <SectionHeading
              eyebrow="Life at Rose Petals"
              title="More than lessons, a whole childhood"
            />

            <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2">
              {lifeCards.map(({ icon: Icon, title, text }) => (
                <div key={title} className="card p-4 sm:p-5">
                  <Icon className="text-2xl text-crimson" />

                  <h3 className="mt-3 text-base font-bold">{title}</h3>

                  <p className="mt-1 text-sm leading-relaxed">{text}</p>
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
    <div className="card grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 sm:gap-5 sm:p-6 lg:grid-cols-4 lg:divide-x lg:divide-slate-100">
      {highlights.map(({ icon: Icon, title, text, tone }) => (
        <div
          key={title}
          className="flex min-w-0 items-start gap-3 sm:gap-4 lg:px-4 first:lg:pl-0"
        >
          <span
            className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-lg sm:h-12 sm:w-12 sm:text-xl ${tones[tone]}`}
          >
            <Icon />
          </span>

          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-bold leading-snug sm:text-base">
              {title}
            </h3>

            <p className="mt-1 text-xs leading-relaxed">{text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}