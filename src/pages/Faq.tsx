import { useState } from 'react'
import { Link } from 'react-router-dom'

type FaqItem = {
  id: string
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    id: 'q1',
    question: 'Cum încep colaborarea?',
    answer:
      'Începi printr-un apel scurt de clarificare, apoi alegem pachetul potrivit obiectivelor tale.',
  },
  {
    id: 'q2',
    question: 'Ședințele se pot face și online?',
    answer:
      'Da, ședințele pot fi organizate online, în funcție de tipul serviciului ales.',
  },
  {
    id: 'q3',
    question: 'Cât durează până văd rezultate?',
    answer:
      'Primele schimbări apar de obicei în primele săptămâni, dacă urmezi consecvent planul stabilit.',
  },
  {
    id: 'q4',
    question: 'Pot combina terapie, nutriție și antrenament?',
    answer:
      'Da, exact asta este ideea programului integrativ: un plan unitar minte-corp-stil de viață.',
  },
  {
    id: 'q5',
    question: 'Programul este personalizat pentru fiecare client?',
    answer:
      'Da, fiecare recomandare este ajustată după obiective, nivel și ritm personal.',
  },
  {
    id: 'q6',
    question: 'Ce fac dacă nu sunt sigur ce pachet mi se potrivește?',
    answer:
      'Îți recomand sesiunea de evaluare inițială, unde stabilim clar direcția și pașii următori.',
  },
]

function Faq() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="content-section faq-page">
      <h1>Întrebări frecvente</h1>
      <h3 className="faq-intro">
        Iată cele mai întâlnite întrebări despre Arhitectura Sinelui. Dacă nu găsești
        răspunsul căutat, intră în pagina{' '}
        <Link className="faq-contact-link" to="/contact">
          Contact.
        </Link>
      </h3>
      <div className="faq-list">
        {faqItems.map((item) => {
          const isOpen = openId === item.id
          return (
            <article key={item.id} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${item.id}-answer`}
                onClick={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
              >
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-arrow" aria-hidden="true" />
              </button>
              <div id={`${item.id}-answer`} className="faq-answer" hidden={!isOpen}>
                <p>{item.answer}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Faq
