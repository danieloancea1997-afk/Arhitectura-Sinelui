import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Home from './pages/Home'
import Products from './pages/Products'
import { packages } from './data/shopPackages'

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App

function AppShell() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isContact = location.pathname.startsWith('/contact')
  const isResurse = location.pathname.startsWith('/blog')
  const [showIdlePrompt, setShowIdlePrompt] = useState(false)
  const discoveryCallUrl =
    packages.find((pkg) => pkg.id === 'discovery-call')?.bookingUrl ?? '/shop'

  useEffect(() => {
    document.body.classList.toggle('resurse-body', isResurse)
    return () => {
      document.body.classList.remove('resurse-body')
    }
  }, [isResurse])

  useEffect(() => {
    const defaultTitle = 'Paul-Cristian Borcoș | Psiholog în Arad - Arhitectura Sinelui'
    const defaultDescription =
      'Paul-Cristian Borcoș, psiholog în Arad și fondator Arhitectura Sinelui, oferă consiliere psihologică, Somatic Alignment, antrenament personalizat și nutriție pentru longevitate.'
    const routeMeta: Record<string, { title: string; description: string; canonical: string }> = {
      '/': {
        title: defaultTitle,
        description: defaultDescription,
        canonical: 'https://arhitecturasinelui.ro/',
      },
      '/shop': {
        title: 'Pachete | Arhitectura Sinelui',
        description:
          'Vezi pachetele Arhitectura Sinelui pentru consiliere psihologică, Somatic Alignment, antrenament personalizat și nutriție.',
        canonical: 'https://arhitecturasinelui.ro/shop',
      },
      '/products': {
        title: 'Pachete | Arhitectura Sinelui',
        description:
          'Vezi pachetele Arhitectura Sinelui pentru consiliere psihologică, Somatic Alignment, antrenament personalizat și nutriție.',
        canonical: 'https://arhitecturasinelui.ro/shop',
      },
      '/contact': {
        title: 'Contact Paul-Cristian Borcoș | Arhitectura Sinelui',
        description:
          'Contactează-l pe Paul-Cristian Borcoș pentru consiliere psihologică în Arad, antrenament personalizat, Somatic Alignment și întrebări despre pachete.',
        canonical: 'https://arhitecturasinelui.ro/contact',
      },
      '/faq': {
        title: 'Întrebări frecvente | Arhitectura Sinelui',
        description:
          'Găsește răspunsuri la cele mai frecvente întrebări despre consiliere psihologică, programări, pachete și Arhitectura Sinelui.',
        canonical: 'https://arhitecturasinelui.ro/faq',
      },
      '/blog': {
        title: 'Resurse | Arhitectura Sinelui',
        description:
          'Explorează resurse video despre psihologie, limite personale, traumă, Somatic Alignment și dezvoltare personală.',
        canonical: 'https://arhitecturasinelui.ro/blog',
      },
    }

    const meta = routeMeta[location.pathname] ?? {
      title: defaultTitle,
      description: defaultDescription,
      canonical: `https://arhitecturasinelui.ro${location.pathname}`,
    }

    const setMetaByName = (name: string, content: string) => {
      let element = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('name', name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    const setMetaByProperty = (property: string, content: string) => {
      let element = document.head.querySelector(
        `meta[property="${property}"]`,
      ) as HTMLMetaElement | null
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute('property', property)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    const setCanonical = (href: string) => {
      let element = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
      if (!element) {
        element = document.createElement('link')
        element.setAttribute('rel', 'canonical')
        document.head.appendChild(element)
      }
      element.setAttribute('href', href)
    }

    document.title = meta.title
    setMetaByName('description', meta.description)
    setMetaByProperty('og:title', meta.title)
    setMetaByProperty('og:description', meta.description)
    setMetaByProperty('og:url', meta.canonical)
    setMetaByName('twitter:title', meta.title)
    setMetaByName('twitter:description', meta.description)
    setCanonical(meta.canonical)
  }, [location.pathname])

  useEffect(() => {
    const storageKey = 'idlePromptShown'
    if (sessionStorage.getItem(storageKey)) {
      return
    }

    let timer: number | undefined
    const startTimer = () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(() => {
        setShowIdlePrompt(true)
        sessionStorage.setItem(storageKey, '1')
      }, 5 * 60 * 1000)
    }

    const handleScroll = () => startTimer()

    startTimer()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <div className="app">
      <Navbar />
      <main
        className={
          isHome
            ? 'page page-home'
            : isContact
              ? 'page page-contact-wide'
              : 'page'
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      {showIdlePrompt && (
        <div className="idle-overlay" role="presentation">
          <div className="idle-modal" role="dialog" aria-modal="true">
            <button
              className="idle-close"
              type="button"
              aria-label="Închide"
              onClick={() => setShowIdlePrompt(false)}
            >
              ×
            </button>
            <h3 className="idle-title">Sesiune gratuită de 30 min</h3>
            <p className="idle-text">
              Nu ești sigur ce ți se potrivește? Programează o sesiune gratuită de
              30 min.
            </p>
            <a
              className="btn idle-cta"
              href={discoveryCallUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Programează acum
            </a>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}
