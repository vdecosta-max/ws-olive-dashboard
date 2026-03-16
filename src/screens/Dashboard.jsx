/**
 * Dashboard — My Account screen for Williams Sonoma Olive prototype.
 * Left: MY CONVERSATIONS, MY INTERESTS, PRODUCTS & RECIPES WE TALKED ABOUT
 * Right: RECENT ORDERS (empty state + Ask Olive CTA), RECENTLY VIEWED
 */
import { useState } from 'react'
import './Dashboard.css'

const WSIMGS_BASE = 'https://assets.wsimgs.com/wsimgs/ab/images/dp/wcm/202543/0340/'
const RECIPE_IMGS = {
  primary: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/recipe/202545/0005/img218l.jpg',
  alt1: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/recipe/202545/0005/img195l.jpg',
  alt2: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/recipe/202545/0005/img170l.jpg',
  alt3: 'https://assets.wsimgs.com/wsimgs/rk/images/dp/recipe/202552/0009/img101l.jpg',
}

const CONVERSATIONS = [
  {
    id: '1',
    brand: 'Olive · Williams Sonoma',
    summary: 'We explored espresso machines for home baristas—grind quality, milk steaming, and workflow.',
    products: [
      { name: 'Breville Barista Pro', price: '$699.95', imageUrl: `${WSIMGS_BASE}img1xl.jpg` },
      { name: 'Breville Oracle Touch', price: '$2,799.95', imageUrl: `${WSIMGS_BASE}img2xl.jpg` },
      { name: 'LELIT Bianca', price: '$2,999.95', imageUrl: `${WSIMGS_BASE}img3xl.jpg` },
    ],
    date: '3 days ago',
  },
  {
    id: '2',
    brand: 'Pottery Barn Style Advisor',
    summary: 'We found dining furniture for your open plan apartment—tables, chairs, and table runners that fit your space.',
    products: [
      { name: 'Benchwright Dining Table', price: '$899', imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=120' },
      { name: 'Toscana Dining Chairs', price: '$598', imageUrl: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=120' },
      { name: 'Toulouse Table Runner', price: '$49', imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=120' },
    ],
    date: '5 days ago',
    cta: 'Continue with Olive →',
  },
  {
    id: '3',
    brand: 'Olive · Williams Sonoma',
    summary: 'We curated coffee accessories and grinders for your morning routine—elegant yet practical.',
    products: [
      { name: 'Baratza Encore', price: '$169', imageUrl: `${WSIMGS_BASE}img1xl.jpg` },
      { name: 'Fellow Ode', price: '$299', imageUrl: `${WSIMGS_BASE}img2xl.jpg` },
      { name: 'Acaia Lunar', price: '$249', imageUrl: `${WSIMGS_BASE}img3xl.jpg` },
    ],
    date: '2 weeks ago',
  },
]

const INTERESTS = [
  { label: 'Home Espresso', emoji: '☕', count: 3 },
  { label: 'Espresso Extraction', emoji: '🍳', count: 2 },
  { label: 'Morning Ritual', emoji: '🥂', count: 4 },
  { label: 'Coffee Accessories', emoji: '🍽️', count: 2 },
  { label: 'Compact Setup', emoji: '📐', count: 1 },
]

// Products from conversations for the horizontal scroll
const PRODUCTS_WE_TALKED_ABOUT = [
  { id: 'p1', name: 'Breville Barista Pro', price: '$699.95', oliveRecommended: true, imageUrl: `${WSIMGS_BASE}img1xl.jpg` },
  { id: 'p2', name: 'Breville Oracle Touch', price: '$2,799.95', oliveRecommended: true, imageUrl: `${WSIMGS_BASE}img2xl.jpg` },
  { id: 'p3', name: 'Benchwright Dining Table', price: '$899', oliveRecommended: false, imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=240' },
  { id: 'p4', name: 'LELIT Bianca', price: '$2,999.95', oliveRecommended: true, imageUrl: `${WSIMGS_BASE}img3xl.jpg` },
  { id: 'p5', name: 'Baratza Encore', price: '$169', oliveRecommended: true, imageUrl: `${WSIMGS_BASE}img4xl.jpg` },
]

const MOCK_RECENTLY_VIEWED = [
  { id: '1', name: 'Breville Barista Pro Espresso Machine', price: '$699.95', imageUrl: `${WSIMGS_BASE}img1xl.jpg`, alt: 'Breville Barista Pro Espresso Machine' },
  { id: '2', name: 'Breville Bambino Plus Espresso Maker', price: '$499.95', imageUrl: `${WSIMGS_BASE}img2xl.jpg`, alt: 'Breville Bambino Plus' },
  { id: '3', name: 'Baratza Encore Conical Burr Grinder', price: '$169', imageUrl: `${WSIMGS_BASE}img3xl.jpg`, alt: 'Baratza Encore Grinder' },
  { id: '4', name: 'Fellow Ode Brew Grinder', price: '$299', imageUrl: `${WSIMGS_BASE}img4xl.jpg`, alt: 'Fellow Ode Grinder' },
]

const MOCK_RECENTLY_VIEWED_RECIPES = [
  { id: 'r1', name: 'Cold Brew Concentrate', imageUrl: RECIPE_IMGS.primary, time: '15 min', servings: '4 servings' },
  { id: 'r2', name: 'Caffè Latte', imageUrl: RECIPE_IMGS.alt1, time: '5 min', servings: '1 serving' },
  { id: 'r3', name: 'Iced Vanilla Latte', imageUrl: RECIPE_IMGS.alt2, time: '10 min', servings: '2 servings' },
  { id: 'r4', name: 'Espresso Martini', imageUrl: RECIPE_IMGS.alt3, time: '5 min', servings: '2 servings' },
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

function RecipeCard({ recipe }) {
  return (
    <a href="#recipe" className="dashboard-recipe-card" aria-label={`${recipe.name} recipe`}>
      <div className="dashboard-recipe-card__image-wrap">
        <img src={recipe.imageUrl} alt="" width="200" height="200" loading="lazy" />
      </div>
      <div className="dashboard-recipe-card__body">
        <h3 className="dashboard-recipe-card__name">{recipe.name}</h3>
        {(recipe.time || recipe.servings) && (
          <p className="dashboard-recipe-card__meta">
            {[recipe.time, recipe.servings].filter(Boolean).join(' · ')}
          </p>
        )}
      </div>
    </a>
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
                        <img src={p.imageUrl} alt="" className="conversation-card__thumb" width="60" height="60" loading="lazy" />
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
                  <img src={p.imageUrl} alt="" className="product-talked-card__thumb" width="120" height="120" loading="lazy" />
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

          {/* RECENTLY VIEWED RECIPES */}
          <section className="dashboard__card" aria-labelledby="recently-viewed-recipes-heading">
            <h2 id="recently-viewed-recipes-heading" className="dashboard__card-title">RECENTLY VIEWED RECIPES</h2>
            <div className="dashboard__recipe-grid" role="list" aria-label="Recently viewed recipes">
              {MOCK_RECENTLY_VIEWED_RECIPES.map((recipe) => (
                <div key={recipe.id} role="listitem">
                  <RecipeCard recipe={recipe} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
