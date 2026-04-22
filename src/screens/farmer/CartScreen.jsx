import { useNavigate } from 'react-router-dom';
import AppTopBar from '../../components/common/AppTopBar';
import { useCart } from '../../store/CartContext';
import './CartScreen.css';

export default function CartScreen() {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, cartSubtotal } = useCart();

  const deliveryFee = cartSubtotal > 0 ? 50 : 0;
  const total = cartSubtotal + deliveryFee;

  return (
    <div className="screen-layout" style={{ backgroundColor: 'var(--surface-container-lowest)' }}>
      <AppTopBar title="My Cart" />
      
      <main className="screen-body pb-32">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <span className="material-symbols-outlined cart-empty-icon">remove_shopping_cart</span>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <button className="cart-shop-btn" onClick={() => navigate('/farmer/marketplace')}>
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items-list">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">₹{item.price.toLocaleString()}</p>
                    
                    <div className="cart-item-actions">
                      <div className="cart-qty-ctrl">
                        <button className="cart-qty-btn" onClick={() => updateQuantity(item.id, -1)}>
                          <span className="material-symbols-outlined">remove</span>
                        </button>
                        <span className="cart-qty">{item.quantity}</span>
                        <button className="cart-qty-btn" onClick={() => updateQuantity(item.id, 1)}>
                          <span className="material-symbols-outlined">add</span>
                        </button>
                      </div>
                      <button className="cart-remove-btn" onClick={() => removeFromCart(item.id)}>
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal ({cartItems.length} items)</span>
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
          </div>
        )}
      </main>

      {cartItems.length > 0 && (
        <div className="sticky-bottom-bar">
          <button className="cart-checkout-btn" onClick={() => navigate('/farmer/checkout')}>
            Proceed to Checkout
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      )}
    </div>
  );
}
