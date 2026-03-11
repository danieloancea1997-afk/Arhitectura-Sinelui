import { useState } from 'react'

type FaqItem = {
  id: string
  question: string
  answer: string
}

const faqItems: FaqItem[] = [
  {
    id: 'q1',
    question: 'Cum incep colaborarea?',
    answer:
      'Incepi printr-un apel scurt de clarificare, apoi alegem pachetul potrivit obiectivelor tale.',
  },
  {
    id: 'q2',
    question: 'Sedintele se pot face si online?',
    answer:
      'Da, sedintele pot fi organizate online, in functie de tipul serviciului ales.',
  },
  {
    id: 'q3',
    question: 'Cat dureaza pana vad rezultate?',
    answer:
      'Primele schimbari apar de obicei in primele saptamani, daca urmezi consecvent planul stabilit.',
  },
  {
    id: 'q4',
    question: 'Pot combina terapie, nutritie si antrenament?',
    answer:
      'Da, exact asta este ideea programului integrativ: un plan unitar minte-corp-stil de viata.',
  },
  {
    id: 'q5',
    question: 'Programul este personalizat pentru fiecare client?',
    answer:
      'Da, fiecare recomandare este ajustata dupa obiective, nivel si ritm personal.',
  },
  {
    id: 'q6',
    question: 'Ce fac daca nu sunt sigur ce pachet mi se potriveste?',
    answer:
      'Iti recomand sesiunea de evaluare initiala, unde stabilim clar directia si pasii urmatori.',
  },
]

function Faq() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="content-section faq-page">
      <h1>Intrebari frecvente</h1>
      <h3 className="faq-intro">
        Iata cele mai intalnite intrebari despre Arhitectura Sinelui. Daca nu gasesti
        raspunsul cautat, intra in pagina{' '}
        <a className="faq-contact-link" href="/contact">
          Contacte
        </a>
        .
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
