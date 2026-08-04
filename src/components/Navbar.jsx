import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../store/CartSlice';

export default function Navbar() {
  const totalItems = useSelector(selectCartCount);

  return (
    <header className="site-header">
      <NavLink className="brand-mark" to="/">
        <span className="brand-leaf">PN</span>
        <span>
          <strong>Paradise Nursery</strong>
          <small>Houseplants for every room</small>
        </span>
      </NavLink>

      <nav className="site-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink className="cart-link" to="/cart">
          <span>Cart</span>
          <span className="cart-badge">{totalItems}</span>
        </NavLink>
      </nav>
    </header>
  );
}
