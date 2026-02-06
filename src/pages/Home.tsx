import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroVideo from '../assets/hero.mp4'
import mindImage from '../assets/mind.jpg'
import bodyImage from '../assets/body.jpg'
import spiritImage from '../assets/spirit.jpg'
import portraitImage from '../assets/portret.png'
import { packages, type PackageItem as ShopPackage } from '../data/shopPackages'

type MediaItem = {
  id: number
  title: string
  url: string
}

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

const mediaItems: MediaItem[] = [
  {
    id: 1,
    title:
      'De ce te pierzi in ceilalti? Limite, Granite si Identitate | Arhitectura Sinelui (I)',
    url: 'https://www.youtube.com/watch?v=QjBsubCuRYM',
  },
  {
    id: 2,
    title: 'De ce finalul de an ne prinde, de fapt, atat de tristi?',
    url: 'https://www.youtube.com/watch?v=gtPjh2_nkvk&t=25s',
  },
  {
    id: 3,
    title: 'Dezvaluirile Recorder au declansat ceva periculos in noi',
    url: 'https://www.youtube.com/watch?v=KqWcY1YY6gY&t=19s',
  },
  {
    id: 4,
    title:
      'Documentarul Recorder m-a zguduit. Dar nu din motivele la care te gandesti.',
    url: 'https://www.youtube.com/watch?v=KOQ7BknHFCA',
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
    id: 'somatic-alignment',
    label: 'Sesiune Somatic Alignment',
    duration: '1 hour 30 minutes',
    price: '400 LEI',
    ctaText: 'Programeaza acum',
    items: [
      'identificarea zonelor de blocaj',
      'eliberarea tensiunii acumulate',
      'recalibrarea raspunsului la stres',
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
]

function Home() {
  const [activePillar, setActivePillar] = useState<string | null>(null)
  const selected = pillars.find((pillar) => pillar.id === activePillar)
  const [isFitness, setIsFitness] = useState(false)
  const [activePackage, setActivePackage] = useState<ShopPackage | null>(null)
  const pillarTitleRef = useRef<HTMLHeadingElement | null>(null)
  const pillarGridRef = useRef<HTMLDivElement | null>(null)

  const formatMeta = (meta: string) => meta.replace('@', '').trim()
  const getPackageDetails = (id: string) =>
    packages.find((pkg) => pkg.id === id) || null

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
        <div className="hero-intro reveal is-visible">
          <h1>
            Arhitectura Sinelui:
            <br />
            Integrare Minte, Corp și Spirit.
          </h1>
          <p className="muted hero-subtitle">
            Psihologie integrativă, Somatic Alignment, nutriție pentru longevitate și
            antrenament personalizat — un sistem complet de reconstrucție a ființei,
            unde rigoarea științei moderne este ancorată în profunzimea filosofiei
            orientale.
          </p>
          <div className="row hero-actions">
            <Link className="btn" to="/shop">
              Vezi Pachetele in E-Shop
            </Link>
          </div>
        </div>
      </div>

      <div className="content-wrap">
        <div className="content-section reveal body-copy">
          <h1>Ce înseamnă „Arhitectura Sinelui”?</h1>
          <h3>Proiectul tău de reconstrucție interioară.</h3>
          <p>
            Majoritatea abordărilor moderne fragmentează ființa umană: mergem la
            psiholog pentru minte, la sală pentru corp și căutăm nutriția doar în
            cifre sau calorii.
          </p>
          <p>
            Arhitectura Sinelui s-a născut din convingerea că vindecarea și
            performanța nu pot exista în izolare. Aici, nu tratăm doar simptome,
            ci proiectăm un fundament nou pe trei piloni inseparabili:
          </p>
          <p>
            MINTE (Psihologie Clinică): Descifrarea și recalibrarea tiparelor
            mentale, gestionarea traumei și construirea rezilienței psihice prin
            metode validate științific.
          </p>
          <p>
            CORP (Somatic Alignment, Fitness & Nutriție): Aliniere: Eliberarea
            tensiunii somatice înmagazinate în corp. Performanță: Antrenamente
            structurate pentru o structură fizică rezistentă. Nutriție de
            Longevitate: Un protocol alimentar avansat (inspirat din Blueprint),
            axat pe biomarkeri și optimizarea compoziției corporale, unde știința
            longevității se întâlnește cu disciplina și echilibrul.
          </p>
          <p>
            SPIRIT (Înțelepciune Orientală): Infuzarea întregului proces cu
            prezență și conștiență. Nutriția și mișcarea devin ritualuri de
            respect față de sine, nu doar sarcini de îndeplinit.
          </p>
          <p>
            „Nu doar îți schimbi obiceiurile. Îți reproiectezi biologia și
            mentalul pentru a susține viața pe care vrei să o trăiești.”
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
          <div className="about-text body-copy">
            <h1>Arhitectul din spatele conceptului:</h1>
            <h3>Paul-Cristian Borcoș</h3>
            <p>
              „Sănătatea nu este absența bolii, ci armonia absolută între ceea ce
              gândești, ceea ce simți și modul în care te miști.”
            </p>
            <p>
              Sunt Psiholog Clinician Autonom și Antrenor de Fitness, dar dincolo
              de titluri, sunt un explorator al potențialului uman. Cred că suntem
              cu toții arhitecții propriei noastre experiențe, iar misiunea mea
              este să îți ofer instrumentele necesare pentru a-ți reclădi
              fundamentul pe baze solide.
            </p>
            <p>
              Abordarea mea integrativă s-a născut din fuziunea mai multor lumi:
              Mintea (Știință și Introspecție): Ca psiholog clinician, descifrez
              împreună cu tine tiparele care te blochează. Această pasiune pentru
              profunzime s-a materializat și în volumul de versuri „Dincolo”, o
              introspecție existențială dedicată celor care caută răspunsuri în
              spațiul dintre cuvinte. Corpul (Performanță și Aliniere): Activitatea
              mea de antrenor de fitness și statutul de Practician Acreditat în
              Somatic Alignment îmi permit să lucrez cu biologia ta la un nivel
              profund. Nu ne ocupăm doar de estetică, ci de eliberarea tensiunii
              somatice și de alinierea sistemului nervos. Spiritul (Călătoria
              Interioară): Prin proiectele mele digitale, canalul de YouTube
              „Gânduri Profunde” și experiențele de explorare din „Inscape
              Traveler”, împărtășesc perspective despre filozofia vieții și
              echilibrul interior, prezența mea în diverse podcast-uri fiind o
              extensie a dorinței de a educa și inspira.
            </p>
            <p>
              De ce această integrare? Pentru că nu poți vindeca mintea dacă ignori
              biologia corpului și nu poți atinge performanța fizică dacă ești
              sabotat de propriile gânduri. Arhitectura Sinelui este suma tuturor
              acestor experiențe, pusă în serviciul evoluției tale.
            </p>
            <p>„Ești pregătit să treci dincolo de suprafață?”</p>
          </div>
          <div className="about-image">
            <img src={portraitImage} alt="Portret" loading="lazy" />
          </div>
        </div>

        <div className="content-section reveal body-copy primul-pas">
          <h1>
            <span className="primul-pas-title">Primul Pas</span>
          </h1>
          <div className="evaluation-title">
            <h1>Evaluare &amp; Consultanță Inițială</h1>
            <div className="evaluation-content">
              <p>
                Aceasta este „poarta de intrare” pentru cei care vor să înceapă lucrul,
                dar nu sunt pregătiți să plătească un pachet întreg de la prima vizită.
              </p>
              <p>
                <strong>Sesiune de Evaluare și Claritate (50 min)</strong>
              </p>
              <p>
                <strong>Preț: 100 RON</strong>
              </p>
              <p>
                Descriere: „Înainte de orice construcție, avem nevoie de un plan. Această
                sesiune este dedicată diagnosticării nevoilor tale pe toți cei trei piloni:
                Minte, Corp și Spirit. Vom identifica împreună blocajele și vom schița
                structura programului tău personalizat.”
              </p>
              <button className="btn" type="button">
                Rezervă Evaluarea
              </button>
            </div>
          </div>
        </div>

        <div className="content-section reveal is-visible testimonials-section">
          <h1>Testimoniale (Social Proof)</h1>
          <p>Urmeaza sa adaug continut.</p>
        </div>

        <hr className="section-divider" />

        <div className="content-section reveal body-copy">
          <h1>Încă ai întrebări? Hai să vorbim.</h1>
          <p>
            <strong>Discovery Call (30 min) – GRATUIT.</strong>
          </p>
          <p>
            Acest apel nu este o ședință de terapie sau antrenament, ci un spațiu
            dedicat exclusiv întrebărilor tale. Dacă nu ești sigur ce serviciu ți se
            potrivește sau vrei să înțelegi mai bine metodologia Arhitectura Sinelui,
            îți stau la dispoziție pentru a vedea dacă suntem pe aceeași lungime de
            undă.
          </p>
          <div className="shop-actions row">
            <button className="shop-btn shop-action-btn" type="button">
              Programează Apelul Gratuit
            </button>
            <button className="shop-btn shop-action-btn btn-secondary" type="button">
              Intrebari frecvente
            </button>
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
          {mediaItems.length === 0 && (
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
