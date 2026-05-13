import { useState } from 'react';

const INITIAL_STOCK = [
  { id: '1', name: 'Snake Plant', category: 'Indoor', stock: 45, price: 25 },
  { id: '2', name: 'Aloe Vera', category: 'Succulents', stock: 12, price: 15 },
  { id: '3', name: 'Ficus Tree', category: 'Outdoor', stock: 8, price: 60 },
  { id: '4', name: 'Monstera', category: 'Indoor', stock: 0, price: 45 },
];

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStock = INITIAL_STOCK.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="section-container">
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
      </div>

      <div className="dash-stats-row">
        <div className="dash-stat-card">
          <h3>Products</h3>
          <h2>124</h2>
        </div>
        <div className="dash-stat-card">
          <h3>Orders</h3>
          <h2>89</h2>
        </div>
        <div className="dash-stat-card">
          <h3>Customers</h3>
          <h2>1,205</h2>
        </div>
        <div className="dash-stat-card">
          <h3>Revenue</h3>
          <h2>$14,500</h2>
        </div>
      </div>

      <div className="dash-actions-row">
        <div className="dash-action-card">
          <h3>Add Product</h3>
        </div>
        <div className="dash-action-card">
          <h3>View Orders</h3>
        </div>
        <div className="dash-action-card">
          <h3>Manage Users</h3>
        </div>
        <div className="dash-action-card">
          <h3>Settings</h3>
        </div>
      </div>

      <section className="section-container">
        <h2 className="section-title">Monthly Sales</h2>
        <div className="bar-chart">
          <div className="bar-wrapper">
            <div className="bar h-40"></div>
            <span>Jan</span>
          </div>
          <div className="bar-wrapper">
            <div className="bar h-60"></div>
            <span>Feb</span>
          </div>
          <div className="bar-wrapper">
            <div className="bar h-80"></div>
            <span>Mar</span>
          </div>
          <div className="bar-wrapper">
            <div className="bar h-50"></div>
            <span>Apr</span>
          </div>
          <div className="bar-wrapper">
            <div className="bar h-90"></div>
            <span>May</span>
          </div>
        </div>
      </section>

      <div className="dash-table-container">
        <div className="dashboard-header">
          <h3>Inventory Stock</h3>
          <input 
            type="text" 
            placeholder="Search inventory..." 
            className="filter-input"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="dash-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStock.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.stock}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  {item.stock > 10 ? 'In Stock' : item.stock > 0 ? 'Low Stock' : 'Out of Stock'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
