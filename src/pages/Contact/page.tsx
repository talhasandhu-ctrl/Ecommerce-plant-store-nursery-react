import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <main className="section-container">
      <h2 className="section-title">Contact Us</h2>
      
      <div className="cards-wrapper">
        <div className="product-card">
          <div className="product-info">
            <h3>Visit Us</h3>
            <p>123 Plant Street</p>
            <p>Nature City, NC 12345</p>
            <p>Email: hello@greenleaf.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
        </div>

        <div className="product-card">
          <div className="product-info">
            <h3>Working Hours</h3>
            <p>Monday - Friday: 9am - 6pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>

      <div className="auth-card">
        <h3>Send us a Message</h3>
        {submitted ? (
          <p>Thank you for your message! We will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name"
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email"
                className="form-input"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message"
                className="form-input"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              {errors.message && <p>{errors.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        )}
      </div>
    </main>
  );
}
