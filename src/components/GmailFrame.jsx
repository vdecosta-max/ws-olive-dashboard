/**
 * GmailFrame — Gmail-style chrome for email prototype views.
 * Top bar, left sidebar, main reading pane for email content.
 */
import './GmailFrame.css'

export default function GmailFrame({ children }) {
  return (
    <div className="gmail-frame" role="application" aria-label="Gmail interface">
      {/* Top bar */}
      <header className="gmail-frame__top-bar">
        <button type="button" className="gmail-frame__menu" aria-label="Main menu">
          <span aria-hidden="true">≡</span>
        </button>
        <div className="gmail-frame__logo">Gmail</div>
        <div className="gmail-frame__search">
          <span className="gmail-frame__search-icon" aria-hidden="true">⌕</span>
          <span className="gmail-frame__search-placeholder">Search mail</span>
        </div>
        <div className="gmail-frame__top-actions">
          <button type="button" className="gmail-frame__icon-btn" aria-label="Settings">
            ⚙
          </button>
          <button type="button" className="gmail-frame__icon-btn" aria-label="Google apps">
            ⋮⋮
          </button>
          <div className="gmail-frame__avatar" aria-hidden="true">H</div>
        </div>
      </header>

      <div className="gmail-frame__body">
        {/* Left sidebar */}
        <aside className="gmail-frame__sidebar" aria-label="Mail navigation">
          <button type="button" className="gmail-frame__compose">
            Compose
          </button>
          <nav className="gmail-frame__nav">
            <a href="#inbox" className="gmail-frame__nav-item gmail-frame__nav-item--active">
              Inbox
              <span className="gmail-frame__nav-count">1</span>
            </a>
            <a href="#starred" className="gmail-frame__nav-item">Starred</a>
            <a href="#snoozed" className="gmail-frame__nav-item">Snoozed</a>
            <a href="#sent" className="gmail-frame__nav-item">Sent</a>
            <a href="#drafts" className="gmail-frame__nav-item">Drafts</a>
            <a href="#more" className="gmail-frame__nav-item">More</a>
          </nav>
        </aside>

        {/* Main content — email reading pane */}
        <main className="gmail-frame__main">
          {children}
        </main>
      </div>
    </div>
  )
}
