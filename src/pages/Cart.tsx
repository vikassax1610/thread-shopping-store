import { Link } from 'react-router-dom';
import { Minus, Plus, ChevronLeft } from 'lucide-react';
import { Breadcrumb } from '../components/common/Breadcrumb';
import { OrderSummary } from '../components/cart/OrderSummary';
import { Empty } from '../components/common/Empty';
import { useCart } from '../hooks/useCart';
import { formatCurrency } from '../utils/priceUtils';

export function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container page">
        <Breadcrumb current="Your bag" />
        <div className="page-intro compact">
          <p className="eyebrow">Almost yours</p>
          <h1>Your bag</h1>
        </div>
        <Empty title="Your bag is empty." text="A great wardrobe starts with one considered piece.">
          <Link className="button dark" to="/shop">
            Continue shopping <ChevronLeft size={16} />
          </Link>
        </Empty>
      </div>
    );
  }

  return (
    <div className="container page">
      <Breadcrumb current="Your bag" />
      <div className="page-intro compact">
        <p className="eyebrow">Almost yours</p>
        <h1>
          Your bag <span>({cartItems.length})</span>
        </h1>
      </div>
      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={`${item.product.id}-${item.size}`}>
              <img src={item.product.images[0]} alt={item.product.name} />
              <div className="cart-item-info">
                <span className="product-category">{item.product.category}</span>
                <h3>{item.product.name}</h3>
                <p>
                  Colour: {item.color} · Size: {item.size}
                </p>
                <div className="cart-actions">
                  <div className="quantity">
                    <button onClick={() => updateQuantity(item.product.id, -1)}>
                      <Minus size={13} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, 1)}>
                      <Plus size={13} />
                    </button>
                  </div>
                  <button className="remove" onClick={() => removeFromCart(item.product.id)}>
                    Remove
                  </button>
                </div>
              </div>
              <strong>{formatCurrency(item.product.price * item.quantity)}</strong>
            </div>
          ))}
          <Link className="text-link" to="/shop">
            <ChevronLeft size={15} /> Continue shopping
          </Link>
        </div>
        <OrderSummary subtotal={getCartTotal()} />
      </div>
    </div>
  );
}
