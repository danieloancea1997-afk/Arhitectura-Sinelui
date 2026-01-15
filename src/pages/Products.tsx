import { useState } from 'react'
import fitnessIcon from '../assets/fitness.png'
import somaticIcon from '../assets/somatic.png'
import psihologieIcon from '../assets/psihologie.png'
import { packages, type PackageItem } from '../data/shopPackages'

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

  const formatMeta = (meta: string) => meta.replace('@', '').trim()

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
                    <div className="shop-mini-top">
                      <p className={isFree ? 'shop-mini-price is-free' : 'shop-mini-price'}>
                        {price}
                      </p>
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

export default Products
