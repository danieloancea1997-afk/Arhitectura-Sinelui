import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import thankYouCover from '../assets/trankyoucover.jpeg'
import { trackPurchase } from '../lib/metaPixel'

const parsePurchaseValue = (rawValue: string | null) => {
  if (!rawValue) {
    return undefined
  }

  const normalized = rawValue.replace(',', '.').trim()
  const parsedValue = Number.parseFloat(normalized)

  if (!Number.isFinite(parsedValue)) {
    return undefined
  }

  return parsedValue
}

function ThankYou() {
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const value = parsePurchaseValue(params.get('value'))
    const packageName = params.get('package')?.trim()

    if (typeof value === 'undefined' && !packageName) {
      return
    }

    trackPurchase({
      value,
      packageName: packageName || undefined,
    })
  }, [location.search])

  return (
    <section className="thank-you-page">
      <div className="card thank-you-card">
        <div className="thank-you-hero">
          <img className="thank-you-cover" src={thankYouCover} alt="Arhitectura Sinelui" />
        </div>

        <p className="thank-you-kicker">Arhitectura Sinelui</p>
        <h1>Felicitări!</h1>

        <p>
          Primul pas către noul tău proiect este făcut. Investiția ta a fost
          confirmată. Tocmai ai pus fundația pentru o schimbare reală și mă
          bucur că ai ales să facem această călătorie împreună în ecosistemul
          Arhitectura Sinelui.
        </p>

        <p>
          Pentru că fiecare plan din ecosistemul Arhitectura Sinelui este
          personalizat pe baza profilului tău unic, urmează o scurtă etapă de
          colectare a datelor.
        </p>

        <h3>Ce se întâmplă în următoarele 24 de ore?</h3>
        <p>Vei primi un e-mail complet pe adresa folosită la achiziție, care va conține:</p>

        <ul>
          <li>
            <strong>Chestionarele de evaluare:</strong> Acestea îmi vor oferi
            detaliile necesare (biometrie, preferințe, obiective) pentru a-ți
            construi protocoalele.
          </li>
          <li>
            <strong>Contractul de servicii:</strong> Documentul legal care
            reglementează colaborarea noastră (se semnează simplu, digital).
          </li>
          <li>
            <strong>Pașii de lucru:</strong> Instrucțiuni clare despre cum vom
            comunica și cum vei primi materialele finale.
          </li>
        </ul>

        <h3>Notă importantă</h3>
        <p>
          Dacă au trecut 24 de ore și nu ai primit e-mailul de la mine, te rog
          să verifici folderele Spam sau Promotions. Uneori, tehnologia mai dă
          erori de livrare.
        </p>
        <p>
          Dacă întâmpini orice problemă sau ai o întrebare urgentă, îmi poți
          scrie direct la:{' '}
          <a className="thank-you-link" href="mailto:contact@arhitecturasinelui.ro">
            contact@arhitecturasinelui.ro
          </a>
        </p>

        <p className="thank-you-closing">Ne apucăm de treabă în curând!</p>
      </div>
    </section>
  )
}

export default ThankYou
