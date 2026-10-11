import { Link } from 'react-router-dom'
import { FaBullhorn } from 'react-icons/fa'
import { site } from '../data/siteData.js'

export default function AdmissionBand() {
  return (
    <section className="bg-gold">
      <div className="container-x flex flex-col items-start justify-between gap-5 py-8 md:flex-row md:items-center">
        <div className="flex items-start gap-4">
          <FaBullhorn className="mt-1 shrink-0 text-3xl text-navy" />
          <div>
            <h2 className="text-2xl font-bold text-navy-dark">Admissions open for the {site.session} academic session</h2>
            <p className="mt-1 text-navy-dark/80">Enquire today to secure a seat in our safe, value-driven learning environment.</p>
          </div>
        </div>
        <Link to="/admissions" className="btn btn-navy shrink-0">Enquire now</Link>
      </div>
    </section>
  )
}
