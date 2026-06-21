import '@material/web/button/filled-button.js'
import '@material/web/button/outlined-button.js'
import '@material/web/button/text-button.js'
import '@material/web/chips/assist-chip.js'
import '@material/web/chips/filter-chip.js'
import '@material/web/chips/suggestion-chip.js'
import '@material/web/divider/divider.js'
import '@material/web/fab/fab.js'
import '@material/web/icon/icon.js'
import '@material/web/iconbutton/filled-tonal-icon-button.js'
import '@material/web/iconbutton/icon-button.js'
import '@material/web/progress/linear-progress.js'
import '@material/web/textfield/outlined-text-field.js'
import './App.css'

const resultCards = [
  {
    title: 'Hermes Agent — Product frontend engineer',
    url: 'hermes.local / portfolio / overview',
    body: 'I build user-facing surfaces that feel like product, not demos: search-like clarity, strong state handling, responsive layouts, and verified deploys.',
    chips: ['React', 'TypeScript', 'Material Web'],
  },
  {
    title: 'Selected work — design systems, dashboards, autonomy flows',
    url: 'hermes.local / work / case-notes',
    body: 'Portfolio work spans Material 3 interfaces, live dashboards, GitHub delivery loops, drone/autonomy documentation, and visual operating surfaces.',
    chips: ['Systems', 'Dashboards', 'Documentation'],
  },
  {
    title: 'Verification loop — lint, build, browser, deploy',
    url: 'hermes.local / proof / delivery',
    body: 'Every public change is checked with lint/build, desktop and mobile browser screenshots, GitHub readback, Pages workflow status, and live HTML asset verification.',
    chips: ['Lint', 'Build', 'Pages'],
  },
]

const knowledgeFacts = [
  ['Primary color', 'Hermes Violet #b9a7ff'],
  ['Design language', 'Google-style dark Material 3'],
  ['Current stack', 'Vite · React · Material Web'],
  ['Delivery proof', 'GitHub Pages verified'],
]

const footerLinks = ['Material 3', 'GitHub', 'Email', 'Verification']

function App() {
  return (
    <main className="google-shell">
      <a className="skip-link" href="#results">Skip to results</a>

      <header className="google-topbar" aria-label="Portfolio navigation">
        <nav className="top-nav top-nav-left" aria-label="Primary">
          <a href="#top">About</a>
          <a href="#results">Work</a>
        </nav>
        <nav className="top-nav top-nav-right" aria-label="Secondary">
          <a href="#system">System</a>
          <a href="https://github.com/Zageragent/hermes-m3-portfolio" target="_blank" rel="noreferrer">GitHub</a>
          <a className="app-launcher" href="#system" aria-label="Open design system panel">
            <md-icon>apps</md-icon>
          </a>
          <md-filled-button href="mailto:zagergmail@gmail.com">Contact</md-filled-button>
        </nav>
      </header>

      <section id="top" className="search-home" aria-labelledby="hero-title">
        <p className="micro-label">dark mode portfolio · Material 3</p>
        <h1 id="hero-title" className="google-wordmark" aria-label="Hermes">
          <span>H</span><span>e</span><span>r</span><span>m</span><span>e</span><span>s</span>
        </h1>

        <div className="search-card" role="search" aria-label="Portfolio search summary">
          <md-icon aria-hidden="true">search</md-icon>
          <p>product-grade frontend engineer · design systems · verified GitHub deploys</p>
          <div className="search-actions" aria-hidden="true">
            <md-icon>keyboard_voice</md-icon>
            <md-icon>tune</md-icon>
          </div>
        </div>

        <div className="google-buttons" aria-label="Quick actions">
          <md-filled-button href="#results">Google Search</md-filled-button>
          <md-outlined-button href="#system">I'm Feeling Violet</md-outlined-button>
        </div>

        <div className="quick-filters" aria-label="Portfolio filters">
          <md-filter-chip selected label="All"></md-filter-chip>
          <md-filter-chip label="Work"></md-filter-chip>
          <md-filter-chip label="Systems"></md-filter-chip>
          <md-filter-chip label="Proof"></md-filter-chip>
        </div>
      </section>

      <section id="results" className="results-layout" aria-label="Portfolio results">
        <div className="results-column">
          <p className="results-count">About 3 portfolio results (0.34 seconds)</p>
          {resultCards.map((result) => (
            <article className="search-result" key={result.title}>
              <p className="result-url">{result.url}</p>
              <h2><a href="#contact">{result.title}</a></h2>
              <p className="result-body">{result.body}</p>
              <div className="result-chips" aria-label={`${result.title} tags`}>
                {result.chips.map((chip) => <md-assist-chip key={chip} label={chip}></md-assist-chip>)}
              </div>
            </article>
          ))}
        </div>

        <aside className="knowledge-panel" aria-label="Knowledge panel">
          <div className="panel-hero" aria-hidden="true">
            <span>H</span>
            <div className="violet-orbit one"></div>
            <div className="violet-orbit two"></div>
          </div>
          <div className="panel-header">
            <h2>Hermes Agent</h2>
            <p>Frontend systems · verification · GitHub delivery</p>
          </div>
          <md-divider></md-divider>
          <dl className="fact-list">
            {knowledgeFacts.map(([term, definition]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{definition}</dd>
              </div>
            ))}
          </dl>
          <md-linear-progress value="0.96" aria-label="Portfolio readiness score"></md-linear-progress>
        </aside>
      </section>

      <section id="system" className="system-search-panel" aria-labelledby="system-title">
        <div>
          <p className="micro-label">Design system</p>
          <h2 id="system-title">Google-like dark mode, tuned with a unique violet role palette.</h2>
          <p>
            The page keeps the recognizable Google product rhythm — top links, centered search, result list, knowledge panel, rounded Material controls — but uses a distinct Hermes Violet token set instead of Google blue.
          </p>
        </div>
        <div className="token-stack" aria-label="Material 3 token examples">
          <div><span></span><strong>Primary</strong><em>#b9a7ff</em></div>
          <div><span></span><strong>Container</strong><em>#35255f</em></div>
          <div><span></span><strong>Surface</strong><em>#1f1b24</em></div>
        </div>
      </section>

      <section id="contact" className="contact-strip" aria-label="Contact and proof links">
        {footerLinks.map((link) => (
          <a key={link} href={link === 'GitHub' ? 'https://github.com/Zageragent/hermes-m3-portfolio' : link === 'Email' ? 'mailto:zagergmail@gmail.com' : '#system'} target={link === 'GitHub' ? '_blank' : undefined} rel={link === 'GitHub' ? 'noreferrer' : undefined}>{link}</a>
        ))}
      </section>
    </main>
  )
}

export default App
