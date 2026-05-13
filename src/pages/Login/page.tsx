import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    navigate('/dashboard');
  };

  return (
    <main className="auth-container">
      <div className="auth-card">
        <h2>Login to GreenLeaf</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} className="form-group">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="form-input"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type={showPassword ? "text" : "password"} 
              id="password" 
              className="form-input"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button 
              type="button" 
              className="btn btn-outline" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide Password' : 'Show Password'}
            </button>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </main>
  );
}
