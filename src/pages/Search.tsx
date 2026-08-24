import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { ProductGrid } from '../components/product/ProductGrid';
import { Empty } from '../components/common/Empty';
import { products } from '../data/products';

export function SearchPage() {
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get('q') || '');
  const result = products.filter((p) =>
    `${p.name} ${p.category} ${p.gender}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container page search-page">
      <div className="search-large">
        <p className="eyebrow">Find your next favourite</p>
        <div>
          <Search />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search shirts, dresses, bags..."
          />
        </div>
      </div>
      {query && (
        <>
          <div className="section-heading">
            <div>
              <h2>Results for "{query}"</h2>
              <p className="muted">{result.length} pieces found</p>
            </div>
          </div>
          {result.length ? (
            <ProductGrid items={result} />
          ) : (
            <Empty title="No products found" text="Try searching for something else." />
          )}
        </>
      )}
    </div>
  );
}
