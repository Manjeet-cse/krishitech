import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomTabs from '../../components/layout/BottomTabs';
import FloatingAIButton from '../../components/ai/FloatingAIButton';
import './MoreScreen.css';

const GRID_ITEMS = [
  { icon: 'description',   label: 'Subsidy Guide',   iconClass: 'more-grid-icon--primary',   route: '/farmer/subsidy'     },
  { icon: 'school',        label: 'Learning Hub',    iconClass: 'more-grid-icon--secondary',  route: '/farmer/learning'    },
  { icon: 'shopping_bag',  label: 'Marketplace',     iconClass: 'more-grid-icon--tertiary',   route: '/farmer/marketplace' },
  { icon: 'cloud',         label: 'Weather Detail',  iconClass: 'more-grid-icon--neutral',    route: '/farmer/weather'     },
  { icon: 'person',        label: 'Profile',         iconClass: 'more-grid-icon--neutral',    route: '/farmer/profile'     },
  { icon: 'settings',      label: 'Settings',        iconClass: 'more-grid-icon--neutral',    route: '/farmer/profile'     },
];

export default function More() {
  const navigate = useNavigate();
  const [showLangSheet, setShowLangSheet] = useState(false);
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('appLanguage') || 'en');

  const languages = [
    { code: 'hi', native: 'हिंदी', label: 'Hindi' },
    { code: 'en', native: 'English', label: 'English' },
    { code: 'pa', native: 'ਪੰਜਾਬੀ', label: 'Punjabi' },
    { code: 'mr', native: 'मराठी', label: 'Marathi' },
    { code: 'gu', native: 'ગુજરાતી', label: 'Gujarati' },
    { code: 'ta', native: 'தமிழ்', label: 'Tamil' },
    { code: 'te', native: 'తెలుగు', label: 'Telugu' },
    { code: 'bn', native: 'বাংলা', label: 'Bengali' },
  ];

  const currentLangNative = languages.find(l => l.code === currentLang)?.native || 'English';

  const handleLogout = () => {
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <div className="more-screen-layout">

      {/* ── Blurred background ───────────────── */}
      <div className="more-bg" aria-hidden="true" />

      {/* ── Bottom Sheet ─────────────────────── */}
      <div className="more-sheet">

        {/* Drag Handle */}
        <div className="more-drag-handle-row">
          <div className="more-drag-handle" />
        </div>

        {/* Scrollable Content */}
        <div className="more-sheet-body">

          {/* ── Profile Snippet ─────────────── */}
          <div
            className="more-profile-card"
            role="button"
            onClick={() => navigate('/farmer/profile')}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEb0sZMqDMto5a4tOacryaoNpPVY9MFLppg4BPXQvlaHB2Us8kPTKPfAbdFIhSNX7Rb_A7sCtfIIbpPa1UGC2S36bJhZEiGYgPh4CpwHnDY8PiicAlajxrkZNDMtLO5PIc9kMRn8ByNuiw21_ac33FkkRINFOK-nC1nYCIxl-tcsVWNEybcpX4YVHGp1qxguwhVAfgeEsbP8bz-u9fEzdLnGZ2Z0Len8dJTaHNWZQQrHMuNIpi_WOizy_y4dE7qttRWhgHGdFEEqk"
              alt="Farmer profile"
              className="more-profile-avatar"
            />
            <div className="more-profile-info">
              <h2 className="more-profile-name">Ramesh Kumar</h2>
              <p className="more-profile-role">Premium Member</p>
            </div>
            <button className="more-profile-chevron" aria-label="View profile">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>

          {/* ── Explore Grid ────────────────── */}
          <section className="more-section">
            <h3 className="more-section-title">Explore NeoKrishi</h3>
            <div className="more-grid">
              {GRID_ITEMS.map(({ icon, label, iconClass, route }) => (
                <button
                  key={label}
                  className="more-grid-item"
                  onClick={() => navigate(route)}
                >
                  <div className={`more-grid-icon ${iconClass}`}>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {icon}
                    </span>
                  </div>
                  <span className="more-grid-label">{label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* ── Account & Support ───────────── */}
          <section className="more-section">
            <h3 className="more-section-title">Account &amp; Support</h3>
            <div className="more-list">
              <button className="more-list-row" onClick={() => setShowLangSheet(true)}>
                <span className="material-symbols-outlined more-list-icon">language</span>
                <span className="more-list-label">Language</span>
                <span className="more-list-value">{currentLangNative}</span>
                <span className="material-symbols-outlined more-list-chevron">chevron_right</span>
              </button>
              <button className="more-list-row">
                <span className="material-symbols-outlined more-list-icon">help</span>
                <span className="more-list-label">Help &amp; Support</span>
                <span className="material-symbols-outlined more-list-chevron">chevron_right</span>
              </button>
              <button className="more-list-row more-list-row--logout" onClick={handleLogout}>
                <span className="material-symbols-outlined more-list-icon--error">logout</span>
                <span className="more-list-label--error">Logout</span>
              </button>
            </div>
          </section>

          {/* ── Social Section ──────────────── */}
          <section className="more-social-section">
            <p className="more-social-label">Connect with NeoKrishiTech</p>
            <div className="more-social-row">
              <button className="more-social-btn" aria-label="Share">
                <span className="material-symbols-outlined">share</span>
              </button>
              <button className="more-social-btn" aria-label="Like">
                <span className="material-symbols-outlined">thumb_up</span>
              </button>
              <button className="more-social-btn" aria-label="Watch">
                <span className="material-symbols-outlined">play_arrow</span>
              </button>
            </div>
          </section>

        </div>{/* end sheet body */}
      </div>{/* end sheet */}

      {/* ── Language Selection Sheet ────────── */}
      {showLangSheet && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 100,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }} onClick={() => setShowLangSheet(false)}>
          <div style={{
            backgroundColor: '#ebffe7',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            padding: '24px',
            maxHeight: '80vh',
            overflowY: 'auto'
          }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ margin: 0, fontFamily: 'var(--font-headline)', color: '#0d631b', fontSize: '18px' }}>Select Language</h3>
              <button onClick={() => setShowLangSheet(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#40493d' }}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {languages.map(l => (
                <button
                  key={l.code}
                  onClick={() => {
                    setCurrentLang(l.code);
                    localStorage.setItem('appLanguage', l.code);
                    setShowLangSheet(false);
                  }}
                  style={{
                    padding: '16px',
                    borderRadius: '16px',
                    border: currentLang === l.code ? '2px solid #0d631b' : '1px solid #bfcaba',
                    backgroundColor: currentLang === l.code ? '#e5f9e2' : '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 'bold', color: '#0f1f11', fontSize: '16px' }}>{l.native}</span>
                  <span style={{ fontFamily: 'var(--font-body)', color: '#40493d', fontSize: '12px' }}>{l.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <FloatingAIButton />

      {/* ── Bottom Nav ───────────────────────── */}
      <div className="screen-bottomnav">
        <BottomTabs />
      </div>
    </div>
  );
}