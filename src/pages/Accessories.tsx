import { Breadcrumb } from '../components/common/Breadcrumb';
import { ProductGrid } from '../components/product/ProductGrid';
import { products } from '../data/products';

export function Accessories() {
  const items = products.filter((p) =>
    ['Bags', 'Watches', 'Sunglasses', 'Caps', 'Jewelry', 'Accessories'].includes(p.category)
  );

  return (
    <div className="container listing">
      <Breadcrumb current="Accessories" />
      <div className="listing-top">
        <div>
          <p className="eyebrow">Threads / collection</p>
          <h1>Accessories</h1>
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
