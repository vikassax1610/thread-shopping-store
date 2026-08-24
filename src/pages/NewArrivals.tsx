import { Breadcrumb } from '../components/common/Breadcrumb';
import { ProductGrid } from '../components/product/ProductGrid';
import { products } from '../data/products';

export function NewArrivals() {
  const items = products.filter((p) => p.isNew);

  return (
    <div className="container listing">
      <Breadcrumb current="New arrivals" />
      <div className="listing-top">
        <div>
          <p className="eyebrow">Threads / collection</p>
          <h1>New arrivals</h1>
          <p className="muted">{items.length} pieces</p>
        </div>
      </div>
      <div className="listing-layout" style={{ gridTemplateColumns: '1fr' }}>
        <div className="listing-results">
          <ProductGrid items={items} />
        </div>
      </div>
    </div>
  );
}
