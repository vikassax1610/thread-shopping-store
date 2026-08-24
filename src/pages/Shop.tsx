import { useState, useMemo } from 'react';
import { Filter, X, ChevronDown } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ProductGrid } from '../components/product/ProductGrid';
import { products } from '../data/products';

export function Shop() {
  const [sortBy, setSortBy] = useState('Featured');
  const [filterCategory, setFilterCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

  const sorted = useMemo(() => {
    return [...products]
      .filter((p) => filterCategory === 'All' || p.category === filterCategory)
      .sort((a, b) => {
        if (sortBy === 'Price low to high') return a.price - b.price;
        if (sortBy === 'Price high to low') return b.price - a.price;
        return 0;
      });
  }, [sortBy, filterCategory]);

  return (
    <div className="container listing">
      <Breadcrumb current="Shop all" />
      <div className="listing-top">
        <div>
          <p className="eyebrow">Threads / collection</p>
          <h1>Shop all</h1>
          <p className="muted">{sorted.length} pieces</p>
        </div>
        <button className="filter-button mobile-only" onClick={() => setShowFilters(true)}>
          <Filter size={16} /> Filters
        </button>
      </div>
      <div className="listing-layout">
        <aside className={showFilters ? 'filter-drawer open' : 'filter-drawer'}>
          <button className="drawer-close mobile-only" onClick={() => setShowFilters(false)}>
            <X />
          </button>
          <h3>Filter by</h3>
          <div className="filter-group">
            <strong>Category</strong>
            {categories.map((c) => (
              <button
                key={c}
                className={filterCategory === c ? 'selected' : ''}
                onClick={() => {
                  setFilterCategory(c);
                  setShowFilters(false);
                }}
              >
                {c}
                <span>{c === 'All' ? products.length : products.filter((p) => p.category === c).length}</span>
              </button>
            ))}
          </div>
          <div className="filter-group">
            <strong>Size</strong>
            <div className="size-filters">
              {['XS', 'S', 'M', 'L', 'XL'].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <strong>Price</strong>
            <label>
              <input type="range" min="500" max="3000" /> <span>₹500 — ₹3,000</span>
            </label>
          </div>
        </aside>
        <div className="listing-results">
          <div className="results-bar">
            <span>Showing {sorted.length} of {products.length}</span>
            <label>
              Sort by{' '}
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option>Featured</option>
                <option>Newest</option>
                <option>Price low to high</option>
                <option>Price high to low</option>
                <option>Best selling</option>
              </select>
              <ChevronDown size={14} />
            </label>
          </div>
          <ProductGrid items={sorted} />
        </div>
      </div>
    </div>
  );
}
