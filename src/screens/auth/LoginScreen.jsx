import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, EyeOff, MessageSquare, ChevronDown } from 'lucide-react';
import './LoginScreen.css';

export default function LoginScreen() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (phoneNumber && pin) {
      navigate('/farmer/home');
    }
  };

  return (
    <div className="login-screen-wrapper">
      
      {/* Header Background */}
      <div className="login-header-bg">
        <div className="login-silhouette-bg" data-alt="silhouette of wheat stalks against a light green background, subtle agricultural texture"></div>
        <div className="login-logo-text">
          <Leaf size={32} color="var(--primary)" fill="var(--primary)" />
          NeoKrishiTech
        </div>
        <div className="login-pill-badge">Kisan Login</div>
      </div>

      {/* Form Card */}
      <div className="login-form-card">
        <h1>Welcome Back!</h1>
        <form onSubmit={handleLogin}>
          
          {/* Mobile Number Field */}
          <div className="login-input-group">
            <label className="login-input-label">Mobile Number</label>
            <div className="login-input-field-wrapper">
              <div className="login-input-prefix">
                <span>+91</span>
                <ChevronDown size={16} />
              </div>
              <input 
                className="login-input-field with-prefix" 
                placeholder="Enter your number" 
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          {/* Password/PIN Field */}
          <div className="login-input-group mb-2">
            <label className="login-input-label">Password / PIN</label>
            <div className="login-input-field-wrapper">
              <input 
                className="login-input-field" 
                placeholder="Enter PIN" 
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
              <EyeOff size={20} className="login-input-icon-right" />
            </div>
            <a className="login-forgot-link" href="#">Forgot PIN?</a>
          </div>

          {/* Login Button */}
          <button className="login-btn-primary" type="submit">
            Log In
          </button>

          {/* Divider */}
          <div className="login-divider">or log in with</div>

          {/* Alternative Login Buttons */}
          <div className="login-alt-buttons">
            <button className="login-btn-ghost" type="button">
              <MessageSquare size={20} />
              OTP Login
            </button>
            <button className="login-btn-ghost" type="button">
              <svg style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
              </svg>
              Continue with Google
            </button>
          </div>

          {/* Register Link */}
          <a className="login-link-text" href="#" onClick={(e) => { e.preventDefault(); navigate('/signup/step1'); }}>
            New farmer? Register Now
          </a>
        </form>
      </div>

    </div>
  );
}
