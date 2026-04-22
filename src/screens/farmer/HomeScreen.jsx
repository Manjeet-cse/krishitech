import { useNavigate } from 'react-router-dom';
import { Sun, Droplets, Wind, ScanLine, ShoppingCart, Headset, BookOpen, ChevronRight } from 'lucide-react';
import AppTopBar from '../../components/common/AppTopBar';
import BottomTabs from '../../components/layout/BottomTabs';
import './HomeScreen.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="screen-layout bg-muted">
      <AppTopBar title="NeoKrishiTech" showBack={false} showNotification={true} />

      <div className="screen-body">
        <div className="screen-content pb-nav">
          
          {/* Weather Widget */}
          <div className="weather-widget card" onClick={() => navigate('/farmer/weather')}>
            <div className="weather-left">
              <Sun size={40} color="var(--tertiary)" />
              <div>
                <h3>28°C • Sunny</h3>
                <p>Ludhiana, Punjab</p>
              </div>
            </div>
            <div className="weather-right">
              <div className="weather-stat"><Droplets size={14}/> 45%</div>
              <div className="weather-stat"><Wind size={14}/> 12 km/h</div>
            </div>
          </div>

          {/* Quick Action Cards */}
          <div className="quick-actions">
            <div className="qa-card" onClick={() => navigate('/farmer/diagnosis')}>
              <div className="qa-icon-box bg-green"><ScanLine color="var(--primary)" size={24} /></div>
              <p>Diagnose</p>
            </div>
            <div className="qa-card" onClick={() => navigate('/farmer/marketplace')}>
              <div className="qa-icon-box bg-orange"><ShoppingCart color="var(--tertiary)" size={24} /></div>
              <p>Buy Inputs</p>
            </div>
            <div className="qa-card" onClick={() => navigate('/farmer/experts')}>
              <div className="qa-icon-box bg-blue"><Headset color="#1976D2" size={24} /></div>
              <p>Talk to Expert</p>
            </div>
            <div className="qa-card" onClick={() => navigate('/farmer/subsidy')}>
              <div className="qa-icon-box bg-grey"><BookOpen color="var(--neutral-dark)" size={24} /></div>
              <p>Subsidies</p>
            </div>
          </div>

          {/* Insights Alert */}
          <div className="alert-card card border-error">
            <div className="alert-badge">Alert</div>
            <p>High chances of <strong>Aphid attack</strong> on Mustard in your area. Spray Neem oil today.</p>
          </div>

          {/* Crop Management */}
          <div className="section-header">
            <h3>Your Crops</h3>
          </div>
          <div className="card crop-mgmt-card">
            <div className="bg-img-crop"></div>
            <div className="crop-info">
              <h4>Mustard</h4>
              <p>Sown 45 days ago • Vegetative stage</p>
              <div className="progress-container">
                <div className="progress-bar"><div className="progress-fill" style={{width: '60%'}}></div></div>
                <span>Next: Irrigation in 2 days</span>
              </div>
              <button className="btn-outline-primary full-width mt-4">View Schedule</button>
            </div>
          </div>

          {/* Mandi Connect Teaser */}
          <div className="section-header">
            <h3>Mandi Updates</h3>
            <button className="text-btn green-text" onClick={() => navigate('/farmer/mandi')}>View All <ChevronRight size={16} /></button>
          </div>
          <div className="card mandi-teaser">
            <div className="mandi-row">
              <div>
                <h4>Mustard ( सरसों )</h4>
                <p>Ludhiana Mandi</p>
              </div>
              <div className="price-up">
                <h4>₹5,400 / qtl</h4>
                <p>+ ₹120 (↑)</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="screen-bottomnav">
        <BottomTabs />
      </div>

    </div>
  );
}
