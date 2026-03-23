import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroVideo from '../assets/hero.mp4'
import mindImage from '../assets/mind.jpg'
import bodyImage from '../assets/body.jpg'
import spiritImage from '../assets/spirit.jpg'
import portraitImage from '../assets/portret.png'
import portraitImageTablet from '../assets/portret1.png'
import h111Image from '../assets/h111.png'
import testimonial21Image from '../assets/testimonial 2.1.jpeg'
import testimonial22Image from '../assets/testimonial 2.2.jpeg'
import testimonial23Image from '../assets/testimonial 2.3.jpeg'
import testimonial31Image from '../assets/testimonial 3.1.jpeg'
import testimonial32Image from '../assets/testimonial 3.2.jpeg'
import testimonial33Image from '../assets/testimonial 3.3.jpeg'
import testimonial41Image from '../assets/testimonial 4.1.jpeg'
import testimonial42Image from '../assets/testimonial 4.2.jpeg'
import testimonial43Image from '../assets/testimonial 4.3.jpeg'
import testimonial11Image from '../assets/testimonial 1.1.jpeg'
import testimonial12Image from '../assets/testimonial 1.2.jpeg'
import testimonial13Image from '../assets/testimonial 1.3.jpeg'
import testimonial5Image from '../assets/testimonial 5.jpeg'
import testimonial6Image from '../assets/testimonial 6.jpeg'
import testimonial7Image from '../assets/testimonial 7.jpeg'
import userManIcon from '../assets/usermen.png'
import userWomanIcon from '../assets/userwomen.png'
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
    subtitle: 'Terapie integrativă',
    intro:
      'Lucrul cu mintea nu înseamnă etichete, scoruri sau evaluări reci. Înseamnă înțelegere, conștientizare și ghidare.',
    bulletsLabel: 'Abordarea mea în terapia integrativă se bazează pe:',
    bullets: [
      'explorarea tiparelor emoționale și comportamentale',
      'reglarea stresului și a anxietății',
      'dezvoltarea clarității mentale și a încrederii în sine',
      'reconectarea cu propriile resurse interioare',
    ],
    outro:
      'Procesul este unul uman, empatic și adaptat, axat pe dialog real și soluții aplicabile în viața de zi cu zi.',
    image: mindImage,
  },
  {
    id: 'body',
    title: 'Body',
    subtitle: 'Antrenamente personalizate & Somatic Alignment',
    intro:
      'Corpul nu este doar un instrument de performanță, ci un sistem inteligent care comunică constant cu mintea.',
    bulletsLabel: 'Antrenamentele sunt personalizate în funcție de:',
    bullets: [
      'nivelul fizic actual',
      'obiectivele personale (forță, mobilitate, estetică, sănătate)',
      'istoricul de accidentări',
      'nivelul de stres și stilul de viață',
    ],
    extraLabel: 'Somatic Alignment reprezintă o abordare care pune accent pe:',
    extraBullets: [
      'postura corectă',
      'mișcare conștientă',
      'reconectarea cu senzațiile corpului',
      'prevenirea dezechilibrelor și durerilor',
    ],
    outro:
      'Scopul nu este doar "să tragi de tine", ci să te miști inteligent, eficient și în siguranță.',
    image: bodyImage,
  },
  {
    id: 'spirit',
    title: 'Spirit',
    subtitle: 'Protocoale de nutriție',
    note: '(longevitate & obiective clasice)',
    intro:
      'Nutriția este un pilon esențial pentru energie, claritate mentală și sănătate pe termen lung.',
    bulletsLabel: 'Protocoalele sunt adaptate în funcție de:',
    bullets: [
      'obiective clasice (slăbire, masă musculară, energie)',
      'longevitate și sănătate metabolică',
      'stil de viață și preferințe alimentare',
      'echilibru hormonal și digestiv',
    ],
    outro:
      'Nu promovez diete extreme, ci strategii sustenabile, care pot fi integrate ușor în viața reală și menținute pe termen lung.',
    image: spiritImage,
  },
]

const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: 'Joci un joc pe care NU îl poți câștiga.',
    url: 'https://www.youtube.com/watch?v=ILj5v08x2pk',
  },
  {
    id: 2,
    title: 'Povara Libertății: De ce preferăm să fim victime?',
    url: 'https://www.youtube.com/watch?v=4uiC1LCkoXM',
  },
  {
    id: 3,
    title:
      'Puterea de a spune NU: Limite, Granițe și Vindecare Somatică | Arhitectura Sinelui (III)',
    url: 'https://www.youtube.com/watch?v=sbqgvaFkDxA',
  },
  {
    id: 4,
    title: 'Vinovăția care te paralizează: Limite, Granițe și Traumă | Arhitectura Sinelui (II)',
    url: 'https://www.youtube.com/watch?v=om6dZLax0uk',
  },
  {
    id: 5,
    title:
      'De ce te pierzi în ceilalți? Limite, Granițe și Identitate | Arhitectura Sinelui (I)',
    url: 'https://www.youtube.com/watch?v=QjBsubCuRYM&t=39s',
  },
  {
    id: 6,
    title: 'De ce finalul de an ne prinde, de fapt, atât de triști?',
    url: 'https://www.youtube.com/watch?v=gtPjh2_nkvk&t=25s',
  },
  {
    id: 7,
    title: 'Dezvăluirile Recorder au declanșat ceva periculos în noi',
    url: 'https://www.youtube.com/watch?v=KqWcY1YY6gY&t=19s',
  },
  {
    id: 8,
    title:
      'Documentarul Recorder m-a zguduit. Dar nu din motivele la care te gândești.',
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
    label: 'Consultanță și evaluare inițială',
    duration: '50 minute',
    price: '100 LEI',
    ctaText: 'Programează acum',
    items: [
      '50 minute discuție ghidată',
      'analiza situației actuale',
      'strategie personalizată',
    ],
  },
  {
    id: 'consiliere-psihologica',
    label: 'Consiliere psihologică',
    duration: '50 minute',
    price: '250 LEI',
    ctaText: 'Programează acum',
    items: [
      '50 minute sesiune individuală',
      'explorare tipare și blocaje',
      'autoreglare și claritate',
    ],
  },
  {
    id: 'somatic-alignment',
    label: 'Sesiune Somatic Alignment',
    duration: '1 oră 30 minute',
    price: '400 LEI',
    ctaText: 'Programează acum',
    items: [
      'identificarea zonelor de blocaj',
      'eliberarea tensiunii acumulate',
      'recalibrarea răspunsului la stres',
    ],
  },
  {
    id: 'abonament-4x',
    label: 'Abonament 4x consiliere',
    duration: '4 ședințe',
    price: '800 LEI',
    ctaText: 'Programează acum',
    items: [
      '4 sesiuni individuale',
      'ritm săptămânal optim',
      'claritate și reziliență',
    ],
  },
  {
    id: 'reset-challenge',
    label: '30-Day Reset Challenge',
    duration: '9 ședințe',
    price: '1,950 LEI',
    ctaText: 'Programează acum',
    items: [
      'program complet minte-corp',
      'antrenament + nutriție',
      'suport și evaluări',
    ],
  },
]

const fitnessPackages: PackageItem[] = [
  {
    id: 'consultanta-evaluare',
    label: 'Consultanță și evaluare inițială',
    duration: '50 minute',
    price: '100 LEI',
    ctaText: 'Programează acum',
    items: [
      '50 minute discuție ghidată',
      'analiza situației actuale',
      'strategie personalizată',
    ],
  },
  {
    id: 'program-gym',
    label: 'Program Gym + Morning Flow',
    duration: '1 ședință',
    price: '400 LEI',
    ctaText: 'Programează acum',
    items: [
      'plan sală personalizat',
      'rutină morning flow',
      'livrare digitală',
    ],
  },
  {
    id: 'ghid-nutritie',
    label: 'Ghid nutriție + suplimentare',
    duration: '1 ședință',
    price: '400 LEI',
    ctaText: 'Programează acum',
    items: [
      'ghid alimentar personalizat',
      'protocol suplimentare',
      'livrare în 48 ore',
    ],
  },
  {
    id: 'combo-gym-nutritie',
    label: 'Combo Gym + Nutriție',
    duration: '2 ședințe',
    price: '700 LEI',
    ctaText: 'Programează acum',
    items: [
      'program sală + morning flow',
      'ghid nutriție personalizat',
      'strategie integrată',
    ],
  },
  {
    id: 'arhitectura-nutritiei',
    label: 'Arhitectura nutriției',
    duration: '2 ședințe',
    price: '700 LEI',
    ctaText: 'Programează acum',
    items: [
      'ghid + ședință live',
      'suport pe chat 30 zile',
      'evaluare chestionar',
    ],
  },
]

const discountedHomePrices: Record<string, string> = {
  'consiliere-psihologica': '199 LEI',
  'consultanta-evaluare': '89 LEI',
  'abonament-4x': '699 LEI',
  'program-gym': '249 LEI',
  'ghid-nutritie': '249 LEI',
  'combo-gym-nutritie': '449 LEI',
  'arhitectura-miscarii': '449 LEI',
  'arhitectura-nutritiei': '449 LEI',
  'master-body': '799 LEI',
  'reset-challenge': '1,799 LEI',
}

const parseLeiValue = (value: string) =>
  Number.parseFloat(value.replace(/lei/i, '').replace(/,/g, '').trim())

const getDiscountBadgeLabel = (oldPrice: string, newPrice: string) => {
  const oldValue = parseLeiValue(oldPrice)
  const newValue = parseLeiValue(newPrice)
  if (!oldValue || !newValue || newValue >= oldValue) {
    return null
  }
  const discount = Math.round(((oldValue - newValue) / oldValue) * 100)
  return `-${discount}%`
}

const maleTestimonialNames = new Set([
  'Alexandru I.',
  'Călin C.',
  'Dragoș M.',
  'Cătălin M.',
  'Paul-Cristian Borcoș',
])

const getTestimonialAvatarByName = (name: string) =>
  maleTestimonialNames.has(name.trim()) ? userManIcon : userWomanIcon

type TestimonialClient = {
  id: string
  name: string
  photos: string[]
  review: string
  reviewBottom?: string
  roleLabel?: string
  personLabel?: string
  rating: number
}

type TestimonialGalleryItem = {
  id: string
  name: string
  rating: number
  photo: string | null
}

type TestimonialTextItem = {
  id: string
  name: string
  review: string
  rating: number
}

type TestimonialPage =
  | { id: string; type: 'client'; client: TestimonialClient }
  | { id: string; type: 'gallery'; items: TestimonialGalleryItem[] }
  | { id: string; type: 'text'; items: TestimonialTextItem[] }

const testimonialClients: TestimonialClient[] = [
  {
    id: 'client-1',
    name: 'Andrada I.',
    photos: [testimonial21Image, testimonial22Image, testimonial23Image],
    review:
      'Nu este doar un antrenor, ci un om care știe să inspire. De-a lungul timpului, relația noastră a trecut dincolo de sala de sport. Din antrenor a devenit prieten, iar asta a făcut ca fiecare antrenament să fie așteptat cu drag. Profesionalismul, răbdarea și modul în care știe să motiveze fac diferența, iar atmosfera creată te face să vii la sală nu din obligație, ci din plăcere.',
    reviewBottom:
      'Recomand cu toată încrederea, pentru că atunci când cineva pune suflet în ceea ce face, se simte.',
    rating: 5,
  },
  {
    id: 'client-2',
    name: 'Sofia M.',
    photos: [testimonial31Image, testimonial32Image, testimonial33Image],
    review:
      'Colaborarea noastră este mai mult decât antrenamentele din sală. Simt susținere reală și o abordare atentă la corpul și ritmul meu. M-a ajutat să-mi construiesc o relație mai conștientă cu mișcarea și cu alimentația. Apreciez că antrenamentele sunt adaptate nevoilor mele. Este un proces în care mă simt văzută, ascultată și ghidată cu calm.',
    rating: 5,
  },
  {
    id: 'client-3',
    name: 'Alexandru I.',
    photos: [testimonial41Image, testimonial42Image, testimonial43Image],
    review: 'Testimonialul este în curs de completare.',
    rating: 5,
  },
  {
    id: 'client-4',
    name: 'Călin C.',
    photos: [testimonial11Image, testimonial12Image, testimonial13Image],
    review:
      'Când am început antrenamentele cu Cristi, aveam nevoie de cineva care să mă ghideze, dar am câștigat mult mai mult, un prieten. M-a ajutat să îmi ating rezultatele dorite și să îmi schimb complet relația cu mâncarea. Mi-a deschis ochii către un stil de viață pe care nu credeam că îl pot adopta vreodată. Profesionalismul lui, răbdarea și modul în care știe să te motiveze fac toată diferența. Îl recomand din toată inima oricui vrea rezultate reale și o experiență care îți schimbă viața.',
    rating: 5,
  },
]

const testimonialPagesDesktop: TestimonialPage[] = [
  ...testimonialClients.map((client) => ({ id: client.id, type: 'client' as const, client })),
  {
    id: 'client-5',
    type: 'gallery',
    items: [
      { id: 'dragos-m', name: 'Dragoș M.', rating: 5, photo: testimonial5Image },
      { id: 'catalin-m', name: 'Cătălin M.', rating: 5, photo: testimonial6Image },
    ],
  },
  {
    id: 'client-6',
    type: 'text',
    items: [
      {
        id: 'elena-d',
        name: 'Elena D.',
        review:
          'Vin la aceste antrenamente de 3 ani și 6 luni și pot spune că fiecare sesiune este un adevărat boost de energie care îți garantează o stare de bine. Ce apreciez enorm este faptul că exercițiile sunt concepute special pentru nevoile fiecăruia, conform vârstei. Mai mult, energia grupului este minunată, s-a format o comunitate atât de prietenoasă încât vin la fiecare oră cu multă bucurie și dorință de revedere.',
        rating: 5,
      },
      {
        id: 'sofia-m-text',
        name: 'Sofia M.',
        review:
          'Colaborarea noastră este mai mult decât antrenamentele din sală. Simt susținere reală și o abordare atentă la corpul și ritmul meu. M-a ajutat să-mi construiesc o relație mai conștientă cu mișcarea și cu alimentația. Apreciez că antrenamentele sunt adaptate nevoilor mele. Este un proces în care mă simt văzută, ascultată și ghidată cu calm.',
        rating: 5,
      },
    ],
  },
  {
    id: 'client-7',
    type: 'text',
    items: [
      {
        id: 'camelia-b',
        name: 'Camelia B.',
        review:
          'Am început colaborarea cu Cristi acum 4 ani, într-un moment în care porneam practic de la zero: aveam multe kilograme în plus, o vârstă la care schimbările par mai greu de făcut și mai multe probleme de sănătate. Printre acestea se numărau probleme de circulație și o neuropatie pe piciorul stâng, care îmi afectau serios starea generală și mobilitatea. Pe parcursul acestor ani, Cristi nu a fost doar antrenorul meu, ci și al celor doi copii ai mei, lucru care a făcut ca experiența noastră să fie una de familie. Am primit mereu suport nu doar pe partea de antrenament, ci și emoțional, exact acel tip de susținere de care ai nevoie când încerci să faci o schimbare reală în viața ta. Am început cu pași mici, dar constanți, iar rezultatele au apărut în timp. Problemele de sănătate s-au ameliorat treptat și, în multe privințe, au dispărut. Astăzi pot spune că am un stil de viață complet diferit: mai activ, mai echilibrat și mult mai sănătos. O mare parte din această transformare i se datorează lui Cristi, profesionalismului lui, răbdării și modului în care știe să motiveze oamenii. Recomand cu încredere tuturor celor care vor să facă o schimbare reală în viața lor.',
        rating: 5,
      },
    ],
  },
  {
    id: 'client-8',
    type: 'client',
    client: {
      id: 'client-8',
      name: 'Andreea J.',
      roleLabel: 'Psiholog & Antrenor Fitness',
      personLabel: 'Paul-Cristian Borcoș',
      photos: [testimonial7Image],
      review:
        'Cristi este antrenorul care m-a făcut să mă simt bine în corpul meu și să vin la sală cu drag. În trecut sportul însemna pentru mine doar epuizare fizică, astăzi plec de la sală cu bateriile încărcate și cu o stare de spirit excelentă. Îl recomand cu tot dragul oricui vrea să învețe să facă mișcare cu plăcere!',
      rating: 5,
    },
  },
]

const testimonialPagesMobile430: TestimonialPage[] = testimonialPagesDesktop.reduce<TestimonialPage[]>(
  (acc, page) => {
    if (page.type === 'gallery') {
      page.items.forEach((item, index) => {
        acc.push({
          id: `${page.id}-${index + 1}`,
          type: 'gallery',
          items: [item],
        })
      })
      return acc
    }

    if (page.type === 'text') {
      page.items.forEach((item, index) => {
        acc.push({
          id: `${page.id}-${index + 1}`,
          type: 'text',
          items: [item],
        })
      })
      return acc
    }

    acc.push(page)
    return acc
  },
  [],
)

function Home() {
  const [activePillar, setActivePillar] = useState<string | null>(null)
  const selected = pillars.find((pillar) => pillar.id === activePillar)
  const [isFitness, setIsFitness] = useState(false)
  const [activeTestimonialPhoto, setActiveTestimonialPhoto] = useState(0)
  const [activeTestimonialClient, setActiveTestimonialClient] = useState(0)
  const [testimonialAutoResumeAt, setTestimonialAutoResumeAt] = useState(0)
  const [isMobile430, setIsMobile430] = useState(false)
  const [activePackage, setActivePackage] = useState<ShopPackage | null>(null)
  const pillarTitleRef = useRef<HTMLHeadingElement | null>(null)
  const pillarGridRef = useRef<HTMLDivElement | null>(null)
  const testimonialTouchStartXRef = useRef<number | null>(null)
  const testimonialSwipeTriggeredRef = useRef(false)

  const formatMeta = (meta: string) => meta.replace('@', '').trim()
  const getPackageDetails = (id: string) =>
    packages.find((pkg) => pkg.id === id) || null
  const testimonialPages = isMobile430 ? testimonialPagesMobile430 : testimonialPagesDesktop

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 430px)')
    const updateMatch = () => setIsMobile430(mediaQuery.matches)
    updateMatch()
    mediaQuery.addEventListener('change', updateMatch)
    return () => mediaQuery.removeEventListener('change', updateMatch)
  }, [])

  useEffect(() => {
    setActiveTestimonialClient((prev) =>
      testimonialPages.length > 0 ? Math.min(prev, testimonialPages.length - 1) : 0,
    )
  }, [testimonialPages.length])

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

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveTestimonialPhoto((prev) => prev + 1)
    }, 4000)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      if (Date.now() < testimonialAutoResumeAt) {
        return
      }
      setActiveTestimonialClient((prev) => (prev + 1) % testimonialPages.length)
    }, 12000)

    return () => window.clearInterval(intervalId)
  }, [testimonialAutoResumeAt])

  const closePillarDetail = () => {
    setActivePillar(null)
    window.setTimeout(() => {
      pillarGridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const goToPreviousTestimonial = () => {
    setActiveTestimonialClient((prev) => (prev - 1 + testimonialPages.length) % testimonialPages.length)
    setTestimonialAutoResumeAt(Date.now() + 60000)
  }

  const goToNextTestimonial = () => {
    setActiveTestimonialClient((prev) => (prev + 1) % testimonialPages.length)
    setTestimonialAutoResumeAt(Date.now() + 60000)
  }

  const handleTestimonialTouchStart = (
    event: React.TouchEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    testimonialTouchStartXRef.current = event.touches[0]?.clientX ?? null
    testimonialSwipeTriggeredRef.current = false
  }

  const handleTestimonialTouchEnd = (
    event: React.TouchEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    const startX = testimonialTouchStartXRef.current
    const endX = event.changedTouches[0]?.clientX
    if (startX == null || endX == null) {
      testimonialTouchStartXRef.current = null
      return
    }

    const deltaX = endX - startX
    if (Math.abs(deltaX) < 45) {
      testimonialTouchStartXRef.current = null
      return
    }

    testimonialSwipeTriggeredRef.current = true

    if (deltaX < 0) {
      goToNextTestimonial()
    } else {
      goToPreviousTestimonial()
    }

    testimonialTouchStartXRef.current = null
  }

  const handleTouchNavPreviousClick = () => {
    if (testimonialSwipeTriggeredRef.current) {
      testimonialSwipeTriggeredRef.current = false
      return
    }
    goToPreviousTestimonial()
  }

  const handleTouchNavNextClick = () => {
    if (testimonialSwipeTriggeredRef.current) {
      testimonialSwipeTriggeredRef.current = false
      return
    }
    goToNextTestimonial()
  }

  const currentPage = testimonialPages[activeTestimonialClient % testimonialPages.length]

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
            <span className="hero-subtitle-long">
              Psihologie integrativă, Somatic Alignment, nutriție pentru longevitate și
              antrenament personalizat - un sistem complet de reconstrucție a ființei,
              unde rigoarea științei moderne este ancorată în profunzimea filosofiei
              orientale.
            </span>
            <span className="hero-subtitle-short">
              Psihologie integrativă, Somatic Alignment, nutriție pentru longevitate și
              antrenament personalizat
            </span>
          </p>
          <div className="row hero-actions">
            <Link className="btn" to="/shop">
              Vezi pachetele în e-shop
            </Link>
          </div>
        </div>
      </div>
      <div className="content-wrap">
        <div className="content-section reveal body-copy about-followup about-followup-spaced">
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
                Alege pachetul potrivit și programează-te direct în calendar.
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
            {(isFitness ? fitnessPackages : therapyPackages).map((pkg, index) => {
              const packageDetails = getPackageDetails(pkg.id)
              const bookingUrl = packageDetails?.bookingUrl
              const discountedPrice = discountedHomePrices[pkg.id]
              const discountLabel = discountedPrice
                ? getDiscountBadgeLabel(pkg.price, discountedPrice)
                : null
              return (
                <div
                  key={pkg.label}
                  className="shop-card reveal"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  {discountLabel && <span className="shop-sale-badge">{discountLabel}</span>}
                <div className="shop-top">
                  <p className="shop-label">{pkg.label}</p>
                  <p className="shop-duration">{pkg.duration}</p>
                  {discountedPrice ? (
                    <div className="shop-price-stack">
                      <h1 className="shop-price-title shop-price-current">{discountedPrice}</h1>
                      <p className="shop-price-old">{pkg.price}</p>
                    </div>
                  ) : (
                    <h1 className="shop-price-title">{pkg.price}</h1>
                  )}
                  <div className="shop-spacer" />
                  <div className="shop-cta">
                    {bookingUrl ? (
                      <a
                        href={bookingUrl}
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
              )
            })}
          </div>
          <div className="shop-actions row">
            <Link className="shop-btn shop-action-btn" to="/shop">
              Vezi toate pachetele
            </Link>
          </div>
        </div>
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
                                Închide
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <hr className="section-divider about-divider" />

        <div className="about-section reveal">
          <div className="about-text body-copy">
            <h1>Arhitectul din spatele conceptului:</h1>
            <h3>Paul-Cristian Borcoș</h3>
            <p>
              „Sănătatea nu este absența bolii, ci armonia absolută între ceea ce
              gândești, ceea ce simți și modul în care te miști.”
            </p>
            <p className="about-tight">
              Sunt Psiholog Clinician Autonom și Antrenor de Fitness, dar dincolo
              de titluri, sunt un explorator al potențialului uman. Cred că suntem
              cu toții arhitecții propriei noastre experiențe, iar misiunea mea
              este să îți ofer instrumentele necesare pentru a-ți reclădi
              fundamentul pe baze solide.
            </p>
          </div>
          <div className="about-image">
            <img className="about-image-mobile" src={h111Image} alt="Detaliu" loading="lazy" />
            <img className="about-image-tablet" src={portraitImageTablet} alt="Portret" loading="lazy" />
            <img className="about-image-desktop" src={portraitImage} alt="Portret" loading="lazy" />
            <div className="about-image-overlay" aria-hidden="true">
              <div className="about-image-overlay-inner">
                <h1>Arhitectul din spatele conceptului:</h1>
                <h3>Paul-Cristian Borcoș</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="content-section reveal body-copy about-followup">
          <p className="about-followup-lead">
            Abordarea mea integrativă s-a născut din fuziunea mai multor lumi:
            Mintea (Știință și Introspecție): Ca psiholog clinician, descifrez
            împreună cu tine tiparele care te blochează. Această pasiune pentru
            profunzime s-a materializat și în volumul de versuri „Dincolo”, o
            introspecție existențială dedicată celor care caută răspunsuri în
            spațiul dintre cuvinte. Corpul (Performanță și Aliniere):
          </p>
          <p>
            Activitatea mea de antrenor de fitness și statutul de Practician
            Acreditat în Somatic Alignment îmi permit să lucrez cu biologia ta
            la un nivel profund. Nu ne ocupăm doar de estetică, ci de eliberarea
            tensiunii somatice și de alinierea sistemului nervos. Spiritul
            (Călătoria Interioară): Prin proiectele mele digitale, canalul de
            YouTube „Gânduri Profunde” și experiențele de explorare din „Inscape
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
                <strong>Preț: 89 RON</strong>
              </p>
              <p>
                Descriere: „Înainte de orice construcție, avem nevoie de un plan. Această
                sesiune este dedicată diagnosticării nevoilor tale pe toți cei trei piloni:
                Minte, Corp și Spirit. Vom identifica împreună blocajele și vom schița
                structura programului tău personalizat.”
              </p>
              <a
                className="btn"
                href={getPackageDetails('consultanta-evaluare')?.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Rezervă Evaluarea
              </a>
            </div>
          </div>
        </div>

        <div className="content-section reveal is-visible testimonials-section">
          <h1>Testimoniale (Social Proof)</h1>
          <div className="testimonials-carousel">
            <button
              className="testimonial-touch-nav testimonial-touch-nav-left"
              type="button"
              aria-label="Testimonial anterior"
              onClick={handleTouchNavPreviousClick}
              onTouchStart={handleTestimonialTouchStart}
              onTouchEnd={handleTestimonialTouchEnd}
            />

            <button
              className="testimonial-arrow testimonial-arrow-left"
              type="button"
              aria-label="Client anterior"
              onClick={goToPreviousTestimonial}
            >
              {'\u00AB'}
            </button>

            <div
              className={`testimonials-client-page is-page-${currentPage.id} ${currentPage.type === 'gallery' ? 'is-gallery' : ''} ${currentPage.type === 'text' ? 'is-text' : ''}`}
              onTouchStart={handleTestimonialTouchStart}
              onTouchEnd={handleTestimonialTouchEnd}
            >
              {currentPage.type === 'client' ? (
                <>
                  <div className="testimonial-media">
                    {currentPage.client.id === 'client-8' && (
                      <div className="testimonial-media-labels">
                        <p className="testimonial-role-label">Psiholog & Antrenor Fitness</p>
                        <p className="testimonial-subname">Paul-Cristian Borcoș</p>
                      </div>
                    )}
                    <img
                      className="testimonial-image"
                      src={
                        currentPage.client.photos[
                          activeTestimonialPhoto % currentPage.client.photos.length
                        ] || ''
                      }
                      alt={`${currentPage.client.name} progress`}
                      loading="lazy"
                    />
                  </div>
                  <div className="testimonial-content">
                    <div className="testimonial-identity">
                      <img
                        className="testimonial-user-icon"
                        src={getTestimonialAvatarByName(currentPage.client.name)}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                      />
                      <div className="testimonial-identity-text">
                        <p className="testimonial-caption">{currentPage.client.name}</p>
                        <p className="testimonial-stars" aria-label={`${currentPage.client.rating} stele`}>
                          {'\u2605'.repeat(currentPage.client.rating)}
                        </p>
                      </div>
                    </div>
                    <p className="testimonial-review">{currentPage.client.review}</p>
                    {currentPage.client.reviewBottom && (
                      <p className="testimonial-review-inline-tail">{currentPage.client.reviewBottom}</p>
                    )}
                  </div>
                  {currentPage.client.reviewBottom && (
                    <p className="testimonial-review-full-row">{currentPage.client.reviewBottom}</p>
                  )}
                </>
              ) : currentPage.type === 'gallery' ? (
                <div className="testimonials-gallery-page">
                  {currentPage.items.map((item) => (
                    <article key={item.id} className="testimonial-gallery-card">
                      <div className="testimonial-gallery-header">
                        <div className="testimonial-identity">
                          <img
                            className="testimonial-user-icon"
                            src={getTestimonialAvatarByName(item.name)}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                          />
                          <div className="testimonial-identity-text">
                            <p className="testimonial-caption">{item.name}</p>
                            <p className="testimonial-stars" aria-label={`${item.rating} stele`}>
                              {'\u2605'.repeat(item.rating)}
                            </p>
                          </div>
                        </div>
                      </div>
                      {item.photo ? (
                        <img className="testimonial-image" src={item.photo} alt={`${item.name} progress`} loading="lazy" />
                      ) : (
                        <div className="testimonial-image-placeholder">Poza în curs de adăugare</div>
                      )}
                    </article>
                  ))}
                </div>
              ) : (
                <div
                  className={`testimonials-text-page ${currentPage.id === 'client-7' ? 'is-single' : ''}`}
                >
                  {currentPage.items.map((item) => (
                    <article key={item.id} className="testimonial-text-card">
                      <div className="testimonial-identity">
                        <img
                          className="testimonial-user-icon"
                          src={getTestimonialAvatarByName(item.name)}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                        />
                        <div className="testimonial-identity-text">
                          <p className="testimonial-caption">{item.name}</p>
                          <p className="testimonial-stars" aria-label={`${item.rating} stele`}>
                            {'\u2605'.repeat(item.rating)}
                          </p>
                        </div>
                      </div>
                      <p className="testimonial-review">{item.review}</p>
                    </article>
                  ))}
                </div>
              )}
            </div>

            <button
              className="testimonial-arrow testimonial-arrow-right"
              type="button"
              aria-label="Client următor"
              onClick={goToNextTestimonial}
            >
              {'\u00BB'}
            </button>

            <button
              className="testimonial-touch-nav testimonial-touch-nav-right"
              type="button"
              aria-label="Testimonial următor"
              onClick={handleTouchNavNextClick}
              onTouchStart={handleTestimonialTouchStart}
              onTouchEnd={handleTestimonialTouchEnd}
            />
          </div>

          <div className="testimonials-pager">
            <p className="testimonial-page-index">
              {activeTestimonialClient + 1} / {testimonialPages.length}
            </p>
          </div>
        </div>

        <hr className="section-divider" />

        <div className="content-section reveal body-copy">
          <h1 className="section-heading-space">Încă ai întrebări? Hai să vorbim.</h1>
          <p>
            <strong>Discovery Call (30 min) - GRATUIT.</strong>
          </p>
          <p>
            Acest apel nu este o ședință de terapie sau antrenament, ci un spațiu
            dedicat exclusiv întrebărilor tale. Dacă nu ești sigur ce serviciu ți se
            potrivește sau vrei să înțelegi mai bine metodologia Arhitectura Sinelui,
            îți stau la dispoziție pentru a vedea dacă suntem pe aceeași lungime de
            undă.
          </p>
          <div className="shop-actions row discovery-actions">
            <a
              className="shop-btn shop-action-btn"
              href={getPackageDetails('discovery-call')?.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Programează Apelul Gratuit
            </a>
          </div>
        </div>

        <hr className="section-divider" />

        <div className="content-section reveal media-section">
          <h1 className="section-heading-space">Media</h1>
          <div className="media-header">
            <h3>Clipuri video</h3>
            <a
              className="media-link"
              href="https://www.youtube.com/@arhitecturasinelui-ro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vezi toate videoclipurile
            </a>
          </div>
          {mediaItems.slice(0, 6).length === 0 && (
            <p className="muted">Încă nu există clipuri.</p>
          )}
          <div className="media-grid">
            {mediaItems.slice(0, 6).map((item) => {
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
                aria-label="Închide"
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
              <a
                className="shop-btn"
                href={activePackage.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Programează acum
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home
