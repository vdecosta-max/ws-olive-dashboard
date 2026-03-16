/**
 * EmailGuest — Scenario C: Guest Summary email mock.
 * Same 600px centered format as EmailMagicLink. Styling matches exactly.
 */
import './EmailGuest.css'

const CONVERSATION_SUMMARY =
  'We explored cast iron cookware for your induction cooktop — focusing on heat distribution, care requirements, and value at different price points. You were weighing the Lodge skillet as an entry point against the Le Creuset for longevity.'

const PRODUCTS = [
  { name: 'Lodge Cast Iron Skillet', price: '$49.95' },
  { name: 'Le Creuset Signature Skillet', price: '$229.95' },
  { name: 'All-Clad D3 Skillet', price: '$129.95' },
]

const THEMES = ['Induction Cooking', 'Cast Iron', 'Value vs. Longevity']

export default function EmailGuest() {
  return (
    <div className="email-guest" role="article" aria-label="Guest summary email">
      <div className="email-guest__container">
        {/* HEADER */}
        <header className="email-guest__header">
          <img
            src="/WS_horizontal.svg"
            alt="Williams Sonoma"
            height="32"
            className="email-guest__wordmark"
          />
          <div className="email-guest__rule" aria-hidden="true" />
        </header>

        {/* BODY */}
        <div className="email-guest__body">
          <h1 className="email-guest__headline">
            Here&apos;s what you and Olive talked about.
          </h1>

          <p className="email-guest__datetime" aria-hidden="true">
            Thursday, March 13 · 8:26 PM
          </p>

          {/* Conversation summary block */}
          <div className="email-guest__summary-card">
            <div className="email-guest__summary-header">
              <img
                src="/AgentOliveIcon.png"
                alt="Olive"
                className="email-guest__avatar"
              />
              <span className="email-guest__agent">
                <img src="/ws-favicon.ico" alt="" width="16" height="16" className="email-guest__agent-icon" />
                Olive · Williams Sonoma
              </span>
            </div>
            <p className="email-guest__summary-text">{CONVERSATION_SUMMARY}</p>
          </div>

          {/* Products we discussed */}
          <h2 className="email-guest__section-title">Products we discussed</h2>
          <div className="email-guest__products">
            {PRODUCTS.map((product) => (
              <div key={product.name} className="email-guest__product">
                <div
                  className="email-guest__product-image"
                  aria-hidden="true"
                />
                <p className="email-guest__product-name">{product.name}</p>
                <p className="email-guest__product-price">{product.price}</p>
                <a href="#view" className="email-guest__product-link">
                  View product →
                </a>
              </div>
            ))}
          </div>

          {/* Themes preview block */}
          <h2 className="email-guest__themes-headline">
            We noticed some themes in your conversation
          </h2>
          <div className="email-guest__themes">
            {THEMES.map((theme) => (
              <span key={theme} className="email-guest__theme-pill">
                {theme}
              </span>
            ))}
          </div>
          <p className="email-guest__themes-subtext">
            Create a free account to save these and build your personal profile
            across Williams Sonoma and our family of brands.
          </p>
          <p className="email-guest__brand-marks">
            Williams Sonoma · Pottery Barn · west elm · pottery barn kids
          </p>

          {/* Two-CTA block */}
          <div className="email-guest__cta-card">
            <a href="#create-account" className="email-guest__cta-primary">
              Create a free account →
            </a>
            <a href="#continue" className="email-guest__cta-secondary">
              Continue this conversation →
            </a>
            <p className="email-guest__cta-fine-print">
              Your conversation history will be available for this session.
            </p>
          </div>

          {/* Footer */}
          <footer className="email-guest__footer">
            <img
              src="/WS_horizontal.svg"
              alt="Williams Sonoma"
              height="24"
              className="email-guest__footer-wordmark"
            />
            <p className="email-guest__footer-links">
              Unsubscribe · Privacy Policy · Williams Sonoma, San Francisco CA
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
