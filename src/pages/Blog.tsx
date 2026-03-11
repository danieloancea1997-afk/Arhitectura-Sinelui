type ResourceVideo = {
  id: number
  title: string
  url: string
}

const getYouTubeId = (url: string) => {
  try {
    const parsed = new URL(url)
    if (parsed.hostname.includes('youtu.be')) {
      return parsed.pathname.replace('/', '')
    }
    const v = parsed.searchParams.get('v')
    if (v) {
      return v
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

const resourceVideos: ResourceVideo[] = [
  {
    id: 1,
    title:
      'De ce te pierzi in ceilalti? Limite, Granite si Identitate | Arhitectura Sinelui (I)',
    url: 'https://www.youtube.com/watch?v=QjBsubCuRYM&t=39s',
  },
  {
    id: 2,
    title: 'Vinovatia care te paralizeaza: Limite, Granite si Trauma | Arhitectura Sinelui (II)',
    url: 'https://www.youtube.com/watch?v=om6dZLax0uk',
  },
  {
    id: 3,
    title:
      'Umbra lui Jung (Partea I) | Ce este si de ce ne sperie partea noastra intunecata',
    url: 'https://www.youtube.com/watch?v=OBLrLfNON5I',
  },
  {
    id: 4,
    title:
      'Umbra lui Jung (Partea II) | Cum sa-ti integrezi partea intunecata si sa o transformi in putere',
    url: 'https://www.youtube.com/watch?v=S3B_MIJJcOI',
  },
  {
    id: 5,
    title:
      'Ce sens are tot ce fac? - Reverberatie, Intentie si Drumul Nevazut catre Sens',
    url: 'https://www.youtube.com/watch?v=gvSwdBS0hf4',
  },
  {
    id: 6,
    title:
      'De ce ne blocam in aceleasi povesti dureroase? Adevarul despre tiparele tale!',
    url: 'https://www.youtube.com/watch?v=5Qq7mdXyvIw',
  },
]

function Blog() {
  return (
    <section className="stack blog-page resurse-page">
      <div className="card resurse-header">
        <h1>Resurse pentru minte, corp si stil de viata</h1>
        <p className="muted">Informatii utile, structurate simplu si aplicabil.</p>
      </div>

      <div className="card">
        <div className="media-header">
          <h3>Clipuri YouTube</h3>
          <a
            className="media-link"
            href="https://www.youtube.com/@arhitecturasinelui-ro"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vezi toate clipurile
          </a>
        </div>
        <div className="media-grid">
          {resourceVideos.map((video) => {
            const videoId = getYouTubeId(video.url)
            if (!videoId) {
              return null
            }
            return (
              <div key={video.id} className="media-card">
                <div className="media-item">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="media-title">{video.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Blog
