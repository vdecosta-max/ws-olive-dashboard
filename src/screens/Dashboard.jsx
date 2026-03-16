/**
 * Dashboard — My Account screen for Williams Sonoma Olive prototype.
 * Left: MY CONVERSATIONS (accordion), THEMES, PRODUCTS & RECIPES
 * Right: RECENT ORDERS, RECENTLY VIEWED
 */
import { useState } from 'react'
import './Dashboard.css'

const CONVERSATIONS = [
  {
    id: '1',
    agentName: 'Olive',
    brandName: 'Williams Sonoma',
    brandIcon: '/ws-favicon.ico',
    oneLineSummary: 'Cast iron options for your induction cooktop',
    fullSummary:
      'We explored cast iron cookware for your induction cooktop — focusing on heat distribution, care requirements, and value at different price points. You were weighing the Lodge skillet as an entry point against the Le Creuset for longevity.',
    date: '3 days ago',
    contentIcons: [{ type: 'products', count: 3 }],
    products: [
      { name: 'Lodge Cast Iron Skillet', price: '$49.95', pill: 'olive' },
      { name: 'Le Creuset Signature Skillet', price: '$229.95', pill: 'olive' },
      { name: 'All-Clad D3 Skillet', price: '$129.95', pill: 'olive' },
    ],
    cta: 'Continue with Olive →',
    themeFilter: 'Cast Iron Care',
  },
  {
    id: '2',
    agentName: 'Style Advisor',
    brandName: 'Pottery Barn',
    brandIcon: '/pb-favicon.ico',
    oneLineSummary: 'Dining furniture for your open plan apartment',
    fullSummary:
      'We found dining furniture options to suit your open plan apartment — tables, chairs, and table runners that balance style and scale.',
    date: '5 days ago',
    contentIcons: [{ type: 'products', count: 3 }],
    products: [
      { name: 'Benchwright Dining Table', price: '$899', pill: 'pb' },
      { name: 'Toscana Dining Chairs (set of 2)', price: '$598', pill: 'pb' },
      { name: 'Toulouse Table Runner', price: '$49', pill: 'pb' },
    ],
    cta: 'Continue with Style Advisor →',
    themeFilter: null,
  },
  {
    id: '3',
    agentName: 'Elm',
    brandName: 'west elm',
    brandIcon: '/we-favicon.ico',
    oneLineSummary: 'Holiday entertaining for a cocktail party of 20',
    fullSummary:
      'We planned a cocktail party for 20 guests — focusing on glassware, serving vessels, and statement pieces that would work across holiday and everyday entertaining.',
    date: '2 weeks ago',
    contentIcons: [{ type: 'products', count: 3 }],
    products: [
      { name: 'Riedel Crystal Set', price: '$189', pill: 'elm' },
      { name: 'Gold-Rimmed Coupe Glasses', price: '$89.95', pill: 'elm' },
      { name: 'GreenPan Reserve Stockpot', price: '$179.95', pill: 'elm' },
    ],
    cta: 'Continue with Elm →',
    themeFilter: null,
  },
]

const THEMES = [
  { label: 'Induction Cooking', emoji: '🔥', count: 3 },
  { label: 'Cast Iron Care', emoji: '🍳', count: 2 },
  { label: 'Holiday Entertaining', emoji: '🥂', count: 4 },
  { label: 'Dining & Tabletop', emoji: '🍽️', count: 2 },
  { label: 'Small Kitchen', emoji: '📐', count: 1 },
]

const PRODUCTS_WE_TALKED_ABOUT = [
  { id: 'p1', name: 'Lodge Cast Iron Skillet', price: '$49.95', pill: 'olive' },
  { id: 'p2', name: 'Le Creuset Signature Skillet', price: '$229.95', pill: 'olive' },
  { id: 'p3', name: 'Benchwright Dining Table', price: '$899', pill: 'elm' },
  { id: 'p4', name: 'Riedel Crystal Set', price: '$189', pill: 'olive' },
  { id: 'p5', name: 'GreenPan Reserve Stockpot', price: '$179.95', pill: 'olive' },
]

const MOCK_RECENTLY_VIEWED = [
  { id: '1', name: 'Lodge Chef Seasoned Cast Iron Double Dutch Oven, 6-Qt.', price: '$99.95', imageUrl: 'https://placehold.co/200x200/E5E0D8/6b6b6b?text=Dutch+Oven', alt: 'Lodge Cast Iron Double Dutch Oven' },
  { id: '2', name: 'Green Cyprus Reactive Glaze Dinner Plates', price: '$17.95 – $143.60', imageUrl: 'https://placehold.co/200x200/E5E0D8/6b6b6b?text=Plates', alt: 'Green Cyprus Dinner Plates' },
  { id: '3', name: 'Nordic Ware Nonstick Silver Dollar Pancake Pan', price: '$49.95', imageUrl: 'https://placehold.co/200x200/E5E0D8/6b6b6b?text=Pancake+Pan', alt: 'Nordic Ware Silver Dollar Pancake Pan' },
  { id: '4', name: 'Nordic Ware Nonstick Mickey Mouse™ Pancake Pan', price: '$59.95', imageUrl: 'https://placehold.co/200x200/E5E0D8/6b6b6b?text=Mickey+Pan', alt: 'Nordic Ware Mickey Mouse Pancake Pan' },
]

const ACCOUNT_TABS = [
  'My Account', 'Order History', 'Key Rewards', 'Registry', 'Gift Center',
  'Name & Login', 'Address Book', 'Payment Methods', 'Favorites', 'Room Planner', 'Recipe Box',
]

const CONTENT_ICON_LABELS = {
  products: (n) => `${n} product${n > 1 ? 's' : ''} discussed`,
  recipes: (n) => `${n} recipe${n > 1 ? 's' : ''}`,
  events: (n) => `${n} event${n > 1 ? 's' : ''}`,
}

const PILL_LABELS = {
  olive: 'Olive Recommended',
  pb: 'PB Recommended',
  elm: 'Elm Recommended',
}

function ContentIcon({ type, count }) {
  const icons = { products: '🛍️', recipes: '🍳', events: '📅' }
  const label = CONTENT_ICON_LABELS[type]?.(count) ?? `${count} ${type}`
  return (
    <span className="conversation-accordion__content-icon" title={label} aria-label={label}>
      {icons[type] ?? '•'}
    </span>
  )
}

function ConversationAccordion({ conv, isOpen, onToggle, forceOpen }) {
  const expanded = isOpen || forceOpen

  return (
    <article
      className={`conversation-accordion ${expanded ? 'conversation-accordion--open' : ''}`}
      role="listitem"
    >
      {/* Closed row (always visible) / Header */}
      <button
        type="button"
        className="conversation-accordion__header"
        onClick={() => onToggle(conv.id)}
        aria-expanded={expanded}
        aria-controls={`conv-body-${conv.id}`}
        id={`conv-header-${conv.id}`}
      >
        <div className="conversation-accordion__header-left">
          <span className="conversation-accordion__brand-row">
            <img src={conv.brandIcon} alt="" width="16" height="16" className="conversation-accordion__brand-icon" />
            <span className="conversation-accordion__agent-brand">{conv.agentName} · {conv.brandName}</span>
          </span>
          <span className="conversation-accordion__sep" aria-hidden="true">·</span>
          <span className="conversation-accordion__date">{conv.date}</span>
          <span className="conversation-accordion__sep" aria-hidden="true">·</span>
          <span className={`conversation-accordion__summary-preview ${expanded ? 'conversation-accordion__summary-preview--full' : ''}`}>
            {conv.oneLineSummary}
          </span>
          <span className="conversation-accordion__content-icons">
            {conv.contentIcons.map((c, i) => (
              <ContentIcon key={i} type={c.type} count={c.count} />
            ))}
          </span>
        </div>
        <div className="conversation-accordion__header-right">
          <a href="#continue" className="conversation-accordion__cta" onClick={(e) => e.stopPropagation()}>
            {conv.cta}
          </a>
          <span className="conversation-accordion__chevron" aria-hidden="true">
            {expanded ? '▴' : '▾'}
          </span>
        </div>
      </button>

      {/* Expandable body */}
      <div
        id={`conv-body-${conv.id}`}
        className="conversation-accordion__body"
        aria-labelledby={`conv-header-${conv.id}`}
      >
        <div className="conversation-accordion__body-inner">
          <p className="conversation-accordion__full-summary">{conv.fullSummary}</p>
          <p className="conversation-accordion__discussed-label">DISCUSSED IN THIS CONVERSATION</p>
          <div className="conversation-accordion__products-grid">
            {conv.products.map((p, i) => (
              <div key={i} className="conversation-accordion__product-tile">
                <div className="conversation-accordion__product-thumb" aria-hidden="true" />
                <p className="conversation-accordion__product-name">{p.name}</p>
                <span className={`conversation-accordion__pill conversation-accordion__pill--${p.pill}`}>
                  {PILL_LABELS[p.pill]}
                </span>
                <p className="conversation-accordion__product-price">{p.price}</p>
                <a href="#view" className="conversation-accordion__view-link">View →</a>
              </div>
            ))}
          </div>
          <div className="conversation-accordion__footer">
            <a href="#continue" className="conversation-accordion__cta">{conv.cta}</a>
            <button
              type="button"
              className="conversation-accordion__close-btn"
              onClick={() => onToggle(conv.id)}
              aria-label="Collapse"
            >
              ▴
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

function ProductCard({ product }) {
  const [favorited, setFavorited] = useState(false)
  return (
    <article className="dashboard-product-card" aria-label={`${product.name}, ${product.price}`}>
      <div className="dashboard-product-card__image-wrap">
        <img src={product.imageUrl} alt={product.alt} width="200" height="200" loading="lazy" />
        <button
          type="button"
          className="dashboard-product-card__favorite"
          onClick={() => setFavorited(!favorited)}
          aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={favorited}
        >
          <span aria-hidden="true">{favorited ? '♥' : '♡'}</span>
        </button>
      </div>
      <div className="dashboard-product-card__body">
        <h3 className="dashboard-product-card__name">{product.name}</h3>
        <p className="dashboard-product-card__price">{product.price}</p>
      </div>
    </article>
  )
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('My Account')
  const [orderNumber, setOrderNumber] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [openConvId, setOpenConvId] = useState(null)
  const [themeFilter, setThemeFilter] = useState(null)

  const handleOrderSearch = (e) => {
    e.preventDefault()
    console.log('Order search:', { orderNumber, postalCode })
  }

  const toggleConv = (id) => {
    setOpenConvId((prev) => (prev === id ? null : id))
  }

  const castIronConv = CONVERSATIONS.find((c) => c.themeFilter === 'Cast Iron Care')
  const showFilteredThemes = themeFilter === 'Cast Iron Care'
  const displayedConvs = showFilteredThemes ? [castIronConv] : CONVERSATIONS
  const forceOpenInFilter = showFilteredThemes ? castIronConv?.id : null

  return (
    <main className="dashboard" role="main" aria-label="My Account">
      <header className="dashboard__header">
        <h1 className="dashboard__welcome">Hi, Hannah</h1>
        <a href="#sign-out" className="dashboard__sign-out">Sign Out</a>
      </header>

      <nav className="dashboard__tabs" aria-label="Account sections" role="tablist">
        {ACCOUNT_TABS.map((tab) => (
          <a
            key={tab}
            href={`#${tab.toLowerCase().replace(/\s+/g, '-')}`}
            role="tab"
            aria-selected={activeTab === tab}
            className={`dashboard__tab ${activeTab === tab ? 'dashboard__tab--active' : ''}`}
            onClick={(e) => { e.preventDefault(); setActiveTab(tab) }}
          >
            {tab}
          </a>
        ))}
      </nav>

      <div className="dashboard__content">
        <div className="dashboard__left">
          {/* MY CONVERSATIONS */}
          <section className="dashboard__card" aria-labelledby="conversations-heading">
            <h2 id="conversations-heading" className="dashboard__card-title">MY CONVERSATIONS</h2>
            <div className="conversation-accordion-list" role="list">
              {displayedConvs.map((conv) => (
                <ConversationAccordion
                  key={conv.id}
                  conv={conv}
                  isOpen={openConvId === conv.id}
                  onToggle={toggleConv}
                  forceOpen={forceOpenInFilter === conv.id}
                />
              ))}
            </div>
          </section>

          {/* THEMES ACROSS YOUR CONVERSATIONS */}
          <section className="dashboard__card" aria-labelledby="themes-heading">
            <h2 id="themes-heading" className="dashboard__card-title">THEMES ACROSS YOUR CONVERSATIONS</h2>
            {showFilteredThemes && (
              <a
                href="#back"
                className="dashboard__back-to-themes"
                onClick={(e) => { e.preventDefault(); setThemeFilter(null) }}
              >
                ← Back to all themes
              </a>
            )}
            <div className={`interests-grid ${showFilteredThemes ? 'interests-grid--filtered' : ''}`} role="list">
              {THEMES.map((item) => {
                const isCastIron = item.label === 'Cast Iron Care'
                const isInteractive = isCastIron
                return (
                  <button
                    key={item.label}
                    type="button"
                    className={`interest-tile ${showFilteredThemes && !isCastIron ? 'interest-tile--disabled' : ''}`}
                    role="listitem"
                    onClick={isInteractive ? () => setThemeFilter(themeFilter === 'Cast Iron Care' ? null : 'Cast Iron Care') : undefined}
                    disabled={showFilteredThemes && !isCastIron}
                  >
                    <span className="interest-tile__label">{item.label}</span>
                    <span className="interest-tile__emoji" aria-hidden="true">{item.emoji}</span>
                    <span className="interest-tile__count">{item.count} conversations</span>
                  </button>
                )
              })}
              <span className="interest-tile interest-tile--discover" role="listitem" aria-disabled="true">
                + Discover more
              </span>
            </div>
          </section>

          {/* PRODUCTS & RECIPES WE TALKED ABOUT RECENTLY */}
          <section className="dashboard__card" aria-labelledby="products-heading">
            <h2 id="products-heading" className="dashboard__card-title">PRODUCTS & RECIPES WE TALKED ABOUT RECENTLY</h2>
            <div className="products-scroll" role="list">
              {PRODUCTS_WE_TALKED_ABOUT.map((p) => (
                <article key={p.id} className="product-talked-card" role="listitem">
                  <div className="product-talked-card__thumb" aria-hidden="true" />
                  <p className="product-talked-card__name">{p.name}</p>
                  <span className={`product-talked-card__badge product-talked-card__badge--${p.pill}`}>
                    {PILL_LABELS[p.pill]}
                  </span>
                  <p className="product-talked-card__price">{p.price}</p>
                  <a href="#" className="product-talked-card__view">View →</a>
                </article>
              ))}
            </div>
          </section>
        </div>

        <div className="dashboard__right">
          <section className="dashboard__card" aria-labelledby="recent-orders-heading">
            <h2 id="recent-orders-heading" className="dashboard__card-title">RECENT ORDERS</h2>
            <p className="dashboard__empty-message">
              Your order history will appear after your first order. Recent orders may take up to 24 hours to show.
            </p>
            <a href="#ask-olive" className="dashboard__ask-olive">Need help? Ask Olive →</a>
            <p className="dashboard__search-prompt">Search for orders with your Order Number and Postal Code.</p>
            <form className="dashboard__order-search" onSubmit={handleOrderSearch} aria-label="Search orders">
              <label htmlFor="order-number" className="visually-hidden">Order number</label>
              <input
                id="order-number"
                type="text"
                placeholder="Order Number"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="dashboard__input"
              />
              <label htmlFor="postal-code" className="visually-hidden">Postal code</label>
              <input
                id="postal-code"
                type="text"
                placeholder="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="dashboard__input"
              />
              <button type="submit" className="dashboard__btn">Search By Order Number</button>
            </form>
            <p className="dashboard__customer-care">
              Need assistance? Our Customer Care team is available at 877.812.6235
            </p>
          </section>

          <section className="dashboard__card" aria-labelledby="recently-viewed-heading">
            <h2 id="recently-viewed-heading" className="dashboard__card-title">RECENTLY VIEWED</h2>
            <div className="dashboard__product-grid" role="list" aria-label="Recently viewed products">
              {MOCK_RECENTLY_VIEWED.map((product) => (
                <div key={product.id} role="listitem">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
