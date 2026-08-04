import { Link, Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function LandingPage() {
  return (
    <main className="landing-page">
      <section className="hero-panel">
        <span className="hero-kicker">Indoor plants delivered with care</span>
        <h1>Paradise Nursery</h1>
        <p className="hero-copy">
          Build your own calm green corner with easy-care indoor plants,
          thoughtful styling, and a shopping flow designed to feel effortless.
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
