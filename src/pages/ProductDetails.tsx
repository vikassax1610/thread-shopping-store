import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Minus, Plus, Heart, ShoppingBag, Truck, Package, ArrowRight, Star } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { ProductGrid } from '../components/product/ProductGrid';
import { SectionHeading } from '../components/home/SectionHeading';
import { products } from '../data/products';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { useToast } from '../hooks/useToast';
import { formatCurrency } from '../utils/priceUtils';
import { Empty } from '../components/common/Empty';

export function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [imageIdx, setImageIdx] = useState(0);
  const [size, setSize] = useState('M');
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToast } = useToast();

  if (!product) {
    return (
      <Empty title="Product not found" text="The product you're looking for doesn't exist." />
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product, size);
    }
    addToast('Added to cart');
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  const isWished = isInWishlist(product.id);

  return (
    <div className="container product-page">
      <Breadcrumb current={product.name} />
      <div className="product-detail">
        <div className="gallery">
          <div className="thumbs">
            {product.images.map((img, i) => (
              <button
                key={img}
                className={imageIdx === i ? 'selected' : ''}
                onClick={() => setImageIdx(i)}
              >
                <img src={img} alt="" />
              </button>
            ))}
          </div>
          <div className="gallery-main">
            <img src={product.images[imageIdx]} alt={product.name} />
          </div>
        </div>
        <div className="product-info">
          <p className="eyebrow">{product.category} / Threads studio</p>
          <h1>{product.name}</h1>
          <div className="rating">
            <Star size={14} fill="currentColor" /> {product.rating.toFixed(1)}{' '}
            <span>Based on {product.reviewCount} reviews</span>
          </div>
          <div className="detail-price">
            {formatCurrency(product.price)} <del>{formatCurrency(product.originalPrice)}</del>
          </div>
          <p className="detail-description">{product.description}</p>
          <div className="option">
            <div>
              <strong>Colour</strong>
              <span>{product.colors[0]}</span>
            </div>
            <div className="color-dot" />
          </div>
          <div className="option">
            <div>
              <strong>Size</strong>
              <a href="/faqs">Size guide</a>
            </div>
            <div className="size-row">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  className={size === s ? 'selected' : ''}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="buy-row">
            <div className="quantity">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>
                <Minus size={14} />
              </button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>
                <Plus size={14} />
              </button>
            </div>
            <button className="button dark grow" onClick={handleAddToCart}>
              Add to bag <ShoppingBag size={16} />
            </button>
            <button
              className={isWished ? 'icon-square active' : 'icon-square'}
              onClick={() => toggleWishlist(product.id)}
            >
              <Heart size={18} fill={isWished ? 'currentColor' : 'none'} />
            </button>
          </div>
          <button className="button outline full" onClick={handleBuyNow}>
            Buy it now <ArrowRight size={16} />
          </button>
          <div className="detail-notes">
            <span>
              <Truck size={17} />
              <b>Free delivery</b> on orders over ₹1,999
            </span>
            <span>
              <Package size={17} />
              <b>Easy returns</b> within 7 days of delivery
            </span>
          </div>
        </div>
      </div>
      <div className="product-tabs">
        <h3>Product details</h3>
        <p>
          Designed in India. Made for all the places you're going. Every Threads piece is finished with attention to comfort,
          fit and longevity.
        </p>
      </div>
      <section className="section">
        <SectionHeading eyebrow="Complete the look" title="You may also like" />
        <ProductGrid items={products.slice(product.id % 4, product.id % 4 + 4)} />
      </section>
    </div>
  );
}
