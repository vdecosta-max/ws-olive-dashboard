/**
 * EmailGuest — Scenario C: Guest Summary email mock.
 * Same 600px centered format as EmailMagicLink. Styling matches exactly.
 */
import { asset } from '../utils/asset'
import './EmailGuest.css'

const CONVERSATION_SUMMARY =
  'We explored espresso machines for home baristas — focusing on grind quality, milk steaming, and workflow. You were weighing the Breville Barista Pro as an entry point against the Oracle Touch for full automation.'

const WSIMGS_BASE = 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202543/0340/'
const PRODUCTS = [
  { name: 'Breville Barista Pro', price: '$699.95', imageUrl: `${WSIMGS_BASE}img1xl.jpg` },
  { name: 'Breville Oracle Touch', price: '$2,799.95', imageUrl: `${WSIMGS_BASE}img2xl.jpg` },
  { name: 'LELIT Bianca', price: '$2,999.95', imageUrl: `${WSIMGS_BASE}img3xl.jpg` },
]

const THEMES = ['Home Espresso', 'Milk Steaming', 'Value vs. Pro Features']

export default function EmailGuest() {
  return (
    <div className="email-guest" role="article" aria-label="Guest summary email">
      <div className="email-guest__container">
        {/* HEADER */}
        <header className="email-guest__header">
          <img
            src={asset('WS_horizontal.svg')}
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
                src={asset('AgentOliveIcon.png')}
                alt="Olive"
                className="email-guest__avatar"
              />
              <span className="email-guest__agent">Olive · Williams Sonoma</span>
            </div>
            <p className="email-guest__summary-text">{CONVERSATION_SUMMARY}</p>
          </div>

          {/* Products we discussed */}
          <h2 className="email-guest__section-title">Products we discussed</h2>
          <div className="email-guest__products">
            {PRODUCTS.map((product) => (
              <div key={product.name} className="email-guest__product">
                <img
                  src={product.imageUrl}
                  alt=""
                  className="email-guest__product-image"
                  width="120"
                  height="120"
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
              src={asset('WS_horizontal.svg')}
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
