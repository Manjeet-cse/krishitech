import { useLocation, useNavigate } from 'react-router-dom';
import './OrderSuccessScreen.css';

export default function OrderSuccessScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const orderId = location.state?.orderId || 'OD987654321';

  // Calculate delivery date (3 days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);
  const formattedDate = deliveryDate.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' });

  return (
    <div className="screen-layout success-screen">
      <div className="success-content">
        <div className="success-animation-wrap">
          <div className="success-circle">
            <span className="material-symbols-outlined success-check">check</span>
          </div>
        </div>
        
        <h1 className="success-title">Order Placed Successfully!</h1>
        <p className="success-message">Thank you for your purchase. Your order has been received and is being processed.</p>
        
        <div className="order-details-box">
          <div className="detail-row">
            <span className="detail-label">Order ID</span>
            <span className="detail-value">{orderId}</span>
          </div>
          <div className="detail-divider"></div>
          <div className="detail-row">
            <span className="detail-label">Estimated Delivery</span>
            <span className="detail-value highlight">{formattedDate}</span>
          </div>
        </div>
      </div>

      <div className="success-actions">
        <button className="track-order-btn">
          Track Order
        </button>
        <button className="back-home-btn" onClick={() => navigate('/farmer/home')}>
          Back to Home
        </button>
      </div>
    </div>
  );
}
