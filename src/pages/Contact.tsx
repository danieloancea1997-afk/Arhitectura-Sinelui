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
          <h2>Contacteaza-ne</h2>
          <p className="contact-text">
            Fie ca iti doresti o schimbare fizica sau un echilibru interior, nu
            ezita sa ma contactezi.
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
            <h2>Ai intrebari?</h2>
            <p className="form-note">Te redirectionam catre formularul nostru.</p>
          </div>
          <div className="contact-quick-links">
            <p className="contact-text">
              Ai o intrebare rapida? Poate gasesti raspunsul imediat mai jos.
            </p>
            <a className="contact-link" href="/faq">
              <span className="contact-link-arrow" aria-hidden="true">
                &rarr;
              </span>
              <span className="contact-link-text">
                Vezi sectiunea Intrebari frecvente
              </span>
            </a>
            <a className="contact-link" href="/shop">
              <span className="contact-link-arrow" aria-hidden="true">
                &rarr;
              </span>
              <span className="contact-link-text">Vezi toate pachetele</span>
            </a>
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
