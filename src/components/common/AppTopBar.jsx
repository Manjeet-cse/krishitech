import { useNavigate } from 'react-router-dom';
import './AppTopBar.css';

/**
 * AppTopBar — unified green top bar for all farmer screens.
 *
 * Props:
 *   title            {string}  — page name shown in white
 *   showBack         {boolean} — show back arrow (default true)
 *   showNotification {boolean} — show bell icon left of profile
 *   showProfile      {boolean} — show profile avatar (default true)
 *   onBack           {fn}      — custom back handler (defaults to navigate(-1))
 */
export default function AppTopBar({
  title = '',
  showBack = true,
  showNotification = false,
  showProfile = true,
  onBack,
}) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBack) onBack();
    else navigate(-1);
  };

  return (
    <header className="app-topbar">
      {/* Left: back button or spacer */}
      <div className="app-topbar-left">
        {showBack ? (
          <button
            className="app-topbar-icon-btn"
            onClick={handleBack}
            aria-label="Go back"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        ) : (
          <div className="app-topbar-spacer" />
        )}
      </div>

      {/* Centre: page title */}
      <h1 className="app-topbar-title">{title}</h1>

      {/* Right: notification (optional) + profile */}
      <div className="app-topbar-right">
        {showNotification && (
          <button className="app-topbar-icon-btn" aria-label="Notifications">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        )}
        {showProfile && (
          <button
            className="app-topbar-icon-btn"
            aria-label="Profile"
            onClick={() => navigate('/farmer/profile')}
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              account_circle
            </span>
          </button>
        )}
        {!showNotification && !showProfile && (
          <div className="app-topbar-spacer" />
        )}
      </div>
    </header>
  );
}
