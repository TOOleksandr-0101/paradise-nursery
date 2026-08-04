import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import { addItem, selectCartItems } from '../store/CartSlice';

function createPlantThumbnail(name, accent, label) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${accent}" />
          <stop offset="100%" stop-color="#123524" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" rx="28" fill="url(#bg)" />
      <ellipse cx="200" cy="245" rx="94" ry="20" fill="#10291B" opacity="0.35" />
      <rect x="155" y="180" width="90" height="58" rx="14" fill="#C67D4B" />
      <path d="M165 180H235C230 145 217 123 200 123C183 123 170 145 165 180Z" fill="#5A402C" />
      <path d="M200 118C210 97 230 77 259 58C265 95 257 124 233 145C221 132 210 125 200 118Z" fill="#9DE075" />
      <path d="M195 122C178 95 150 73 120 58C117 95 127 126 156 149C171 139 184 130 195 122Z" fill="#7FCE68" />
      <path d="M200 126C223 115 248 113 281 119C262 147 239 161 205 163C202 149 200 136 200 126Z" fill="#C3F28E" />
      <path d="M198 128C176 114 150 110 118 114C135 143 160 159 194 164C196 150 197 139 198 128Z" fill="#5FB262" />
      <text x="28" y="42" fill="white" font-family="Trebuchet MS, Segoe UI, sans-serif" font-size="28" font-weight="700">${label}</text>
      <text x="28" y="274" fill="#EDF8E8" font-family="Trebuchet MS, Segoe UI, sans-serif" font-size="24">${name}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const productCatalog = [
  {
    category: 'Air Purifying Plants',
    plants: [
      { id: 'snake-plant', name: 'Snake Plant', price: 26, accent: '#5A9A55', label: 'Air' },
      { id: 'peace-lily', name: 'Peace Lily', price: 29, accent: '#609F6F', label: 'Air' },
      { id: 'spider-plant', name: 'Spider Plant', price: 22, accent: '#6DAD71', label: 'Air' },
      { id: 'boston-fern', name: 'Boston Fern', price: 24, accent: '#4D8D62', label: 'Air' },
      { id: 'rubber-plant', name: 'Rubber Plant', price: 31, accent: '#2D7A53', label: 'Air' },
      { id: 'areca-palm', name: 'Areca Palm', price: 35, accent: '#7EAE56', label: 'Air' },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      { id: 'zz-plant', name: 'ZZ Plant', price: 28, accent: '#8BBF58', label: 'Easy' },
      { id: 'pothos', name: 'Golden Pothos', price: 21, accent: '#7FBF53', label: 'Easy' },
      { id: 'jade-plant', name: 'Jade Plant', price: 20, accent: '#6AAE64', label: 'Easy' },
      { id: 'aloe-vera', name: 'Aloe Vera', price: 18, accent: '#92C96C', label: 'Easy' },
      { id: 'parlor-palm', name: 'Parlor Palm', price: 27, accent: '#5E9E71', label: 'Easy' },
      { id: 'cast-iron', name: 'Cast Iron Plant', price: 30, accent: '#456F54', label: 'Easy' },
    ],
  },
  {
    category: 'Statement Plants',
    plants: [
      { id: 'monstera', name: 'Monstera Deliciosa', price: 38, accent: '#4E8C48', label: 'Bold' },
      { id: 'fiddle-leaf', name: 'Fiddle Leaf Fig', price: 42, accent: '#417A52', label: 'Bold' },
      { id: 'bird-of-paradise', name: 'Bird of Paradise', price: 45, accent: '#5E9A4A', label: 'Bold' },
      { id: 'calathea-orbifolia', name: 'Calathea Orbifolia', price: 34, accent: '#7AAE66', label: 'Bold' },
      { id: 'anthurium', name: 'Anthurium', price: 33, accent: '#3C774D', label: 'Bold' },
      { id: 'philodendron-xanadu', name: 'Philodendron Xanadu', price: 36, accent: '#68955D', label: 'Bold' },
    ],
  },
].map((group) => ({
  ...group,
  plants: group.plants.map((plant) => ({
    ...plant,
    image: createPlantThumbnail(plant.name, plant.accent, plant.label),
  })),
}));

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const cartIds = useMemo(
    () => new Set(cartItems.map((item) => item.id)),
    [cartItems],
  );

  return (
    <div className="page-shell">
      <Navbar />

      <main className="catalog-page">
        <section className="page-intro">
          <span className="eyebrow">Indoor plant catalog</span>
          <h1>Find the right plant for every corner of your home</h1>
          <p>
            Browse curated collections, compare prices, and add your favorites
            to the cart with live updates.
          </p>
        </section>

        {productCatalog.map((group) => (
          <section className="category-section" key={group.category}>
            <div className="section-heading">
              <h2>{group.category}</h2>
              <p>{group.plants.length} carefully selected indoor plants</p>
            </div>

            <div className="product-grid">
              {group.plants.map((plant) => {
                const isAdded = cartIds.has(plant.id);

                return (
                  <article className="plant-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} />
                    <div className="plant-card__content">
                      <h3>{plant.name}</h3>
                      <p className="price-tag">${plant.price.toFixed(2)}</p>
                      <p className="product-copy">
                        Healthy indoor greenery chosen for beauty, resilience,
                        and easy styling at home.
                      </p>
                      <button
                        className="primary-button"
                        disabled={isAdded}
                        onClick={() => dispatch(addItem(plant))}
                        type="button"
                      >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
