import { Link } from 'react-router-dom'
import phoneIcon from '../assets/phone.png'
import emailIcon from '../assets/email.png'
import scheduleIcon from '../assets/schedule.png'

const PRACTICE_BETTER_FORM =
  'https://my.practicebetter.io/#/696fca8b131720479d800ab1/forms?f=696fcfb9dc4dcd0b101c3dc2'

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-grid">
        <div className="card contact-details contact-slide-left">
          <h2>Contactează-ne</h2>
          <p className="contact-text">
            Dacă ești în căutarea unui psiholog în Arad sau vrei să lucrezi cu
            Paul-Cristian Borcoș pentru echilibru interior, fitness și Somatic
            Alignment, nu ezita să mă contactezi.
          </p>
          <div className="contact-details-list">
            <div className="contact-detail">
              <img src={phoneIcon} alt="" aria-hidden="true" />
              <p>
                <span className="muted">Telefon:</span> +40 751 396 810
              </p>
            </div>
            <div className="contact-detail">
              <img src={emailIcon} alt="" aria-hidden="true" />
              <p>
                <span className="muted">Email:</span> contact@arhitecturasinelui.ro
              </p>
            </div>
            <div className="contact-detail">
              <img src={scheduleIcon} alt="" aria-hidden="true" />
              <p>
                <span className="muted">Program:</span> Luni-Vineri, 09:00-20:00
              </p>
            </div>
          </div>
        </div>

        <hr className="contact-divider" />

        <div className="card form contact-slide-right">
          <div className="form-header">
            <h2>Ai întrebări?</h2>
            <p className="form-note">Te redirecționăm către formularul nostru.</p>
          </div>
          <div className="contact-quick-links">
            <p className="contact-text">
              Ai o întrebare rapidă? Poate găsești răspunsul imediat mai jos.
            </p>
            <Link className="contact-link" to="/faq">
              <span className="contact-link-arrow" aria-hidden="true">
                &rarr;
              </span>
              <span className="contact-link-text">
                Vezi secțiunea Întrebări frecvente
              </span>
            </Link>
            <Link className="contact-link" to="/shop">
              <span className="contact-link-arrow" aria-hidden="true">
                &rarr;
              </span>
              <span className="contact-link-text">Vezi toate pachetele</span>
            </Link>
          </div>
          <div className="contact-cta">
            <div className="shop-details-arrow" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <a
              className="btn"
              href={PRACTICE_BETTER_FORM}
              target="_blank"
              rel="noopener noreferrer"
            >
              Trimite mesaj
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
