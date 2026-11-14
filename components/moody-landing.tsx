import Image from 'next/image'
import { ArrowDown, ArrowUpRight, MapPin, MessageCircle, Sparkles } from 'lucide-react'

const menu = [
  {
    name: 'Fraise',
    tone: 'berry',
    description: 'Cake vanille, crème en goût fraise, coulis de fraise, partie croustillante et sauce chocolat.',
    ingredients: ['Cake vanille', 'Crème en goût fraise', 'Coulis de fraise', 'Partie croustillante', 'Sauce chocolat'],
    prices: [{ size: 'Petite taille', detail: '330 ml', price: '35 DH' }, { size: 'Grande taille', detail: 'Boîte grand format', price: '45 DH' }],
  },
  {
    name: 'Chocolat',
    tone: 'cocoa',
    description: 'Cake chocolat, crème vanille, sauce chocolat, partie croustillante et ganache chocolat noir.',
    ingredients: ['Cake chocolat', 'Crème vanille', 'Sauce chocolat', 'Partie croustillante', 'Ganache chocolat noir'],
    prices: [{ size: 'Petite taille', detail: '330 ml', price: '35 DH' }, { size: 'Grande taille', detail: 'Boîte grand format', price: '45 DH' }],
  },
  {
    name: 'Pistachio',
    tone: 'pistachio',
    description: 'Cake chocolat, crème pistachio, crème chocolat, sauce pistachio, croustillant et pistache.',
    ingredients: ['Cake chocolat', 'Crème pistachio', 'Crème chocolat', 'Sauce pistachio', 'Partie croustillante', 'Et pistach'],
    prices: [{ size: 'Petite taille', detail: '330 ml', price: '40 DH' }, { size: 'Grande taille', detail: 'Boîte grand format', price: '50 DH' }],
  },
  {
    name: 'Lotus',
    tone: 'lotus',
    description: 'Un tiramisu aux biscuits Lotus dans l’univers Moody.',
    ingredients: ['Biscuit Lotus'],
    prices: [],
  },
]

const tiramisus = [
  {
    name: 'Tiramisu Noisette',
    price: '30 DH',
  },
  {
    name: 'Tiramisu Chocolat',
    price: '30 DH',
  },
  {
    name: 'Tiramisu Classique',
    price: '25 DH',
  },
]

const logo = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_8e18di8e18di8e18-luNJSlHrQNoUadBxFLslqeOnHHjwg6.jpg'
const brandBoard = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-13%20at%2015.19.33%20%281%29-jItqUSLEOwstXOEOp0PAWKH3XjQmcw.jpeg'
const whatsapp = 'https://wa.me/message/VHSIHGG4RB73D1'
const instagram = 'https://instagram.com/moo_dybites?utm_source=qr&xtok=bWFweG5oaml5eWdy'

export function MoodyLanding() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Moody, accueil"><span className="wordmark-dot">M</span><span>moody<small>PÂTISSERIE</small></span></a>
        <nav aria-label="Navigation principale"><a href="#menu">La carte</a><a href="#maison">Notre univers</a><a className="nav-order" href={whatsapp} target="_blank" rel="noreferrer">Commander <ArrowUpRight size={15} /></a></nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={14} /> PÂTISSERIE À MARRAKECH</p>
          <h1>Small bites.<br /><em>Big mood.</em></h1>
          <p className="hero-lede">De la douceur à chaque bouchée.</p>
          <div className="hero-actions"><a className="button button-dark" href="#menu">Découvrir la carte <ArrowDown size={16} /></a><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Une envie ? Écrivez-nous <ArrowUpRight size={15} /></a></div>
          <div className="hero-note"><span className="note-rule" />Des desserts faits pour partager<span className="tiny-heart">♡</span></div>
        </div>
        <div className="hero-art">
          <div className="hero-image-frame"><Image src={logo} alt="Emblème Moody : gâteau couronné et lettrage Moody" fill priority sizes="(max-width: 760px) 90vw, 48vw" /></div>
          <span className="art-sticker">Préparé<br />avec amour <b>♡</b></span>
          <span className="art-caption">MOODY · MARRAKECH</span>
        </div>
        <a className="scroll-cue" href="#menu" aria-label="Défiler vers la carte"><span>FAIT AVEC AMOUR</span><ArrowDown size={16} /></a>
      </section>

      <section className="intro" id="maison">
        <div className="intro-image"><Image src={brandBoard} alt="Univers Moody Pâtisserie : desserts, canettes et identité de marque" fill sizes="(max-width: 760px) 100vw, 50vw" /></div>
        <div className="intro-copy"><p className="eyebrow">PETITE PAUSE, GRAND PLAISIR</p><h2>Un peu de douceur<br /><em>dans votre journée.</em></h2><p>Moody, c&apos;est une pâtisserie gourmande à Marrakech, pensée pour les petites envies et les grands moments. Des couches généreuses, des textures qui se répondent et une touche de bonne humeur dans chaque pot.</p><a className="text-link" href="#menu">Trouver votre mood <ArrowDown size={15} /></a><div className="intro-seal"><span>MOODY</span><small>SMALL BITES<br />BIG MOOD</small></div></div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-head"><div><p className="eyebrow">LA CARTE MOODY</p><h2>Choisissez votre <em>mood.</em></h2></div><p>Des couches de gourmandise<br />à savourer jusqu&apos;à la dernière cuillère.</p></div>
        <div className="menu-list">
          {menu.map((item, index) => <article className={`menu-card ${item.tone}`} key={item.name}>
            <div className="menu-photo" aria-hidden="true"><span className="photo-index">0{index + 1} / 0{menu.length}</span></div>
            <div className="menu-info"><div className="menu-title-row"><span className="flavor-mark" aria-hidden="true">✳</span><h3>{item.name}</h3></div><p className="menu-description">{item.description}</p>{item.ingredients.length > 0 && <div className="ingredients"><h4>Dans chaque pot</h4><ul>{item.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}</ul></div>}{item.prices.length > 0 && <div className="prices">{item.prices.map((option) => <div className="price" key={option.size}><span>{option.size}</span><small>{option.detail}</small><strong>{option.price}</strong></div>)}</div>}</div>
          </article>)}
        </div>
        <figure className="flavor-pair"><div className="flavor-pair-image" aria-hidden="true" /><figcaption><span>DOUX DUO</span><strong>Chocolat & pistachio</strong><small>Deux canettes, deux moods à découvrir.</small></figcaption></figure>
        <section className="tiramisu-collection" aria-labelledby="tiramisu-title">
          <div className="collection-heading"><div><p className="eyebrow">TIRAMISU & MORE</p><h3 id="tiramisu-title">À partager <em>ou pas.</em></h3></div><p>Nos tiramisus, chacun sa petite douceur.</p></div>
          <div className="tiramisu-grid">{tiramisus.map((item) => <article className="tiramisu-card" key={item.name}><div className="tiramisu-photo" aria-hidden="true" /><div className="tiramisu-card-footer"><h4>{item.name}</h4><strong className="tiramisu-price">{item.price}</strong></div></article>)}</div>
        </section>
        <p className="menu-footnote">Une question sur la carte ? <a href={whatsapp} target="_blank" rel="noreferrer">Contactez-nous sur WhatsApp <ArrowUpRight size={13} /></a></p>
      </section>

      <section className="gallery-section"><div className="gallery-heading"><p className="eyebrow">UN APERÇU DE NOTRE UNIVERS</p><h2>Le bonheur, <em>en couches.</em></h2></div><div className="gallery-image"><Image src={brandBoard} alt="Moodboard Moody : desserts maison, emballages et univers de la pâtisserie" fill sizes="100vw" /></div><p className="gallery-caption">Du premier regard à la dernière bouchée. <span>Moody Pâtisserie · Marrakech</span></p></section>

      <section className="contact-section" id="contact"><div className="contact-top"><div><p className="eyebrow">ON GARDE UNE PLACE POUR VOUS</p><h2>Votre prochain<br /><em>coup de cœur.</em></h2></div><p>Une commande, une question ou juste une envie sucrée ?<br />On vous répond avec plaisir.</p></div><a className="contact-card" href={whatsapp} target="_blank" rel="noreferrer"><span className="contact-icon"><MessageCircle size={22} /></span><span className="contact-label">COMMANDES & RENSEIGNEMENTS<strong>0779-852692</strong></span><span className="contact-location"><MapPin size={18} /> Marrakech</span><ArrowUpRight className="contact-arrow" size={22} /></a><div className="closing-line">Small bites <span>♡</span> Big mood</div></section>
      <footer className="site-footer"><a className="footer-brand" href="#top">moody<span> pâtisserie</span></a><p>De la douceur à chaque bouchée.</p><div className="footer-socials"><a href={instagram} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13} /></a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={13} /></a></div><small>© {new Date().getFullYear()} Moody Pâtisserie · Marrakech</small></footer>
    </main>
  )
}
