import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Camera, Map, Droplets, LayoutTemplate, Languages } from 'lucide-react';
import './SignupStep1.css';

export default function SignupStep3() {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state?.formData || {};
  
  const [district, setDistrict] = useState('');
  const [irrigation, setIrrigation] = useState([]);
  const [farmingStyle, setFarmingStyle] = useState('');
  const [language, setLanguage] = useState('');

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const irrigationOptions = ['Canal', 'Tube Well', 'Rainfed', 'Drip', 'Sprinkler'];
  const farmingStyles = ['Organic', 'Conventional', 'Mixed', 'Hydroponic'];
  const languageOptions = ['English', 'हिंदी', 'मराठी', 'ગુજરાતી', 'ਪੰਜਾਬੀ'];

  const toggleIrrigation = (source) => {
    let newSources = [...irrigation];
    if (newSources.includes(source)) {
      newSources = newSources.filter(s => s !== source);
    } else {
      newSources.push(source);
    }
    setIrrigation(newSources);
    if (touched.irrigation) {
      setErrors(prev => ({ ...prev, irrigation: newSources.length === 0 ? 'Select at least one irrigation source' : '' }));
    }
  };

  const validateField = (field, value) => {
    let error = '';
    switch (field) {
      case 'district':
        if (!value || value.trim().length === 0) error = 'Enter your district';
        break;
      case 'irrigation':
        if (irrigation.length === 0) error = 'Select at least one irrigation source';
        break;
      case 'farmingStyle':
        if (!value) error = 'Select your farming style';
        break;
      case 'language':
        if (!value) error = 'Select a preferred language';
        break;
      default:
        break;
    }
    return error;
  };

  const handleBlur = (field, value) => {
    setTouched({ ...touched, [field]: true });
    setErrors(prev => ({ ...prev, [field]: validateField(field, value) }));
  };

  const handleChange = (field, value) => {
    switch (field) {
      case 'district': setDistrict(value); break;
      case 'farmingStyle': setFarmingStyle(value); break;
      case 'language': setLanguage(value); break;
    }
    if (touched[field]) {
      setErrors(prev => ({ ...prev, [field]: validateField(field, value) }));
    }
  };

  const isValid = 
    district.trim().length > 0 &&
    irrigation.length > 0 &&
    farmingStyle &&
    language;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/farmer/home');
      }, 2000);
    } else {
      setTouched({ district: true, irrigation: true, farmingStyle: true, language: true });
      setErrors({
        district: validateField('district', district),
        irrigation: validateField('irrigation', null),
        farmingStyle: validateField('farmingStyle', farmingStyle),
        language: validateField('language', language),
      });
    }
  };

  if (showSuccess) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f2fdf0' }}>
        <CheckCircle2 size={80} color="var(--success)" style={{ marginBottom: '1rem' }} />
        <h1 style={{ fontFamily: 'var(--font-headline)', fontSize: '1.75rem', color: '#0f1f11', marginBottom: '0.5rem' }}>Account Created!</h1>
        <p style={{ fontFamily: 'var(--font-body)', color: '#40493d', textAlign: 'center' }}>Welcome to NeoKrishiTech.<br/>Redirecting to your dashboard...</p>
      </div>
    );
  }

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

          <form className="signup-form" onSubmit={handleSubmit} noValidate>
            
            {/* Field 1: District */}
            <div className="signup-input-group" style={{ marginBottom: errors.district ? '0.5rem' : '1.5rem' }}>
              <label className="signup-label">District</label>
              <div className="signup-input-wrapper">
                <div className="signup-input-icon"><Map size={20} /></div>
                <input 
                  className={`signup-input with-icon ${errors.district ? 'error-border' : ''}`} 
                  placeholder="Enter your district" 
                  type="text" 
                  value={district}
                  onChange={(e) => handleChange('district', e.target.value)}
                  onBlur={(e) => handleBlur('district', e.target.value)}
                />
              </div>
              {errors.district && <p style={{ color: 'var(--error, #e53e3e)', fontSize: '0.875rem', marginTop: '0.25rem', fontFamily: 'var(--font-body)' }}>{errors.district}</p>}
            </div>

            {/* Field 2: Irrigation Source */}
            <div className="signup-input-group" style={{ marginBottom: errors.irrigation ? '0.5rem' : '1.5rem' }}>
              <label className="signup-label">
                Irrigation Source
                <span className="signup-label-subtext">Select at least 1</span>
              </label>
              <div className="crop-chip-row" style={{ flexWrap: 'wrap' }}>
                {irrigationOptions.map(source => (
                  <button 
                    key={source}
                    type="button" 
                    className={`crop-chip ${irrigation.includes(source) ? 'active' : ''} ${errors.irrigation ? 'error-border' : ''}`} 
                    onClick={() => {
                      toggleIrrigation(source);
                    }}
                    style={{ marginBottom: '0.5rem' }}
                  >
                    <Droplets size={14} style={{ marginRight: '4px' }} /> {source}
                  </button>
                ))}
              </div>
              {errors.irrigation && <p style={{ color: 'var(--error, #e53e3e)', fontSize: '0.875rem', marginTop: '0.25rem', fontFamily: 'var(--font-body)' }}>{errors.irrigation}</p>}
            </div>

            {/* Field 3: Farming Style */}
            <div className="signup-input-group" style={{ marginBottom: errors.farmingStyle ? '0.5rem' : '1.5rem' }}>
              <label className="signup-label">Farming Style</label>
              <div className="signup-input-wrapper">
                <div className="signup-input-icon"><LayoutTemplate size={20} /></div>
                <select 
                  className={`signup-input with-icon ${errors.farmingStyle ? 'error-border' : ''}`} 
                  value={farmingStyle}
                  onChange={(e) => handleChange('farmingStyle', e.target.value)}
                  onBlur={(e) => handleBlur('farmingStyle', e.target.value)}
                  style={{ appearance: 'none', backgroundColor: 'transparent' }}
                >
                  <option value="" disabled>Select your farming style</option>
                  {farmingStyles.map(style => (
                    <option key={style} value={style}>{style}</option>
                  ))}
                </select>
              </div>
              {errors.farmingStyle && <p style={{ color: 'var(--error, #e53e3e)', fontSize: '0.875rem', marginTop: '0.25rem', fontFamily: 'var(--font-body)' }}>{errors.farmingStyle}</p>}
            </div>

            {/* Field 4: Preferred Language */}
            <div className="signup-input-group" style={{ marginBottom: errors.language ? '0.5rem' : '1.5rem' }}>
              <label className="signup-label">Preferred Language</label>
              <div className="signup-input-wrapper">
                <div className="signup-input-icon"><Languages size={20} /></div>
                <select 
                  className={`signup-input with-icon ${errors.language ? 'error-border' : ''}`} 
                  value={language}
                  onChange={(e) => handleChange('language', e.target.value)}
                  onBlur={(e) => handleBlur('language', e.target.value)}
                  style={{ appearance: 'none', backgroundColor: 'transparent' }}
                >
                  <option value="" disabled>Select communication language</option>
                  {languageOptions.map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>
              {errors.language && <p style={{ color: 'var(--error, #e53e3e)', fontSize: '0.875rem', marginTop: '0.25rem', fontFamily: 'var(--font-body)' }}>{errors.language}</p>}
            </div>

          </form>
        </div>
      </div>

      <div className="signup-bottom-fixed">
        <button 
          className="btn-signup-next" 
          onClick={handleSubmit}
          disabled={!isValid && Object.keys(touched).length > 0}
          style={{ opacity: (!isValid && Object.keys(touched).length > 0) ? 0.6 : 1 }}
        >
          Complete Setup <CheckCircle2 size={18} />
        </button>
      </div>

    </div>
  );
}
