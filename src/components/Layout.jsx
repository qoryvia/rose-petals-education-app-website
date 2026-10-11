import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import {
  FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope,
  FaMapMarkerAlt, FaBars, FaTimes, FaGlobe,
} from 'react-icons/fa'
import { site, navLinks } from '../data/siteData.js'

function TopBar() {
  return (
    <div className="bg-navy-dark text-xs text-white/90">
      <div className="container-x flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2">
        <span className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-gold" /> Sapaha Road, Kasia Bazaar, Kushinagar
        </span>
        <div className="flex items-center gap-5">
          <a href={site.phones[0].href} className="hidden items-center gap-2 hover:text-gold sm:flex">
            <FaPhoneAlt className="text-gold" /> {site.phones[0].label}
          </a>
          <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-gold"><FaFacebookF /></a>
          <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-gold"><FaInstagram /></a>
          <Link to="/admissions" className="font-bold text-gold hover:underline">Apply Now</Link>
        </div>
      </div>
    </div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); window.scrollTo(0, 0) }, [pathname])

  const linkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-bold transition-colors border-b-2 ${
      isActive ? 'border-gold text-crimson' : 'border-transparent text-navy hover:text-crimson'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="container-x flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <img src="/logo.png" alt="" className="h-14 w-14 object-contain" />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold text-crimson sm:text-xl">{site.name}</span>
            <span className="block text-xs font-semibold text-navy">{site.motto}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>{l.label}</NavLink>
          ))}
          <Link to="/admissions" className="btn btn-gold ml-3">Apply Now</Link>
        </nav>

        <button
          className="rounded-md p-2 text-2xl text-navy lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white lg:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col py-3">
            {navLinks.map((l) => (
              <NavLink
                key={l.to} to={l.to} end={l.to === '/'}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-sm font-bold ${isActive ? 'bg-cream text-crimson' : 'text-navy'}`
                }
              >{l.label}</NavLink>
            ))}
            <Link to="/admissions" className="btn btn-gold mt-2">Apply Now</Link>
          </div>
        </nav>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-navy text-white/85">
      <div className="container-x grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="" className="h-16 w-16 object-contain" />
            <span className="font-display text-lg font-bold text-white">{site.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">{site.tagline}</p>
          <div className="mt-5 flex gap-3">
            <a href={site.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-gold hover:text-navy"><FaFacebookF /></a>
            <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-gold hover:text-navy"><FaInstagram /></a>
            <a href={site.websiteUrl} target="_blank" rel="noreferrer" aria-label="Website" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-gold hover:text-navy"><FaGlobe /></a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-base text-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-gold">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-gold">Academics</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>CBSE pattern, English-medium</li>
            <li>Pre-Primary: Nursery, LKG, UKG</li>
            <li>Upper Primary: Class I to VIII</li>
            <li>UDISE+ Code {site.udise}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base text-gold">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3"><FaMapMarkerAlt className="mt-1 shrink-0 text-gold" />{site.address}</li>
            <li className="flex gap-3"><FaPhoneAlt className="mt-1 shrink-0 text-gold" />
              <span>
                <a href={site.phones[0].href} className="hover:text-gold">{site.phones[0].label}</a> /{' '}
                <a href={site.phones[1].href} className="hover:text-gold">{site.phones[1].label}</a>
              </span>
            </li>
            <li className="flex gap-3"><FaEnvelope className="mt-1 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="break-all hover:text-gold">{site.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {site.name}, {site.place}. All rights reserved.
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-1"><Outlet /></main>
      <Footer />
    </div>
  )
}
