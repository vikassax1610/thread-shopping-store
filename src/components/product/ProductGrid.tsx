import { Product } from '../../data/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  items: Product[];
}

export function ProductGrid({ items }: ProductGridProps) {
  return (
    <div className="product-grid">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
