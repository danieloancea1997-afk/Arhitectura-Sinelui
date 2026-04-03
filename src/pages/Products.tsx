import { useRef, useState } from 'react'
import fitnessIcon from '../assets/fitness.png'
import somaticIcon from '../assets/somatic.png'
import psihologieIcon from '../assets/psihologie.png'
import crownIcon from '../assets/crown.png'
import stepIcon from '../assets/step.png'
import { packages, type PackageItem } from '../data/shopPackages'

const discountedPrices: Record<string, string> = {
  'consiliere-psihologica': '199,99 lei',
  'consultanta-evaluare': '89,99 lei',
  'abonament-4x': '699,99 lei',
  'program-gym': '249,99 lei',
  'ghid-nutritie': '249,99 lei',
  'combo-gym-nutritie': '449,99 lei',
  'arhitectura-miscarii': '449,99 lei',
  'arhitectura-nutritiei': '449,99 lei',
  'master-body': '799,99 lei',
  'reset-challenge': '1799 lei',
}

const originalPrices: Record<string, string> = {
  'consiliere-psihologica': '250.00 lei',
  'consultanta-evaluare': '100.00 lei',
  'abonament-4x': '800.00 lei',
  'program-gym': '400.00 lei',
  'ghid-nutritie': '400.00 lei',
  'combo-gym-nutritie': '700.00 lei',
  'arhitectura-miscarii': '700.00 lei',
  'arhitectura-nutritiei': '700.00 lei',
  'master-body': '1,000.00 lei',
  'reset-challenge': '1,950.00 lei',
}

const parseLeiValue = (value: string) => {
  const normalized = value
    .toLowerCase()
    .replace(/(lei|ron)/g, '')
    .replace(/\s+/g, '')
  const lastComma = normalized.lastIndexOf(',')
  const lastDot = normalized.lastIndexOf('.')

  if (lastComma !== -1 && lastDot !== -1) {
    if (lastComma > lastDot) {
      return Number.parseFloat(normalized.replace(/\./g, '').replace(',', '.'))
    }
    return Number.parseFloat(normalized.replace(/,/g, ''))
  }

  if (lastComma !== -1) {
    const decimalDigits = normalized.length - lastComma - 1
    if (decimalDigits === 2) {
      return Number.parseFloat(normalized.replace(',', '.'))
    }
    return Number.parseFloat(normalized.replace(/,/g, ''))
  }

  if (lastDot !== -1) {
    const decimalDigits = normalized.length - lastDot - 1
    if (decimalDigits === 2) {
      return Number.parseFloat(normalized)
    }
    return Number.parseFloat(normalized.replace(/\./g, ''))
  }

  return Number.parseFloat(normalized)
}

const getDiscountBadgeLabel = (oldPrice: string, newPrice: string) => {
  const oldValue = parseLeiValue(oldPrice)
  const newValue = parseLeiValue(newPrice)
  if (!oldValue || !newValue || newValue >= oldValue) {
    return null
  }
  const discount = Math.round(((oldValue - newValue) / oldValue) * 100)
  return `-${discount}%`
}

const noteLabelsToBold = new Set([
  'Locație',
  'Rezultat',
  'TERMENI ȘI CONDIȚII',
  'Natura Serviciului (Triaj)',
  'Confidențialitate',
  'Politică de Anulare',
  'Consimțământ',
])

const renderNote = (note: string) => {
  if (note.endsWith(':') && noteLabelsToBold.has(note.slice(0, -1))) {
    return <strong>{note}</strong>
  }

  const colonIndex = note.indexOf(':')
  if (colonIndex === -1) {
    return note
  }

  const label = note.slice(0, colonIndex)
  if (!noteLabelsToBold.has(label)) {
    return note
  }

  return (
    <>
      <strong>{label}:</strong>
      {note.slice(colonIndex + 1)}
    </>
  )
}

type ShopCategory = {
  id: string
  label: string
  icon: string
  packageIds?: string[]
}

function Products() {
  const categories: ShopCategory[] = [
    {
      id: 'primii-pasi',
      label: 'Primii pași spre transformare',
      icon: stepIcon,
      packageIds: ['consultanta-evaluare'],
    },
    { id: 'psihologie', label: 'Psihologie', icon: psihologieIcon },
    { id: 'somatic', label: 'Somatic', icon: somaticIcon },
    { id: 'fitness', label: 'Fitness', icon: fitnessIcon },
    {
      id: 'protocol-complet',
      label: 'Protocolul Complet (Psihologie - Somatic - Fitness)',
      icon: crownIcon,
      packageIds: ['reset-challenge'],
    },
  ]
  const [activePackage, setActivePackage] = useState<PackageItem | null>(null)
  const [initialEvalConsent, setInitialEvalConsent] = useState(false)
  const detailBodyRef = useRef<HTMLDivElement | null>(null)
  const termsRef = useRef<HTMLParagraphElement | null>(null)

  const parseMeta = (meta: string) => {
    const parts = meta.split('@')
    if (parts.length === 2) {
      return {
        duration: parts[0]?.trim() || meta,
        price: parts[1]?.trim() || meta,
      }
    }
    return { duration: meta, price: meta }
  }

  const scrollToTerms = () => {
    termsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="shop-page">
      <div className="shop-page-header">
        <h1>Pachete</h1>
        <p className="muted">
          Alege pachetul potrivit pentru direcția ta de evoluție. Detaliile și
          structura fiecărui program sunt prezentate mai jos.
        </p>
      </div>

      {categories.map((category) => {
        const categoryPackages =
          'packageIds' in category
            ? packages.filter((pkg) => category.packageIds?.includes(pkg.id))
            : packages.filter(
                (pkg) =>
                  pkg.category === category.id &&
                  !['discovery-call', 'consultanta-evaluare', 'reset-challenge'].includes(
                    pkg.id,
                  ),
              )

        return (
          <section key={category.id} className="shop-category">
            <div className="shop-category-header">
              <img className="shop-category-icon" src={category.icon} alt="" />
              <h2 className="shop-category-title">{category.label}</h2>
            </div>
            <hr className="shop-category-divider" />
            <div className="shop-category-grid">
              {categoryPackages.map((pkg) => {
                const { duration, price } = parseMeta(pkg.meta)
                const isFree = price.toLowerCase() === 'gratuit'
                const discountedPrice = discountedPrices[pkg.id]
                const originalPrice = originalPrices[pkg.id] ?? price
                const discountLabel = discountedPrice
                  ? getDiscountBadgeLabel(originalPrice, discountedPrice)
                  : null
                return (
                  <article
                    key={pkg.title}
                    className="shop-mini-card"
                    onClick={() => {
                      setInitialEvalConsent(false)
                      setActivePackage(pkg)
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        setInitialEvalConsent(false)
                        setActivePackage(pkg)
                      }
                    }}
                  >
                    {discountLabel && <span className="shop-sale-badge">{discountLabel}</span>}
                    <div className="shop-mini-top">
                      {isFree ? (
                        <p className="shop-mini-price is-free">{price}</p>
                      ) : discountedPrice ? (
                        <div className="shop-mini-price-wrap">
                          <p className="shop-mini-price shop-mini-price-new">{discountedPrice}</p>
                          <p className="shop-mini-price shop-mini-price-old">{originalPrice}</p>
                        </div>
                      ) : (
                        <p className="shop-mini-price">{price}</p>
                      )}
                      <p className="shop-mini-duration">{duration}</p>
                      <h3>{pkg.title}</h3>
                    </div>
                    <button
                      className="shop-btn shop-mini-btn"
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation()
                        setInitialEvalConsent(false)
                        setActivePackage(pkg)
                      }}
                    >
                      Vezi detalii
                    </button>
                  </article>
                )
              })}
            </div>
          </section>
        )
      })}
      {activePackage && (
        <div className="shop-detail-overlay" role="presentation">
          <div className="shop-detail-modal" role="dialog" aria-modal="true">
            <div className="row-between">
              <div>
                <h2>{activePackage.title}</h2>
                {(() => {
                  const { duration, price } = parseMeta(activePackage.meta)
                  const discountedPrice = discountedPrices[activePackage.id]
                  const originalPrice = originalPrices[activePackage.id] ?? price
                  return (
                    <>
                      <p className="shop-mini-meta">{duration}</p>
                      {discountedPrice ? (
                        <p className="shop-mini-meta shop-mini-meta-price">
                          <span className="shop-mini-price-new">{discountedPrice}</span>
                          <span className="shop-mini-price-old">{originalPrice}</span>
                        </p>
                      ) : (
                        <p className="shop-mini-meta">{price}</p>
                      )}
                    </>
                  )
                })()}
              </div>
              <button
                className="shop-detail-close"
                type="button"
                onClick={() => {
                  setActivePackage(null)
                  setInitialEvalConsent(false)
                }}
                aria-label="Închide"
              >
                X
              </button>
            </div>
            <div className="shop-detail-body" ref={detailBodyRef}>
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
                <p
                  key={`${activePackage.title}-note-${index}`}
                  className="shop-page-note"
                  ref={note === 'TERMENI ȘI CONDIȚII:' ? termsRef : undefined}
                >
                  {renderNote(note)}
                </p>
              ))}
            </div>
            <div className="shop-detail-actions">
              {activePackage.id === 'consultanta-evaluare' && (
                <label className="shop-consent">
                  <input
                    type="checkbox"
                    checked={initialEvalConsent}
                    onChange={(event) => setInitialEvalConsent(event.target.checked)}
                  />
                  <span className="shop-consent-prefix">Am citit și sunt de acord cu</span>
                  <span>
                    Am citit și sunt de acord cu Termenii și Condițiile de evaluare
                    inițială
                  </span>
                  <button
                    type="button"
                    className="shop-consent-link"
                    onClick={(event) => {
                      event.preventDefault()
                      scrollToTerms()
                    }}
                  >
                    Termenii și Condițiile
                  </button>
                  <span className="shop-consent-tail">de evaluare inițială</span>
                </label>
              )}
              <a
                className="shop-btn"
                href={activePackage.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={activePackage.id === 'consultanta-evaluare' && !initialEvalConsent}
                onClick={(event) => {
                  if (activePackage.id === 'consultanta-evaluare' && !initialEvalConsent) {
                    event.preventDefault()
                  }
                }}
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

export default Products
