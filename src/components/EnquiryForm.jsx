import { useState } from 'react'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { site, classOptions } from '../data/siteData.js'

const empty = { student: '', parent: '', phone: '', cls: '', message: '' }

export default function EnquiryForm({ title = 'Send an enquiry' }) {
  const [f, setF] = useState(empty)
  const [error, setError] = useState('')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const text = () =>
    `Admission enquiry (${site.session})\nStudent: ${f.student}\nParent: ${f.parent}\nPhone: ${f.phone}\nClass: ${f.cls}\n${f.message ? `Message: ${f.message}` : ''}`

  const valid = () => {
    if (!f.student.trim() || !f.parent.trim() || !/^[0-9+\s-]{10,15}$/.test(f.phone.trim()) || !f.cls) {
      setError('Please fill in the student name, parent name, a valid phone number and the class.')
      return false
    }
    setError('')
    return true
  }

  const sendWhatsApp = (e) => {
    e.preventDefault()
    if (!valid()) return
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text())}`, '_blank', 'noopener')
  }
  const sendEmail = () => {
    if (!valid()) return
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Admission enquiry ' + site.session)}&body=${encodeURIComponent(text())}`
  }

  return (
    <form onSubmit={sendWhatsApp} className="card p-6 sm:p-8" noValidate>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-1 text-sm">Your enquiry opens in WhatsApp or your email app, ready to send to the school office.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-navy">Student name
          <input className="input mt-1" value={f.student} onChange={set('student')} placeholder="Student's full name" />
        </label>
        <label className="text-sm font-semibold text-navy">Parent / guardian name
          <input className="input mt-1" value={f.parent} onChange={set('parent')} placeholder="Parent's full name" />
        </label>
        <label className="text-sm font-semibold text-navy">Phone number
          <input className="input mt-1" type="tel" value={f.phone} onChange={set('phone')} placeholder="10-digit mobile number" />
        </label>
        <label className="text-sm font-semibold text-navy">Admission sought for
          <select className="input mt-1" value={f.cls} onChange={set('cls')}>
            <option value="">Select class</option>
            {classOptions.map((c) => <option key={c}>{c}</option>)}
          </select>
        </label>
        <label className="text-sm font-semibold text-navy sm:col-span-2">Message (optional)
          <textarea className="input mt-1" rows="3" value={f.message} onChange={set('message')} placeholder="Anything you'd like to ask" />
        </label>
      </div>

      {error && <p role="alert" className="mt-4 text-sm font-semibold text-crimson">{error}</p>}

      <div className="mt-6 flex flex-wrap gap-3">
        <button type="submit" className="btn btn-crimson"><FaWhatsapp className="text-lg" /> Send on WhatsApp</button>
        <button type="button" onClick={sendEmail} className="btn btn-outline"><FaEnvelope /> Send by email</button>
      </div>
    </form>
  )
}
