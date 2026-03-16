/**
 * EmailMagicLink — Scenario B: New User magic link email mock.
 * Browser-viewable email at 600px width, centered.
 */
import { asset } from '../utils/asset'
import './EmailMagicLink.css'

const CONVERSATION_SUMMARY =
  'We explored espresso machines for home baristas — focusing on grind quality, milk steaming, and workflow. You were weighing the Breville Barista Pro as an entry point against the Oracle Touch for full automation.'

const WSIMGS_BASE = 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202543/0340/'
const PRODUCTS = [
  { name: 'Breville Barista Pro', price: '$699.95', imageUrl: `${WSIMGS_BASE}img1xl.jpg` },
  { name: 'Breville Oracle Touch', price: '$2,799.95', imageUrl: `${WSIMGS_BASE}img2xl.jpg` },
  { name: 'LELIT Bianca', price: '$2,999.95', imageUrl: `${WSIMGS_BASE}img3xl.jpg` },
]

const THEMES = ['Home Espresso', 'Milk Steaming', 'Value vs. Pro Features']

export default function EmailMagicLink() {
  return (
    <div className="email-magic-link" role="article" aria-label="Magic link email">
      <div className="email-magic-link__container">
        {/* HEADER */}
        <header className="email-magic-link__header">
          <img
            src={asset('WS_horizontal.svg')}
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
                src={asset('AgentOliveIcon.png')}
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
                <img
                  src={product.imageUrl}
                  alt=""
                  className="email-magic-link__product-image"
                  width="120"
                  height="120"
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
              src={asset('WS_horizontal.svg')}
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
