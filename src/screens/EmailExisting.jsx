/**
 * EmailExisting — Scenario A: Existing Account notification email.
 * Confirmatory only, no upsell. Same 600px format as EmailMagicLink.
 */
import { asset } from '../utils/asset'
import './EmailExisting.css'

const CONVERSATION_SUMMARY =
  'We explored espresso machines for home baristas — focusing on grind quality, milk steaming, and workflow. You were weighing the Breville Barista Pro as an entry point against the Oracle Touch for full automation.'

const WSIMGS_BASE = 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202543/0340/'
const PRODUCTS = [
  { name: 'Breville Barista Pro', price: '$699.95', imageUrl: `${WSIMGS_BASE}img1xl.jpg` },
  { name: 'Breville Oracle Touch', price: '$2,799.95', imageUrl: `${WSIMGS_BASE}img2xl.jpg` },
  { name: 'LELIT Bianca', price: '$2,999.95', imageUrl: `${WSIMGS_BASE}img3xl.jpg` },
]

export default function EmailExisting() {
  return (
    <div className="email-existing" role="article" aria-label="Existing account email">
      <div className="email-existing__container">
        {/* HEADER */}
        <header className="email-existing__header">
          <img
            src={asset('WS_horizontal.svg')}
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
                src={asset('AgentOliveIcon.png')}
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
                <img
                  src={product.imageUrl}
                  alt=""
                  className="email-existing__product-image"
                  width="120"
                  height="120"
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
              src={asset('WS_horizontal.svg')}
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
