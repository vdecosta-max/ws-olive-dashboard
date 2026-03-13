/**
 * Overview — Scrollable intro/orientation page for stakeholders.
 * Presentation-style, max-width 960px, cream background.
 */
import './Overview.css'

export default function Overview({ onSelectScreen }) {
  return (
    <main className="overview" role="main" aria-label="Olive prototype overview">
      <div className="overview__inner">
        {/* SECTION 1 — HEADER */}
        <header className="overview__header">
          <p className="overview__label">WILLIAMS SONOMA · OLIVE AGENT</p>
          <h1 className="overview__headline">Remembering Every Conversation</h1>
          <p className="overview__subhead">
            A proposal to turn every Olive interaction into a lasting relationship — across
            Williams Sonoma, Pottery Barn, and west elm.
          </p>
          <div className="overview__rule" aria-hidden="true" />
        </header>

        {/* SECTION 2 — THE OPPORTUNITY */}
        <section className="overview__section" aria-labelledby="opportunity-label">
          <h2 id="opportunity-label" className="overview__section-label">THE OPPORTUNITY</h2>
          <div className="overview__two-col overview__two-col--60-40">
            <div className="overview__col">
              <p className="overview__body">
                Today, only 10% of Williams Sonoma site visitors are logged in. Every
                conversation Olive has with the other 90% disappears when they close the
                tab — along with the intent signals, product interests, and trust that
                conversation built.
              </p>
              <p className="overview__body">
                This proposal captures that value. Every Olive conversation becomes an asset
                — stored, surfaced, and used to deepen the customer relationship across every
                visit and every brand.
              </p>
            </div>
            <div className="overview__col overview__stats">
              <div className="overview__stat-card">
                <span className="overview__stat-num">10%</span>
                <span className="overview__stat-label">of visitors are logged in today</span>
              </div>
              <div className="overview__stat-card">
                <span className="overview__stat-num">3×</span>
                <span className="overview__stat-label">
                  more likely to convert when conversation context is saved
                </span>
                <span className="overview__stat-disclaimer">
                  Directional, indicative — not a cited stat
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — THREE SCENARIOS */}
        <section className="overview__section" aria-labelledby="scenarios-label">
          <h2 id="scenarios-label" className="overview__section-label">THREE SCENARIOS</h2>
          <div className="overview__scenario-cards">
            <article className="overview__scenario-card">
              <span className="overview__pill overview__pill--green">Scenario A</span>
              <h3 className="overview__scenario-title">
                <span className="overview__scenario-icon overview__scenario-icon--green" aria-hidden="true">✓</span>
                Already a member
              </h3>
              <p className="overview__scenario-body">
                Logged-in customers save their conversation in one tap. Olive greets them by
                name. The conversation appears on their dashboard immediately.
              </p>
              <button
                type="button"
                className="overview__scenario-link"
                onClick={() => onSelectScreen?.('email-notification')}
              >
                See Email: Notification →
              </button>
            </article>
            <article className="overview__scenario-card">
              <span className="overview__pill overview__pill--gold">Scenario B</span>
              <h3 className="overview__scenario-title">
                <span className="overview__scenario-icon overview__scenario-icon--gold" aria-hidden="true">✦</span>
                New to Williams Sonoma
              </h3>
              <p className="overview__scenario-body">
                A lightweight in-panel form captures name and email. A magic link completes
                account setup. Their first dashboard visit is already populated with their
                conversation, products, and interest themes.
              </p>
              <button
                type="button"
                className="overview__scenario-link"
                onClick={() => onSelectScreen?.('email-new-user')}
              >
                See Email: New User →
              </button>
            </article>
            <article className="overview__scenario-card">
              <span className="overview__pill overview__pill--grey">Scenario C</span>
              <h3 className="overview__scenario-title">
                <span className="overview__scenario-icon overview__scenario-icon--grey" aria-hidden="true">○</span>
                Browsing as a guest
              </h3>
              <p className="overview__scenario-body">
                No friction — just an email address. A rich summary email delivers the
                conversation recap and products discussed, with a clear path to account
                creation whenever they&apos;re ready.
              </p>
              <button
                type="button"
                className="overview__scenario-link"
                onClick={() => onSelectScreen?.('email-guest')}
              >
                See Email: Guest →
              </button>
            </article>
          </div>
        </section>

        {/* SECTION 4 — THE EXPERIENCE FLOW */}
        <section className="overview__section" aria-labelledby="flow-label">
          <h2 id="flow-label" className="overview__section-label">THE EXPERIENCE FLOW</h2>
          <div className="overview__flow">
            <div className="overview__flow-box">Conversation with Olive</div>
            <span className="overview__flow-arrow" aria-hidden="true">→</span>
            <div className="overview__flow-box">Save prompt appears</div>
            <span className="overview__flow-arrow" aria-hidden="true">→</span>
            <div className="overview__flow-box">Account / Guest choice</div>
            <span className="overview__flow-arrow" aria-hidden="true">→</span>
            <div className="overview__flow-box">Email delivered</div>
            <span className="overview__flow-arrow" aria-hidden="true">→</span>
            <div className="overview__flow-box">Dashboard or return visit</div>
          </div>
          <p className="overview__flow-note">
            Every screen in this prototype represents one moment in this journey.
          </p>
        </section>

        {/* SECTION 5 — THE DASHBOARD VISION */}
        <section className="overview__section" aria-labelledby="dashboard-label">
          <h2 id="dashboard-label" className="overview__section-label">THE DASHBOARD</h2>
          <div className="overview__two-col overview__two-col--60-40">
            <div className="overview__col">
              <h3 className="overview__dashboard-title">My Account, reimagined</h3>
              <p className="overview__body">
                Today the My Account page shows recent orders and recently viewed items.
                We&apos;re proposing to replace this with a living record of the customer&apos;s
                relationship with the brand — conversations, interests, curated products, and
                upcoming events — all derived from their Olive interactions across WS and
                partner brands.
              </p>
              <div className="overview__feature-pills">
                <div className="overview__feature-pill">💬 My Conversations — across all brands</div>
                <div className="overview__feature-pill">🎯 My Interests — thematic, auto-derived</div>
                <div className="overview__feature-pill">🛍️ Products & Recipes — agent-curated</div>
                <div className="overview__feature-pill">📅 Upcoming For You — events + cross-brand</div>
              </div>
            </div>
            <div className="overview__col">
              <div className="overview__wireframe">
                <div className="overview__wireframe-header" aria-hidden="true">Header</div>
                <div className="overview__wireframe-body">
                  <div className="overview__wireframe-col">
                    <div className="overview__wireframe-card">Conversations</div>
                    <div className="overview__wireframe-card">Interests</div>
                    <div className="overview__wireframe-card">Products</div>
                  </div>
                  <div className="overview__wireframe-col">
                    <div className="overview__wireframe-card">Orders</div>
                    <div className="overview__wireframe-card">Recently Viewed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — FOOTER CTA */}
        <footer className="overview__footer">
          <p className="overview__footer-text">
            Explore each screen using the navigation above
          </p>
          <button
            type="button"
            className="overview__cta-btn"
            onClick={() => onSelectScreen?.('dashboard')}
          >
            Start with the Dashboard →
          </button>
        </footer>
      </div>
    </main>
  )
}
