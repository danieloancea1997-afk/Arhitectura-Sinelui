import { useEffect } from 'react'
import spiritImage from '../assets/spirit.jpg'

type Article = {
  id: number
  title: string
  content: string
  date?: string
  image_url?: string | null
}

const formatDate = (value: string) => {
  const parts = value.split('-')
  if (parts.length === 3) {
    return `${parts[2]} ${parts[1]} ${parts[0]}`
  }
  return value
}

const staticArticles: Article[] = [
  {
    id: 1000,
    title: 'Articol 1: Echilibrul dintre minte si corp',
    content:
      'Echilibrul real nu apare atunci cand fortam lucrurile, ci atunci cand incepem sa le intelegem. Relatia dintre minte si corp este una profunda, iar modul in care gandim influenteaza direct felul in care ne miscam, ne odihnim si ne recuperam.\n\nPrin miscare constienta si atentie asupra propriilor nevoi, putem construi o rutina care sustine atat sanatatea fizica, cat si claritatea mentala. Progresul nu este liniar, dar consecventa face diferenta.',
    image_url: spiritImage,
  },
  {
    id: 1001,
    title: 'Articol 2: De ce consecventa este mai importanta decat motivatia',
    content:
      'Motivatia vine si pleaca, insa consecventa este cea care produce rezultate reale. Zilele in care nu ai chef sunt, de multe ori, cele care conteaza cel mai mult.\n\nUn program bine structurat, adaptat stilului tau de viata, te ajuta sa ramai pe directie chiar si atunci cand energia scade. Nu este nevoie de perfectiune, ci de continuitate.',
  },
  {
    id: 1002,
    title: 'Articol 3: Miscarea ca forma de reglare emotionala',
    content:
      'Miscarea nu este doar despre estetica sau performanta. Este si un instrument extrem de eficient pentru reglarea emotionala si reducerea stresului.\n\nAntrenamentele adaptate nivelului tau pot deveni un spatiu sigur in care corpul elibereaza tensiunea acumulata, iar mintea capata claritate. In timp, acest proces contribuie la o stare generala de echilibru si stabilitate.',
  },
  {
    id: 1003,
    title: 'Articol 4: Rutine simple pentru rezultate sustenabile',
    content:
      'Rutinele simple, aplicate constant, sunt mult mai eficiente decat solutiile rapide si extreme. Fie ca vorbim despre miscare, alimentatie sau odihna, pasii mici facuti zilnic construiesc rezultate pe termen lung.\n\nCheia este adaptarea: ceea ce functioneaza pentru tine trebuie sa se potriveasca ritmului si realitatii tale, nu invers.',
  },
  {
    id: 1004,
    title: 'Articol 5: Miscarea ca forma de reglare emotionala',
    content:
      'Miscarea nu este doar despre estetica sau performanta. Este si un instrument extrem de eficient pentru reglarea emotionala si reducerea stresului.\n\nAntrenamentele adaptate nivelului tau pot deveni un spatiu sigur in care corpul elibereaza tensiunea acumulata, iar mintea capata claritate. In timp, acest proces contribuie la o stare generala de echilibru si stabilitate.',
  },
  {
    id: 1005,
    title: 'Articol 6: Rutine simple pentru rezultate sustenabile',
    content:
      'Rutinele simple, aplicate constant, sunt mult mai eficiente decat solutiile rapide si extreme. Fie ca vorbim despre miscare, alimentatie sau odihna, pasii mici facuti zilnic construiesc rezultate pe termen lung.\n\nCheia este adaptarea: ceea ce functioneaza pentru tine trebuie sa se potriveasca ritmului si realitatii tale, nu invers.',
  },
]

function Blog() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'))
    if (elements.length === 0) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="stack blog-page resurse-page">
      <div className="card reveal resurse-header">
        <h1>Resurse pentru minte, corp si stil de viata</h1>
        <p className="muted">Informatii utile, structurate simplu si aplicabil.</p>
      </div>
      {staticArticles.length === 0 && (
        <p className="muted">Inca nu exista articole.</p>
      )}

      <div className="stack">
        {staticArticles.map((article, index) =>
          index === 0 ? (
            <article key={article.id} className="card blog-entry blog-article reveal">
              <section className="blog-body">
                <h2>{article.title}</h2>
                {article.image_url && (
                  <img
                    className="blog-image-inline"
                    src={article.image_url}
                    alt={article.title}
                    loading="lazy"
                  />
                )}
                <p className="article-content muted">{article.content}</p>
                <div className="blog-date">09.01.2026</div>
              </section>
              {article.image_url && (
                <aside className="blog-aside">
                  <img
                    className="blog-image"
                    src={article.image_url}
                    alt={article.title}
                    loading="lazy"
                  />
                </aside>
              )}
            </article>
          ) : (
            <article key={article.id} className="card blog-article reveal">
              <h2>{article.title}</h2>
              <p className="article-content muted">{article.content}</p>
              {article.id === 1001 && (
                <>
                  <div className="blog-date">10.01.2026</div>
                </>
              )}
              {article.date && article.id !== 1001 && (
                <div className="blog-date">Postat in {formatDate(article.date)}</div>
              )}
            </article>
          ),
        )}
      </div>
    </section>
  )
}

export default Blog
