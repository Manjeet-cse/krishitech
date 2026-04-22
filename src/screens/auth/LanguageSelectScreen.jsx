import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LanguageSelectScreen.css';

const LANGUAGES = [
  { code: 'hi', native: 'हिंदी', label: 'Hindi' },
  { code: 'en', native: 'English', label: 'English' },
  { code: 'pa', native: 'ਪੰਜਾਬੀ', label: 'Punjabi' },
  { code: 'mr', native: 'मराठी', label: 'Marathi' },
  { code: 'gu', native: 'ગુજરાતી', label: 'Gujarati' },
  { code: 'ta', native: 'தமிழ்', label: 'Tamil' },
  { code: 'te', native: 'తెలుగు', label: 'Telugu' },
  { code: 'bn', native: 'বাংলা', label: 'Bengali' },
];

export default function LanguageSelectScreen() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState('en');

  const handleContinue = () => {
    localStorage.setItem('appLanguage', selected);
    navigate('/onboarding');
  };

  return (
    <div className="lang-screen">

      {/* ── Header ────────────────────────────── */}
      <header className="lang-topbar">
        <span
          className="material-symbols-outlined lang-topbar-icon"
          aria-hidden="true"
        >language</span>
        <h1 className="lang-topbar-title">Select Language</h1>
      </header>

      {/* ── Subtitle ──────────────────────────── */}
      <p className="lang-subtitle">
        Choose your preferred language to customize your agricultural experience.
      </p>

      {/* ── Language Grid ─────────────────────── */}
      <div className="lang-grid">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            className={`lang-tile ${selected === lang.code ? 'active' : ''}`}
            onClick={() => setSelected(lang.code)}
          >
            {/* Check badge */}
            {selected === lang.code && (
              <span
                className="material-symbols-outlined lang-tile-check"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >check_circle</span>
            )}
            <span className="lang-tile-native">{lang.native}</span>
            <span className="lang-tile-label">{lang.label}</span>
          </button>
        ))}
      </div>

      {/* ── Bottom CTA ────────────────────────── */}
      <div className="lang-bottom-cta">
        <button className="lang-continue-btn" onClick={handleContinue}>
          CONTINUE
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}
