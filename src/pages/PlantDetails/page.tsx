import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PlantDetails() {
  const [quantity, setQuantity] = useState(1);

  const plant = {
    id: '1',
    name: 'Snake Plant',
    price: 25,
    img: '/images/plant.svg',
    description: 'The Snake Plant is a hardy indoor plant with striking upright leaves. It is known for its air-purifying qualities and low maintenance needs.',
    care: 'Water every 2-3 weeks, allowing the soil to dry out between waterings. Prefers bright, indirect light but can tolerate low light.'
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('greenleaf-cart') || '[]');
    const existing = cart.find((item: any) => item.id === plant.id);
    if (existing) {
      existing.qty += quantity;
    } else {
      cart.push({ ...plant, qty: quantity });
    }
    localStorage.setItem('greenleaf-cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-updated'));
    alert(`${quantity} ${plant.name}(s) added to cart!`);
  };

  return (
    <main>
      <section className="details-container">
        <div className="details-image">
          <img src={plant.img} alt={plant.name} />
        </div>
        <div className="details-info">
          <h2>{plant.name}</h2>
          <p className="product-price">${plant.price.toFixed(2)}</p>
          <p>{plant.description}</p>
          <div className="product-card">
            <div className="product-info">
              <h3>Care Instructions</h3>
              <p>{plant.care}</p>
            </div>
          </div>
          <div className="qty-selector">
            <button className="qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
            <span>{quantity}</span>
            <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title">Related Plants</h2>
        <div className="cards-wrapper">
          {[1, 2, 3].map((item) => (
            <div key={item} className="product-card">
              <div className="product-img-box">
                <img src="/images/plant.svg" alt="Plant" />
              </div>
              <div className="product-info">
                <h3>Monstera</h3>
                <p className="product-price">$45.00</p>
                <Link to="/plant-details" className="btn btn-outline">View</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
