/**
 * SiteHeader — Williams Sonoma site header (top bar, site header, secondary nav, category nav).
 * Reference: WS-my-account.png
 */
import './SiteHeader.css'

export default function SiteHeader() {
  return (
    <header className="site-header" role="banner">
      {/* 0. BRAND NAV BAR (white, thin, above Reserve) */}
      <nav className="site-header__brand-bar" aria-label="Williams Sonoma family brands">
        <div className="site-header__brand-links">
          <a href="https://www.williams-sonoma.com/?cm_type=gnav" className="site-header__brand-link site-header__brand-link--active">Williams Sonoma</a>
          <a href="#wsh" className="site-header__brand-link">Williams Sonoma Home</a>
          <a href="#wsb2b" className="site-header__brand-link">Williams Sonoma Business to Business</a>
          <a href="#pb" className="site-header__brand-link">Pottery Barn</a>
          <a href="#pbkids" className="site-header__brand-link">Pottery Barn Kids</a>
          <a href="#pbteen" className="site-header__brand-link">Pottery Barn Teen</a>
          <a href="#westelm" className="site-header__brand-link">West Elm</a>
          <a href="#rejuvenation" className="site-header__brand-link">Rejuvenation</a>
          <a href="#mg" className="site-header__brand-link">Mark & Graham</a>
          <a href="#greenrow" className="site-header__brand-link">GreenRow</a>
        </div>
        <div className="site-header__brand-location">
          <span className="site-header__brand-location-icon" aria-hidden="true">📍</span>
          <a href="#store" className="site-header__brand-location-link">University Village</a>
          {' '}Opens Tomorrow 10am - 8pm
        </div>
      </nav>

      {/* 1. TOP BAR (black) */}
      <div className="site-header__top-bar">
        <span className="site-header__reserve">
          Williams Sonoma Reserve — Enjoy free shipping on eligible purchases*.{' '}
          <a href="#join" className="site-header__join">JOIN NOW →</a>
        </span>
        <a href="#events" className="site-header__events">
          Events & Services <span aria-hidden="true">↓</span>
        </a>
      </div>

      {/* 2. SITE HEADER (white) */}
      <div className="site-header__main">
        <div className="site-header__search-wrap">
          <label htmlFor="site-search" className="visually-hidden">Search</label>
          <input
            id="site-search"
            type="search"
            placeholder="Search"
            className="site-header__search"
            aria-label="Search"
          />
          <button type="button" className="site-header__search-btn" aria-label="Search">
            <span aria-hidden="true">⌕</span>
          </button>
        </div>
        <a href="https://www.williams-sonoma.com/?cm_type=gnav" className="site-header__wordmark" aria-label="Williams Sonoma - Home">
          <span className="site-header__wordmark-text">Williams Sonoma</span>
        </a>
        <nav className="site-header__actions" aria-label="Account and cart">
          <a href="#account" className="site-header__action">
            <svg className="site-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4Z"/></svg>
            My Account
          </a>
          <a href="#track" className="site-header__action">
            <svg className="site-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M1 3h15v13H1zM16 8h5l3 3v5h-8V8Z"/><path d="M3 6h9M3 9h6M3 12h4"/></svg>
            Track Order
          </a>
          <a href="#favorites" className="site-header__action">
            <svg className="site-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            Favorites
          </a>
          <a href="#cart" className="site-header__action">
            <svg className="site-header__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Cart(0)
          </a>
        </nav>
      </div>

      {/* 3. SECONDARY NAV (white, smaller) — pipes between links */}
      <nav className="site-header__secondary" aria-label="Site sections">
        <a href="#ai-sous-chef" className="site-header__ai-sous-chef">
          <span className="site-header__sparkle" aria-hidden="true">✦</span> AI Sous Chef
        </a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#easter">Easter</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#recipes">Recipes & Menus</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#entertaining">Entertaining & Design Inspiration</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#brands">Brands</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#collaborations">Collaborations</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#registry">Wedding Registry</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#home">WILLIAMS SONOMA HOME</a>
      </nav>

      {/* 4. CATEGORY NAV (white) — pipes between links, no bottom border */}
      <nav className="site-header__category" aria-label="Product categories">
        <a href="#new">New</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#cookware">Cookware</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#tools">Cooks&apos; Tools</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#cutlery">Cutlery</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#electrics">Electrics</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#bakeware">Bakeware</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#food">Food</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#tabletop">Tabletop & Bar</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#essentials">Home Essentials</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#outdoor">Outdoor & Garden</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#furniture">Furniture</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#holidays">Holidays</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#gifts">Gifts</a>
        <span className="site-header__nav-sep" aria-hidden="true">|</span>
        <a href="#sale" className="site-header__sale">Sale</a>
      </nav>
    </header>
  )
}
