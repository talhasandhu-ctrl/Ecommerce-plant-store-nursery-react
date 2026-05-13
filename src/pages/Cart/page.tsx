import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('greenleaf-cart') || '[]');
    setCartItems(items);
  }, []);

  const updateQuantity = (id: string, delta: number) => {
    const updated = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, qty: Math.max(1, item.qty + delta) };
      }
      return item;
    });
    setCartItems(updated);
    localStorage.setItem('greenleaf-cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('cart-updated'));
  };

  const removeItem = (id: string) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem('greenleaf-cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('cart-updated'));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem('greenleaf-cart', JSON.stringify([]));
    window.dispatchEvent(new Event('cart-updated'));
    alert('Thank you for your purchase!');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const delivery = subtotal > 0 ? 15 : 0;
  const total = subtotal + delivery;

  if (cartItems.length === 0) {
    return (
      <main className="section-container">
        <div className="auth-card">
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added any plants yet.</p>
          <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section className="cart-container">
        <div className="cart-items">
          <h2>Your Cart</h2>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-img">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="product-price">${item.price.toFixed(2)}</p>
                <div className="qty-selector">
                  <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.qty}</span>
                  <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>
              <div className="cart-item-details">
                <p>Subtotal: ${(item.price * item.qty).toFixed(2)}</p>
                <button className="btn btn-outline" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="shop-filter-bar">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="shop-filter-bar">
            <span>Delivery:</span>
            <span>${delivery.toFixed(2)}</span>
          </div>
          <div className="shop-filter-bar">
            <h3>Total:</h3>
            <h3 className="product-price">${total.toFixed(2)}</h3>
          </div>
          <button className="btn btn-primary" onClick={clearCart}>Checkout</button>
        </div>
      </section>
    </main>
  );
}
