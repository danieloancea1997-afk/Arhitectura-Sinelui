import { useState } from 'react'
import fitnessIcon from '../assets/fitness.png'
import somaticIcon from '../assets/somatic.png'
import psihologieIcon from '../assets/psihologie.png'
import { packages, type PackageItem } from '../data/shopPackages'

const discountedPrices: Record<string, string> = {
  'consiliere-psihologica': '199.00 lei',
  'consultanta-evaluare': '89.00 lei',
  'abonament-4x': '699.00 lei',
  'program-gym': '349.00 lei',
  'ghid-nutritie': '349.00 lei',
  'combo-gym-nutritie': '599.00 lei',
  'arhitectura-miscarii': '599.00 lei',
  'arhitectura-nutritiei': '599.00 lei',
  'master-body': '899.00 lei',
  'reset-challenge': '1,799.00 lei',
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

function Products() {
  const categories = [
    { id: 'psihologie', label: 'Psihologie', icon: psihologieIcon },
    { id: 'somatic', label: 'Somatic', icon: somaticIcon },
    { id: 'fitness', label: 'Fitness', icon: fitnessIcon },
  ] as const
  const [activePackage, setActivePackage] = useState<PackageItem | null>(null)

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

  return (
    <section className="shop-page">
      <div className="shop-page-header">
        <h1>Pachete</h1>
        <p className="muted">
          Alege pachetul potrivit pentru directia ta de evolutie. Detaliile si
          structura fiecarui program sunt prezentate mai jos.
        </p>
      </div>

      {categories.map((category) => {
        const categoryPackages = packages.filter(
          (pkg) => pkg.category === category.id,
        )

        return (
          <section key={category.id} className="shop-category">
            <div className="shop-category-header">
              <h2 className="shop-category-title">{category.label}</h2>
              <img className="shop-category-icon" src={category.icon} alt="" />
            </div>
            <hr className="shop-category-divider" />
            <div className="shop-category-grid">
              {categoryPackages.map((pkg) => {
                const { duration, price } = parseMeta(pkg.meta)
                const isFree = price.toLowerCase() === 'gratuit'
                const discountedPrice = discountedPrices[pkg.id]
                const discountLabel = discountedPrice
                  ? getDiscountBadgeLabel(price, discountedPrice)
                  : null
                return (
                  <article
                    key={pkg.title}
                    className="shop-mini-card"
                    onClick={() => setActivePackage(pkg)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
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
                          <p className="shop-mini-price shop-mini-price-old">{price}</p>
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
                  return (
                    <>
                      <p className="shop-mini-meta">{duration}</p>
                      {discountedPrice ? (
                        <p className="shop-mini-meta shop-mini-meta-price">
                          <span className="shop-mini-price-new">{discountedPrice}</span>
                          <span className="shop-mini-price-old">{price}</span>
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

export default Products
