import { useNavigate } from 'react-router-dom';
import BottomTabs from '../../components/layout/BottomTabs';
import './HomeScreen.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="screen-layout home-container">
      {/* Top App Bar */}
      <header className="screen-topbar home-header">
        <div className="home-header-left">
          <span className="material-symbols-outlined" style={{ cursor: 'pointer' }}>menu</span>
          <h1 className="home-header-title">NeoKrishiTech</h1>
        </div>
        <div className="home-header-right">
          <div className="home-notification-wrap">
            <span className="material-symbols-outlined">notifications</span>
            <span className="home-notification-dot"></span>
          </div>
          <div className="home-profile-avatar" onClick={() => navigate('/farmer/profile')}>
            <img 
              alt="Profile" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtJrn9EKkcquazanT3bOycXozmultkop2H2rmSgiiDuuqLtB1TmAemeDlDODzMDAAsg4HLp9xsJLYhaXcPDTicpwJIDIdVo0P3fVOQ802EbNeiZdRH_WVVp_zbjPzQPIpx-wstWJyinm5R7Lc34divhYYsm1eJjpdRr-k1BQ4rwRPLmBBCswrdefSQx2bgVyoRU5p1m45sfBYMdAaqleAAHkfuf2yLgyalYU7tNTHNpT2d8ig9V0UDalVW-NrbyyTzXIPvAywC9-A"
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="screen-body home-main">
        <div className="home-content-wrap pb-nav">
          
          {/* SECTION 1: Your Crops (Horizontal Bento) */}
          <section>
            <h2 className="home-section-title">Your Crops</h2>
            <div className="crops-scroll-row">
              {/* Wheat Card */}
              <div className="crop-card">
                <div className="crop-img-wrap">
                  <img 
                    alt="Wheat field" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrnaOut2o3NiA8wuftZUesZmlTSSIGvCnzuiXGtIXxm8niujcsKrNac6pWYe7ml22n1uxVg7TjvWA4lBmXVFbreYXQy2GZjku-GXmQH7cBOgaSse4x_j1EMcF1kL6UvGW1mKHMrMfceUZMPAXh8XRQM6C3K1S7KEH4sZHCi1fx6klAz_ebFqG565PWV03RQj14gtZKZQkJYSBqph0YY4OMY-SXETlmtATPXvEQCQ9DCVq8RMurGP8552dl3DnaMJoA8I1MEPvlFjU"
                  />
                </div>
                <div className="crop-card-body">
                  <div className="crop-card-header">
                    <h3 className="crop-card-title">Wheat</h3>
                    <span className="crop-status-badge healthy">HEALTHY</span>
                  </div>
                  <div>
                    <div className="crop-progress-info">
                      <span className="crop-progress-label">Growth: 65%</span>
                    </div>
                    <div className="crop-progress-track">
                      <div className="crop-progress-fill" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className="crop-next-step harvest">
                    Next: Harvesting in 18 days
                  </div>
                  <button className="crop-action-btn">View Schedule</button>
                </div>
              </div>

              {/* Mustard Card */}
              <div className="crop-card border-alert">
                <div className="crop-card-body">
                  <div className="crop-card-header">
                    <h3 className="crop-card-title">Mustard</h3>
                    <span className="crop-status-badge attention">Needs Attention</span>
                  </div>
                  <div className="crop-alert-box">
                    <p>
                      <span className="material-symbols-outlined" style={{ fontSize: '12px', verticalAlign: 'middle', marginRight: '4px' }}>warning</span> 
                      Aphid attack risk detected. Spray Neem oil today.
                    </p>
                  </div>
                  <div>
                    <div className="crop-progress-info">
                      <span className="crop-progress-label">Growth: 40%</span>
                    </div>
                    <div className="crop-progress-track">
                      <div className="crop-progress-fill" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div className="crop-next-step irrigation">
                    Next: Irrigation in 2 days
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: Weather Dashboard */}
          <section className="weather-card" onClick={() => navigate('/farmer/weather')}>
            <div className="weather-header">
              <div>
                <div className="weather-location">
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>location_on</span>
                  <span className="weather-location-text">Ludhiana, Punjab</span>
                </div>
                <div className="weather-current">
                  <span className="weather-temp">28°C</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '30px', color: 'var(--tertiary)', fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
                  <span className="weather-desc">• Sunny</span>
                </div>
              </div>
              <div className="weather-stats">
                <p>Humidity: 45%</p>
                <p>Wind: 12 km/h</p>
              </div>
            </div>
            
            <div className="weather-impact">
              <p className="weather-impact-title">Weather Impact on Your Crops</p>
              <div className="weather-impact-tags">
                <span className="weather-tag safe">Wheat (Safe)</span>
                <span className="weather-tag risk">Mustard (Risk)</span>
                <span className="weather-tag action">Spray before 8 AM</span>
              </div>
            </div>

            <div className="weather-forecast">
              <div className="forecast-item">
                <p className="forecast-day">Tomorrow</p>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#006e1c' }}>partly_cloudy_day</span>
                <p className="forecast-temp">26°</p>
              </div>
              <div className="forecast-item">
                <p className="forecast-day">Wed</p>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--primary)' }}>cloudy_snowing</span>
                <p className="forecast-temp">22°</p>
              </div>
              <div className="forecast-item">
                <p className="forecast-day">Thu</p>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#ffb957' }}>wb_sunny</span>
                <p className="forecast-temp">29°</p>
              </div>
            </div>
          </section>

          {/* SECTION 3: Quick Actions Grid */}
          <section>
            <h2 className="home-section-title">Quick Actions</h2>
            <div className="actions-grid">
              <div className="action-item" onClick={() => navigate('/farmer/diagnosis')}>
                <div className="action-icon-box diagnose">
                  <span className="material-symbols-outlined" style={{ fontSize: '24px', fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                </div>
                <span className="action-label">Diagnose</span>
              </div>
              <div className="action-item" onClick={() => navigate('/farmer/marketplace')}>
                <div className="action-icon-box buy">
                  <span className="material-symbols-outlined" style={{ fontSize: '24px', fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
                </div>
                <span className="action-label">Buy Inputs</span>
              </div>
              <div className="action-item" onClick={() => navigate('/farmer/experts')}>
                <div className="action-icon-box expert">
                  <span className="material-symbols-outlined" style={{ fontSize: '24px', fontVariationSettings: "'FILL' 1" }}>psychology</span>
                </div>
                <span className="action-label">Expert</span>
              </div>
              <div className="action-item" onClick={() => navigate('/farmer/subsidy')}>
                <div className="action-icon-box subsidies">
                  <span className="material-symbols-outlined" style={{ fontSize: '24px', fontVariationSettings: "'FILL' 1" }}>account_balance</span>
                </div>
                <span className="action-label">Subsidies</span>
              </div>
            </div>
          </section>

          {/* SECTION 4: Government Schemes */}
          <section className="schemes-section">
            <h2 className="home-section-title" style={{ marginBottom: '16px' }}>Govt Schemes</h2>
            <div className="schemes-list">
              <div className="scheme-card" onClick={() => navigate('/farmer/subsidy')}>
                <div className="scheme-icon-box primary">
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                </div>
                <div className="scheme-info">
                  <h3 className="scheme-title">PM-KISAN Samman Nidhi</h3>
                  <p className="scheme-value secondary">₹6,000/year</p>
                </div>
                <span className="scheme-badge deadline">Deadline: 31 Mar</span>
              </div>
              <div className="scheme-card" onClick={() => navigate('/farmer/subsidy')}>
                <div className="scheme-icon-box tertiary">
                  <span className="material-symbols-outlined">shield_with_heart</span>
                </div>
                <div className="scheme-info">
                  <h3 className="scheme-title">PM Fasal Bima Yojana</h3>
                  <p className="scheme-value tertiary-container">Coverage: ₹2,00,000</p>
                </div>
                <span className="material-symbols-outlined scheme-verified">verified</span>
              </div>
            </div>
          </section>

          {/* SECTION 5: AI Farming Tip */}
          <section className="ai-tip-card">
            <div className="ai-tip-header">
              <span className="material-symbols-outlined" style={{ color: 'var(--tertiary)', fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
              <h2 className="ai-tip-title">AI Tip for Today</h2>
            </div>
            <p className="ai-tip-text">
              Apply DAP fertilizer to Wheat within the next 48 hours for optimal tiller development. The current soil moisture at 18% is ideal for absorption.
            </p>
            <button className="ai-tip-action">
              Ask AI for more tips
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </section>

          {/* SECTION 6: Mandi Updates Teaser */}
          <section className="mandi-card" onClick={() => navigate('/farmer/mandi')}>
            <div className="mandi-header">
              <h2 className="mandi-title">Mandi Updates</h2>
              <span className="mandi-subtitle">Ludhiana Market</span>
            </div>
            <div className="mandi-list">
              <div className="mandi-item">
                <span className="mandi-crop-name">🌾 Wheat Lok-1</span>
                <div className="mandi-trend up">
                  <span>↑ 0.6%</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>trending_up</span>
                </div>
              </div>
              <div className="mandi-item">
                <span className="mandi-crop-name">🟡 Mustard Black</span>
                <div className="mandi-trend down">
                  <span>↓ 0.8%</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>trending_down</span>
                </div>
              </div>
              <div className="mandi-item">
                <span className="mandi-crop-name">🍚 Basmati Rice</span>
                <div className="mandi-trend up">
                  <span>↑ 2.5%</span>
                  <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>trending_up</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>



      {/* Bottom Navigation Bar */}
      <div className="screen-bottomnav">
        <BottomTabs />
      </div>

    </div>
  );
}
