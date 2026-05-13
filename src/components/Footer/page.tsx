import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <h3>GreenLeaf Nursery</h3>
          <p>Bring Nature Home</p>
          <div style={{ marginTop: '1rem' }}>
            <p>123 Plant Street</p>
            <p>Nature City, NC 12345</p>
          </div>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/care-guides">Care Guides</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Contact & Social</h3>
          <ul>
            <li>Email: hello@greenleaf.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Instagram: @greenleaf</li>
            <li>Facebook: GreenLeafNursery</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
