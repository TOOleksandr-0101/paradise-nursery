import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  selectCartItems,
  selectCartTotal,
} from '../store/CartSlice';

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="page-shell">
      <Navbar />

      <main className="cart-page">
        <section className="cart-summary">
          <div>
            <span className="eyebrow">Shopping cart</span>
            <h1>Your selected plants</h1>
            <p>Review each item, adjust quantities, and confirm your total.</p>
          </div>
          <div className="cart-summary__total">
            <span>Total Cart Amount</span>
            <strong>${cartTotal.toFixed(2)}</strong>
          </div>
        </section>

        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Add a few plants to see your live cart total here.</p>
            <Link className="primary-button" to="/plants">
              Continue Shopping
            </Link>
          </section>
        ) : (
          <section className="cart-list">
            {cartItems.map((item) => (
              <article className="cart-card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-card__details">
                  <h2>{item.name}</h2>
                  <p>Unit price: ${item.price.toFixed(2)}</p>
                  <p>Item total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <div className="cart-card__actions">
                  <div className="quantity-controls">
                    <button
                      onClick={() => dispatch(decrementQuantity(item.id))}
                      type="button"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => dispatch(incrementQuantity(item.id))}
                      type="button"
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="ghost-button"
                    onClick={() => dispatch(removeItem(item.id))}
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}

            <div className="cart-footer">
              <button
                className="primary-button"
                onClick={() => window.alert('Checkout coming soon')}
                type="button"
              >
                Checkout
              </button>
              <Link className="secondary-link" to="/plants">
                Continue Shopping
              </Link>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
