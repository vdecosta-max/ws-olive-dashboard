/**
 * InPanelCapture — In-Panel Capture Flow.
 * 1280px viewport: PDP background (SiteHeader + simplified product) + Olive panel overlay.
 * Two states: Save Prompt | Inline Form, toggled from nav.
 */
import SiteHeader from '../components/SiteHeader'
import './InPanelCapture.css'

export default function InPanelCapture({ captureMode = 'save-prompt' }) {
  return (
    <div className="in-panel-capture" role="main" aria-label="Product page with Olive chat">
      <SiteHeader />

      <div className="in-panel-capture__viewport">
        {/* PDP BACKGROUND */}
        <div className="in-panel-capture__pdp">
          <nav className="in-panel-capture__breadcrumb" aria-label="Breadcrumb">
            Cookware › All Cookware › Dutch Ovens & Braisers
          </nav>
          <div className="in-panel-capture__pdp-content">
            <div className="in-panel-capture__gallery">
              <div
                className="in-panel-capture__main-image"
                aria-hidden="true"
              />
              <div className="in-panel-capture__thumbs" aria-hidden="true">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="in-panel-capture__thumb" />
                ))}
              </div>
            </div>
            <div className="in-panel-capture__details">
              <h1 className="in-panel-capture__product-title">
                Le Creuset Signature Enameled Cast Iron Round Dutch Oven
              </h1>
              <p className="in-panel-capture__price">$270</p>
              <p className="in-panel-capture__rating">
                ★★★★½ Read Reviews
              </p>
              <div className="in-panel-capture__sizes">
                {['5.5 qt', '7.25 qt', '9 qt'].map((size) => (
                  <button key={size} type="button" className="in-panel-capture__size-pill">
                    {size}
                  </button>
                ))}
              </div>
              <div className="in-panel-capture__colors" aria-label="Color swatches">
                {[1, 2, 3, 4, 5].map((i) => (
                  <button
                    key={i}
                    type="button"
                    className="in-panel-capture__color-swatch"
                    aria-label={`Color ${i}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* OLIVE PANEL */}
        <aside className="in-panel-capture__panel" aria-label="Olive chat panel">
          <header className="in-panel-capture__panel-header">
            <span className="in-panel-capture__panel-title">✦ Olive</span>
            <div className="in-panel-capture__panel-actions">
              <button type="button" className="in-panel-capture__panel-menu" aria-label="Menu">
                ⋮
              </button>
              <button type="button" className="in-panel-capture__panel-chevron" aria-label="Collapse">
                ⌄
              </button>
            </div>
          </header>
          <div className="in-panel-capture__panel-body">
            {/* CHAT THREAD */}
            <div className="in-panel-capture__chat">
              <div className="in-panel-capture__bubble in-panel-capture__bubble--user">
                So the Lodge is the better value option for me to start with?
              </div>
              <div className="in-panel-capture__response">
                <div className="in-panel-capture__response-row">
                  <img
                    src="/AgentOliveIcon.png"
                    alt="Olive"
                    className="in-panel-capture__avatar"
                  />
                  <p className="in-panel-capture__response-text">
                    Exactly — it&apos;s the best entry point for cast iron on induction. Seasons
                    beautifully and lasts decades. The Le Creuset is worth it when
                    you&apos;re ready to invest.
                  </p>
                </div>
                <p className="in-panel-capture__timestamp">Olive · 8:26 PM</p>
              </div>

              {/* CAPTURE CARD — STATE 1, 2, 3, or 4 */}
              {captureMode === 'save-prompt' && (
                <div className="in-panel-capture__card">
                  <h3 className="in-panel-capture__card-heading">
                    Want to save this conversation?
                  </h3>
                  <p className="in-panel-capture__card-subtext">
                    Pick up where you left off anytime.
                  </p>
                  <button type="button" className="in-panel-capture__card-btn">
                    Save to my account
                  </button>
                  <a href="#guest" className="in-panel-capture__card-link">
                    Continue as guest
                  </a>
                </div>
              )}
              {captureMode === 'inline-form' && (
                <div className="in-panel-capture__card">
                  <h3 className="in-panel-capture__card-heading">
                    Great — just your name and email to get started.
                  </h3>
                  <input
                    type="text"
                    placeholder="First name"
                    className="in-panel-capture__input"
                    aria-label="First name"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="in-panel-capture__input"
                    aria-label="Email"
                  />
                  <button type="button" className="in-panel-capture__card-btn">
                    Send me a magic link
                  </button>
                  <p className="in-panel-capture__card-fine-print">
                    No password needed. We&apos;ll email you a link to complete setup.
                  </p>
                  <a href="#back" className="in-panel-capture__card-link">
                    ← Back
                  </a>
                </div>
              )}
              {captureMode === 'sign-in' && (
                <div className="in-panel-capture__card">
                  <h3 className="in-panel-capture__card-heading">
                    Welcome back — sign in to save this conversation.
                  </h3>
                  <input
                    type="email"
                    placeholder="Email"
                    className="in-panel-capture__input"
                    aria-label="Email"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="in-panel-capture__input"
                    aria-label="Password"
                  />
                  <button type="button" className="in-panel-capture__card-btn">
                    Sign in
                  </button>
                  <div className="in-panel-capture__card-links-row">
                    <a href="#forgot" className="in-panel-capture__card-link-inline">
                      Forgot password?
                    </a>
                    <a href="#magic-link" className="in-panel-capture__card-link-inline">
                      Send me a magic link instead
                    </a>
                  </div>
                  <p className="in-panel-capture__card-fine-print">
                    Your conversation will be saved to your account automatically.
                  </p>
                  <a href="#back" className="in-panel-capture__card-link">
                    ← Back
                  </a>
                </div>
              )}
              {captureMode === 'signed-in' && (
                <div className="in-panel-capture__response">
                  <div className="in-panel-capture__response-row">
                    <img
                      src="/AgentOliveIcon.png"
                      alt="Olive"
                      className="in-panel-capture__avatar"
                    />
                    <p className="in-panel-capture__response-text">
                      Welcome back, Viveka — I&apos;ve saved our conversation to your dashboard.
                    </p>
                  </div>
                  <p className="in-panel-capture__timestamp">Olive · 8:27 PM</p>
                </div>
              )}
            </div>

            {/* INPUT BAR */}
            <div className="in-panel-capture__input-bar-wrap">
              <input
                type="text"
                placeholder="Type your message..."
                className="in-panel-capture__input-bar"
                aria-label="Message input"
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
