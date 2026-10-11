import { FaBullhorn, FaClipboardCheck } from 'react-icons/fa'
import PageHeader from '../components/PageHeader.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { site, admissionSteps, documents } from '../data/siteData.js'

export default function Admissions() {
  return (
    <>
      <PageHeader title="Admissions" subtitle="Start your child's journey in a safe, value-driven learning environment." />

      <section className="py-12">
        <div className="container-x">
          <div className="flex flex-col items-start gap-4 rounded-2xl bg-gold p-8 sm:flex-row sm:items-center">
            <FaBullhorn className="shrink-0 text-4xl text-navy-dark" />
            <div>
              <h2 className="text-2xl font-bold text-navy-dark">Admissions open for the {site.session} academic session</h2>
              <p className="mt-1 text-navy-dark/80">
                We invite parents to jumpstart their child's journey of success. Enquire today to secure a seat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Admission pipeline" title="Three simple steps" />
            <ol className="mt-8 space-y-6 border-l-2 border-gold pl-8">
              {admissionSteps.map((s, i) => (
                <li key={s.title} className="relative">
                  <span className="absolute -left-[3.2rem] grid h-9 w-9 place-items-center rounded-full bg-crimson font-bold text-white ring-4 ring-white">{i + 1}</span>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-1 leading-relaxed">{s.text}</p>
                </li>
              ))}
            </ol>

            <div className="mt-10 rounded-xl bg-cream p-6">
              <h3 className="flex items-center gap-2 text-xl font-bold"><FaClipboardCheck className="text-crimson" /> Documents to submit</h3>
              <ul className="mt-4 space-y-2">
                {documents.map((d) => (
                  <li key={d} className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-gold" />{d}</li>
                ))}
              </ul>
            </div>
          </div>

          <EnquiryForm title="Admission enquiry" />
        </div>
      </section>
    </>
  )
}
