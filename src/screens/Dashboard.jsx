/**
 * Dashboard — My Account screen for Williams Sonoma Olive prototype.
 * Left: OUR CONVERSATIONS (accordion + filter chips + pagination), THEMES, PRODUCTS & RECIPES
 * Right: RECENT ORDERS, RECENTLY VIEWED
 */
import { useState, useRef, useEffect } from 'react'
import './Dashboard.css'

/* Inline SVG icons — thin outline style, viewBox 0 0 24 24, stroke 1.5, fill none */
const svgProps = { viewBox: '0 0 24 24', fill: 'none', strokeWidth: 1.5 }

function IconFlame({ className, size = 24, color = '#1A1A1A' }) {
  return (
    <svg className={className} width={size} height={size} {...svgProps} stroke={color} aria-hidden="true">
      <path d="M12 2c0 4-3 6-3 9a3 3 0 1 0 6 0c0-3-3-5-3-9" />
      <path d="M12 2c-2 2-4 5-4 9a4 4 0 0 0 8 0c0-4-2-7-4-9" />
    </svg>
  )
}

function IconPan({ className, size = 24, color = '#1A1A1A' }) {
  return (
    <svg className={className} width={size} height={size} {...svgProps} stroke={color} aria-hidden="true">
      <ellipse cx="12" cy="10" rx="8" ry="6" />
      <path d="M4 10v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
      <path d="M8 20v2M16 20v2" />
    </svg>
  )
}

function IconWineGlass({ className, size = 24, color = '#1A1A1A' }) {
  return (
    <svg className={className} width={size} height={size} {...svgProps} stroke={color} aria-hidden="true">
      <path d="M8 2h8v6a4 4 0 0 1-2 3.5 6 6 0 0 1-6 0A4 4 0 0 1 8 8V2Z" />
      <line x1="12" y1="11" x2="12" y2="22" />
      <line x1="8" y1="22" x2="16" y2="22" />
    </svg>
  )
}

function IconPlate({ className, size = 24, color = '#1A1A1A' }) {
  return (
    <svg className={className} width={size} height={size} {...svgProps} stroke={color} aria-hidden="true">
      <circle cx="12" cy="11" r="6" />
      <path d="M8 11h8M11 8v6M8 17l-1 2h10l-1-2" />
    </svg>
  )
}

function IconRuler({ className, size = 24, color = '#1A1A1A' }) {
  return (
    <svg className={className} width={size} height={size} {...svgProps} stroke={color} aria-hidden="true">
      <path d="M3 8h18M3 16h18M4 8v8M8 8v8M12 8v8M16 8v8M20 8v8" />
      <line x1="3" y1="8" x2="3" y2="16" />
      <line x1="21" y1="8" x2="21" y2="16" />
    </svg>
  )
}

function IconBag({ className, size = 24, color = '#1A1A1A' }) {
  return (
    <svg className={className} width={size} height={size} {...svgProps} stroke={color} aria-hidden="true">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

function IconCalendar({ className, size = 24, color = '#1A1A1A' }) {
  return (
    <svg className={className} width={size} height={size} {...svgProps} stroke={color} aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function IconPot({ className, size = 24, color = '#1A1A1A' }) {
  return (
    <svg className={className} width={size} height={size} {...svgProps} stroke={color} aria-hidden="true">
      <path d="M6 6h12v6a4 4 0 0 1-2 3.5 2 2 0 0 1-2 2H10a2 2 0 0 1-2-2 0A4 4 0 0 1 6 12V6Z" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <line x1="8" y1="18" x2="16" y2="18" />
    </svg>
  )
}

/** Product placeholder icon lookup: pot, plate, pan */
const PLACEHOLDER_ICONS = { pot: IconPot, plate: IconPlate, pan: IconPan }

function ProductPlaceholder({ category = 'pot', className }) {
  const Icon = PLACEHOLDER_ICONS[category] ?? IconPot
  return (
    <div className={`product-placeholder ${className ?? ''}`.trim()} aria-hidden="true">
      <Icon size={32} color="#D0CBC3" />
    </div>
  )
}

/** Theme icon lookup */
const THEME_ICONS = {
  'Induction Cooking': IconFlame,
  'Cast Iron Care': IconPan,
  'Holiday Entertaining': IconWineGlass,
  'Dining & Tabletop': IconPlate,
  'Small Kitchen': IconRuler,
}

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
      { name: 'Lodge Cast Iron Skillet', price: '$49.95', pill: 'olive', placeholderCategory: 'pan' },
      { name: 'Le Creuset Signature Skillet', price: '$229.95', pill: 'olive', placeholderCategory: 'pan' },
      { name: 'All-Clad D3 Skillet', price: '$129.95', pill: 'olive', placeholderCategory: 'pan' },
    ],
    cta: 'Continue with Olive →',
    themeMatches: ['Cast Iron Care', 'Induction Cooking', 'Small Kitchen'],
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
      { name: 'Benchwright Dining Table', price: '$899', pill: 'pb', placeholderCategory: 'plate' },
      { name: 'Toscana Dining Chairs (set of 2)', price: '$598', pill: 'pb', placeholderCategory: 'plate' },
      { name: 'Toulouse Table Runner', price: '$49', pill: 'pb', placeholderCategory: 'plate' },
    ],
    cta: 'Continue with Style Advisor →',
    themeMatches: ['Dining & Tabletop'],
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
      { name: 'Riedel Crystal Set', price: '$189', pill: 'elm', placeholderCategory: 'plate' },
      { name: 'Gold-Rimmed Coupe Glasses', price: '$89.95', pill: 'elm', placeholderCategory: 'plate' },
      { name: 'GreenPan Reserve Stockpot', price: '$179.95', pill: 'elm', placeholderCategory: 'pot' },
    ],
    cta: 'Continue with Elm →',
    themeMatches: ['Cast Iron Care', 'Holiday Entertaining'],
  },
]

const FILTER_CHIPS_PRIMARY = ['Cast Iron Care', 'Induction Cooking', 'Holiday Entertaining']
const FILTER_CHIPS_MORE = ['Dining & Tabletop', 'Small Kitchen', '✦ Ask Olive something new']

const THEMES = [
  { label: 'Induction Cooking', emoji: '🔥', count: 3 },
  { label: 'Cast Iron Care', emoji: '🍳', count: 2 },
  { label: 'Holiday Entertaining', emoji: '🥂', count: 4 },
  { label: 'Dining & Tabletop', emoji: '🍽️', count: 2 },
  { label: 'Small Kitchen', emoji: '📐', count: 1 },
]

/** Theme tile counts for filter match labels (historical totals) */
const THEME_FILTER_COUNTS = Object.fromEntries(THEMES.map((t) => [t.label, t.count]))

const PRODUCTS_WE_TALKED_ABOUT = [
  { id: 'p1', name: 'Lodge Cast Iron Skillet', price: '$49.95', pill: 'olive', placeholderCategory: 'pan' },
  { id: 'p2', name: 'Le Creuset Signature Skillet', price: '$229.95', pill: 'olive', placeholderCategory: 'pan' },
  { id: 'p3', name: 'Benchwright Dining Table', price: '$899', pill: 'elm', placeholderCategory: 'plate' },
  { id: 'p4', name: 'Riedel Crystal Set', price: '$189', pill: 'olive', placeholderCategory: 'plate' },
  { id: 'p5', name: 'GreenPan Reserve Stockpot', price: '$179.95', pill: 'olive', placeholderCategory: 'pot' },
]

const MOCK_RECENTLY_VIEWED = [
  { id: '1', name: 'Lodge Chef Seasoned Cast Iron Double Dutch Oven, 6-Qt.', price: '$99.95', alt: 'Lodge Cast Iron Double Dutch Oven', placeholderCategory: 'pot' },
  { id: '2', name: 'Green Cyprus Reactive Glaze Dinner Plates', price: '$17.95 – $143.60', alt: 'Green Cyprus Dinner Plates', placeholderCategory: 'plate' },
  { id: '3', name: 'Nordic Ware Nonstick Silver Dollar Pancake Pan', price: '$49.95', alt: 'Nordic Ware Silver Dollar Pancake Pan', placeholderCategory: 'pan' },
  { id: '4', name: 'Nordic Ware Nonstick Mickey Mouse™ Pancake Pan', price: '$59.95', alt: 'Nordic Ware Mickey Mouse Pancake Pan', placeholderCategory: 'pan' },
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

const PER_PAGE = 5

function matchesTheme(conv, theme) {
  if (!theme || theme === '✦ Ask Olive something new') return false
  return (conv.themeMatches || []).includes(theme)
}

const CONTENT_ICON_SVGS = {
  products: IconBag,
  recipes: IconPan,
  events: IconCalendar,
}

function ContentIcon({ type, count }) {
  const Icon = CONTENT_ICON_SVGS[type]
  const label = CONTENT_ICON_LABELS[type]?.(count) ?? `${count} ${type}`
  return (
    <span className="conversation-accordion__content-icon" title={label} aria-label={label}>
      {Icon ? <Icon size={16} color="#6B6B6B" /> : '•'}
    </span>
  )
}

function ConversationAccordion({ conv, isOpen, onToggle, forceOpen, isFilteredMatch }) {
  const expanded = (isFilteredMatch !== false) && (isOpen || forceOpen)

  return (
    <article
      className={`conversation-accordion ${expanded ? 'conversation-accordion--open' : ''} ${isFilteredMatch === false ? 'conversation-accordion--dimmed' : ''}`}
      role="listitem"
    >
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
                <ProductPlaceholder category={p.placeholderCategory} className="conversation-accordion__product-thumb" />
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
        <ProductPlaceholder category={product.placeholderCategory} className="dashboard-product-card__placeholder" />
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
  const [activeFilter, setActiveFilter] = useState(null)
  const [chipExpanded, setChipExpanded] = useState(false)
  const [page, setPage] = useState(1)
  const [pulseChip, setPulseChip] = useState(null)
  const conversationsRef = useRef(null)
  const chipRefs = useRef({})

  const handleOrderSearch = (e) => {
    e.preventDefault()
    console.log('Order search:', { orderNumber, postalCode })
  }

  const toggleConv = (id) => {
    setOpenConvId((prev) => (prev === id ? null : id))
  }

  const setFilter = (theme) => {
    if (theme === activeFilter) {
      setActiveFilter(null)
    } else {
      setActiveFilter(theme)
      setPage(1)
    }
  }

  const clearFilter = () => {
    setActiveFilter(null)
    setPage(1)
  }

  const handleThemeTileClick = (theme) => {
    if (theme === '✦ Ask Olive something new') return
    setFilter(theme)
    setChipExpanded(false)
    setPulseChip(theme)
    setTimeout(() => setPulseChip(null), 300)
    conversationsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const matchCount = activeFilter
    ? CONVERSATIONS.filter((c) => matchesTheme(c, activeFilter)).length
    : 0

  const totalPages = Math.max(1, Math.ceil(CONVERSATIONS.length / PER_PAGE))
  const startIdx = (page - 1) * PER_PAGE
  const paginatedConvs = CONVERSATIONS.slice(startIdx, startIdx + PER_PAGE)

  useEffect(() => {
    if (page > totalPages) setPage(1)
  }, [page, totalPages])

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
          {/* OUR CONVERSATIONS */}
          <section className="dashboard__card dashboard__card--conversations" aria-labelledby="conversations-heading" ref={conversationsRef}>
            <div className="dashboard__conversations-header">
              <h2 id="conversations-heading" className="dashboard__card-title">
                {activeFilter ? `OUR CONVERSATIONS — ${activeFilter}` : 'OUR CONVERSATIONS'}
              </h2>
              {activeFilter && (
                <a href="#clear" className="dashboard__clear-filter" onClick={(e) => { e.preventDefault(); clearFilter() }}>
                  ✕ Clear
                </a>
              )}
            </div>

            <p className="conversation-accordion__discussed-label dashboard__conversation-themes-label">CONVERSATION THEMES</p>

            {/* Filter chip row */}
            <div className="filter-chips-wrap">
              <div className="filter-chips" role="list">
                {FILTER_CHIPS_PRIMARY.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className={`filter-chip ${activeFilter === label ? 'filter-chip--active' : ''} ${pulseChip === label ? 'filter-chip--pulse' : ''}`}
                    role="listitem"
                    onClick={() => setFilter(label)}
                  >
                    {label}
                    {activeFilter === label && <span className="filter-chip__x" aria-hidden="true"> ✕</span>}
                  </button>
                ))}
                <button
                  type="button"
                  className={`filter-chip filter-chip--more ${chipExpanded ? 'filter-chip--expanded' : ''}`}
                  onClick={() => setChipExpanded(!chipExpanded)}
                  aria-expanded={chipExpanded}
                >
                  {chipExpanded ? '− Less' : '+ 3 more ▾'}
                </button>
                {chipExpanded && FILTER_CHIPS_MORE.map((label) => (
                  <button
                    key={label}
                    type="button"
                    className={`filter-chip ${activeFilter === label ? 'filter-chip--active' : ''} ${pulseChip === label ? 'filter-chip--pulse' : ''} ${label === '✦ Ask Olive something new' ? 'filter-chip--ask' : ''}`}
                    role="listitem"
                    onClick={() => label !== '✦ Ask Olive something new' && setFilter(label)}
                  >
                    {label}
                    {activeFilter === label && <span className="filter-chip__x" aria-hidden="true"> ✕</span>}
                  </button>
                ))}
              </div>
              {activeFilter && (() => {
                const filterCount = THEME_FILTER_COUNTS[activeFilter] ?? 0
                return (
                  <p className="filter-chips__match-count">
                    {filterCount} conversation{filterCount !== 1 ? 's' : ''}
                  </p>
                )
              })()}
            </div>

            <div className="filter-chips-rule" aria-hidden="true" />

            <div className="conversation-accordion-list" role="list">
              {paginatedConvs.map((conv) => (
                <ConversationAccordion
                  key={conv.id}
                  conv={conv}
                  isOpen={openConvId === conv.id}
                  onToggle={toggleConv}
                  forceOpen={activeFilter ? matchesTheme(conv, activeFilter) : false}
                  isFilteredMatch={activeFilter ? matchesTheme(conv, activeFilter) : null}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="dashboard__pagination-rule" aria-hidden="true" />
            <div className="dashboard__pagination">
              <button
                type="button"
                className="dashboard__pagination-btn"
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                ← Previous
              </button>
              <span className="dashboard__pagination-page">
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                className="dashboard__pagination-btn"
                disabled={page >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                Next →
              </button>
            </div>
          </section>

          {/* THEMES ACROSS OUR CONVERSATIONS */}
          <section className="dashboard__card" aria-labelledby="themes-heading">
            <h2 id="themes-heading" className="dashboard__card-title">THEMES ACROSS OUR CONVERSATIONS</h2>
            <div className="interests-grid" role="list">
              {THEMES.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="interest-tile"
                  role="listitem"
                  onClick={() => handleThemeTileClick(item.label)}
                >
                  <span className="interest-tile__label">{item.label}</span>
                  <span className="interest-tile__icon" aria-hidden="true">
                    {(() => {
                      const Icon = THEME_ICONS[item.label]
                      return Icon ? <Icon size={24} color="#1A1A1A" /> : null
                    })()}
                  </span>
                  <span className="interest-tile__count">{item.count} conversations</span>
                </button>
              ))}
              <span className="interest-tile interest-tile--ask-olive" role="listitem" aria-disabled="true" title="Ask Olive something new">
                <span className="interest-tile__sparkle" aria-hidden="true">✦</span>
                Ask Olive something new
              </span>
            </div>
          </section>

          {/* PRODUCTS & RECIPES WE TALKED ABOUT RECENTLY */}
          <section className="dashboard__card" aria-labelledby="products-heading">
            <h2 id="products-heading" className="dashboard__card-title">PRODUCTS & RECIPES WE TALKED ABOUT RECENTLY</h2>
            <div className="products-scroll" role="list">
              {PRODUCTS_WE_TALKED_ABOUT.map((p) => (
                <article key={p.id} className="product-talked-card" role="listitem">
                  <ProductPlaceholder category={p.placeholderCategory} className="product-talked-card__thumb" />
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
