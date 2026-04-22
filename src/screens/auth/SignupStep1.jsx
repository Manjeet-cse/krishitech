import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Leaf, User, Smartphone, MapPin, LocateFixed, ArrowRight } from 'lucide-react';
import './SignupStep1.css';

export default function SignupStep1() {
  const navigate = useNavigate();
  const [activeCrop, setActiveCrop] = useState('wheat');

  return (
    <div className="signup-screen-wrapper">
      
      {/* Top Header Section */}
      <div className="signup-header-bg">
        <div className="signup-pattern-bg"></div>
        
        <div className="signup-top-row">
          <button className="signup-back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
          </button>
          <div className="signup-badge">
            <Leaf size={14} />
            <span className="signup-badge-text">Kisan Registration</span>
          </div>
        </div>

        <div className="signup-heading">
          <h1 className="signup-title">Welcome!</h1>
          <p className="signup-subtitle">Let's set up your digital farm profile.</p>
        </div>
      </div>

      {/* Main Form Content */}
      <div className="signup-main-content">
        <div className="signup-form-card">
          
          {/* Progress Bar */}
          <div className="signup-progress-bar">
            <div className="progress-step">
              <div className="progress-circle active">1</div>
              <span className="progress-label active">Step 1</span>
            </div>
            <div className="progress-line"><div className="progress-line-fill" style={{ width: '50%' }}></div></div>
            
            <div className="progress-step">
              <div className="progress-circle">2</div>
              <span className="progress-label">Step 2</span>
            </div>
            <div className="progress-line"></div>
            
            <div className="progress-step">
              <div className="progress-circle">3</div>
              <span className="progress-label">Step 3</span>
            </div>
          </div>

          <form className="signup-form" onSubmit={(e) => { e.preventDefault(); navigate('/signup/step2'); }}>
            
            {/* Field 1: Full Name */}
            <div className="signup-input-group">
              <label className="signup-label">Full Name</label>
              <div className="signup-input-wrapper">
                <div className="signup-input-icon"><User size={20} /></div>
                <input className="signup-input with-icon" placeholder="Enter your full name" type="text" />
              </div>
            </div>

            {/* Field 2: Mobile Number */}
            <div className="signup-input-group">
              <label className="signup-label">Mobile Number</label>
              <div className="signup-input-wrapper">
                <div className="signup-prefix-box">+91</div>
                <div style={{ position: 'relative', flex: 1 }}>
                  <div className="signup-input-icon"><Smartphone size={20} /></div>
                  <input className="signup-input with-icon" placeholder="10-digit mobile number" type="tel" />
                </div>
              </div>
            </div>

            {/* Field 3: Village */}
            <div className="signup-input-group">
              <label className="signup-label">Your Village</label>
              <div style={{ position: 'relative' }}>
                <div className="signup-input-icon"><MapPin size={20} /></div>
                <input className="signup-input with-icon with-icon-right" placeholder="Search village or pincode" type="text" />
                <button type="button" className="signup-input-action">
                  <LocateFixed size={20} />
                </button>
              </div>
            </div>

            {/* Field 4: Primary Crop */}
            <div className="signup-input-group">
              <label className="signup-label">
                Primary Crop Season
                <span className="signup-label-subtext">Select one</span>
              </label>
              <div className="crop-chip-row">
                {[
                  { key: 'wheat', emoji: '🌾', label: 'Wheat' },
                  { key: 'rice', emoji: '🚜', label: 'Rice' },
                  { key: 'cotton', emoji: '🌱', label: 'Cotton' },
                  { key: 'sugarcane', emoji: '🎋', label: 'Sugarcane' },
                ].map(crop => (
                  <button 
                    key={crop.key}
                    type="button" 
                    className={`crop-chip ${activeCrop === crop.key ? 'active' : ''}`} 
                    onClick={() => setActiveCrop(crop.key)}
                  >
                    {crop.emoji} {crop.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Field 5: Land Size */}
            <div className="signup-input-group" style={{ marginBottom: '1rem' }}>
              <label className="signup-label">Total Land Size</label>
              <div className="land-size-container">
                <div className="land-input-box">
                  <input className="signup-input land-input" placeholder="0" type="number" />
                  <div className="land-unit-label">Bigha</div>
                </div>
                <div className="land-plus">+</div>
                <div className="land-input-box">
                  <input className="signup-input land-input" placeholder="0" type="number" />
                  <div className="land-unit-label">Acres</div>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>

      <div className="signup-bottom-fixed">
        <button className="btn-signup-next" onClick={() => navigate('/signup/step2')}>
          Continue <ArrowRight size={18} />
        </button>
      </div>

    </div>
  );
}
