export default function About() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>About GreenLeaf</h1>
          <p>We are passionate about bringing the beauty of nature into your home.</p>
        </div>
      </section>

      <section className="section-container">
        <div className="product-card">
          <div className="product-info">
            <h2 className="section-title">Our Story</h2>
            <p>Founded in 2020, GreenLeaf Nursery started as a small local shop and has grown into a nationwide online store, dedicated to providing the healthiest plants directly to your door.</p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">Our Team</h2>
        <div className="cards-wrapper">
          {['Alice Green', 'Bob Flora', 'Charlie Root', 'Diana Leaf'].map(name => (
            <div key={name} className="product-card">
              <div className="product-img-box">
                <img src="/images/plant.svg" alt={name} />
              </div>
              <div className="product-info">
                <h3>{name}</h3>
                <p>Plant Specialist</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">Mission & Values</h2>
        <div className="cards-wrapper">
          <div className="product-card">
            <div className="product-info">
              <h3>Sustainability</h3>
              <p>We use eco-friendly packaging and sustainable growing practices.</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-info">
              <h3>Quality</h3>
              <p>Every plant is hand-selected and inspected before shipping.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">Our Impact</h2>
        <div className="cards-wrapper">
          <div className="product-card">
            <div className="product-info">
              <h3>10,000+</h3>
              <p>Plants Sold</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-info">
              <h3>5,000+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-info">
              <h3>4</h3>
              <p>Years in Business</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
