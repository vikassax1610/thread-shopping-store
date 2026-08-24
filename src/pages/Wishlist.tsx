import { Empty } from '../components/common/Empty';
import { ProductGrid } from '../components/product/ProductGrid';
import { useWishlist } from '../hooks/useWishlist';
import { products } from '../data/products';

export function WishlistPage() {
  const { wishlistItems } = useWishlist();
  const wishlistProducts = products.filter((p) => wishlistItems.includes(p.id));

  return (
    <div className="container page">
      <div className="page-intro compact">
        <p className="eyebrow">Saved for later</p>
        <h1>Your wishlist.</h1>
      </div>
      {wishlistProducts.length ? (
        <ProductGrid items={wishlistProducts} />
      ) : (
        <Empty
          title="Your wishlist is empty."
          text="Save your favourite pieces here and come back when you're ready."
        />
      )}
    </div>
  );
}
