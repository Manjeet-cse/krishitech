import { useState, useMemo } from 'react';
import BottomTabs from '../../components/layout/BottomTabs';
import AppTopBar from '../../components/common/AppTopBar';
import './MandiScreen.css';

const MOCK_CROPS = [
  { id: 1, name: 'Wheat (Lok-1)', variety: 'Grade A • Bulk', category: 'Rabi', price: '2,250', unit: '/Qtl', trend: 'up', change: '₹15 (0.6%)', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNtiXvY2hvHrB0H116DC92rppfahtv5qVNnE_u-zc5QtN_gbGe2EvO2DAhiih1NcnBh5Up8xUiF4UVIq-vklIHFlCenlNZt4Ogp-MJRh2zE-qcuiemWIdvmy0tXGKiBdfn6J9QzfnQ1cIif4pEwHfTZU_wrQxmcYRGYLr8_Vr1ooCSWZp2e_98tejJtInu5kphHo2OYaqeIsi3hnC2SyJ7RaHD-jihCz16Ynga_y9nvdxovSn5LRWE2V9Ff_XKVBu2OUlUusbB9C0' },
  { id: 2, name: 'Mustard', variety: 'Black • Premium', category: 'Rabi', price: '5,100', unit: '/Qtl', trend: 'down', change: '₹45 (0.8%)', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK9KgnHSWH7m1ZkBms1edctDfFfJhJ_pULn9T61cY3ckrqPUciU9pSWcsSCPv0ZALbg1vjZDEHo3Rc1VpyrRWEegeq42fwXzKXkO35EOWd09ye7wrm10kQDRKDXwP6A7qfl-ic-7bCop1LJGQeJ15ukYU0QrNDDdMzHIUCNcLTzKi34i4Ao8d3oTm5ZIDX_EnFBL2m1h4NbRDBWLnM0Lwkof-vcTN-0KxUEHLtddFgPRdEibNnka-uAx1S4UbmmV02_IjbRk-Drdw' },
  { id: 3, name: 'Basmati Rice', variety: '1121 • Raw', category: 'Kharif', price: '4,800', unit: '/Qtl', trend: 'up', change: '₹120 (2.5%)', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb0H1FE8WvbVKIB2WxvgqEVB-wjB3tD7-HuvChOW1mNJ0XfQ3LQZG7BIOFGHt4JR3gDVLqIhouA_CfFIm4k9q54IAFDNy7iNOeoiSJnbIlN56S61Y5KSe_2cyD6zL9l9ADAnQcCDJncvSzaSLS0m3_yN5_dhLoD1UqIGVoz51uLzLUMeZh9Obxj2ED20TfzvFTqiRp4Jhp7xRXMF5ZnF2sdQwHRaoapPsU8s2JUh0OLkc4qIguRqir_QY5iP2ekC4w_syRhUUJuUY' },
  { id: 4, name: 'Onion', variety: 'Red • Medium', category: 'Vegetables', price: '1,850', unit: '/Qtl', trend: 'neutral', change: 'Unchanged', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADx6bIn7RGoT9arkof-wQCObVz0uUut2s5VAG72qZGM5U1jfSC54CsyGobEzWa-KegvRdu1H-CKaQz6fdrDtbKQuopPfVokF0ovvld23ibYQ9L_vJWvcUT5o4sF4P5nd17t1WC8GKdWsRsEew7hFO-7KXAXSDc6MDFAhfHfQJ24H5jmisWNN7qUvTe4lg-N4rqKOaKfTSUrzJsVIvEcMf7_gWyxKgjHBmb1Y8S80LF-4C_110Eeoc7s_RDqKRIebQxtPhHd8aoPCE' },
  { id: 5, name: 'Tomato', variety: 'Hybrid • Grade A', category: 'Vegetables', price: '2,100', unit: '/Qtl', trend: 'up', change: '₹200 (10.5%)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/330px-Tomato_je.jpg' },
  { id: 6, name: 'Potato', variety: 'Kufri Jyoti', category: 'Vegetables', price: '1,200', unit: '/Qtl', trend: 'down', change: '₹50 (4.0%)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/330px-Patates.jpg' },
  { id: 7, name: 'Maize', variety: 'Yellow • Feed Grade', category: 'Kharif', price: '2,050', unit: '/Qtl', trend: 'up', change: '₹25 (1.2%)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Zea_mays_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-283.jpg/330px-Zea_mays_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-283.jpg' },
  { id: 8, name: 'Cotton', variety: 'BT • Long Staple', category: 'Kharif', price: '7,200', unit: '/Qtl', trend: 'up', change: '₹150 (2.1%)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/CottonPlant.JPG/330px-CottonPlant.JPG' },
  { id: 9, name: 'Soybean', variety: 'Yellow • Grade A', category: 'Kharif', price: '4,500', unit: '/Qtl', trend: 'down', change: '₹80 (1.7%)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Soybean.USDA.jpg/330px-Soybean.USDA.jpg' },
  { id: 10, name: 'Sugarcane', variety: 'Co 0238', category: 'Kharif', price: '380', unit: '/Qtl', trend: 'neutral', change: 'Unchanged', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Saccharum_officinarum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-125.jpg/330px-Saccharum_officinarum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-125.jpg' },
  { id: 11, name: 'Apple', variety: 'Royal Delicious', category: 'Fruits', price: '6,500', unit: '/Qtl', trend: 'up', change: '₹300 (4.8%)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/330px-Pink_lady_and_cross_section.jpg' },
  { id: 12, name: 'Banana', variety: 'Robusta', category: 'Fruits', price: '1,500', unit: '/Qtl', trend: 'down', change: '₹20 (1.3%)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bananavarieties.jpg/330px-Bananavarieties.jpg' },
  { id: 13, name: 'Mango', variety: 'Alphonso', category: 'Fruits', price: '8,000', unit: '/Qtl', trend: 'up', change: '₹500 (6.6%)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mangos_-_single_and_halved.jpg/330px-Mangos_-_single_and_halved.jpg' },
  { id: 14, name: 'Garlic', variety: 'White • Big', category: 'Vegetables', price: '12,000', unit: '/Qtl', trend: 'up', change: '₹800 (7.1%)', image: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Allium_sativum_Woodwill_1793.jpg' },
  { id: 15, name: 'Ginger', variety: 'Fresh • Grade A', category: 'Vegetables', price: '8,500', unit: '/Qtl', trend: 'down', change: '₹150 (1.7%)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Koeh-146-no_text.jpg/330px-Koeh-146-no_text.jpg' },
  { id: 16, name: 'Green Chilli', variety: 'G4', category: 'Vegetables', price: '3,200', unit: '/Qtl', trend: 'up', change: '₹120 (3.8%)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Madame_Jeanette_and_other_chillies.jpg/330px-Madame_Jeanette_and_other_chillies.jpg' },
  { id: 17, name: 'Cabbage', variety: 'Green • Round', category: 'Vegetables', price: '800', unit: '/Qtl', trend: 'down', change: '₹40 (4.7%)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cabbage_and_cross_section_on_white.jpg/330px-Cabbage_and_cross_section_on_white.jpg' },
  { id: 18, name: 'Cauliflower', variety: 'White • Snowball', category: 'Vegetables', price: '1,400', unit: '/Qtl', trend: 'up', change: '₹60 (4.4%)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Chou-fleur_02.jpg/330px-Chou-fleur_02.jpg' },
  { id: 19, name: 'Gram (Chana)', variety: 'Desi', category: 'Rabi', price: '5,800', unit: '/Qtl', trend: 'up', change: '₹110 (1.9%)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Chickpea_BNC.jpg/330px-Chickpea_BNC.jpg' },
  { id: 20, name: 'Tur (Arhar)', variety: 'Red • Split', category: 'Kharif', price: '9,500', unit: '/Qtl', trend: 'neutral', change: 'Unchanged', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Cajanus_cajan_Blanco1.167-cropped.jpg/330px-Cajanus_cajan_Blanco1.167-cropped.jpg' }
];

const FILTER_CATEGORIES = ['All Crops', 'Rabi', 'Kharif', 'Vegetables', 'Fruits'];

const getCropImage = (image, name) => {
  if (image) return image;
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=dff3dc&color=2E7D32&bold=true`;
};

export default function MandiScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All Crops');

  const filteredCrops = useMemo(() => {
    return MOCK_CROPS.filter(crop => {
      const matchesSearch = crop.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            crop.variety.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'All Crops' || crop.category === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <div className="screen-layout" style={{ backgroundColor: 'var(--surface)' }}>
      <AppTopBar title="NeoKrishiTech" showBack={false} showNotification={true} />

      {/* ── Scrollable Content Area ─────────── */}
      <div className="screen-body">
        <main className="screen-content" style={{ padding: '0 16px 24px', paddingTop: '16px' }}>
          
          {/* Location & Status Sub-bar */}
          <div className="mandi-subbar">
            <div className="mandi-location">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                location_on
              </span>
              <span className="mandi-location-text">Sonipat Mandi</span>
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                expand_more
              </span>
            </div>
            <div className="mandi-updated">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                update
              </span>
              <span>Updated 10 mins ago</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mandi-search-wrap">
            <span className="material-symbols-outlined mandi-search-icon">search</span>
            <input 
              className="mandi-search-input" 
              placeholder="Search crops, prices..." 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="mandi-mic-btn">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                mic
              </span>
            </button>
          </div>

          {/* Filter Chips (Scrollable) */}
          <div className="mandi-filters-row hide-scrollbar">
            {FILTER_CATEGORIES.map(category => (
              <button 
                key={category}
                className={`mandi-chip ${activeFilter === category ? 'active' : 'default'}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Crop Prices List Section */}
          <div className="crop-prices-list">
            
            {filteredCrops.length === 0 ? (
              <div className="empty-state">
                <p>No crops found matching your criteria.</p>
              </div>
            ) : (
              filteredCrops.map(crop => (
                <article key={crop.id} className="mandi-crop-card">
                  <div className="mandi-crop-left">
                    <div className="mandi-crop-img-wrap">
                      <img 
                        src={getCropImage(crop.image, crop.name)} 
                        alt={crop.name} 
                        className="mandi-crop-img" 
                      />
                    </div>
                    <div>
                      <h3 className="mandi-crop-title">{crop.name}</h3>
                      <p className="mandi-crop-subtitle">{crop.variety}</p>
                    </div>
                  </div>
                  <div className="mandi-crop-right">
                    <div className="mandi-crop-price">
                      ₹{crop.price}<span className="mandi-crop-unit">{crop.unit}</span>
                    </div>
                    <div className={`mandi-crop-trend trend-${crop.trend}`}>
                      {crop.trend !== 'neutral' && (
                        <span className="material-symbols-outlined">
                          {crop.trend === 'up' ? 'arrow_upward' : 'arrow_downward'}
                        </span>
                      )}
                      {crop.trend === 'neutral' && (
                        <span className="material-symbols-outlined">remove</span>
                      )}
                      {' '}{crop.change}
                    </div>
                  </div>
                </article>
              ))
            )}

          </div>

          {/* Voice Query Card (Bottom Anchor) */}
          <div className="voice-query-card">
            <div className="voice-query-decor" />
            <h3 className="voice-query-title">Check Prices by Voice</h3>
            <p className="voice-query-desc">Ask about specific crop rates, historical trends, or alternative mandi prices.</p>
            <button className="voice-query-btn">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
              Ask Mandi Assistant
            </button>
          </div>

        </main>
      </div>

      {/* Floating Action Button (AI Assistant) */}
      <button className="mandi-fab" aria-label="AI Assistant">
        <span className="material-symbols-outlined" style={{ fontSize: '28px', fontVariationSettings: "'FILL' 1" }}>
          smart_toy
        </span>
      </button>

      {/* ── Bottom Nav ──────────────────────── */}
      <div className="screen-bottomnav">
        <BottomTabs />
      </div>
    </div>
  );
}