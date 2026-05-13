import { useState } from 'react';
import { Link } from 'react-router-dom';

const ALL_PLANTS = [
  { id: '1', name: 'Snake Plant', category: 'Indoor', price: 25, img: '/images/plant.svg' },
  { id: '2', name: 'Aloe Vera', category: 'Succulents', price: 15, img: '/images/plant.svg' },
  { id: '3', name: 'Ficus Tree', category: 'Outdoor', price: 60, img: '/images/plant.svg' },
  { id: '4', name: 'Monstera', category: 'Indoor', price: 45, img: '/images/plant.svg' },
  { id: '5', name: 'Jade Plant', category: 'Succulents', price: 20, img: '/images/plant.svg' },
  { id: '6', name: 'Rose Bush', category: 'Outdoor', price: 35, img: '/images/plant.svg' },
  { id: '7', name: 'Peace Lily', category: 'Indoor', price: 30, img: '/images/plant.svg' },
  { id: '8', name: 'Cactus', category: 'Succulents', price: 10, img: '/images/plant.svg' },
];

export default function Shop() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(200);

  const filteredPlants = ALL_PLANTS.filter(plant => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = category === 'All' || plant.category === category;
    const matchesPrice = plant.price <= maxPrice;
    return matchesSearch && matchesCat && matchesPrice;
  });

  const addToCart = (plant: any) => {
    const cart = JSON.parse(localStorage.getItem('greenleaf-cart') || '[]');
    const existing = cart.find((item: any) => item.id === plant.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...plant, qty: 1 });
    }
    localStorage.setItem('greenleaf-cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-updated'));
    alert(`${plant.name} added to cart!`);
  };

  return (
    <main>
      <div className="shop-filter-bar">
        <div className="filter-group">
          <input 
            type="text" 
            placeholder="Search plants..." 
            className="filter-input"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-buttons">
          {['All', 'Indoor', 'Outdoor', 'Succulents'].map(cat => (
            <button 
              key={cat}
              className={`filter-btn ${category === cat ? 'active' : ''}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="filter-group">
          <label htmlFor="price">Max Price: ${maxPrice}</label>
          <input 
            type="range" 
            id="price" 
            min="0" 
            max="200" 
            value={maxPrice}
            onChange={e => setMaxPrice(Number(e.target.value))}
          />
        </div>
      </div>

      <section className="section-container">
        <div className="cards-wrapper">
          {filteredPlants.map(plant => (
            <div key={plant.id} className="product-card">
              <div className="product-img-box">
                <img src={plant.img} alt={plant.name} />
              </div>
              <div className="product-info">
                <h3>{plant.name}</h3>
                <p>{plant.category}</p>
                <p className="product-price">${plant.price.toFixed(2)}</p>
                <div className="filter-buttons">
                  <button className="btn btn-primary" onClick={() => addToCart(plant)}>Add to Cart</button>
                  <Link to="/plant-details" className="btn btn-outline">Details</Link>
                </div>
              </div>
            </div>
          ))}
          {filteredPlants.length === 0 && (
            <p>No plants found matching your filters.</p>
          )}
        </div>
      </section>
    </main>
  );
}
