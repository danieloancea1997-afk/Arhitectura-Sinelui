import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import courseImage from '../assets/curs1.png'
import { trackInitiateCheckout, trackViewContent } from '../lib/metaPixel'

const courseTitle = 'CURS VIDEO: Neurobiologia și Psihologia Adicției: O Abordare Integrativă'
const courseCheckoutUrl = 'https://9bea-contact.systeme.io/c029683d'

function Courses() {
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [detailsOpen, setDetailsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    trackViewContent(courseTitle)
  }, [])

  useEffect(() => {
    if (location.state && typeof location.state === 'object' && 'acceptedTerms' in location.state) {
      const state = location.state as { acceptedTerms?: boolean }
      if (state.acceptedTerms) {
        setAcceptedTerms(true)
      }
    }
  }, [location.state])

  return (
    <section className="courses-page">
      <div className="courses-content">
        <img className="courses-hero-image" src={courseImage} alt={courseTitle} />

        <div className="card courses-card">
          <h1>{courseTitle}</h1>

          <div className="courses-price-block">
            <p className="courses-price-label">Preț standard:</p>
            <div className="courses-price-wrap">
              <p className="courses-price-old">399 LEI</p>
            </div>

            <p className="courses-price-label">Preț promoțional:</p>
            <div className="courses-price-line">
              <span className="courses-price-current">299 LEI</span>{' '}
              <span className="courses-price-detail">
                cu codul de reducere: <span className="courses-price-detail-accent">CURS25</span>
              </span>
            </div>

            <p className="courses-price-note">Disponibil pentru primele 100 comenzi!</p>
          </div>

          <button
            type="button"
            className={`courses-details-toggle${detailsOpen ? ' is-open' : ''}`}
            aria-expanded={detailsOpen}
            onClick={() => setDetailsOpen((current) => !current)}
          >
            {detailsOpen ? 'Ascunde detalii' : 'Vezi detalii'}
          </button>

          <div className={`courses-details-panel${detailsOpen ? ' is-open' : ''}`}>
            <div className="courses-details-inner">
              <p>
                Dependența nu este o eroare de caracter și nici o simplă lipsă de voință. Este
                încercarea disperată a unui sistem biologic și psihic de a anestezia o durere, de a
                umple un gol sau de a supraviețui unei fracturi interioare.
              </p>

              <h3>O singură problemă, trei perspective esențiale</h3>
              <p>
                Acest program nu este o simplă înșiruire de teorii. Este o hartă completă a
                recuperării, structurată în așa fel încât să aducă claritate și valoare reală pe trei
                paliere diferite:
              </p>

              <p>
                <strong>Pentru cei care se confruntă direct cu dependența:</strong> Fie că vorbim de
                substanțe, comportamente, muncă, ecrane sau validare, cursul îți oferă o oglindă
                curată, lipsită de judecată sau rușine. Vei înțelege biologia din spatele impulsurilor
                tale și vei primi instrumente practice pentru a-ți recăpăta controlul și libertatea
                interioară.
              </p>

              <p>
                <strong>Pentru aparținători (familii, parteneri, părinți):</strong> Să privești pe
                cineva drag prins în bucla adicției este epuizant și dureros. Acest curs vă oferă
                traducerea exactă a ceea ce se întâmplă în mintea și corpul lor. Vă ajută să depășiți
                neputința, să înțelegeți că nu este vorba despre „răutate” sau „egoism” și vă învață
                cum să setați granițe sănătoase, oferind un sprijin real, fără să vă autosacrificați.
              </p>

              <p>
                <strong>
                  Pentru specialiști în domeniu (psihologi, psihoterapeuți, medici, consilieri):
                </strong>{' '}
                Adicția este unul dintre cele mai complexe fenomene din cabinet. Acest program
                funcționează ca o sinteză clinică și transpersonală valoroasă. Îți oferă o structură
                clară care îmbină ultimele descoperiri din neurobiologie cu psihologia arhetipală,
                oferindu-ți o nouă perspectivă integrativă pentru a-ți sprijini clienții în procesul
                de vindecare profundă.
              </p>

              <h3>Harta Călătoriei: Structura Oficială a Cursului</h3>
              <p>
                Parcursul este structurat logic și riguros, oferindu-ți acces direct la mecanismele,
                cauzele și soluțiile integrate ale adicției.
              </p>

              <p className="courses-highlight-note">
                Întregul program este structurat sub formă de module video preînregistrate,
                oferindu-ți libertate deplină: parcurgi lecțiile în ritmul tău, atunci când timpul îți
                permite, având acces permanent și nelimitat la platformă. Parcursul este organizat
                logic și riguros, oferindu-ți acces direct la mecanismele, cauzele și soluțiile
                integrate ale adicției.
              </p>

              <div className="courses-module">
                <h4>Modul I - Ce este adicția? Definiții și perspective neurobiologice</h4>
                <ul>
                  <li>1.1. Definiția și tipuri de adicție</li>
                  <li>1.2. Neurobiologia Recompensei și Neuroplasticitatea</li>
                  <li>1.3. Homeostaza, alostaza și procesele opuse</li>
                </ul>
              </div>

              <div className="courses-module">
                <h4>Modul II - Legătura dintre trauma timpurie și adicție</h4>
                <ul>
                  <li>2.1. Trauma. Golul interior</li>
                  <li>2.2. Mecanismele defensive. Viziunea jungiană a lui Donald Kalsched</li>
                  <li>
                    2.3. „Să numim corect durerea” - trauma în perspectiva lui Gabor Maté și legătura
                    cu adicția
                  </li>
                  <li>2.4. „Esențialul care rămâne” - repere-ancoră pentru tot modulul</li>
                </ul>
              </div>

              <div className="courses-module">
                <h4>
                  Modul III - Perspectiva psihologică și transpersonală: sensul mai profund al
                  adicției
                </h4>
                <ul>
                  <li>
                    3.1 - Jung, setea de totalitate, simboluri și drumul individuării în contextul
                    adicției
                  </li>
                  <li>3.2 - Psihologia transpersonală</li>
                  <li>3.3 - Adicția ca „criză psihospirituală”</li>
                  <li>3.4 - Integrarea înțelepciunii orientale</li>
                </ul>
              </div>

              <div className="courses-module">
                <h4>Modul IV - Harta integrativă în 5 straturi</h4>
                <ul>
                  <li>Stratul 1: Corp & Sistem Nervos</li>
                  <li>Stratul 2: Minte & Semnificație</li>
                  <li>Stratul 3: Relații & Atașament</li>
                  <li>Stratul 4: Context & Mediu</li>
                  <li>Stratul 5: Transpersonal & Sens</li>
                </ul>
              </div>

              <div className="courses-module">
                <h4>Modulul V: Recăderea - Drumul continuă cu empatie și responsabilitate</h4>
                <p>
                  Un modul esențial dedicat dinamicii recăderilor. Învățăm cum să privim pașii înapoi
                  nu ca pe niște eșecuri absolute, ci ca pe niște indicatori duri, dar valoroși, care
                  ne arată unde anume pe hartă mai avem de lucrat. Trecem de la rușinea care
                  blochează, la responsabilitatea blândă care reconstruiește.
                </p>
              </div>

              <h3>O ultimă reflecție înainte de a porni</h3>
              <p>
                Vindecarea nu înseamnă să devii o variantă idealizată a ta. Înseamnă să ai curajul să
                cobori în propria arhitectură, să-ți privești structura cu compasiune și să începi să
                reconstruiești, strat cu strat, un spațiu în care mintea și sufletul tău să poată
                funcționa în libertate.
              </p>
              <p>
                Indiferent dacă cauți răspunsuri pentru tine, pentru un om drag sau pentru clienții
                tăi, ghidajul este pregătit.
              </p>
            </div>
          </div>

          <div className="courses-cta">
            <div className="courses-consent">
              <input
                id="courses-terms"
                type="checkbox"
                checked={acceptedTerms}
                onChange={(event) => setAcceptedTerms(event.target.checked)}
              />
              <label htmlFor="courses-terms">Am citit și sunt de acord cu </label>
              <Link className="courses-terms-link" to="/termeni-si-conditii">
                Termenii și Condițiile
              </Link>
            </div>

            <a
              className="btn courses-cta-btn"
              href={courseCheckoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!acceptedTerms}
              onClick={(event) => {
                if (!acceptedTerms) {
                  event.preventDefault()
                  return
                }

                trackInitiateCheckout(courseTitle)
              }}
            >
              Începe parcursul integrativ
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses
