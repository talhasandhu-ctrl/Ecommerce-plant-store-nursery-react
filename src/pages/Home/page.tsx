import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Bring Nature Home</h1>
          <p>Discover our wide variety of healthy and beautiful plants to brighten up your living space.</p>
          <div className="hero-buttons">
            <Link to="/shop" className="btn btn-primary">Shop Now</Link>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/plant.svg" alt="Beautiful Plant" />
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">Featured Plants</h2>
        <div className="cards-wrapper">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="product-card">
              <div className="product-img-box">
                <img src="/images/plant.svg" alt="Plant" />
              </div>
              <div className="product-info">
                <h3>Monstera Deliciosa</h3>
                <p className="product-price">$45.00</p>
                <Link to="/plant-details" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">Categories</h2>
        <div className="cards-wrapper">
          {['Indoor', 'Outdoor', 'Succulents', 'Flowering'].map((cat) => (
            <div key={cat} className="product-card">
              <div className="product-img-box">
                <img src="/images/plant.svg" alt={cat} />
              </div>
              <div className="product-info">
                <h3>{cat}</h3>
                <Link to="/shop" className="btn btn-outline">Explore</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="cards-wrapper">
          {['Free Shipping', 'Quality Guaranteed', 'Expert Advice'].map((reason) => (
            <div key={reason} className="product-card">
              <div className="product-info">
                <h3>{reason}</h3>
                <p>We provide the best service and highest quality plants for your home.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">Testimonials</h2>
        <div className="cards-wrapper">
          <div className="product-card">
            <div className="product-info">
              <p>"The plants arrived in perfect condition. Highly recommend GreenLeaf!"</p>
              <h4>- Sarah J.</h4>
            </div>
          </div>
          <div className="product-card">
            <div className="product-info">
              <p>"Amazing variety and wonderful customer service. My garden looks beautiful."</p>
              <h4>- Mike T.</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="auth-card">
          <h2>Newsletter Signup</h2>
          <p>Subscribe to get 10% off your first order!</p>
          <div className="form-group">
            <input type="email" placeholder="Enter your email" className="form-input" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}
