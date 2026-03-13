/**
 * EmailExisting — Scenario A: Existing Account notification email.
 * Confirmatory only, no upsell. Same 600px format as EmailMagicLink.
 */
import './EmailExisting.css'

const CONVERSATION_SUMMARY =
  'We explored cast iron cookware for your induction cooktop — focusing on heat distribution, care requirements, and value at different price points. You were weighing the Lodge skillet as an entry point against the Le Creuset for longevity.'

const PRODUCTS = [
  { name: 'Lodge Cast Iron Skillet', price: '$49.95' },
  { name: 'Le Creuset Signature Skillet', price: '$229.95' },
  { name: 'All-Clad D3 Skillet', price: '$129.95' },
]

export default function EmailExisting() {
  return (
    <div className="email-existing" role="article" aria-label="Existing account email">
      <div className="email-existing__container">
        {/* HEADER */}
        <header className="email-existing__header">
          <img
            src="/WS_horizontal.svg"
            alt="Williams Sonoma"
            height="32"
            className="email-existing__wordmark"
          />
          <div className="email-existing__rule" aria-hidden="true" />
        </header>

        {/* BODY */}
        <div className="email-existing__body">
          <h1 className="email-existing__headline">
            Hi Hannah, your conversation is saved to your dashboard.
          </h1>

          <p className="email-existing__datetime" aria-hidden="true">
            Thursday, March 13 · 8:26 PM
          </p>

          {/* Conversation summary block */}
          <div className="email-existing__summary-card">
            <div className="email-existing__summary-header">
              <img
                src="/AgentOliveIcon.png"
                alt="Olive"
                className="email-existing__avatar"
              />
              <span className="email-existing__agent">Olive · Williams Sonoma</span>
            </div>
            <p className="email-existing__summary-text">{CONVERSATION_SUMMARY}</p>
          </div>

          {/* Products we discussed */}
          <h2 className="email-existing__section-title">Products we discussed</h2>
          <div className="email-existing__products">
            {PRODUCTS.map((product) => (
              <div key={product.name} className="email-existing__product">
                <div
                  className="email-existing__product-image"
                  aria-hidden="true"
                />
                <p className="email-existing__product-name">{product.name}</p>
                <p className="email-existing__product-price">{product.price}</p>
                <a href="#view" className="email-existing__product-link">
                  View product →
                </a>
              </div>
            ))}
          </div>

          {/* Single CTA */}
          <div className="email-existing__cta-card">
            <a href="#dashboard" className="email-existing__cta-btn">
              View on my dashboard →
            </a>
          </div>

          {/* Footer */}
          <footer className="email-existing__footer">
            <img
              src="/WS_horizontal.svg"
              alt="Williams Sonoma"
              height="24"
              className="email-existing__footer-wordmark"
            />
            <p className="email-existing__footer-links">
              Unsubscribe · Privacy Policy · Williams Sonoma, San Francisco CA
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
