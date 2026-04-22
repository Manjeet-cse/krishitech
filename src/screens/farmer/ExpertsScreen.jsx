import { useNavigate } from 'react-router-dom';
import BottomTabs from '../../components/layout/BottomTabs';
import AppTopBar from '../../components/common/AppTopBar';
import './ExpertsScreen.css';

export default function ExpertsScreen() {
  const navigate = useNavigate();

  return (
    <div className="screen-layout" style={{ backgroundColor: 'var(--surface-bright)' }}>
      <AppTopBar title="Ask an Expert" showNotification={true} />

      {/* ── Scrollable Content Area ─────────── */}
      <div className="screen-body">
        <main className="experts-inner" style={{ padding: '16px 16px 80px' }}>
          
          {/* LIMITED OFFER Banner (Bento Grid Style) */}
          <section className="limited-offer-banner">
            <div className="banner-glow" />
            <div className="banner-content">
              <div className="banner-icon-bg">
                <span className="material-symbols-outlined" style={{ color: 'var(--tertiary)', fontVariationSettings: "'FILL' 1" }}>
                  timer
                </span>
              </div>
              <div className="banner-text-col">
                <h2 className="banner-title">LIMITED OFFER</h2>
                <p className="banner-desc">Get your first 5 mins consultation completely FREE.</p>
              </div>
            </div>
            <button className="banner-btn">
              Claim Now
            </button>
          </section>

          {/* Filter Chips (Horizontal Scrollable) */}
          <section>
            <div className="experts-filters-row hide-scrollbar">
              <button className="expert-chip active">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>grass</span>
                All Topics
              </button>
              <button className="expert-chip">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>compost</span>
                Soil Health
              </button>
              <button className="expert-chip">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>bug_report</span>
                Pest Control
              </button>
              <button className="expert-chip">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>water_drop</span>
                Irrigation
              </button>
              <button className="expert-chip">
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>eco</span>
                Organic Farming
              </button>
            </div>
          </section>

          {/* Expert Cards List */}
          <section className="experts-list-section">
            <h2 className="section-title">Available Experts</h2>
            
            {/* Expert Card 1 */}
            <article className="expert-card">
              <div className="expert-card-main-row">
                <div className="expert-avatar-wrap">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHWu6Zw3ZqncW0QjyX34zdGEzK-NUM0tSN4CcpNInHNuUtYhtsDZ8r3p2gPhFUxMzlDi--SPF4szLW698HWuXFK00Zp633ccJR-yEXWJgUFBZqmUm-yKOriSxFwDF4nUiQY2fOzKJHF1EEgWPGKGATT9tCc-VVuKSNqzSWLLHteRyRtEtDHRTA9M0Dnw-4n-BoUGQqLgTpnvVkHuEIpAu4rhxjgaehoCE9hU9now6bokGVBeR9ugNAmR_yFirmIsElipX9go2wWfw"
                    className="expert-avatar-img"
                    alt="Dr. Ravi Kumar"
                  />
                  <div className="expert-rating-badge">
                    <span className="material-symbols-outlined" style={{ fontSize: '12px', fontVariationSettings: "'FILL' 1" }}>star</span>
                    4.9
                  </div>
                </div>
                
                <div className="expert-info-col">
                  <h3 className="expert-name">Dr. Ravi Kumar</h3>
                  <p className="expert-role">Ph.D. Agronomy, IARI</p>
                  <div className="expert-tags-row">
                    <span className="expert-tag">15+ Yrs Exp</span>
                    <span className="expert-tag">Wheat</span>
                    <span className="expert-tag">Soil Health</span>
                  </div>
                </div>
              </div>
              
              <div className="expert-actions-row">
                <button className="expert-call-btn flex-1">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>call</span>
                  Call Now
                </button>
                <button className="expert-book-btn flex-1" onClick={() => navigate('/farmer/expert-booking')}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>calendar_month</span>
                  Book
                </button>
              </div>
            </article>

            {/* Expert Card 2 */}
            <article className="expert-card">
              <div className="expert-card-main-row">
                <div className="expert-avatar-wrap">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG-D4PAeRz4Hn2ivr-hctLs1_0wUmUyW4gZaoa7Q8kHbdhktWKkFAH8bl--J9cb1lhkgZwyuVC4Imxm3rTrFtwWLwSXgLhva_gqq4b9QCNnyqTw-z6WZID5TmynD6JmbUVrlXi6vBG_X5qaVuYkR8RXd04smmKqdSpco_ZjPcDbkuplqiNA0lzwN3dzCpB2Q7bpkJi_P2BL1i4bsg_lV3oKpcMRHe71HhFPOjJfNn_8GWOSL4QsXZBokY72MblljAzLEioLsT6apQ"
                    className="expert-avatar-img"
                    alt="Dr. Sunita Devi"
                  />
                  <div className="expert-rating-badge">
                    <span className="material-symbols-outlined" style={{ fontSize: '12px', fontVariationSettings: "'FILL' 1" }}>star</span>
                    4.8
                  </div>
                </div>
                
                <div className="expert-info-col">
                  <h3 className="expert-name">Dr. Sunita Devi</h3>
                  <p className="expert-role">M.Sc. Plant Pathology</p>
                  <div className="expert-tags-row">
                    <span className="expert-tag">8 Yrs Exp</span>
                    <span className="expert-tag">Pest Control</span>
                    <span className="expert-tag">Vegetables</span>
                  </div>
                </div>
              </div>
              
              <div className="expert-actions-row">
                <button className="expert-call-btn flex-1">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>call</span>
                  Call Now
                </button>
                <button className="expert-book-btn flex-1" onClick={() => navigate('/farmer/expert-booking')}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>calendar_month</span>
                  Book
                </button>
              </div>
            </article>

            {/* Expert Card 3 */}
            <article className="expert-card">
              <div className="expert-card-main-row">
                <div className="expert-avatar-wrap">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2dU_BA_VBh4yEt5f8TmnEG9NuxMHrBKw-rdi59UW7YwMpeihr_f63xQGv4u24qudKA5jTppFvf3t3zOJz5JDoSJKy7ovTkhHglKsGVrqJwOw-eDlYWAiaixWV0GMjOhP3fRKkl9McEnQeS6Yb7Nf5CrB7xGkGLwuH-rjpUwSf9MP9mPToAUhxVTnZPnKAcngWkfYbKxftVC8mJz-dk08yfmeiLNJW7-ccVfazvPLD6YB6SwSQ9aKsDxmIZk0if8CwrQCDw5BYcRs"
                    className="expert-avatar-img"
                    alt="Ramesh Agarwal"
                  />
                  <div className="expert-rating-badge">
                    <span className="material-symbols-outlined" style={{ fontSize: '12px', fontVariationSettings: "'FILL' 1" }}>star</span>
                    4.6
                  </div>
                </div>
                
                <div className="expert-info-col">
                  <h3 className="expert-name">Ramesh Agarwal</h3>
                  <p className="expert-role">Senior Agronomist</p>
                  <div className="expert-tags-row">
                    <span className="expert-tag">20+ Yrs Exp</span>
                    <span className="expert-tag">Irrigation</span>
                    <span className="expert-tag">Sugarcane</span>
                  </div>
                </div>
              </div>
              
              <div className="expert-actions-row">
                <button className="expert-call-btn flex-1">
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>call</span>
                  Call Now
                </button>
                <button className="expert-book-btn flex-1" onClick={() => navigate('/farmer/expert-booking')}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>calendar_month</span>
                  Book
                </button>
              </div>
            </article>
          </section>

          {/* Previous Consultations */}
          <section className="prev-consults-section">
            <h2 className="section-title">Previous Consultations</h2>
            <div className="prev-consults-row hide-scrollbar">
              
              {/* Consult Card 1 */}
              <div className="consult-card">
                <div>
                  <div className="consult-card-top">
                    <span className="consult-date-badge">Oct 12, 2023</span>
                    <span className="material-symbols-outlined" style={{ color: 'var(--outline)', fontSize: '18px' }}>history</span>
                  </div>
                  <h4 className="consult-title">Tomato Blight Issue</h4>
                  <p className="consult-desc">Consulted regarding early blight symptoms on tomato leaves. Recommended copper fungicide.</p>
                </div>
                <div className="consult-footer">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuClKC9lQvo7zkZXwqs9Hd8lHdfWhP86BBR13zJF7OmOIbKv7fZCx39ODjOZARZfg-DD-pNQvlOPtEfIMkxbUssAF5BQlsiPR9zXL9cTGFq1mM5h2qgJuqTbsx0IW4Rtfk5oAHqb3xu2D8_snp1HBcgjYfoKPzBojW4eo8GEqLmpCT6c7pd42SnWY-Q79lPo72e9vgUNg3OFc5pRVD4arQPBH9nDg2n-9aT5eeByUfMmjPuzA4-odo0cY2zVW9SHKQCPLqxYnR2TNs4"
                    className="consult-avatar-tiny"
                    alt="Dr. Ravi Kumar Mini"
                  />
                  <span className="consult-expert-name">Dr. Ravi Kumar</span>
                </div>
              </div>

              {/* Consult Card 2 */}
              <div className="consult-card">
                <div>
                  <div className="consult-card-top">
                    <span className="consult-date-badge">Sep 05, 2023</span>
                    <span className="material-symbols-outlined" style={{ color: 'var(--outline)', fontSize: '18px' }}>history</span>
                  </div>
                  <h4 className="consult-title">Soil Testing Report</h4>
                  <p className="consult-desc">Discussed low nitrogen levels in field B. Advised urea application schedule.</p>
                </div>
                <div className="consult-footer">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUhRpkHvp7tE-EMqsTJjLfM-VZnrT_SxvPRp9lHHxzq32xIR_F26Z08eJY5ToW6yheUuAJMwFNsrdv3lkRlXSvp_Bm12JK-grRj1oxNMHE8SQ9w7MDevzL2PCuHP6NGPdR_pUSXYI0XjmGU-PY2Zai9ZNPvkobYg1RTRoXxFhA_7pok35NlWk8uZlhBH637J5X580VWZPhL60vJkG42oGLUgFsHDeZASrkR0o7LprFr8mXoFalkBgaxzR9xelXpiaxvVgawhU-sJg"
                    className="consult-avatar-tiny"
                    alt="Dr. Sunita Devi Mini"
                  />
                  <span className="consult-expert-name">Dr. Sunita Devi</span>
                </div>
              </div>

              <div className="spacer-for-scroll" />
            </div>
          </section>

        </main>
      </div>

      {/* Floating AI Chat Button */}
      {/* (If the global floating button is already in AppNavigator, we might not need this here, 
           but matching design to the requested HTML just in case) */}
      <button 
        className="floating-ai-btn"
        style={{
          position: 'absolute', bottom: '112px', right: '16px', zIndex: 40,
          backgroundColor: 'var(--tertiary-fixed-dim)', color: 'var(--on-tertiary-fixed)',
          padding: '16px', borderRadius: '9999px', border: 'none', cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(255,185,87,0.3)', transition: 'transform 0.2s', display: 'flex'
        }}
        onClick={() => navigate('/farmer/ai-assistant')}
      >
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