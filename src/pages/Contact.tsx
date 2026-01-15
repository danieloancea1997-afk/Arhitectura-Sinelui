import { useState } from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import youtube from '../assets/youtube.png'

const API_BASE = '/api'
const socialLinks = [
  {
    name: 'Facebook',
    icon: facebook,
    href: 'https://www.facebook.com/psih.paulcristianborcos',
  },
  {
    name: 'Instagram',
    icon: instagram,
    href: 'https://www.instagram.com/psih.paulcristianborcos/',
  },
  { name: 'TikTok', icon: tiktok, href: 'https://www.tiktok.com/@ganduriprofunde' },
  { name: 'YouTube', icon: youtube, href: 'https://www.youtube.com/@ganduriprofunde' },
]

function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('')

    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, content }),
      })

      if (!res.ok) {
        throw new Error('Nu am putut trimite mesajul.')
      }

      setName('')
      setPhone('')
      setEmail('')
      setContent('')
      setStatus('Mesaj trimis cu succes. Vei fi contactat cat de curand!')
    } catch (err) {
      setStatus(err instanceof Error ? err.message : 'Eroare necunoscuta.')
    }
  }

  return (
    <section className="contact-page">
      <div className="contact-grid">
        <div className="card contact-details contact-slide-left">
          <h2>Contacteaza-ne</h2>
          <p className="contact-text">
            Fie ca iti doresti o schimbare fizica sau un echilibru interior, nu
            ezita sa ma contactezi.
          </p>
          <p className="contact-text">
            <span className="muted">Telefon:</span> +40752451893
          </p>
          <p className="contact-text">
            <span className="muted">Email:</span> daniel.oancea1997@gmail.com
          </p>
          <p className="contact-gap contact-text">
            <span className="muted">Adresa:</span> Str. Cerbului, Nr 39, Oras Arad,
            Jud Arad
          </p>
          <p className="contact-gap contact-text">
            <span className="muted">Program:</span> Luni-Vineri, 09:00-18:00
          </p>
          <p className="contact-gap contact-text">
            <span className="muted">Locatie cabinet:</span> Str. Revolutiei nr. 30,
            sc A, ap 3.
          </p>
          <div className="contact-social">
            <p className="muted contact-text">Social media</p>
            <div className="footer-social">
              {socialLinks.map((link) => (
                <a key={link.name} href={link.href} aria-label={link.name}>
                  <img
                    className="social-icon"
                    src={link.icon}
                    alt={link.name}
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="contact-divider" />

        <form className="card form contact-slide-right" onSubmit={handleSubmit}>
          <div className="form-header">
            <h2>Ai intrebari? Scrie-ne mai jos</h2>
            <p className="form-note">Toate mesajele sunt tratate confidential.</p>
          </div>
      
          {status && <p className={status.includes('succes') ? 'success' : 'error'}>{status}</p>}
          <label className="field">
            <span>Nume</span>
            <input
              className="input"
              type="text"
              placeholder="Numele tau"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>
          <div className="form-row">
            <label className="field">
              <span>Telefon</span>
              <input
                className="input"
                type="tel"
                placeholder="Numar de telefon"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </label>
            <label className="field">
              <span>Email</span>
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
          </div>
          <label className="field">
            <span>Continut</span>
            <textarea
              className="input textarea"
              rows={6}
              placeholder="Mesajul tau"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              required
            />
          </label>
          <button className="btn" type="submit">
            Trimite mesaj
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
