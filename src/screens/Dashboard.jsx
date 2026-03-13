/**
 * Dashboard — My Account screen for Williams Sonoma Olive prototype.
 * Left: MY CONVERSATIONS, MY INTERESTS, PRODUCTS & RECIPES WE TALKED ABOUT
 * Right: RECENT ORDERS (empty state + Ask Olive CTA), RECENTLY VIEWED
 */
import { useState } from 'react'
import './Dashboard.css'

const CONVERSATIONS = [
  {
    id: '1',
    brand: 'Olive · Williams Sonoma',
    summary: 'We explored cast iron options that work on induction cooktops—durability, heat retention, and easy cleanup.',
    products: [
      { name: 'Lodge Cast Iron Skillet', price: '$49.95' },
      { name: 'Le Creuset Signature Skillet', price: '$229.95' },
      { name: 'All-Clad D3 Skillet', price: '$129.95' },
    ],
    date: '3 days ago',
  },
  {
    id: '2',
    brand: 'Pottery Barn Style Advisor',
    summary: 'We found dining furniture for your open plan apartment—tables, chairs, and table runners that fit your space.',
    products: [
      { name: 'Benchwright Dining Table', price: '$899' },
      { name: 'Toscana Dining Chairs', price: '$598' },
      { name: 'Toulouse Table Runner', price: '$49' },
    ],
    date: '5 days ago',
    cta: 'Continue with Olive →',
  },
  {
    id: '3',
    brand: 'Olive · Williams Sonoma',
    summary: 'We curated glassware and cookware for your holiday cocktail party for 20—elegant yet practical.',
    products: [
      { name: 'Riedel Crystal Set', price: '$189' },
      { name: 'Gold-Rimmed Coupe Glasses', price: '$89.95' },
      { name: 'GreenPan Reserve Stockpot', price: '$179.95' },
    ],
    date: '2 weeks ago',
  },
]

const INTERESTS = [
  { label: 'Induction Cooking', emoji: '🔥', count: 3 },
  { label: 'Cast Iron Care', emoji: '🍳', count: 2 },
  { label: 'Holiday Entertaining', emoji: '🥂', count: 4 },
  { label: 'Dining & Tabletop', emoji: '🍽️', count: 2 },
  { label: 'Small Kitchen', emoji: '📐', count: 1 },
]

// Products from conversations for the horizontal scroll
const PRODUCTS_WE_TALKED_ABOUT = [
  { id: 'p1', name: 'Lodge Cast Iron Skillet', price: '$49.95', oliveRecommended: true },
  { id: 'p2', name: 'Le Creuset Signature Skillet', price: '$229.95', oliveRecommended: true },
  { id: 'p3', name: 'Benchwright Dining Table', price: '$899', oliveRecommended: false },
  { id: 'p4', name: 'Riedel Crystal Set', price: '$189', oliveRecommended: true },
  { id: 'p5', name: 'GreenPan Reserve Stockpot', price: '$179.95', oliveRecommended: true },
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

  const handleOrderSearch = (e) => {
    e.preventDefault()
    console.log('Order search:', { orderNumber, postalCode })
  }

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
        {/* LEFT COLUMN */}
        <div className="dashboard__left">
          {/* MY CONVERSATIONS */}
          <section className="dashboard__card" aria-labelledby="conversations-heading">
            <h2 id="conversations-heading" className="dashboard__card-title">MY CONVERSATIONS</h2>
            <div className="conversation-list" role="list">
              {CONVERSATIONS.map((conv) => (
                <article key={conv.id} className="conversation-card" role="listitem">
                  <p className="conversation-card__brand">{conv.brand}</p>
                  <p className="conversation-card__summary">{conv.summary}</p>
                  <div className="conversation-card__products">
                    {conv.products.map((p, i) => (
                      <div key={i} className="conversation-card__product">
                        <div className="conversation-card__thumb" aria-hidden="true" />
                        <span className="conversation-card__product-name">{p.name}</span>
                        <span className="conversation-card__product-price">{p.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="conversation-card__date">{conv.date}</p>
                  <div className="conversation-card__ctas">
                    <a href="#continue" className="conversation-card__cta conversation-card__cta--green">Continue with Olive →</a>
                    <a href="#view" className="conversation-card__cta conversation-card__cta--grey">View full conversation</a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* MY INTERESTS */}
          <section className="dashboard__card" aria-labelledby="interests-heading">
            <h2 id="interests-heading" className="dashboard__card-title">MY INTERESTS</h2>
            <div className="interests-grid" role="list">
              {INTERESTS.map((item) => (
                <a key={item.label} href="#interest" className="interest-tile" role="listitem">
                  <span className="interest-tile__label">{item.label}</span>
                  <span className="interest-tile__emoji" aria-hidden="true">{item.emoji}</span>
                  <span className="interest-tile__count">{item.count} conversations</span>
                </a>
              ))}
              <a href="#discover" className="interest-tile interest-tile--discover" role="listitem">
                + Discover more
              </a>
            </div>
          </section>

          {/* PRODUCTS & RECIPES WE TALKED ABOUT */}
          <section className="dashboard__card" aria-labelledby="products-heading">
            <h2 id="products-heading" className="dashboard__card-title">PRODUCTS & RECIPES WE TALKED ABOUT</h2>
            <div className="products-scroll" role="list">
              {PRODUCTS_WE_TALKED_ABOUT.map((p) => (
                <article key={p.id} className="product-talked-card" role="listitem">
                  <div className="product-talked-card__thumb" aria-hidden="true" />
                  <p className="product-talked-card__name">{p.name}</p>
                  <p className="product-talked-card__price">{p.price}</p>
                  {p.oliveRecommended && <span className="product-talked-card__badge">Olive recommended</span>}
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="dashboard__right">
          {/* RECENT ORDERS */}
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

          {/* RECENTLY VIEWED */}
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
