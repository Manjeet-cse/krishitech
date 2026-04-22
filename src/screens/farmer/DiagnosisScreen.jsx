import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomTabs from '../../components/layout/BottomTabs';
import AppTopBar from '../../components/common/AppTopBar';
import wheatMildewImg from '../../assets/images/wheat_mildew.png';
import './DiagnosisScreen.css';

/* ─── Static Data ─────────────────────────────────────────────────── */
const STAT_CHIPS = [
  { icon: 'savings',       iconClass: 'green', label: 'Avg. Impact',   value: '35% Yield Saved'  },
  { icon: 'trending_down', iconClass: 'green', label: 'Chemical Use',  value: '40% Cost Cut'     },
  { icon: 'bolt',          iconClass: 'amber', label: 'Processing',    value: 'Instant Results'  },
];

const RECENT_RESULT = {
  crop:     'Wheat',
  latin:    'Triticum',
  disease:  'Powdery Mildew',
  severity: 'Medium Severity',
  solutions: [
    {
      key:      'organic',
      icon:     'eco',
      title:    'Organic Solution',
      desc:     'Apply neem oil extract (0.5%) or spray baking soda solution mixed with mild soap during early morning.',
      linkText: 'View steps',
    },
    {
      key:      'chemical',
      icon:     'science',
      title:    'Chemical Control',
      desc:     'Apply sulfur-based fungicides or Propiconazole 25% EC at recommended dosage if infection spreads.',
      linkText: 'View dosages',
    },
  ],
};

/* ─── Component ───────────────────────────────────────────────────── */
export default function DiagnosisScreen() {
  const navigate   = useNavigate();
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(true); // default: show result section as in reference

  const handleDiagnose = () => {
    setAnalyzing(true);
    setShowResult(false);
    setTimeout(() => {
      setAnalyzing(false);
      setShowResult(true);
    }, 2200);
  };

  return (
    <div className="screen-layout">

      <AppTopBar title="AI Diagnosis" />

      {/* ── Scrollable Body ─────────────────── */}
      <div className="diagnosis-body">
        <div className="diagnosis-inner">

          {/* Stat Chips */}
          <div className="diagnosis-stats-row" role="list" aria-label="Impact statistics">
            {STAT_CHIPS.map((chip) => (
              <div key={chip.label} className="stat-chip" role="listitem">
                <div className={`stat-chip-icon ${chip.iconClass}`}>
                  <span className="material-symbols-outlined">{chip.icon}</span>
                </div>
                <div>
                  <p className="stat-chip-label">{chip.label}</p>
                  <p className="stat-chip-value">{chip.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Upload / Scan Card */}
          <section className="diagnosis-upload-card">
            <div className="upload-card-bg-orb" aria-hidden="true" />

            <div className="upload-card-header">
              <h2>Identify Crop Issues</h2>
              <p>Take a clear photo of the affected leaf or fruit. Our AI will analyze it instantly.</p>
            </div>

            {/* Drop Zone */}
            <div
              className="upload-dropzone"
              role="button"
              tabIndex={0}
              aria-label="Tap to scan crop"
              onClick={handleDiagnose}
              onKeyDown={(e) => e.key === 'Enter' && handleDiagnose()}
              style={{ position: 'relative' }}
            >
              {analyzing && (
                <div className="scanning-overlay">
                  <div className="scan-line" />
                  <p>Analyzing leaf patterns…</p>
                </div>
              )}
              <div className="upload-dropzone-icon">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  add_a_photo
                </span>
              </div>
              <p className="upload-dropzone-label">Tap to scan crop</p>
              <p className="upload-dropzone-hint">JPG, PNG • Max 10MB</p>
            </div>

            {/* Camera / Gallery */}
            <div className="upload-action-row">
              <button className="upload-action-btn" aria-label="Use camera">
                <span className="material-symbols-outlined">photo_camera</span>
                Camera
              </button>
              <button className="upload-action-btn" aria-label="Choose from gallery">
                <span className="material-symbols-outlined">image</span>
                Gallery
              </button>
            </div>

            {/* Diagnose CTA */}
            <button
              className="diagnose-cta-btn"
              onClick={handleDiagnose}
              disabled={analyzing}
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              Diagnose with AI
            </button>
          </section>

          {/* ── Recent Analysis Result Card ──── */}
          {showResult && !analyzing && (
            <section className="diagnosis-result-card">
              {/* Header */}
              <div className="result-card-header">
                <h3 className="result-card-title">
                  <span className="material-symbols-outlined">analytics</span>
                  Recent Analysis
                </h3>
                <span className="severity-badge">{RECENT_RESULT.severity}</span>
              </div>

              {/* Detected crop */}
              <div className="result-detected-row">
                <div className="result-img-frame">
                  <img src={wheatMildewImg} alt="Wheat leaf with powdery mildew infection" />
                </div>
                <div>
                  <p className="result-crop-label">Detected Crop</p>
                  <p className="result-crop-name">
                    {RECENT_RESULT.crop}{' '}
                    <span>/ {RECENT_RESULT.latin}</span>
                  </p>
                  <div className="result-disease-tag">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      coronavirus
                    </span>
                    <span>{RECENT_RESULT.disease}</span>
                  </div>
                </div>
              </div>

              {/* Solutions bento */}
              <div className="solutions-bento">
                {RECENT_RESULT.solutions.map((sol) => (
                  <div key={sol.key} className="solution-tile">
                    <div className="solution-tile-header">
                      <div className={`solution-tile-icon ${sol.key}`}>
                        <span
                          className="material-symbols-outlined"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {sol.icon}
                        </span>
                      </div>
                      <h4>{sol.title}</h4>
                    </div>
                    <p>{sol.desc}</p>
                    <button className={`solution-tile-link ${sol.key}`}>
                      {sol.linkText}
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                ))}
              </div>

              {/* Expert CTA */}
              <div className="expert-cta-bar">
                <div>
                  <h4>Need expert advice?</h4>
                  <p>Connect with an agronomist instantly.</p>
                </div>
                <button className="expert-cta-btn">Talk to Expert</button>
              </div>
            </section>
          )}

        </div>
      </div>

      {/* ── Bottom Nav ──────────────────────── */}
      <div className="screen-bottomnav">
        <BottomTabs />
      </div>
    </div>
  );
}