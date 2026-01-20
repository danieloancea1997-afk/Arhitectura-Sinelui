import { useEffect, useState } from 'react'

type Article = {
  id: number
  title: string
  content: string
  date: string
}

type Message = {
  id: number
  name: string
  phone: string
  email: string
  content: string
  created_at: string
}

const API_BASE = import.meta.env.VITE_API_ORIGIN
  ? `${import.meta.env.VITE_API_ORIGIN}/api`
  : '/api'
const TOKEN_KEY = 'adminToken'

function Admin() {
  const [password, setPassword] = useState('')
  const [token, setToken] = useState<string | null>(null)
  const [articles, setArticles] = useState<Article[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [activeTab, setActiveTab] = useState<'articles' | 'messages' | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem(TOKEN_KEY)
    if (saved) {
      setToken(saved)
    }
  }, [])

  useEffect(() => {
    if (!token) {
      setLoading(false)
      return
    }

    const load = async () => {
      try {
        setLoading(true)
        const [articlesRes, messagesRes] = await Promise.all([
          fetch(`${API_BASE}/articles`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
          fetch(`${API_BASE}/messages`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
        ])

        if (!articlesRes.ok) {
          throw new Error('Nu am putut incarca articolele.')
        }
        if (!messagesRes.ok) {
          throw new Error('Nu am putut incarca mesajele.')
        }

        const articlesData = (await articlesRes.json()) as Article[]
        const messagesData = (await messagesRes.json()) as Message[]
        setArticles(articlesData)
        setMessages(messagesData)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Eroare necunoscuta.')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [token])

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (!res.ok) {
        throw new Error('Parola este gresita.')
      }

      const data = (await res.json()) as { token: string }
      localStorage.setItem(TOKEN_KEY, data.token)
      setToken(data.token)
      setPassword('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Eroare necunoscuta.')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY)
    setToken(null)
    setArticles([])
    setMessages([])
    setShowForm(false)
    setActiveTab(null)
  }

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    if (!token) {
      return
    }

    try {
      const isEditing = editingId !== null
      const res = await fetch(
        isEditing ? `${API_BASE}/articles/${editingId}` : `${API_BASE}/articles`,
        {
          method: isEditing ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title, content, date }),
        },
      )

      if (!res.ok) {
        throw new Error(
          isEditing ? 'Nu am putut edita articolul.' : 'Nu am putut salva articolul.',
        )
      }

      const saved = (await res.json()) as Article
      if (isEditing) {
        setArticles((prev) =>
          prev.map((article) => (article.id === saved.id ? saved : article)),
        )
      } else {
        setArticles((prev) => [saved, ...prev])
      }
      setTitle('')
      setContent('')
      setDate('')
      setEditingId(null)
      setShowForm(false)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Eroare necunoscuta.')
    }
  }

  const handleEdit = (article: Article) => {
    setEditingId(article.id)
    setTitle(article.title)
    setContent(article.content)
    setDate(article.date)
    setShowForm(true)
    setActiveTab('articles')
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setTitle('')
    setContent('')
    setDate('')
    setShowForm(false)
  }

  const handleDelete = async (articleId: number) => {
    if (!token) {
      return
    }

    try {
      const res = await fetch(`${API_BASE}/articles/${articleId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!res.ok) {
        throw new Error('Nu am putut sterge articolul.')
      }

      setArticles((prev) => prev.filter((article) => article.id !== articleId))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Eroare necunoscuta.')
    }
  }

  return (
    <section className={token ? 'adminp-shell' : 'admin-page'}>
      <div className={token ? 'card adminp-header' : 'card auth-card'}>
        <div className="row-between">
          <h1>Admin Panel</h1>
          {token && (
            <button className="btn btn-secondary" type="button" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>

        {error && <p className="error">{error}</p>}

        {!token && (
          <form className="form" onSubmit={handleLogin}>
            <label className="field">
              <span>Parola admin</span>
              <input
                className="input"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Introdu parola"
                required
              />
            </label>
            <button className="btn" type="submit">
              Intra in admin
            </button>
          </form>
        )}
      </div>

      {token && (
        <div className="adminp-layout">
          <div className="adminp-nav">
            <button
              className={activeTab === 'messages' ? 'adminp-tab active' : 'adminp-tab'}
              type="button"
              onClick={() => setActiveTab('messages')}
            >
              Mesaje de contact
            </button>
            <button
              className={activeTab === 'articles' ? 'adminp-tab active' : 'adminp-tab'}
              type="button"
              onClick={() => setActiveTab('articles')}
            >
              Articole blog
            </button>
          </div>

          {activeTab && (
            <aside className="adminp-panel">
              <div className="adminp-content">
                {activeTab === 'messages' && (
                  <div className="stack">
                    <div className="adminp-section">
                      <h2>Mesaje de contact</h2>
                      <span className="adminp-badge">{messages.length}</span>
                    </div>
                    {loading && <p className="muted">Se incarca...</p>}
                    {!loading && messages.length === 0 && (
                      <p className="muted">Nu exista mesaje inca.</p>
                    )}
                    {messages.map((message) => (
                      <article key={message.id} className="card">
                        <p className="eyebrow">{message.created_at}</p>
                        <h3>{message.name}</h3>
                        <p className="muted">
                          {message.email} - {message.phone}
                        </p>
                        <p className="article-content muted">{message.content}</p>
                      </article>
                    ))}
                  </div>
                )}

                {activeTab === 'articles' && (
                  <div className="stack">
                    <div className="adminp-section">
                      <h2>Articole blog</h2>
                      <div className="row">
                        <span className="adminp-badge">{articles.length}</span>
                        <button
                          className="btn"
                          type="button"
                          onClick={() => {
                            setShowForm(true)
                            setEditingId(null)
                            setTitle('')
                            setContent('')
                            setDate('')
                          }}
                        >
                          Adauga articol
                        </button>
                      </div>
                    </div>

                    {showForm && (
                      <form className="card form" onSubmit={handleCreate}>
                        <div className="row-between">
                          <h3>{editingId ? 'Editeaza articol' : 'Articol nou'}</h3>
                          <div className="row">
                            <button
                              className="btn btn-secondary"
                              type="button"
                              onClick={handleCancelEdit}
                            >
                              Renunta
                            </button>
                          </div>
                        </div>
                        <label className="field">
                          <span>Titlu</span>
                          <input
                            className="input"
                            type="text"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            placeholder="Titlul articolului"
                            required
                          />
                        </label>
                        <label className="field">
                          <span>Data</span>
                          <input
                            className="input"
                            type="date"
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
                            required
                          />
                        </label>
                        <label className="field">
                          <span>Continut</span>
                          <textarea
                            className="input textarea"
                            value={content}
                            onChange={(event) => setContent(event.target.value)}
                            placeholder="Scrie articolul aici"
                            rows={6}
                            required
                          />
                        </label>
                        <button className="btn" type="submit">
                          {editingId ? 'Salveaza modificarile' : 'Salveaza articol'}
                        </button>
                      </form>
                    )}

                    {loading && <p className="muted">Se incarca...</p>}
                    {!loading && articles.length === 0 && (
                      <p className="muted">Inca nu exista articole.</p>
                    )}
                    {articles.map((article) => (
                      <article key={article.id} className="card">
                        <div className="row-between">
                          <div>
                            <p className="eyebrow">{article.date}</p>
                            <h3>{article.title}</h3>
                          </div>
                          <div className="row">
                            <button
                              className="btn btn-secondary"
                              type="button"
                              onClick={() => handleEdit(article)}
                            >
                              Editeaza
                            </button>
                            <button
                              className="btn btn-danger"
                              type="button"
                              onClick={() => handleDelete(article.id)}
                            >
                              Sterge
                            </button>
                          </div>
                        </div>
                        <p className="article-content muted">{article.content}</p>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            </aside>
          )}
        </div>
      )}
    </section>
  )
}

export default Admin
