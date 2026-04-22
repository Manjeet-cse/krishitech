import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomTabs from '../../components/layout/BottomTabs';
import AppTopBar from '../../components/common/AppTopBar';
import { useCart } from '../../store/CartContext';
import './MarketplaceScreen.css';

const MOCK_PRODUCTS = [
  // Seeds
  { id: 1, name: 'Sharbati Wheat Seeds', category: 'Seeds', brand: 'KisanBeej', price: 450, unit: '5kg', rating: 4.8, verified: true, image: '/assets/marketplace/cat_seeds_1776883456036.png' },
  { id: 2, name: 'Hybrid Tomato Seeds', category: 'Seeds', brand: 'AgriPro', price: 120, unit: '50g', rating: 4.5, verified: true, image: '/assets/marketplace/cat_seeds_1776883456036.png' },
  { id: 3, name: 'Basmati Rice Seeds', category: 'Seeds', brand: 'KisanBeej', price: 800, unit: '10kg', rating: 4.9, verified: true, image: '/assets/marketplace/cat_seeds_1776883456036.png' },
  { id: 4, name: 'BT Cotton Seeds', category: 'Seeds', brand: 'Nuziveedu', price: 950, unit: '450g', rating: 4.2, verified: false, image: '/assets/marketplace/cat_seeds_1776883456036.png' },
  { id: 5, name: 'Yellow Maize Seeds', category: 'Seeds', brand: 'Pioneer', price: 1200, unit: '5kg', rating: 4.6, verified: true, image: '/assets/marketplace/cat_seeds_1776883456036.png' },
  // Fertilizers
  { id: 6, name: 'Premium DAP Fertilizer', category: 'Fertilizers', brand: 'IFFCO', price: 1350, unit: '50kg', rating: 4.9, verified: true, image: '/assets/marketplace/cat_fertilizer_1776883473185.png' },
  { id: 7, name: 'Urea 46% N', category: 'Fertilizers', brand: 'KRIBHCO', price: 266, unit: '45kg', rating: 4.7, verified: true, image: '/assets/marketplace/cat_fertilizer_1776883473185.png' },
  { id: 8, name: 'MOP - Muriate of Potash', category: 'Fertilizers', brand: 'IPL', price: 1700, unit: '50kg', rating: 4.4, verified: false, image: '/assets/marketplace/cat_fertilizer_1776883473185.png' },
  { id: 9, name: 'Zinc Sulphate', category: 'Fertilizers', brand: 'Aries', price: 450, unit: '5kg', rating: 4.3, verified: true, image: '/assets/marketplace/cat_fertilizer_1776883473185.png' },
  { id: 10, name: 'Organic Vermicompost', category: 'Fertilizers', brand: 'EcoFarms', price: 300, unit: '50kg', rating: 4.8, verified: true, image: '/assets/marketplace/cat_fertilizer_1776883473185.png' },
  // Pesticides
  { id: 11, name: 'Organic Neem Oil', category: 'Pesticides', brand: 'AgriLife', price: 320, unit: '1L', rating: 4.5, verified: true, image: '/assets/marketplace/cat_pesticide_1776883487387.png' },
  { id: 12, name: 'Chlorpyrifos 20% EC', category: 'Pesticides', brand: 'Bayer', price: 450, unit: '1L', rating: 4.1, verified: false, image: '/assets/marketplace/cat_pesticide_1776883487387.png' },
  { id: 13, name: 'Imidacloprid 17.8% SL', category: 'Pesticides', brand: 'Tata Rallis', price: 850, unit: '500ml', rating: 4.6, verified: true, image: '/assets/marketplace/cat_pesticide_1776883487387.png' },
  { id: 14, name: 'Mancozeb 75% WP Fungicide', category: 'Pesticides', brand: 'UPL', price: 380, unit: '1kg', rating: 4.4, verified: true, image: '/assets/marketplace/cat_pesticide_1776883487387.png' },
  { id: 15, name: 'Glyphosate 41% SL Herbicide', category: 'Pesticides', brand: 'Excel', price: 600, unit: '1L', rating: 4.3, verified: false, image: '/assets/marketplace/cat_pesticide_1776883487387.png' },
  // Tools
  { id: 16, name: 'Heavy Duty Shovel', category: 'Tools', brand: 'Tata Agrico', price: 450, unit: '1 pc', rating: 4.7, verified: true, image: '/assets/marketplace/cat_tools_1776883508076.png' },
  { id: 17, name: 'Hand Sickle', category: 'Tools', brand: 'Local Forge', price: 150, unit: '1 pc', rating: 3.9, verified: false, image: '/assets/marketplace/cat_tools_1776883508076.png' },
  { id: 18, name: 'Pruning Shears', category: 'Tools', brand: 'Falcon', price: 550, unit: '1 pc', rating: 4.8, verified: true, image: '/assets/marketplace/cat_tools_1776883508076.png' },
  { id: 19, name: 'Watering Can 10L', category: 'Tools', brand: 'Plasto', price: 300, unit: '1 pc', rating: 4.2, verified: true, image: '/assets/marketplace/cat_tools_1776883508076.png' },
  { id: 20, name: 'Wheelbarrow', category: 'Tools', brand: 'Tata Agrico', price: 3200, unit: '1 pc', rating: 4.6, verified: true, image: '/assets/marketplace/cat_tools_1776883508076.png' },
  // Machinery
  { id: 21, name: 'Heavy Duty Tiller', category: 'Machinery', brand: 'Honda', price: 45000, unit: '1 unit', rating: 4.9, verified: true, image: '/assets/marketplace/cat_machinery_1776883521697.png' },
  { id: 22, name: 'Knapsack Sprayer 16L', category: 'Machinery', brand: 'Aspee', price: 2100, unit: '1 unit', rating: 4.5, verified: true, image: '/assets/marketplace/cat_machinery_1776883521697.png' },
  { id: 23, name: 'Battery Operated Sprayer', category: 'Machinery', brand: 'KisanKraft', price: 3500, unit: '1 unit', rating: 4.7, verified: true, image: '/assets/marketplace/cat_machinery_1776883521697.png' },
  { id: 24, name: 'Water Pump 5HP', category: 'Machinery', brand: 'Crompton', price: 18500, unit: '1 unit', rating: 4.8, verified: true, image: '/assets/marketplace/cat_machinery_1776883521697.png' },
  { id: 25, name: 'Chaff Cutter Machine', category: 'Machinery', brand: 'Local', price: 12000, unit: '1 unit', rating: 4.0, verified: false, image: '/assets/marketplace/cat_machinery_1776883521697.png' }
];

const CATEGORIES = ['All', 'Seeds', 'Fertilizers', 'Pesticides', 'Machinery', 'Tools'];

export default function MarketplaceScreen() {
  const navigate = useNavigate();
  const { addToCart, cartCount, cartSubtotal } = useCart();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique brands for filter
  const brands = useMemo(() => {
    return [...new Set(MOCK_PRODUCTS.map(p => p.brand))].sort();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = MOCK_PRODUCTS;

    // Search
    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category
    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    // Verified
    if (verifiedOnly) {
      result = result.filter(p => p.verified);
    }

    // Brand
    if (brandFilter) {
      result = result.filter(p => p.brand === brandFilter);
    }

    // Sort
    if (sortBy === 'price_asc') {
      result = result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price_desc') {
      result = result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      result = result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchQuery, activeCategory, verifiedOnly, brandFilter, sortBy]);

  return (
    <div className="screen-layout" style={{ backgroundColor: 'var(--surface)', position: 'relative' }}>
      
      <AppTopBar title="Marketplace" showBack={false} showNotification={true} showCart={true} />

      {/* ── Scrollable Content Area ─────────── */}
      <div className="screen-body">
        <main className="screen-content pb-nav pb-32" style={{ padding: '0 16px', paddingTop: '24px' }}>
          
          {/* Search Bar */}
          <div className="marketplace-search-wrap">
            <span className="material-symbols-outlined marketplace-search-icon">search</span>
            <input 
              className="marketplace-search-input" 
              placeholder="Search seeds, fertilizers, tools..." 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="marketplace-filter-btn" onClick={() => setShowFilters(!showFilters)}>
              <span className="material-symbols-outlined" style={{ fontSize: '20px', color: showFilters ? 'var(--primary)' : 'inherit' }}>
                tune
              </span>
            </button>
          </div>

          {/* Advanced Filters (Collapsible) */}
          {showFilters && (
            <div className="marketplace-advanced-filters">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="market-filter-select">
                <option value="">Sort By</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="rating">Top Rated (4★+)</option>
              </select>
              
              <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)} className="market-filter-select">
                <option value="">All Brands</option>
                {brands.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>

              <label className="market-filter-toggle">
                <input 
                  type="checkbox" 
                  checked={verifiedOnly} 
                  onChange={(e) => setVerifiedOnly(e.target.checked)} 
                />
                <span className="material-symbols-outlined verified-icon">verified</span>
                Verified Only
              </label>
            </div>
          )}

          {/* Filter Chips */}
          <div className="marketplace-filters-row hide-scrollbar">
            {CATEGORIES.map(category => (
              <button 
                key={category}
                className={`market-chip ${activeCategory === category ? 'active' : 'default'}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <section>
            {filteredProducts.length === 0 ? (
              <div className="empty-state">
                <span className="material-symbols-outlined empty-icon">inventory_2</span>
                <h3>No products found</h3>
                <p>Try adjusting your search or filters.</p>
              </div>
            ) : (
              <div className="product-grid">
                {filteredProducts.map(product => (
                  <article key={product.id} className="product-card">
                    {product.verified && (
                      <div className="product-verified-badge">
                        <span className="material-symbols-outlined">verified</span>
                      </div>
                    )}
                    <div className="product-img-wrap">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="product-img" 
                      />
                    </div>
                    <div className="product-info">
                      <div className="product-brand-rating">
                        <span className="product-brand">{product.brand}</span>
                        <span className="product-rating">
                          {product.rating} <span className="material-symbols-outlined star-icon">star</span>
                        </span>
                      </div>
                      <h3 className="product-title">{product.name}</h3>
                      <p className="product-subtitle">{product.unit}</p>
                      <div className="product-actions">
                        <span className="product-price">₹{product.price.toLocaleString()}</span>
                        <button className="product-add-btn" onClick={() => addToCart(product)}>
                          Add +
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>

        </main>
      </div>

      {/* Floating Elements Area */}
      
      {/* Context-Aware Sticky Checkout Bar */}
      {cartCount > 0 && (
        <div className="sticky-checkout-wrap">
          <div className="checkout-bar" onClick={() => navigate('/farmer/cart')}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="checkout-total-val">₹{cartSubtotal.toLocaleString()}</span>
              <span className="checkout-items">{cartCount} item{cartCount > 1 ? 's' : ''} in cart</span>
            </div>
            <button className="checkout-btn">
              View Cart
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
            </button>
          </div>
        </div>
      )}

      {/* ── Bottom Nav ──────────────────────── */}
      <div className="screen-bottomnav">
        <BottomTabs />
      </div>
    </div>
  );
}
