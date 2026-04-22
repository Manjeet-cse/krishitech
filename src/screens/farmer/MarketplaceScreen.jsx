import BottomTabs from '../../components/layout/BottomTabs';
import AppTopBar from '../../components/common/AppTopBar';
import './MarketplaceScreen.css';

export default function MarketplaceScreen() {
  return (
    <div className="screen-layout" style={{ backgroundColor: 'var(--surface)', position: 'relative' }}>
      
      <AppTopBar title="Marketplace" showBack={false} showNotification={true} />

      {/* ── Scrollable Content Area ─────────── */}
      <div className="screen-body">
        <main className="screen-content pb-nav pb-32" style={{ padding: '0 16px', paddingTop: '24px' }}>
          
          {/* Search Bar */}
          <div className="marketplace-search-wrap">
            <span className="material-symbols-outlined marketplace-search-icon">search</span>
            <input 
              className="marketplace-search-input" 
              placeholder="Search seeds, fertilizers..." 
              type="text" 
            />
            <button className="marketplace-mic-btn">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: '20px' }}>
                mic
              </span>
            </button>
          </div>

          {/* Filter Chips */}
          <div className="marketplace-filters-row hide-scrollbar">
            <button className="market-chip active">All</button>
            <button className="market-chip default">Seeds</button>
            <button className="market-chip default">Fertilizers</button>
            <button className="market-chip default">Pesticides</button>
            <button className="market-chip default">Tools</button>
          </div>

          {/* Product Grid */}
          <section>
            <h2 className="product-section-title">Featured Products</h2>
            <div className="product-grid">
              
              {/* Product Card 1 */}
              <article className="product-card">
                <div className="product-discount-badge">15% Off</div>
                <div className="product-img-wrap">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1ss8MLmXd1A0r3r0I_zeSKXao2eo5qXQb-4I6BUvynW62e3IRhx5eFZAwtQMWgy49wzZQtl5S88PEJ6czBRZqHqGV8hJEzwfoIWkiXLjSRtLH09w70FVjs9cK7mp03voRuz-N3v2iRNtsTYOU1kPYMlZuyaZPCB14tAeu5xz6LqnwZ3aVOoY_aZB592fo1TAHePgGV1HFrEeixa0U5tZtMMuc7HSyrqZdtqBePW658t3l4VzHGnEi8JokrsOQbF9Yb65kB0kf-o4" 
                    alt="Sharbati Wheat Seeds" 
                    className="product-img" 
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Sharbati Wheat Seeds</h3>
                  <p className="product-subtitle">High Yield, 5kg</p>
                  <div className="product-actions">
                    <span className="product-price">₹450</span>
                    <button className="product-add-btn">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                    </button>
                  </div>
                </div>
              </article>

              {/* Product Card 2 */}
              <article className="product-card">
                <div className="product-img-wrap">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYmvvlYerAW49UTW4fsp2638VJjySWtxknbkwBUivYfZEzba9AzNZcYrl6iEIDYvHBmqYa81Bg7zEwybD6w66OJZsAOaV10sRJR2XkqOVEfY8IvEhxtV8OKxLhfMZq9r8wIfkrC1Y0OBUWxLvv1mM_q9Wloj2lMhOunpLat_7MEoJfK2gTVvQt34q23M6uUqQZ9MTxSuwIqCFtz0ZN-9ecTg9zZysSnQGYei2IOPdZmePkl1OVX7oOAro2VDnQQk6mMX81Uk0PN3Q" 
                    alt="Premium DAP Fertilizer" 
                    className="product-img" 
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Premium DAP Fertilizer</h3>
                  <p className="product-subtitle">N-P-K 18-46-0, 50kg</p>
                  <div className="product-actions">
                    <span className="product-price">₹1,350</span>
                    <div className="product-qty-ctrl">
                      <button className="product-qty-btn">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>remove</span>
                      </button>
                      <span className="product-qty">1</span>
                      <button className="product-qty-btn">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>

              {/* Product Card 3 */}
              <article className="product-card">
                <div className="product-img-wrap">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuABBTyeYxp2pwQV9XU89T3NaEXLVvhY9_EAy-2Q2AI1kiIZDDeCbkBN5Jr5WtZKjJpDguaXIu7NqzXyUTEFYT2e1u8-wRhN7Hj04yHhf_o8oaM11dnZUCXV8vnf1Ha9OTwZckRChWNz0lmsk2MMSuzk3kwCO8Li8sUZSvF8zewTtaiLUq94n8BcqpYYMpmFktL2a2fDK7ac1orlAorWlp5WJSHEDvqwe9iLWX5RPqUYizwYXb80G894v6PzidWwnhdM4drzrJ3r7ww" 
                    alt="Organic Neem Oil" 
                    className="product-img" 
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Organic Neem Oil</h3>
                  <p className="product-subtitle">Bio-Pesticide, 1L</p>
                  <div className="product-actions">
                    <span className="product-price">₹320</span>
                    <button className="product-add-btn">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                    </button>
                  </div>
                </div>
              </article>

              {/* Product Card 4 */}
              <article className="product-card">
                <div className="product-img-wrap">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC2NLLMGTRHRytYIJ1EqcCFAziuEboBHPxe6zV2lZYgmNkKEVexqPhRUppbdkytq6QpZci7_41fLRIjyj1R3FPlVqLTnaH1KltEw3zmIJeBfyTp6xurqmVH3JiefPs4kRAq3cKutj_F6Wwcy6WcD5uoh_u2tt8wV631fOHFGkhhSVEE9xNNKNukFg96tVHH_uhJmiQ4B8AmLAQ7QbtBsDLouLQJoKw_1DKpJIi9N04Af30QYK2bNqNamWTEpqiiB3zfY-i9Uc7wn0" 
                    alt="Heavy Duty Tiller" 
                    className="product-img" 
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-title">Heavy Duty Tiller</h3>
                  <p className="product-subtitle">Attachment, Steel</p>
                  <div className="product-actions">
                    <span className="product-price">₹4,500</span>
                    <button className="product-add-btn">
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                    </button>
                  </div>
                </div>
              </article>

            </div>
          </section>

        </main>
      </div>

      {/* Floating Elements Area */}
      
      {/* Sticky Checkout Bar */}
      <div className="sticky-checkout-wrap">
        <div className="checkout-bar">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="checkout-total-val">₹1,350</span>
            <span className="checkout-items">1 item in cart</span>
          </div>
          <button className="checkout-btn">
            Checkout
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
          </button>
        </div>
      </div>

      {/* Floating Elements Area (AI Button omitted in favor of global AppNavigator FAB) */}

      {/* ── Bottom Nav ──────────────────────── */}
      <div className="screen-bottomnav">
        <BottomTabs />
      </div>
    </div>
  );
}