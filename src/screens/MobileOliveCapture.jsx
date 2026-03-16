/**
 * MobileOliveCapture — Mobile-optimized AI Sous Chef chat.
 * Layout: status bar, address bar, toolbar, chat, input with send button.
 */
import { asset } from '../utils/asset'
import './MobileOliveCapture.css'

const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
)

export default function MobileOliveCapture() {
  return (
    <div className="mobile-olive" role="main" aria-label="AI Sous Chef chat">
      {/* Status bar */}
      <div className="mobile-olive__status-bar">
        <span className="mobile-olive__status-time">9:41</span>
        <div className="mobile-olive__status-icons">
          <span className="mobile-olive__status-signal" aria-hidden="true" />
          <span className="mobile-olive__status-wifi" aria-hidden="true" />
          <span className="mobile-olive__status-battery" aria-hidden="true" />
        </div>
      </div>

      {/* Address bar */}
      <div className="mobile-olive__address-bar">
        williams-sonoma.com
      </div>

      {/* Toolbar */}
      <header className="mobile-olive__panel-header">
        <button type="button" className="mobile-olive__back-btn" aria-label="Back">
          ←
        </button>
        <img
          src={asset('AgentOliveIcon.png')}
          alt=""
          className="mobile-olive__header-icon"
        />
        <span className="mobile-olive__panel-title">AI Sous Chef</span>
        <div className="mobile-olive__panel-actions">
          <button type="button" className="mobile-olive__panel-menu" aria-label="Menu">
            ⋮
          </button>
          <button type="button" className="mobile-olive__panel-chevron" aria-label="Collapse">
            ⌄
          </button>
        </div>
      </header>

      {/* Chat content */}
      <div className="mobile-olive__panel-body">
        <div className="mobile-olive__chat">
          <div className="mobile-olive__response">
            <div className="mobile-olive__response-row">
              <img
                src={asset('AgentOliveIcon.png')}
                alt="Olive"
                className="mobile-olive__avatar"
              />
              <p className="mobile-olive__response-text">
                Hi! I&apos;m your AI Sous Chef. Whether you need ideas for cookware, need help with an order or want to find a recipe, I&apos;m here to guide you every step of the way. What can I help you with today?
              </p>
            </div>
          </div>

          <div className="mobile-olive__disclaimer">
            I&apos;m an AI assistant, not a live agent. By continuing, you consent to share your chat info with us and partners per our{' '}
            <a href="#privacy" className="mobile-olive__disclaimer-link">Privacy Policy</a>.
          </div>

          <div className="mobile-olive__bubble mobile-olive__bubble--user">
            Question about the Le Creuset Signature Enamel Cast-iron Oval Dutch Oven: is it dishwasher safe?
          </div>
          <p className="mobile-olive__bubble-timestamp">6:37 PM</p>

          <div className="mobile-olive__response">
            <div className="mobile-olive__response-row">
              <img
                src={asset('AgentOliveIcon.png')}
                alt="Olive"
                className="mobile-olive__avatar"
              />
              <p className="mobile-olive__response-text">
                Yes-Le Creuset Signature enameled cast-iron Dutch ovens are technically dishwasher safe, but hand washing is recommended to keep them looking their best over time.
              </p>
            </div>
            <p className="mobile-olive__timestamp">Olive · 6:35 PM</p>
          </div>

          <div className="mobile-olive__bubble mobile-olive__bubble--user mobile-olive__bubble--user-alt">
            Can I use metal utensils with it?
          </div>
          <p className="mobile-olive__bubble-timestamp">6:37 PM</p>
        </div>

        {/* Input with send button */}
        <div className="mobile-olive__input-bar-wrap">
          <input
            type="text"
            placeholder="Type your message..."
            className="mobile-olive__input-bar"
            aria-label="Message input"
          />
          <button type="button" className="mobile-olive__send-btn" aria-label="Send">
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
