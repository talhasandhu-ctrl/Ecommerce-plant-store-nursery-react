import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('greenleaf-cart') || '[]');
      const count = cart.reduce((total: number, item: any) => total + item.qty, 0);
      setCartCount(count);
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cart-updated', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cart-updated', updateCartCount);
    };
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/care-guides', label: 'Care Guides' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/login', label: 'Login' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <img src="/images/logo.svg" alt="GreenLeaf Logo" />
        GreenLeaf
      </Link>
      
      <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path} 
            className={isActive(link.path)}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link to="/cart" className="cart-icon">
        <span>🛒</span>
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </Link>
      
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
