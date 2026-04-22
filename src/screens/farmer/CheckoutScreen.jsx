import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppTopBar from '../../components/common/AppTopBar';
import { useCart } from '../../store/CartContext';
import './CheckoutScreen.css';

export default function CheckoutScreen() {
  const navigate = useNavigate();
  const { cartItems, cartSubtotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('upi');

  const deliveryFee = cartSubtotal > 0 ? 50 : 0;
  const total = cartSubtotal + deliveryFee;

  const handlePlaceOrder = () => {
    // Generate mock order ID
    const orderId = 'OD' + Math.floor(Math.random() * 1000000000);
    // Clear cart
    clearCart();
    // Navigate to success screen
    navigate('/farmer/order-success', { state: { orderId } });
  };

  if (cartItems.length === 0) {
    return (
      <div className="screen-layout">
        <AppTopBar title="Checkout" />
        <main className="screen-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p>No items to checkout.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="screen-layout" style={{ backgroundColor: 'var(--surface-container-lowest)' }}>
      <AppTopBar title="Checkout" />
      
      <main className="screen-body pb-32">
        <div className="checkout-content">
          
          {/* Address Section */}
          <section className="checkout-section">
            <div className="checkout-section-header">
              <span className="material-symbols-outlined">location_on</span>
              <h2>Delivery Address</h2>
            </div>
            <div className="checkout-address-card">
              <div className="address-header">
                <h3>Manjeet Lodha</h3>
                <span className="address-tag">Home</span>
              </div>
              <p>House No. 45, Near Hanuman Temple,<br/>Village - Sahnewal, Ludhiana,<br/>Punjab - 141120</p>
              <p className="address-phone">+91 98765 43210</p>
              <button className="address-edit-btn">Edit Address</button>
            </div>
          </section>

          {/* Order Summary */}
          <section className="checkout-section">
            <div className="checkout-section-header">
              <span className="material-symbols-outlined">receipt_long</span>
              <h2>Order Summary</h2>
            </div>
            <div className="checkout-summary-card">
              <div className="summary-items">
                {cartItems.map(item => (
                  <div key={item.id} className="summary-item">
                    <span>{item.quantity}x {item.name}</span>
                    <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{cartSubtotal.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row summary-total">
                <span>Total Amount</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="checkout-section">
            <div className="checkout-section-header">
              <span className="material-symbols-outlined">payments</span>
              <h2>Payment Method</h2>
            </div>
            <div className="checkout-payment-options">
              <label className={`payment-option ${paymentMethod === 'upi' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="upi" 
                  checked={paymentMethod === 'upi'} 
                  onChange={() => setPaymentMethod('upi')} 
                />
                <span className="material-symbols-outlined payment-icon">qr_code_scanner</span>
                <div className="payment-details">
                  <span className="payment-name">UPI (Google Pay, PhonePe)</span>
                </div>
              </label>

              <label className={`payment-option ${paymentMethod === 'cod' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="cod" 
                  checked={paymentMethod === 'cod'} 
                  onChange={() => setPaymentMethod('cod')} 
                />
                <span className="material-symbols-outlined payment-icon">local_shipping</span>
                <div className="payment-details">
                  <span className="payment-name">Cash on Delivery</span>
                </div>
              </label>

              <label className={`payment-option ${paymentMethod === 'card' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="card" 
                  checked={paymentMethod === 'card'} 
                  onChange={() => setPaymentMethod('card')} 
                />
                <span className="material-symbols-outlined payment-icon">credit_card</span>
                <div className="payment-details">
                  <span className="payment-name">Credit / Debit Card</span>
                </div>
              </label>
            </div>
          </section>

        </div>
      </main>

      <div className="sticky-bottom-bar">
        <button className="checkout-place-btn" onClick={handlePlaceOrder}>
          Place Order • ₹{total.toLocaleString()}
          <span className="material-symbols-outlined">check_circle</span>
        </button>
      </div>
    </div>
  );
}
