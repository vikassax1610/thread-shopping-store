import { Link } from 'react-router-dom';
import { Heart, Plus, Star } from 'lucide-react';
import { Product } from '../../data/products';
import { formatCurrency } from '../../utils/priceUtils';
import { useCart } from '../../hooks/useCart';
import { useWishlist } from '../../hooks/useWishlist';
import { useToast } from '../../hooks/useToast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToast } = useToast();
  const isWished = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
    addToast('Added to cart');
  };

  const handleToggleWish = () => {
    toggleWishlist(product.id);
    const message = isWished ? 'Removed from wishlist' : 'Added to wishlist';
    addToast(message);
  };

  return (
    <article className="product-card">
      <div className="product-image">
        <Link to={`/product/${product.id}`}>
          <img src={product.images[0]} alt={product.name} loading="lazy" />
          <img className="hover-image" src={product.images[1]} alt="" loading="lazy" />
        </Link>
        {product.isNew && <span className="badge">New</span>}
        <button className={isWished ? 'wish active' : 'wish'} onClick={handleToggleWish} aria-label="Save product">
          <Heart size={17} fill={isWished ? 'currentColor' : 'none'} />
        </button>
        <button className="quick-add" onClick={handleAddToCart}>
          Quick add <Plus size={14} />
        </button>
      </div>
      <div className="product-meta">
        <div>
          <span className="product-category">{product.category}</span>
          <Link to={`/product/${product.id}`} className="product-name">
            {product.name}
          </Link>
        </div>
        <span className="price">
          {formatCurrency(product.price)} <del>{formatCurrency(product.originalPrice)}</del>
        </span>
      </div>
      <div className="rating">
        <Star size={12} fill="currentColor" /> {product.rating.toFixed(1)} <span>({product.reviewCount})</span>
      </div>
    </article>
  );
}
