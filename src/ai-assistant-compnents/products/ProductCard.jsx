import { Link } from 'react-router-dom';

function ProductCard({ product, onClose }) {

  return (
    <div className="w-[280px] overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-lg">
      <img
        src={product.images[0]}
        alt={product.name}
        className="h-44 w-full object-cover"
      />

      <div className="p-4">
        <p className="text-sm text-zinc-400">
          {product.category}
        </p>

        <h3 className="mt-1 font-semibold text-white">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-white">
            ₹{product.price}
          </span>

          <Link
            to={`/product/${product.id}`}
            onClick={onClose}
            className="rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;