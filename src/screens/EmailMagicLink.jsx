/**
 * EmailMagicLink — Scenario B: New User magic link email mock.
 * Browser-viewable email at 600px width, centered.
 */
import './EmailMagicLink.css'

const CONVERSATION_SUMMARY =
  'We explored cast iron cookware for your induction cooktop — focusing on heat distribution, care requirements, and value at different price points. You were weighing the Lodge skillet as an entry point against the Le Creuset for longevity.'

const PRODUCTS = [
  { name: 'Lodge Cast Iron Skillet', price: '$49.95' },
  { name: 'Le Creuset Signature Skillet', price: '$229.95' },
  { name: 'All-Clad D3 Skillet', price: '$129.95' },
]

const THEMES = ['Induction Cooking', 'Cast Iron', 'Value vs. Longevity']

export default function EmailMagicLink() {
  return (
    <div className="email-magic-link" role="article" aria-label="Magic link email">
      <div className="email-magic-link__container">
        {/* HEADER */}
        <header className="email-magic-link__header">
          <img
            src="/WS_horizontal.svg"
            alt="Williams Sonoma"
            height="32"
            className="email-magic-link__wordmark"
          />
          <div className="email-magic-link__rule" aria-hidden="true" />
        </header>

        {/* BODY */}
        <div className="email-magic-link__body">
          <h1 className="email-magic-link__headline">
            Your conversation with Olive is saved.
          </h1>
          <p className="email-magic-link__subhead">
            Complete your account to unlock your full history.
          </p>

          <p className="email-magic-link__datetime" aria-hidden="true">
            Thursday, March 13 · 8:26 PM
          </p>

          {/* Conversation summary block */}
          <div className="email-magic-link__summary-card">
            <div className="email-magic-link__summary-header">
              <img
                src="/AgentOliveIcon.png"
                alt="Olive"
                className="email-magic-link__avatar"
              />
              <span className="email-magic-link__agent">Olive · Williams Sonoma</span>
            </div>
            <p className="email-magic-link__summary-text">{CONVERSATION_SUMMARY}</p>
          </div>

          {/* Products we discussed */}
          <h2 className="email-magic-link__section-title">Products we discussed</h2>
          <div className="email-magic-link__products">
            {PRODUCTS.map((product) => (
              <div key={product.name} className="email-magic-link__product">
                <div
                  className="email-magic-link__product-image"
                  aria-hidden="true"
                />
                <p className="email-magic-link__product-name">{product.name}</p>
                <p className="email-magic-link__product-price">{product.price}</p>
                <a href="#view" className="email-magic-link__product-link">
                  View product →
                </a>
              </div>
            ))}
          </div>

          {/* Themes */}
          <h2 className="email-magic-link__section-title">
            We noticed these themes in your conversation
          </h2>
          <p className="email-magic-link__themes-label">
            These will appear on your dashboard when you create your account
          </p>
          <div className="email-magic-link__themes">
            {THEMES.map((theme) => (
              <span key={theme} className="email-magic-link__theme-pill">
                {theme}
              </span>
            ))}
          </div>

          {/* CTA block */}
          <div className="email-magic-link__cta-card">
            <a href="#create-account" className="email-magic-link__cta-btn">
              Complete my account setup →
            </a>
            <p className="email-magic-link__cta-secondary-label">
              Prefer to continue as a guest?
            </p>
            <a href="#guest" className="email-magic-link__cta-secondary-link">
              Continue this conversation without an account →
            </a>
          </div>

          {/* Footer */}
          <footer className="email-magic-link__footer">
            <img
              src="/WS_horizontal.svg"
              alt="Williams Sonoma"
              height="24"
              className="email-magic-link__footer-wordmark"
            />
            <p className="email-magic-link__footer-links">
              Unsubscribe · Privacy Policy · Williams Sonoma, San Francisco CA
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
