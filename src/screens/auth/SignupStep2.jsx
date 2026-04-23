import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Leaf, ShieldCheck, ArrowRight } from 'lucide-react';
import './SignupStep1.css';

export default function SignupStep2() {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state?.formData || { mobile: '9876543210' };
  
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(45);
  const [error, setError] = useState('');
  
  const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  useEffect(() => {
    const id = setInterval(() => setTimer(t => t > 0 ? t - 1 : 0), 1000);
    return () => clearInterval(id);
  }, []);

  const handleChange = (index, value) => {
    // Only allow numbers
    if (value && !/^\d$/.test(value)) return;
    
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError(''); // Clear error on change

    if (value && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const isOtpComplete = otp.every(digit => digit !== '');

  const handleSubmit = () => {
    if (isOtpComplete) {
      navigate('/signup/step3', { state: { formData, otp: otp.join('') } });
    } else {
      setError('Enter valid 6-digit OTP');
    }
  };

  return (
    <div className="signup-screen-wrapper">
      
      <div className="signup-header-bg">
        <div className="signup-pattern-bg"></div>
        
        <div className="signup-top-row">
          <button className="signup-back-btn" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
          </button>
          <div className="signup-badge">
            <ShieldCheck size={14} />
            <span className="signup-badge-text">Verify Mobile</span>
          </div>
        </div>

        <div className="signup-heading">
          <h1 className="signup-title">Verify OTP</h1>
          <p className="signup-subtitle">Securing your farm account.</p>
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
              <div className="progress-circle active">2</div>
              <span className="progress-label active">Step 2</span>
            </div>
            <div className="progress-line"></div>
            
            <div className="progress-step">
              <div className="progress-circle">3</div>
              <span className="progress-label">Step 3</span>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.375rem', fontWeight: 700, color: '#0f1f11', marginBottom: '0.5rem' }}>OTP Verification</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: '#40493d' }}>
              Enter the 6-digit code sent to<br/>
              <span style={{ color: 'var(--primary)', fontWeight: 600 }}>+91 {formData.mobile}</span>
            </p>
          </div>

          {/* OTP Input Boxes */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={inputRefs[i]}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                style={{
                  width: '45px',
                  height: '56px',
                  backgroundColor: '#daeed6',
                  border: digit ? '2px solid var(--primary)' : (error ? '2px solid var(--error, #e53e3e)' : '1px solid #bfcaba'),
                  borderRadius: '0.75rem',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  textAlign: 'center',
                  color: '#0f1f11',
                  fontFamily: 'var(--font-headline)',
                  outline: 'none',
                  transition: 'all 0.2s',
                }}
              />
            ))}
          </div>

          {error && <p style={{ textAlign: 'center', color: 'var(--error, #e53e3e)', fontSize: '0.875rem', marginBottom: '1rem', fontFamily: 'var(--font-body)' }}>{error}</p>}

          <p style={{ textAlign: 'center', fontSize: '0.875rem', color: '#707a6c', fontFamily: 'var(--font-body)', marginBottom: '2rem' }}>
            Didn't receive code? {timer > 0 ? `00:${String(timer).padStart(2, '0')}` : ''}
            {timer === 0 && <button style={{ color: 'var(--primary)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', marginLeft: '0.5rem' }} onClick={() => setTimer(45)}>Resend</button>}
          </p>

        </div>
      </div>

      <div className="signup-bottom-fixed">
        <button 
          className="btn-signup-next" 
          onClick={handleSubmit}
          disabled={!isOtpComplete}
          style={{ opacity: !isOtpComplete ? 0.6 : 1 }}
        >
          Verify & Continue <ArrowRight size={18} />
        </button>
      </div>

    </div>
  );
}
