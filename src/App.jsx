import { Link, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="hero-panel">
        <span className="hero-kicker">Indoor Plants Shop</span>
        <h1>Paradise Nursery</h1>
        <p className="hero-copy">
          Buy indoor plants for your home. View plant details, add items to the
          cart, and manage your order in one place.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" to="/plants">
            Get Started
          </Link>
        </div>
      </section>

      <AboutUs />
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}
