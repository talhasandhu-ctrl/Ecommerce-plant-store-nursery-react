import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/page';
import Footer from './components/Footer/page';
import Home from './pages/Home/page';
import Shop from './pages/Shop/page';
import PlantDetails from './pages/PlantDetails/page';
import Cart from './pages/Cart/page';
import CareGuides from './pages/CareGuides/page';
import About from './pages/About/page';
import Contact from './pages/Contact/page';
import Login from './pages/Login/page';
import Register from './pages/Register/page';
import Dashboard from './pages/Dashboard/page';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/plant-details" element={<PlantDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/care-guides" element={<CareGuides />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
