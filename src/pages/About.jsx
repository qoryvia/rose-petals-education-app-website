import { Link } from 'react-router-dom'
import { FaQuoteLeft, FaRupeeSign, FaArrowRight } from 'react-icons/fa'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import AdmissionBand from '../components/AdmissionBand.jsx'
import { site, whyChoose } from '../data/siteData.js'

export default function About() {
  return (
    <>
      <PageHeader title="About Us" subtitle="Where creativity meets structured learning." />

      <section className="py-16">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our philosophy" title="Education is a journey" />
            <p className="mt-6 leading-relaxed">
              At Rose Petals Convent School, education is a journey where creativity meets structured learning.
              We believe that premium, competitive exam-ready education should be accessible, which is why we
              enforce a policy of reasonable fees with absolutely no hidden charges.
            </p>
            <div className="mt-6 flex items-start gap-4 rounded-xl border-l-4 border-gold bg-cream p-5">
              <FaRupeeSign className="mt-1 shrink-0 text-xl text-crimson" />
              <p className="font-semibold text-navy">Reasonable fees. No hidden charges.</p>
            </div>
          </div>

          <div className="relative rounded-2xl bg-navy p-10 text-center text-white shadow-card">
            <FaQuoteLeft className="mx-auto text-3xl text-gold" />
            <p className="mt-4 font-display text-3xl font-bold">{site.motto}</p>
            <img src="/logo.png" alt={`${site.name} emblem`} className="mx-auto mt-6 h-44 w-44 object-contain" />
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="container-x">
          <SectionHeading eyebrow="Why choose us" title="What sets Rose Petals apart" center />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whyChoose.map(({ icon: Icon, title, text }) => (
              <div key={title} className="card p-7">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-crimson text-2xl text-white"><Icon /></span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/academics" className="btn btn-navy">See academics & facilities <FaArrowRight /></Link>
          </div>
        </div>
      </section>

      <AdmissionBand />
    </>
  )
}
