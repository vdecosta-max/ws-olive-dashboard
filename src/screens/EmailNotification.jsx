/**
 * EmailNotification — Scenario A: Existing user confirmation email.
 * Shorter, minimal. Same 600px format as EmailMagicLink.
 */
import './EmailNotification.css'

const CONVERSATION_SUMMARY =
  'We explored cast iron cookware for your induction cooktop — focusing on heat distribution, care requirements, and value at different price points. You were weighing the Lodge skillet as an entry point against the Le Creuset for longevity.'

const PRODUCTS = [
  { name: 'Lodge Cast Iron Skillet', price: '$49.95' },
  { name: 'Le Creuset Signature Skillet', price: '$229.95' },
  { name: 'All-Clad D3 Skillet', price: '$129.95' },
]

export default function EmailNotification() {
  return (
    <div className="email-notification" role="article" aria-label="Notification email">
      <div className="email-notification__container">
        {/* HEADER */}
        <header className="email-notification__header">
          <img
            src="/WS_horizontal.svg"
            alt="Williams Sonoma"
            height="32"
            className="email-notification__wordmark"
          />
          <div className="email-notification__rule" aria-hidden="true" />
        </header>

        {/* BODY */}
        <div className="email-notification__body">
          <h1 className="email-notification__headline">
            Hi Viveka, your conversation is saved to your dashboard.
          </h1>

          <p className="email-notification__datetime" aria-hidden="true">
            Thursday, March 13 · 8:26 PM
          </p>

          {/* Conversation summary block */}
          <div className="email-notification__summary-card">
            <div className="email-notification__summary-header">
              <img
                src="/AgentOliveIcon.png"
                alt="Olive"
                className="email-notification__avatar"
              />
              <span className="email-notification__agent">Olive · Williams Sonoma</span>
            </div>
            <p className="email-notification__summary-text">{CONVERSATION_SUMMARY}</p>
          </div>

          {/* Products we discussed */}
          <h2 className="email-notification__section-title">Products we discussed</h2>
          <div className="email-notification__products">
            {PRODUCTS.map((product) => (
              <div key={product.name} className="email-notification__product">
                <div
                  className="email-notification__product-image"
                  aria-hidden="true"
                />
                <p className="email-notification__product-name">{product.name}</p>
                <p className="email-notification__product-price">{product.price}</p>
                <a href="#view" className="email-notification__product-link">
                  View product →
                </a>
              </div>
            ))}
          </div>

          {/* Single CTA */}
          <div className="email-notification__cta-card">
            <a href="#dashboard" className="email-notification__cta-btn">
              View on my dashboard →
            </a>
          </div>

          {/* Footer */}
          <footer className="email-notification__footer">
            <img
              src="/WS_horizontal.svg"
              alt="Williams Sonoma"
              height="24"
              className="email-notification__footer-wordmark"
            />
            <p className="email-notification__footer-links">
              Unsubscribe · Privacy Policy · Williams Sonoma, San Francisco CA
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
