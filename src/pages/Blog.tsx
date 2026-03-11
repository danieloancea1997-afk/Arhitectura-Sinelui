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
    title:
      'Umbra lui Jung (Partea I) | Ce este și de ce ne sperie partea noastră întunecată',
    url: 'https://www.youtube.com/watch?v=OBLrLfNON5I',
  },
  {
    id: 7,
    title:
      'Umbra lui Jung (Partea II) | Cum să-ți integrezi partea întunecată și să o transformi în putere',
    url: 'https://www.youtube.com/watch?v=S3B_MIJJcOI',
  },
  {
    id: 8,
    title:
      'Ce sens are tot ce fac? - Reverberație, Intenție și Drumul Nevăzut către Sens',
    url: 'https://www.youtube.com/watch?v=gvSwdBS0hf4',
  },
  {
    id: 9,
    title:
      'De ce ne blocăm în aceleași povești dureroase? Adevărul despre tiparele tale!',
    url: 'https://www.youtube.com/watch?v=5Qq7mdXyvIw',
  },
]

function Blog() {
  return (
    <section className="stack blog-page resurse-page">
      <div className="card resurse-header">
        <h1>Resurse pentru minte, corp și stil de viață</h1>
        <p className="muted">Informații utile, structurate simplu și aplicabil.</p>
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
