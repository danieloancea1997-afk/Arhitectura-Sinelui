import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroVideo from '../assets/hero.mp4'
import mindImage from '../assets/mind.jpg'
import bodyImage from '../assets/body.jpg'
import spiritImage from '../assets/spirit.jpg'
import portraitImage from '../assets/portret.jpg'
import { packages, type PackageItem as ShopPackage } from '../data/shopPackages'

type MediaItem = {
  id: number
  title: string
  url: string
}

const API_BASE = import.meta.env.VITE_API_ORIGIN
  ? `${import.meta.env.VITE_API_ORIGIN}/api`
  : '/api'

const pillars = [
  {
    id: 'mind',
    title: 'Mind',
    subtitle: 'Terapie integrativa',
    intro:
      'Lucrul cu mintea nu inseamna etichete, scoruri sau evaluari reci. Inseamna intelegere, constientizare si ghidare.',
    bulletsLabel: 'Abordarea mea in terapia integrativa se bazeaza pe:',
    bullets: [
      'explorarea tiparelor emotionale si comportamentale',
      'reglarea stresului si a anxietatii',
      'dezvoltarea claritatii mentale si a increderii in sine',
      'reconectarea cu propriile resurse interioare',
    ],
    outro:
      'Procesul este unul uman, empatic si adaptat, axat pe dialog real si solutii aplicabile in viata de zi cu zi.',
    image: mindImage,
  },
  {
    id: 'body',
    title: 'Body',
    subtitle: 'Antrenamente personalizate & Somatic Alignment',
    intro:
      'Corpul nu este doar un instrument de performanta, ci un sistem inteligent care comunica constant cu mintea.',
    bulletsLabel: 'Antrenamentele sunt personalizate in functie de:',
    bullets: [
      'nivelul fizic actual',
      'obiectivele personale (forta, mobilitate, estetica, sanatate)',
      'istoricul de accidentari',
      'nivelul de stres si stilul de viata',
    ],
    extraLabel: 'Somatic Alignment reprezinta o abordare care pune accent pe:',
    extraBullets: [
      'postura corecta',
      'miscare constienta',
      'reconectarea cu senzatiile corpului',
      'prevenirea dezechilibrelor si durerilor',
    ],
    outro:
      'Scopul nu este doar "sa tragi de tine", ci sa te misti inteligent, eficient si in siguranta.',
    image: bodyImage,
  },
  {
    id: 'spirit',
    title: 'Spirit',
    subtitle: 'Protocoale de nutritie',
    note: '(longevitate & obiective clasice)',
    intro:
      'Nutritia este un pilon esential pentru energie, claritate mentala si sanatate pe termen lung.',
    bulletsLabel: 'Protocoalele sunt adaptate in functie de:',
    bullets: [
      'obiective clasice (slabire, masa musculara, energie)',
      'longevitate si sanatate metabolica',
      'stil de viata si preferinte alimentare',
      'echilibru hormonal si digestiv',
    ],
    outro:
      'Nu promovez diete extreme, ci strategii sustenabile, care pot fi integrate usor in viata reala si mentinute pe termen lung.',
    image: spiritImage,
  },
]

const getYouTubeId = (url: string) => {
  try {
    const parsed = new URL(url)
    if (parsed.hostname.includes('youtu.be')) {
      return parsed.pathname.replace('/', '')
    }
    if (parsed.searchParams.get('v')) {
      return parsed.searchParams.get('v') || ''
    }
    const parts = parsed.pathname.split('/')
    const embedIndex = parts.findIndex((part) => part === 'embed')
    if (embedIndex !== -1 && parts[embedIndex + 1]) {
      return parts[embedIndex + 1]
    }
  } catch {
    return ''
  }
  return ''
}

type PackageItem = {
  id: string
  label: string
  duration: string
  price: string
  ctaText: string
  ctaHref?: string
  items: string[]
}

const therapyPackages: PackageItem[] = [
  {
    id: 'discovery-call',
    label: 'Discovery Call Gratuit',
    duration: '30 minutes',
    price: 'GRATUIT',
    ctaText: 'Programeaza acum',
    items: [
      'apel de cunoastere 30 minute',
      'clarificare nevoi si directie',
      'alegerea pilonului potrivit',
    ],
  },
  {
    id: 'consiliere-psihologica',
    label: 'Consiliere psihologica',
    duration: '50 minutes',
    price: '250 LEI',
    ctaText: 'Programeaza acum',
    items: [
      '50 minute sesiune individuala',
      'explorare tipare si blocaje',
      'autoreglare si claritate',
    ],
  },
  {
    id: 'abonament-4x',
    label: 'Abonament 4x consiliere',
    duration: '4 sessions',
    price: '800 LEI',
    ctaText: 'Programeaza acum',
    items: [
      '4 sesiuni individuale',
      'ritm saptamanal optim',
      'claritate si rezilienta',
    ],
  },
  {
    id: 'consultanta-evaluare',
    label: 'Consultanta si evaluare initiala',
    duration: '50 minutes',
    price: '100 LEI',
    ctaText: 'Programeaza acum',
    items: [
      '50 minute discutie ghidata',
      'analiza situatiei actuale',
      'strategie personalizata',
    ],
  },
  {
    id: 'reset-challenge',
    label: '30-Day Reset Challenge',
    duration: '9 sessions',
    price: '1,950 LEI',
    ctaText: 'Programeaza acum',
    items: [
      'program complet minte-corp',
      'antrenament + nutritie',
      'suport si evaluari',
    ],
  },
]

const fitnessPackages: PackageItem[] = [
  {
    id: 'program-gym',
    label: 'Program Gym + Morning Flow',
    duration: '1 session',
    price: '400 LEI',
    ctaText: 'Programeaza acum',
    items: [
      'plan sala personalizat',
      'rutina morning flow',
      'livrare digitala',
    ],
  },
  {
    id: 'ghid-nutritie',
    label: 'Ghid nutritie + suplimentare',
    duration: '1 session',
    price: '400 LEI',
    ctaText: 'Programeaza acum',
    items: [
      'ghid alimentar personalizat',
      'protocol suplimentare',
      'livrare in 48 ore',
    ],
  },
  {
    id: 'combo-gym-nutritie',
    label: 'Combo Gym + Nutritie',
    duration: '2 sessions',
    price: '700 LEI',
    ctaText: 'Programeaza acum',
    items: [
      'program sala + morning flow',
      'ghid nutritie personalizat',
      'strategie integrata',
    ],
  },
  {
    id: 'arhitectura-nutritiei',
    label: 'Arhitectura nutritiei',
    duration: '2 sessions',
    price: '700 LEI',
    ctaText: 'Programeaza acum',
    items: [
      'ghid + sedinta live',
      'suport pe chat 30 zile',
      'evaluare chestionar',
    ],
  },
  {
    id: 'reset-challenge',
    label: '30-Day Reset Challenge',
    duration: '9 sessions',
    price: '1,950 LEI',
    ctaText: 'Programeaza acum',
    items: [
      'program complet minte-corp',
      'antrenament + nutritie',
      'suport si evaluari',
    ],
  },
]

function Home() {
  const [activePillar, setActivePillar] = useState<string | null>(null)
  const selected = pillars.find((pillar) => pillar.id === activePillar)
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [mediaError, setMediaError] = useState('')
  const [isFitness, setIsFitness] = useState(false)
  const [activePackage, setActivePackage] = useState<ShopPackage | null>(null)
  const pillarTitleRef = useRef<HTMLHeadingElement | null>(null)
  const pillarGridRef = useRef<HTMLDivElement | null>(null)

  const formatMeta = (meta: string) => meta.replace('@', '').trim()
  const getPackageDetails = (id: string) =>
    packages.find((pkg) => pkg.id === id) || null

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API_BASE}/media`)
        if (!res.ok) {
          throw new Error('Nu am putut incarca clipurile.')
        }
        const data = (await res.json()) as MediaItem[]
        setMediaItems(data.slice(0, 9))
      } catch (err) {
        setMediaError(err instanceof Error ? err.message : 'Eroare necunoscuta.')
      }
    }

    load()
  }, [])

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
  }, [isFitness, mediaItems.length])

  useEffect(() => {
    if (!selected || !pillarTitleRef.current) {
      return
    }

    window.setTimeout(() => {
      const navbar = document.querySelector('.navbar') as HTMLElement | null
      const offset = (navbar?.offsetHeight ?? 0) + 8

      pillarTitleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.setTimeout(() => {
        window.scrollBy({ top: -offset, behavior: 'smooth' })
      }, 200)
    }, 50)
  }, [selected])

  const closePillarDetail = () => {
    setActivePillar(null)
    window.setTimeout(() => {
      pillarGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <section className="home">
      <div className="hero">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-intro reveal">
        <h1>
          Arhitectura Fiintei:
          <br />
          Integrare Minte, Corp si Spirit.
        </h1>
        <p className="muted hero-subtitle">
          Psihoterapie Integrativa, Somatic Alignment si Antrenamente
          Personalizate. Nutritie pentru Longevitate si Obiective de Compozitie
          Corporala, infuzata cu intelepciunea orientala.
        </p>
        <div className="row hero-actions">
          <Link className="btn" to="/shop">
            Vezi Pachetele in Shop
          </Link>
          <button className="btn btn-secondary">Consultanta Gratuita 30 min</button>
        </div>
      </div>

      <div className="content-wrap">
        <div className="content-section reveal">
          <h1>Metoda Holistica Pagina de viziune & manifest</h1>
          <h3>Pagina de viziune & manifest</h3>
          <p>
            Cred intr-o abordare completa a dezvoltarii umane, in care mintea,
            corpul si stilul de viata lucreaza impreuna, nu separat. Schimbarea
            reala apare atunci cand nu tratam doar simptomele, ci intelegem
            persoana in ansamblul ei.
          </p>
          <p>
            Metoda mea holistica imbina elemente de psihologie, miscare constienta
            si nutritie functionala, avand ca scop echilibrul, claritatea mentala
            si performanta sustenabila. Nu exista solutii universale - fiecare
            proces este personalizat in functie de nevoile, obiectivele si ritmul
            fiecarei persoane.
          </p>
          <p>
            Aceasta nu este o metoda "rapida", ci una durabila, construita pentru
            rezultate reale si pe termen lung.
          </p>
        </div>
        <hr className="section-divider" />

        <div className={`content-section shop-section reveal ${isFitness ? 'shop-fitness' : ''}`}>
          <div className="shop-header content-section">
            <div className="shop-heading-text">
              <h1>Pachete</h1>
              <p className="muted">
                Alege pachetul potrivit si programeaza-te direct in calendar.
              </p>
            </div>
            <div className="shop-toggle">
              <span>Terapie</span>
              <label className="shop-switch">
                <input
                  type="checkbox"
                  checked={isFitness}
                  onChange={(event) => setIsFitness(event.target.checked)}
                />
                <span className="shop-slider" aria-hidden="true" />
              </label>
              <span>Fitness</span>
            </div>
          </div>
          <div className="shop-grid full-bleed">
            {(isFitness ? fitnessPackages : therapyPackages).map((pkg, index) => (
              <div
                key={pkg.label}
                className="shop-card reveal"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="shop-top">
                  <p className="shop-label">{pkg.label}</p>
                  <p className="shop-duration">{pkg.duration}</p>
                  <h1 className="shop-price-title">{pkg.price}</h1>
                  <div className="shop-spacer" />
                  <div className="shop-cta">
                    {pkg.ctaHref ? (
                      <a
                        href={pkg.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shop-btn shop-cta-btn"
                      >
                        {pkg.ctaText}
                      </a>
                    ) : (
                      <button className="shop-btn shop-cta-btn" type="button">
                        {pkg.ctaText}
                      </button>
                    )}
                  </div>
                </div>
                <ul className="shop-list">
                  {pkg.items.map((item, idx) => (
                    <li key={`${pkg.label}-${idx}`}>{item}</li>
                  ))}
                </ul>
                <div className="shop-card-footer">
                  <div className="shop-details-arrow" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <button
                    className="shop-details-link"
                    type="button"
                    onClick={() => setActivePackage(getPackageDetails(pkg.id))}
                  >
                    Vezi detalii
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="shop-actions row">
            <Link className="shop-btn shop-action-btn" to="/shop">
              Vezi toate pachetele
            </Link>
            <button className="shop-btn shop-action-btn btn-secondary" type="button">
              Intrebari frecvente
            </button>
          </div>
        </div>
        <hr className="section-divider" />

        <div className="pillar-grid reveal" ref={pillarGridRef}>
          {pillars.map((pillar) => (
            <button
              key={pillar.id}
              className="pillar-card"
              type="button"
              onClick={() =>
                setActivePillar((prev) => (prev === pillar.id ? null : pillar.id))
              }
            >
              <img
                className="pillar-image"
                src={pillar.image}
                alt={pillar.title}
                loading="lazy"
              />
              <span className="pillar-label">{pillar.title}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              className="pillar-detail content-section reveal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <div className="pillar-detail-header">
                <div>
                  <h1 ref={pillarTitleRef}>{selected.title}</h1>
                  <h3>{selected.subtitle}</h3>
                  {selected.note && <p className="muted">{selected.note}</p>}
                </div>
              </div>
              <p>{selected.intro}</p>
              <p>{selected.bulletsLabel}</p>
              <ul>
                {selected.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {selected.extraLabel && <p>{selected.extraLabel}</p>}
              {selected.extraBullets && (
                <ul>
                  {selected.extraBullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              <p>{selected.outro}</p>
              <div className="pillar-detail-footer">
                <button className="btn" type="button" onClick={closePillarDetail}>
                  Inchide
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <hr className="section-divider" />

        <div className="about-section reveal">
          <div className="about-text">
            <h1>Despre Mine</h1>
            <h3>Poveste, misiune si formare</h3>
            <p>
              Sunt psiholog si antrenor de fitness, cu o pasiune profunda pentru
              intelegerea conexiunii dintre minte, corp si comportament.
            </p>
            <p>
              Drumul meu profesional a pornit din dorinta de a ajuta oamenii sa se
              simta mai bine in propriul corp si in propria viata, nu doar la nivel
              fizic, ci si emotional si mental.
            </p>
            <p>
              Misiunea mea este sa ofer un cadru sigur, profesionist si personalizat
              in care fiecare persoana sa poata evolua in ritmul ei, cu instrumente
              reale si aplicabile.
            </p>
            <p>
              Cred in educatie continua, empatie si rezultate construite cu rabdare.
            </p>
            <div className="about-actions">
              <a className="btn" href="/contact">
                Contacteaza-ma
              </a>
            </div>
          </div>
          <div className="about-image">
            <img src={portraitImage} alt="Portret" loading="lazy" />
          </div>
        </div>

        <hr className="section-divider" />

        <div className="content-section reveal">
          <h1>Media</h1>
          <div className="media-header">
            <h3>Clipuri video</h3>
            <a
              className="media-link"
              href="https://www.youtube.com/@ganduriprofunde"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vezi toate videoclipurile
            </a>
          </div>
            {mediaError && <p className="muted">{mediaError}</p>}
            {!mediaError && mediaItems.length === 0 && (
              <p className="muted">Inca nu exista clipuri.</p>
            )}
            <div className="media-grid">
              {mediaItems.map((item) => {
                const videoId = getYouTubeId(item.url)
                if (!videoId) {
                  return null
                }
                return (
                  <div key={item.id} className="media-card">
                    <div className="media-item">
                      <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={item.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <p className="media-title">{item.title}</p>
                  </div>
                )
              })}
            </div>
        </div>
      </div>
      {activePackage && (
        <div className="shop-detail-overlay" role="presentation">
          <div className="shop-detail-modal" role="dialog" aria-modal="true">
            <div className="row-between">
              <div>
                <h2>{activePackage.title}</h2>
                <p className="shop-mini-meta">{formatMeta(activePackage.meta)}</p>
              </div>
              <button
                className="shop-detail-close"
                type="button"
                onClick={() => setActivePackage(null)}
                aria-label="Inchide"
              >
                X
              </button>
            </div>
            <div className="shop-detail-body">
              {activePackage.description.map((paragraph, index) => (
                <p key={`${activePackage.title}-desc-${index}`} className="shop-page-text">
                  {paragraph}
                </p>
              ))}
              {activePackage.sections?.map((section) => (
                <div
                  key={`${activePackage.title}-${section.title}`}
                  className="shop-page-section"
                >
                  <h4>{section.title}</h4>
                  <ul>
                    {section.items.map((item, itemIndex) => (
                      <li key={`${activePackage.title}-${section.title}-${itemIndex}`}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {activePackage.notes?.map((note, index) => (
                <p key={`${activePackage.title}-note-${index}`} className="shop-page-note">
                  {note}
                </p>
              ))}
            </div>
            <div className="shop-detail-actions">
              <button className="shop-btn" type="button">
                Programeaza acum
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home
