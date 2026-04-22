import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../store/CartContext';
import './AppTopBar.css';

const MOCK_NOTIFICATIONS = [
  { id: 1, title: 'Crop Health Alert', desc: 'Your Wheat crop might be at risk of Aphids due to recent humidity.', time: '10 min ago', icon: 'pest_control', path: '/farmer/diagnosis' },
  { id: 2, title: 'Irrigation Reminder', desc: 'Scheduled irrigation for Mustard field is due today at 5 PM.', time: '1 hour ago', icon: 'water_drop', path: '/farmer/home' },
  { id: 3, title: 'New Disease Identified', desc: 'Leaf blight detected in nearby farms. Check prevention tips.', time: '2 hours ago', icon: 'coronavirus', path: '/farmer/diagnosis' },
  { id: 4, title: 'Harvesting Soon', desc: 'Wheat crop is ready for harvest in 18 days. Prepare equipment.', time: '3 hours ago', icon: 'agriculture', path: '/farmer/home' },
  { id: 5, title: 'Expert Reply Received', desc: 'Dr. Sharma has answered your query regarding soil nutrients.', time: '5 hours ago', icon: 'support_agent', path: '/farmer/experts' },
  { id: 6, title: 'Upcoming Webinar', desc: 'Join the live session on modern farming techniques tomorrow.', time: '1 day ago', icon: 'video_camera_front', path: '/farmer/experts' },
  { id: 7, title: 'Mandi Price Update', desc: 'Tomato prices have surged by 10% in the local mandi.', time: '1 day ago', icon: 'trending_up', path: '/farmer/mandi' },
  { id: 8, title: 'New Crop Added', desc: 'You can now track Soyabean prices in your selected mandis.', time: '2 days ago', icon: 'add_circle', path: '/farmer/mandi' },
  { id: 9, title: 'Order Dispatched', desc: 'Your order for Neem Oil (1L) has been dispatched.', time: '2 days ago', icon: 'local_shipping', path: '/farmer/marketplace' },
  { id: 10, title: 'Discount on Seeds', desc: 'Get 20% off on hybrid Maize seeds. Offer ends soon!', time: '3 days ago', icon: 'percent', path: '/farmer/marketplace' },
  { id: 11, title: 'PM-Kisan Installment', desc: 'The 12th installment of PM-Kisan will be credited next week.', time: '3 days ago', icon: 'account_balance', path: '/farmer/subsidy' },
  { id: 12, title: 'New Scheme Available', desc: 'Apply for the new Solar Pump Subsidy scheme now.', time: '4 days ago', icon: 'solar_power', path: '/farmer/subsidy' },
  { id: 13, title: 'Heavy Rain Warning', desc: 'Expect heavy rainfall in Ludhiana, Punjab tomorrow afternoon.', time: '4 days ago', icon: 'thunderstorm', path: '/farmer/weather' },
  { id: 14, title: 'Favorable Weather', desc: 'Tomorrow is sunny and perfect for applying fertilizers.', time: '5 days ago', icon: 'wb_sunny', path: '/farmer/weather' },
  { id: 15, title: 'New Article Published', desc: 'Read our latest guide on organic pest management.', time: '1 week ago', icon: 'menu_book', path: '/farmer/learning' },
  { id: 16, title: 'Video Tutorial', desc: 'Watch how to setup drip irrigation step-by-step.', time: '1 week ago', icon: 'play_circle', path: '/farmer/learning' }
];

/**
 * AppTopBar — unified green top bar for all farmer screens.
 *
 * Props:
 *   title            {string}  — page name shown in white
 *   showBack         {boolean} — show back arrow (default true, if false shows hamburger menu)
 *   showNotification {boolean} — show bell icon left of profile
 *   showCart         {boolean} — show shopping cart icon
 *   showProfile      {boolean} — show profile avatar (default true)
 *   onBack           {fn}      — custom back handler (defaults to navigate(-1))
 */
export default function AppTopBar({
  title = '',
  showBack = true,
  showNotification = false,
  showCart = false,
  showProfile = true,
  onBack,
}) {
  const navigate = useNavigate();
  const { cartCount } = useCart() || { cartCount: 0 };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const handleBack = () => {
    if (onBack) onBack();
    else navigate(-1);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleNotifications = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleNotificationClick = (path) => {
    toggleNotifications();
    navigate(path);
  };

  return (
    <>
      <header className="app-topbar">
        {/* Left: back button or hamburger menu */}
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
            <button
              className="app-topbar-icon-btn"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          )}
        </div>

        {/* Centre: page title */}
        <h1 className="app-topbar-title">{title}</h1>

        {/* Right: notification, cart, profile */}
        <div className="app-topbar-right">
          {showNotification && (
            <button 
              className="app-topbar-icon-btn relative-btn" 
              aria-label="Notifications"
              onClick={toggleNotifications}
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="notification-dot"></span>
            </button>
          )}
          {showCart && (
            <button 
              className="app-topbar-icon-btn relative-btn" 
              aria-label="Cart"
              onClick={() => navigate('/farmer/cart')}
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
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
          {!showNotification && !showProfile && !showCart && (
            <div className="app-topbar-spacer" />
          )}
        </div>
      </header>

      {/* Side Menu Drawer Overlay */}
      {isMenuOpen && (
        <div className="side-menu-overlay" onClick={toggleMenu}>
          <div className="side-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="side-menu-header">
              <div className="side-menu-profile">
                <div className="side-menu-avatar">
                  <span className="material-symbols-outlined" style={{ fontSize: '40px', color: '#2e7d32' }}>
                    account_circle
                  </span>
                </div>
                <div className="side-menu-user-info">
                  <h2 className="side-menu-name">Manjeet Lodha</h2>
                  <p className="side-menu-role">Premium Farmer</p>
                </div>
              </div>
              <button className="side-menu-close" onClick={toggleMenu}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="side-menu-content">
              <nav className="side-menu-nav">
                <button className="side-menu-item" onClick={() => { navigate('/farmer/profile'); toggleMenu(); }}>
                  <span className="material-symbols-outlined">person</span>
                  My Profile
                </button>
                <button className="side-menu-item" onClick={() => { navigate('/farmer/orders'); toggleMenu(); }}>
                  <span className="material-symbols-outlined">shopping_bag</span>
                  My Orders
                </button>
                <button className="side-menu-item" onClick={() => { navigate('/farmer/subsidy'); toggleMenu(); }}>
                  <span className="material-symbols-outlined">description</span>
                  Govt. Schemes
                </button>
                <button className="side-menu-item" onClick={() => { navigate('/farmer/weather'); toggleMenu(); }}>
                  <span className="material-symbols-outlined">partly_cloudy_day</span>
                  Weather Alerts
                </button>
                <div className="side-menu-divider"></div>
                <button className="side-menu-item" onClick={() => { /* Settings navigation */ toggleMenu(); }}>
                  <span className="material-symbols-outlined">settings</span>
                  Settings
                </button>
                <button className="side-menu-item" onClick={() => { /* Help navigation */ toggleMenu(); }}>
                  <span className="material-symbols-outlined">help</span>
                  Help & Support
                </button>
                <button className="side-menu-item logout-btn" onClick={() => { navigate('/login'); toggleMenu(); }}>
                  <span className="material-symbols-outlined">logout</span>
                  Logout
                </button>
              </nav>
            </div>
            <div className="side-menu-footer">
              <p>NeoKrishiTech v1.0.0</p>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Drawer Overlay */}
      {isNotificationOpen && (
        <div className="side-menu-overlay" onClick={toggleNotifications}>
          <div className="notification-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="notification-header">
              <h2>Notifications</h2>
              <button className="side-menu-close" onClick={toggleNotifications}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="notification-content">
              {MOCK_NOTIFICATIONS.map((notif) => (
                <div 
                  key={notif.id} 
                  className="notification-item"
                  onClick={() => handleNotificationClick(notif.path)}
                >
                  <div className="notification-icon-wrap">
                    <span className="material-symbols-outlined">{notif.icon}</span>
                  </div>
                  <div className="notification-text">
                    <h4 className="notification-title">{notif.title}</h4>
                    <p className="notification-desc">{notif.desc}</p>
                    <span className="notification-time">{notif.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
