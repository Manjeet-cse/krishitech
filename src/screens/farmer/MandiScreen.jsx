import BottomTabs from '../../components/layout/BottomTabs';
import AppTopBar from '../../components/common/AppTopBar';
import './MandiScreen.css';

export default function MandiScreen() {
  return (
    <div className="screen-layout" style={{ backgroundColor: 'var(--surface)' }}>
      <AppTopBar title="Mandi Prices" showBack={false} showNotification={true} />

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
            />
            <button className="mandi-mic-btn">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                mic
              </span>
            </button>
          </div>

          {/* Filter Chips (Scrollable) */}
          <div className="mandi-filters-row hide-scrollbar">
            <button className="mandi-chip active">All Crops</button>
            <button className="mandi-chip default">Rabi</button>
            <button className="mandi-chip default">Kharif</button>
            <button className="mandi-chip default">Vegetables</button>
            <button className="mandi-chip default">Fruits</button>
          </div>

          {/* Crop Prices List Section */}
          <div className="crop-prices-list">
            
            {/* Item 1: Wheat */}
            <article className="crop-card">
              <div className="crop-card-left">
                <div className="crop-img-wrap">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNtiXvY2hvHrB0H116DC92rppfahtv5qVNnE_u-zc5QtN_gbGe2EvO2DAhiih1NcnBh5Up8xUiF4UVIq-vklIHFlCenlNZt4Ogp-MJRh2zE-qcuiemWIdvmy0tXGKiBdfn6J9QzfnQ1cIif4pEwHfTZU_wrQxmcYRGYLr8_Vr1ooCSWZp2e_98tejJtInu5kphHo2OYaqeIsi3hnC2SyJ7RaHD-jihCz16Ynga_y9nvdxovSn5LRWE2V9Ff_XKVBu2OUlUusbB9C0" 
                    alt="Wheat" 
                    className="crop-img" 
                  />
                </div>
                <div>
                  <h3 className="crop-title">Wheat (Lok-1)</h3>
                  <p className="crop-subtitle">Grade A • Bulk</p>
                </div>
              </div>
              <div className="crop-card-right">
                <div className="crop-price">
                  ₹2,250<span className="crop-unit">/Qtl</span>
                </div>
                <div className="crop-trend trend-up">
                  <span className="material-symbols-outlined">arrow_upward</span>
                  ₹15 (0.6%)
                </div>
              </div>
            </article>

            {/* Item 2: Mustard */}
            <article className="crop-card">
              <div className="crop-card-left">
                <div className="crop-img-wrap">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK9KgnHSWH7m1ZkBms1edctDfFfJhJ_pULn9T61cY3ckrqPUciU9pSWcsSCPv0ZALbg1vjZDEHo3Rc1VpyrRWEegeq42fwXzKXkO35EOWd09ye7wrm10kQDRKDXwP6A7qfl-ic-7bCop1LJGQeJ15ukYU0QrNDDdMzHIUCNcLTzKi34i4Ao8d3oTm5ZIDX_EnFBL2m1h4NbRDBWLnM0Lwkof-vcTN-0KxUEHLtddFgPRdEibNnka-uAx1S4UbmmV02_IjbRk-Drdw" 
                    alt="Mustard" 
                    className="crop-img" 
                  />
                </div>
                <div>
                  <h3 className="crop-title">Mustard</h3>
                  <p className="crop-subtitle">Black • Premium</p>
                </div>
              </div>
              <div className="crop-card-right">
                <div className="crop-price">
                  ₹5,100<span className="crop-unit">/Qtl</span>
                </div>
                <div className="crop-trend trend-down">
                  <span className="material-symbols-outlined">arrow_downward</span>
                  ₹45 (0.8%)
                </div>
              </div>
            </article>

            {/* Item 3: Rice */}
            <article className="crop-card">
              <div className="crop-card-left">
                <div className="crop-img-wrap">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb0H1FE8WvbVKIB2WxvgqEVB-wjB3tD7-HuvChOW1mNJ0XfQ3LQZG7BIOFGHt4JR3gDVLqIhouA_CfFIm4k9q54IAFDNy7iNOeoiSJnbIlN56S61Y5KSe_2cyD6zL9l9ADAnQcCDJncvSzaSLS0m3_yN5_dhLoD1UqIGVoz51uLzLUMeZh9Obxj2ED20TfzvFTqiRp4Jhp7xRXMF5ZnF2sdQwHRaoapPsU8s2JUh0OLkc4qIguRqir_QY5iP2ekC4w_syRhUUJuUY" 
                    alt="Rice" 
                    className="crop-img" 
                  />
                </div>
                <div>
                  <h3 className="crop-title">Basmati Rice</h3>
                  <p className="crop-subtitle">1121 • Raw</p>
                </div>
              </div>
              <div className="crop-card-right">
                <div className="crop-price">
                  ₹4,800<span className="crop-unit">/Qtl</span>
                </div>
                <div className="crop-trend trend-up">
                  <span className="material-symbols-outlined">arrow_upward</span>
                  ₹120 (2.5%)
                </div>
              </div>
            </article>

            {/* Item 4: Onion */}
            <article className="crop-card">
              <div className="crop-card-left">
                <div className="crop-img-wrap">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuADx6bIn7RGoT9arkof-wQCObVz0uUut2s5VAG72qZGM5U1jfSC54CsyGobEzWa-KegvRdu1H-CKaQz6fdrDtbKQuopPfVokF0ovvld23ibYQ9L_vJWvcUT5o4sF4P5nd17t1WC8GKdWsRsEew7hFO-7KXAXSDc6MDFAhfHfQJ24H5jmisWNN7qUvTe4lg-N4rqKOaKfTSUrzJsVIvEcMf7_gWyxKgjHBmb1Y8S80LF-4C_110Eeoc7s_RDqKRIebQxtPhHd8aoPCE" 
                    alt="Onion" 
                    className="crop-img" 
                  />
                </div>
                <div>
                  <h3 className="crop-title">Onion</h3>
                  <p className="crop-subtitle">Red • Medium</p>
                </div>
              </div>
              <div className="crop-card-right">
                <div className="crop-price">
                  ₹1,850<span className="crop-unit">/Qtl</span>
                </div>
                <div className="crop-trend trend-neutral">
                  <span className="material-symbols-outlined">remove</span>
                  Unchanged
                </div>
              </div>
            </article>

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