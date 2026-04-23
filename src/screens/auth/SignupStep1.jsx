import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Leaf, User, Smartphone, Mail, MapPin, LocateFixed, ArrowRight, CheckCircle2 } from 'lucide-react';
import './SignupStep1.css';

export default function SignupStep1() {
  const navigate = useNavigate();
  
  // Form State
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [village, setVillage] = useState('');
  const [activeCrop, setActiveCrop] = useState('');
  const [landBigha, setLandBigha] = useState('');
  const [landAcres, setLandAcres] = useState('');

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (field, value) => {
    let error = '';
    switch (field) {
      case 'fullName':
        if (!value || value.trim().length < 3) error = 'Enter your full name (min 3 chars)';
        break;
      case 'mobile':
        if (!/^\d{10}$/.test(value)) error = 'Enter a valid 10-digit mobile number';
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Enter a valid email address';
        break;
      case 'village':
        if (!value || value.trim().length === 0) error = 'Enter your village name';
        break;
      case 'landSize':
        if (!landBigha && !landAcres) error = 'Enter land size';
        break;
      case 'activeCrop':
        if (!value) error = 'Select your crop';
        break;
      default:
        break;
    }
    return error;
  };

  const handleBlur = (field, value) => {
    setTouched({ ...touched, [field]: true });
    const error = validateField(field, value);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleChange = (field, value) => {
    switch (field) {
      case 'fullName': setFullName(value); break;
      case 'mobile': setMobile(value.replace(/\D/g, '').slice(0, 10)); break;
      case 'email': setEmail(value); break;
      case 'village': setVillage(value); break;
      case 'landBigha': setLandBigha(value); break;
      case 'landAcres': setLandAcres(value); break;
    }
    if (touched[field]) {
      const error = validateField(field, field === 'mobile' ? value.replace(/\D/g, '').slice(0, 10) : value);
      setErrors(prev => ({ ...prev, [field]: error }));
    }
  };

  // Re-validate landSize if either changes
  const handleLandSizeBlur = () => {
    setTouched({ ...touched, landSize: true });
    setErrors(prev => ({ ...prev, landSize: validateField('landSize') }));
  };

  const isValid = 
    fullName.trim().length >= 3 &&
    /^\d{10}$/.test(mobile) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    village.trim().length > 0 &&
    activeCrop &&
    (landBigha || landAcres);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      const formData = { fullName, mobile, email, village, activeCrop, landBigha, landAcres };
      navigate('/signup/step2', { state: { formData } });
    } else {
      // Force all touched
      setTouched({ fullName: true, mobile: true, email: true, village: true, landSize: true, activeCrop: true });
      setErrors({
        fullName: validateField('fullName', fullName),
        mobile: validateField('mobile', mobile),
        email: validateField('email', email),
        village: validateField('village', village),
        landSize: validateField('landSize'),
        activeCrop: validateField('activeCrop', activeCrop),
      });
    }
  };

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

          <form className="signup-form" onSubmit={handleSubmit} noValidate>
            
            {/* Field 1: Full Name */}
            <div className="signup-input-group" style={{ marginBottom: errors.fullName ? '0.5rem' : '1.5rem' }}>
              <label className="signup-label">Full Name</label>
              <div className="signup-input-wrapper">
                <div className="signup-input-icon"><User size={20} /></div>
                <input 
                  className={`signup-input with-icon ${errors.fullName ? 'error-border' : ''}`} 
                  placeholder="Enter your full name" 
                  type="text" 
                  value={fullName}
                  onChange={(e) => handleChange('fullName', e.target.value)}
                  onBlur={(e) => handleBlur('fullName', e.target.value)}
                />
                {!errors.fullName && touched.fullName && fullName.trim().length >= 3 && (
                  <CheckCircle2 size={20} color="var(--success)" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                )}
              </div>
              {errors.fullName && <p style={{ color: 'var(--error, #e53e3e)', fontSize: '0.875rem', marginTop: '0.25rem', fontFamily: 'var(--font-body)' }}>{errors.fullName}</p>}
            </div>

            {/* Field 2: Mobile Number */}
            <div className="signup-input-group" style={{ marginBottom: errors.mobile ? '0.5rem' : '1.5rem' }}>
              <label className="signup-label">Mobile Number</label>
              <div className="signup-input-wrapper">
                <div className="signup-prefix-box">+91</div>
                <div style={{ position: 'relative', flex: 1 }}>
                  <div className="signup-input-icon"><Smartphone size={20} /></div>
                  <input 
                    className={`signup-input with-icon ${errors.mobile ? 'error-border' : ''}`} 
                    placeholder="10-digit mobile number" 
                    type="tel" 
                    value={mobile}
                    onChange={(e) => handleChange('mobile', e.target.value)}
                    onBlur={(e) => handleBlur('mobile', e.target.value)}
                  />
                  {!errors.mobile && touched.mobile && mobile.length === 10 && (
                    <CheckCircle2 size={20} color="var(--success)" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                  )}
                </div>
              </div>
              {errors.mobile && <p style={{ color: 'var(--error, #e53e3e)', fontSize: '0.875rem', marginTop: '0.25rem', fontFamily: 'var(--font-body)' }}>{errors.mobile}</p>}
            </div>

            {/* Field 3: Email */}
            <div className="signup-input-group" style={{ marginBottom: errors.email ? '0.5rem' : '1.5rem' }}>
              <label className="signup-label">Email</label>
              <div className="signup-input-wrapper">
                <div className="signup-input-icon"><Mail size={20} /></div>
                <input 
                  className={`signup-input with-icon ${errors.email ? 'error-border' : ''}`} 
                  placeholder="name@email.com" 
                  type="email" 
                  value={email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={(e) => handleBlur('email', e.target.value)}
                />
                {!errors.email && touched.email && email.includes('@') && (
                  <CheckCircle2 size={20} color="var(--success)" style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)' }} />
                )}
              </div>
              {errors.email && <p style={{ color: 'var(--error, #e53e3e)', fontSize: '0.875rem', marginTop: '0.25rem', fontFamily: 'var(--font-body)' }}>{errors.email}</p>}
            </div>

            {/* Field 4: Village */}
            <div className="signup-input-group" style={{ marginBottom: errors.village ? '0.5rem' : '1.5rem' }}>
              <label className="signup-label">Your Village</label>
              <div style={{ position: 'relative' }}>
                <div className="signup-input-icon"><MapPin size={20} /></div>
                <input 
                  className={`signup-input with-icon with-icon-right ${errors.village ? 'error-border' : ''}`} 
                  placeholder="Search village or pincode" 
                  type="text" 
                  value={village}
                  onChange={(e) => handleChange('village', e.target.value)}
                  onBlur={(e) => handleBlur('village', e.target.value)}
                />
                <button type="button" className="signup-input-action">
                  <LocateFixed size={20} />
                </button>
              </div>
              {errors.village && <p style={{ color: 'var(--error, #e53e3e)', fontSize: '0.875rem', marginTop: '0.25rem', fontFamily: 'var(--font-body)' }}>{errors.village}</p>}
            </div>

            {/* Field 5: Primary Crop */}
            <div className="signup-input-group" style={{ marginBottom: errors.activeCrop ? '0.5rem' : '1.5rem' }}>
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
                    className={`crop-chip ${activeCrop === crop.key ? 'active' : ''} ${errors.activeCrop ? 'error-border' : ''}`} 
                    onClick={() => {
                      setActiveCrop(crop.key);
                      setErrors(prev => ({ ...prev, activeCrop: '' }));
                    }}
                  >
                    {crop.emoji} {crop.label}
                  </button>
                ))}
              </div>
              {errors.activeCrop && <p style={{ color: 'var(--error, #e53e3e)', fontSize: '0.875rem', marginTop: '0.25rem', fontFamily: 'var(--font-body)' }}>{errors.activeCrop}</p>}
            </div>

            {/* Field 6: Land Size */}
            <div className="signup-input-group" style={{ marginBottom: '1rem' }}>
              <label className="signup-label">Total Land Size</label>
              <div className="land-size-container">
                <div className="land-input-box">
                  <input 
                    className={`signup-input land-input ${errors.landSize ? 'error-border' : ''}`} 
                    placeholder="0" 
                    type="number"
                    min="0"
                    value={landBigha}
                    onChange={(e) => {
                      handleChange('landBigha', e.target.value);
                      setErrors(prev => ({ ...prev, landSize: '' }));
                    }}
                    onBlur={handleLandSizeBlur}
                  />
                  <div className="land-unit-label">Bigha</div>
                </div>
                <div className="land-plus">+</div>
                <div className="land-input-box">
                  <input 
                    className={`signup-input land-input ${errors.landSize ? 'error-border' : ''}`} 
                    placeholder="0" 
                    type="number" 
                    min="0"
                    value={landAcres}
                    onChange={(e) => {
                      handleChange('landAcres', e.target.value);
                      setErrors(prev => ({ ...prev, landSize: '' }));
                    }}
                    onBlur={handleLandSizeBlur}
                  />
                  <div className="land-unit-label">Acres</div>
                </div>
              </div>
              {errors.landSize && <p style={{ color: 'var(--error, #e53e3e)', fontSize: '0.875rem', marginTop: '0.25rem', fontFamily: 'var(--font-body)' }}>{errors.landSize}</p>}
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
          Continue <ArrowRight size={18} />
        </button>
      </div>

    </div>
  );
}
