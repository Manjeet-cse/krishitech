import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelectScreen.css';

const ROLES = [
  {
    id: 'farmer',
    icon: 'agriculture',
    label: 'Farmer',
    desc: 'Manage your crops and yields',
  },
  {
    id: 'expert',
    icon: 'science',
    label: 'Agri Expert',
    desc: 'Provide insights and guidance',
  },
  {
    id: 'vendor',
    icon: 'storefront',
    label: 'Vendor',
    desc: 'Sell agricultural products',
  },
];

export default function RoleSelectScreen() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('farmer');

  const handleContinue = () => {
    localStorage.setItem('selectedRole', selectedRole);
    navigate('/login');
  };

  return (
    <div className="role-screen">
      <div className="role-screen-inner">

        {/* ── Brand Header ──────────────────── */}
        <div className="role-brand">
          <div className="role-logo-circle">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '36px', fontVariationSettings: "'FILL' 1" }}
            >eco</span>
          </div>
          <h1 className="role-brand-name">NeoKrishiTech</h1>
          <p className="role-brand-tagline">Empowering Farmers with AI</p>
        </div>

        {/* ── Question ──────────────────────── */}
        <div className="role-question">
          <h2>Who are you?</h2>
          <p>Select your role to get started</p>
        </div>

        {/* ── Role Tiles ────────────────────── */}
        <div className="role-tiles">
          {ROLES.map((role) => (
            <button
              key={role.id}
              className={`role-tile ${selectedRole === role.id ? 'active' : ''}`}
              onClick={() => setSelectedRole(role.id)}
            >
              <div className="role-tile-left">
                <div className="role-icon-box">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '24px', fontVariationSettings: "'FILL' 1" }}
                  >{role.icon}</span>
                </div>
                <div className="role-tile-info">
                  <h3>{role.label}</h3>
                  <p>{role.desc}</p>
                </div>
              </div>
              <div className="role-checkbox">
                {selectedRole === role.id && (
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '16px', fontWeight: 'bold' }}
                  >check</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* ── Actions ───────────────────────── */}
        <div className="role-bottom-actions">
          <button className="btn-continue" onClick={handleContinue}>
            Continue
          </button>
          <button className="btn-floating-ai">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}
            >smart_toy</span>
            Speak to AI
          </button>
        </div>

      </div>
    </div>
  );
}
