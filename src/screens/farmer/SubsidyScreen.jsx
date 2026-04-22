import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomTabs from '../../components/layout/BottomTabs';
import AppTopBar from '../../components/common/AppTopBar';
import './SubsidyScreen.css';

const SCHEMES = [
  {
    id: 1,
    ministry: 'Ministry of Agriculture',
    badge: { icon: 'payments', text: '₹6,000 / Year' },
    title: 'PM-KISAN Samman Nidhi',
    desc: 'Direct income support for all landholding farmers\' families to supplement their financial needs.',
    footer: { type: 'applicants', value: '1M+' },
    category: 'Financial Support',
  },
  {
    id: 2,
    ministry: 'Ministry of Agriculture',
    badge: { icon: 'security', text: 'Full Coverage' },
    title: 'PM Fasal Bima Yojana',
    desc: 'Comprehensive crop insurance against non-preventable natural risks from pre-sowing to post-harvest.',
    footer: { type: 'deadline', value: 'Ends in 5 days' },
    category: 'Crop Insurance',
  },
  {
    id: 3,
    ministry: 'Dept. of Agriculture',
    badge: { icon: 'science', text: 'Free Test' },
    title: 'Soil Health Card Scheme',
    desc: 'Get a comprehensive assessment of your soil health to optimize fertilizer usage and boost yields.',
    footer: { type: 'eligible' },
    category: 'Fertilizer',
  },
];

const FILTERS = ['All Schemes', 'Financial Support', 'Crop Insurance', 'Fertilizer'];

export default function SubsidyScreen() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All Schemes');

  const visibleSchemes = SCHEMES.filter(
    (s) => activeFilter === 'All Schemes' || s.category === activeFilter
  );

  return (
    <div className="screen-layout">

      <AppTopBar title="Govt. Scheme Guide" />

      {/* ── Scrollable Body ─────────────────── */}
      <div className="subsidy-screen-content">
        <div className="subsidy-inner">

          {/* Alert Banner */}
          <div className="subsidy-alert-banner" role="alert">
            <div className="subsidy-alert-icon-wrap">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: '20px', color: '#5a3000' }}
              >
                campaign
              </span>
            </div>
            <div>
              <h3 className="subsidy-alert-title">New Kharif Schemes Added</h3>
              <p className="subsidy-alert-body">
                3 new subsidies are available for drought-resistant seeds in your district.
                Application closes in 14 days.
              </p>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="subsidy-filter-chips" role="group" aria-label="Filter schemes">
            {FILTERS.map((label) => (
              <button
                key={label}
                className={`subsidy-chip ${activeFilter === label ? 'active' : 'inactive'}`}
                onClick={() => setActiveFilter(label)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Scheme Cards */}
          <div className="subsidy-cards-list">
            {visibleSchemes.map((scheme) => (
              <SchemeCard key={scheme.id} scheme={scheme} />
            ))}
          </div>

        </div>
      </div>

      {/* ── Bottom Nav ──────────────────────── */}
      <div className="screen-bottomnav">
        <BottomTabs />
      </div>
    </div>
  );
}

/* ─── Scheme Card Sub-component ──────────────────────────────────────── */
function SchemeCard({ scheme }) {
  return (
    <article className="scheme-card-outer">
      <div className="scheme-card-inner">

        {/* Header row: ministry + badge */}
        <div className="scheme-card-header">
          <span className="scheme-ministry-label">{scheme.ministry}</span>
          <div className="scheme-badge-tag">
            <span
              className="material-symbols-outlined badge-icon"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {scheme.badge.icon}
            </span>
            <span className="badge-text">{scheme.badge.text}</span>
          </div>
        </div>

        {/* Title + Desc */}
        <h2 className="scheme-card-title">{scheme.title}</h2>
        <p className="scheme-card-desc">{scheme.desc}</p>

        {/* Footer: left element + Apply Now */}
        <div className="scheme-card-footer">
          <SchemeFooterLeft footer={scheme.footer} />
          <button className="scheme-apply-btn">Apply Now</button>
        </div>
      </div>
    </article>
  );
}

/* ─── Footer left cell ───────────────────────────────────────────────── */
function SchemeFooterLeft({ footer }) {
  if (footer.type === 'applicants') {
    return (
      <div className="scheme-applicants-pill">{footer.value}</div>
    );
  }
  if (footer.type === 'deadline') {
    return (
      <span className="scheme-deadline-label">
        <span className="material-symbols-outlined">schedule</span>
        {footer.value}
      </span>
    );
  }
  if (footer.type === 'eligible') {
    return (
      <span className="scheme-eligible-label">
        <span className="material-symbols-outlined">check_circle</span>
        High Eligibility
      </span>
    );
  }
  return null;
}