import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Camera } from 'lucide-react';
import './SignupStep1.css';

export default function SignupStep3() {
  const navigate = useNavigate();

  return (
    <div className="signup-screen-wrapper">
      
      <div className="signup-header-bg">
        <div className="signup-pattern-bg"></div>
        
        <div className="signup-top-row">
          <button className="signup-back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
          </button>
          <div className="signup-badge">
            <CheckCircle2 size={14} />
            <span className="signup-badge-text">Profile Setup</span>
          </div>
        </div>

        <div className="signup-heading">
          <h1 className="signup-title">Almost Done!</h1>
          <p className="signup-subtitle">Finish setting up your farmer profile.</p>
        </div>
      </div>

      <div className="signup-main-content">
        <div className="signup-form-card">
          
          {/* Progress Bar */}
          <div className="signup-progress-bar">
            <div className="progress-step">
              <div className="progress-circle active">✓</div>
              <span className="progress-label active">Step 1</span>
            </div>
            <div className="progress-line"><div className="progress-line-fill" style={{ width: '100%' }}></div></div>
            
            <div className="progress-step">
              <div className="progress-circle active">✓</div>
              <span className="progress-label active">Step 2</span>
            </div>
            <div className="progress-line"><div className="progress-line-fill" style={{ width: '100%' }}></div></div>
            
            <div className="progress-step">
              <div className="progress-circle active">3</div>
              <span className="progress-label active">Step 3</span>
            </div>
          </div>

          {/* Avatar Upload */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div style={{
              width: '88px',
              height: '88px',
              borderRadius: '9999px',
              border: '2px dashed var(--primary)',
              background: '#e5f9e2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              position: 'relative',
            }}>
              <Camera size={28} color="var(--primary)" />
              <div style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '24px',
                height: '24px',
                borderRadius: '9999px',
                background: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ color: 'white', fontSize: '14px', fontWeight: 'bold' }}>+</span>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className="signup-bottom-fixed">
        <button className="btn-signup-next" onClick={() => navigate('/farmer/home')}>
          Complete Setup <CheckCircle2 size={18} />
        </button>
      </div>

    </div>
  );
}
