import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import tiktok from '../assets/tiktok.png'
import youtube from '../assets/youtube.png'

const socialLinks = [
  {
    name: 'Facebook',
    icon: facebook,
    href: 'https://www.facebook.com/psih.paulcristianborcos',
  },
  {
    name: 'Instagram',
    icon: instagram,
    href: 'https://www.instagram.com/psih.paulcristianborcos/',
  },
  { name: 'TikTok', icon: tiktok, href: 'https://www.tiktok.com/@ganduriprofunde' },
  { name: 'YouTube', icon: youtube, href: 'https://www.youtube.com/@ganduriprofunde' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          <span className="footer-brand">Arhitectura Sinelui</span>
          <span className="muted">Fitness si psihologie pentru echilibru complet.</span>
        </p>

        <div className="footer-social">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.href} aria-label={link.name}>
              <img className="social-icon" src={link.icon} alt={link.name} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
