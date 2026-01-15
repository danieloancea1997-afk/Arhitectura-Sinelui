import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Products from './pages/Products'

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

  useEffect(() => {
    document.body.classList.toggle('resurse-body', isResurse)
    return () => {
      document.body.classList.remove('resurse-body')
    }
  }, [isResurse])

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
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      {showIdlePrompt && (
        <div className="idle-overlay" role="presentation">
          <div className="idle-modal" role="dialog" aria-modal="true">
            <button
              className="idle-close"
              type="button"
              aria-label="Inchide"
              onClick={() => setShowIdlePrompt(false)}
            >
              ×
            </button>
            <h3 className="idle-title">Sesiune gratuita de 30 min</h3>
            <p className="idle-text">
              Nu ești sigur ce ți se potrivește? Programează o sesiune gratuită
              de 30 min.
            </p>
            <a className="btn idle-cta" href="/shop">
              Programează acum
            </a>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}
