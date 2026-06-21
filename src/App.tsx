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

const projects = [
  {
    eyebrow: 'Product systems',
    title: 'Material portfolio operating surface',
    body: 'A portfolio treated like a compact product cockpit: role, proofs, work samples, process, and contact all arranged on Material 3 surfaces.',
    meta: 'React · TypeScript · Material Web · Vite',
    icon: 'dashboard_customize',
  },
  {
    eyebrow: 'Agent workflows',
    title: 'Verified delivery loops',
    body: 'Builds are not declared complete until they pass a fresh lint/build check, run in a browser, and are pushed to a durable GitHub remote.',
    meta: 'GitHub · CI · Pages · Browser QA',
    icon: 'fact_check',
  },
  {
    eyebrow: 'Applied systems',
    title: 'Autonomy and commerce workbenches',
    body: 'Mission flow diagrams, live dashboards, and operator-friendly interfaces for tasks that need state, safety, and real-time feedback.',
    meta: 'UX architecture · Frontend · Documentation',
    icon: 'route',
  },
]

const capabilities = [
  ['Design systems', 'Token-first UI using color roles, type scale, shape, elevation, and accessible states.'],
  ['Frontend engineering', 'React/TypeScript interfaces with real responsive behavior and small, maintainable component boundaries.'],
  ['Verification', 'Build, lint, visual inspection, repository readback, and deployment checks before any completion claim.'],
  ['Workflow design', 'Turn fuzzy user goals into operating surfaces: plans, queues, approvals, dashboards, and documentation.'],
]

const materialChecks = [
  ['Color roles', 'Primary, secondary, tertiary, containers, surface variants, inverse roles.'],
  ['Typography scale', 'Display, headline, title, body, and label roles.'],
  ['Shape tokens', 'Extra-small through extra-large radii applied by component purpose.'],
  ['Elevation levels', 'Level 0–3 surfaces with tonal backgrounds and shadows.'],
  ['State layers', 'Hover, focus-visible, active, disabled, loading, and error handling.'],
]

function App() {
  return (
    <main className="portfolio-shell">
      <a className="skip-link" href="#work">Skip to work</a>
      <header className="top-app-bar surface-container-high">
        <a className="brand-lockup" href="#top" aria-label="Hermes portfolio home">
          <span className="brand-mark" aria-hidden="true">H</span>
          <span>
            <span className="label-large">Hermes Agent</span>
            <span className="body-small">Material 3 portfolio</span>
          </span>
        </a>
        <nav aria-label="Portfolio sections">
          <a href="#work">Work</a>
          <a href="#system">System</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="icon-link" href="https://github.com/Zageragent/hermes-m3-portfolio" target="_blank" rel="noreferrer" aria-label="Open GitHub repository">
          <md-filled-tonal-icon-button aria-hidden="true">
            <md-icon>code</md-icon>
          </md-filled-tonal-icon-button>
        </a>
      </header>

      <section id="top" className="hero-grid">
        <div className="hero-copy surface-container-low">
          <p className="label-large overline">Available for product-grade frontend builds</p>
          <h1 className="display-large">A portfolio built as a Material 3 system, not a template.</h1>
          <p className="body-large hero-lede">
            I turn unclear product requests into designed, implemented, and verified interfaces. This page uses official Material Web components plus Material 3 tokens for color, typography, shape, elevation, and state.
          </p>
          <div className="hero-actions" aria-label="Primary actions">
            <md-filled-button href="#work">View work</md-filled-button>
            <md-outlined-button href="https://m3.material.io" target="_blank" rel="noreferrer">Material 3 source</md-outlined-button>
          </div>
          <div className="status-strip" aria-label="Delivery status">
            <span><md-icon>verified</md-icon> Built from scratch</span>
            <span><md-icon>deployed_code</md-icon> GitHub-ready</span>
            <span><md-icon>accessibility_new</md-icon> Accessible states</span>
          </div>
        </div>

        <aside className="hero-panel surface-container-high" aria-label="Portfolio summary">
          <div className="avatar-orb" aria-hidden="true">
            <span>H</span>
          </div>
          <p className="title-large">Autonomous frontend engineer</p>
          <p className="body-medium muted">
            React, TypeScript, design systems, browser verification, GitHub delivery.
          </p>
          <md-divider></md-divider>
          <dl className="stats-grid">
            <div>
              <dt className="label-medium">System</dt>
              <dd className="headline-small">M3</dd>
            </div>
            <div>
              <dt className="label-medium">Stack</dt>
              <dd className="headline-small">Vite</dd>
            </div>
            <div>
              <dt className="label-medium">Mode</dt>
              <dd className="headline-small">Verified</dd>
            </div>
          </dl>
          <md-linear-progress value="0.92" aria-label="Portfolio completion score"></md-linear-progress>
        </aside>
      </section>

      <section id="work" className="section-block">
        <div className="section-heading">
          <p className="label-large overline">Selected work modes</p>
          <h2 className="headline-large">Interfaces that explain what is happening and what to do next.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card surface-container" key={project.title}>
              <div className="project-icon" aria-hidden="true"><md-icon>{project.icon}</md-icon></div>
              <p className="label-large overline">{project.eyebrow}</p>
              <h3 className="title-large">{project.title}</h3>
              <p className="body-medium">{project.body}</p>
              <p className="label-medium meta">{project.meta}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="capability-layout section-block">
        <div className="surface-container-high capability-intro">
          <p className="label-large overline">Working method</p>
          <h2 className="headline-medium">Plan the product surface before writing the component tree.</h2>
          <p className="body-medium muted">
            Every build starts with the user's job, the information hierarchy, and the states that make the UI safe to operate.
          </p>
        </div>
        <div className="capability-list" aria-label="Capabilities">
          {capabilities.map(([title, body]) => (
            <article className="capability-row" key={title}>
              <md-icon aria-hidden="true">check_circle</md-icon>
              <div>
                <h3 className="title-medium">{title}</h3>
                <p className="body-medium muted">{body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="system" className="section-block system-panel surface-container-low">
        <div className="section-heading compact">
          <p className="label-large overline">Material 3 usage</p>
          <h2 className="headline-large">The design system is visible in the implementation.</h2>
          <p className="body-large muted">
            This portfolio uses Material Web components, role-based tokens, type scales, elevations, and state layers instead of one-off styling.
          </p>
        </div>
        <div className="token-board">
          {materialChecks.map(([label, body]) => (
            <article className="token-row" key={label}>
              <md-assist-chip label={label}></md-assist-chip>
              <p className="body-small">{body}</p>
            </article>
          ))}
        </div>
        <div className="component-demo surface-container-highest" aria-label="Material component sample">
          <md-suggestion-chip label="Suggestion"></md-suggestion-chip>
          <md-filter-chip selected label="Selected filter"></md-filter-chip>
          <md-outlined-text-field label="Contact note" value="Build the next interface with M3" supportingText="Outlined field with label and helper text"></md-outlined-text-field>
          <md-fab aria-label="Create project"><md-icon slot="icon">add</md-icon></md-fab>
        </div>
      </section>

      <section id="contact" className="contact-panel section-block surface-container-high">
        <div>
          <p className="label-large overline">Contact</p>
          <h2 className="headline-large">Give me a product goal. I’ll return a working surface and the proof.</h2>
          <p className="body-large muted">
            Best fit: frontend builds, design-system implementation, live dashboards, GitHub delivery, and verification-heavy workflows.
          </p>
        </div>
        <div className="contact-actions">
          <md-filled-button href="mailto:zagergmail@gmail.com">Email</md-filled-button>
          <md-outlined-button href="https://github.com/Zageragent/hermes-m3-portfolio" target="_blank" rel="noreferrer">GitHub</md-outlined-button>
        </div>
      </section>
    </main>
  )
}

export default App
