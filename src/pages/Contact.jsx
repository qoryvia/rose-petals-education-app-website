import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa'
import PageHeader from '../components/PageHeader.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { site } from '../data/siteData.js'

export default function Contact() {
  const items = [
    { icon: FaMapMarkerAlt, title: 'Address', body: <p>{site.address}</p> },
    {
      icon: FaPhoneAlt, title: 'Phone numbers',
      body: (
        <p>
          {site.phones.map((p, i) => (
            <span key={p.href}>{i > 0 && ' / '}<a href={p.href} className="font-semibold hover:text-crimson">{p.label}</a></span>
          ))}
        </p>
      ),
    },
    { icon: FaEnvelope, title: 'Official email', body: <a href={`mailto:${site.email}`} className="break-all font-semibold hover:text-crimson">{site.email}</a> },
    { icon: FaGlobe, title: 'Website', body: <a href={site.websiteUrl} target="_blank" rel="noreferrer" className="font-semibold hover:text-crimson">{site.website}</a> },
  ]

  return (
    <>
      <PageHeader title="Contact Us" subtitle="Visit the campus, call the office or send us an enquiry." />

      <section className="py-16">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            {items.map(({ icon: Icon, title, body }) => (
              <div key={title} className="card flex gap-5 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy text-lg text-gold"><Icon /></span>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <div className="mt-1 leading-relaxed">{body}</div>
                </div>
              </div>
            ))}
          </div>
          <EnquiryForm title="Send us a message" />
        </div>
      </section>

      <section className="pb-16">
        <div className="container-x">
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
            <iframe
              title="Rose Petals Convent School location map"
              src={site.mapEmbed}
              className="h-96 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}
