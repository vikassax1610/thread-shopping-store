import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { formatCurrency, calculateShipping, calculateTax, calculateTotal } from '../../utils/priceUtils';

interface OrderSummaryProps {
  subtotal: number;
  fullWidth?: boolean;
}

export function OrderSummary({ subtotal, fullWidth = false }: OrderSummaryProps) {
  const shipping = calculateShipping(subtotal);
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal);

  return (
    <aside className="order-summary">
      <h3>Order summary</h3>
      <div>
        <span>Subtotal</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>
      <div>
        <span>Shipping</span>
        <span>{shipping ? formatCurrency(shipping) : 'Free'}</span>
      </div>
      <div>
        <span>Tax</span>
        <span>{formatCurrency(tax)}</span>
      </div>
      <div className="coupon">
        <input placeholder="Coupon code" />
        <button>Apply</button>
      </div>
      <div className="total">
        <strong>Total</strong>
        <strong>{formatCurrency(total)}</strong>
      </div>
      <Link className={`button dark ${fullWidth ? 'full' : ''}`} to="/checkout">
        Proceed to checkout <ArrowRight size={16} />
      </Link>
      <p className="small muted">Taxes included where applicable. Secure checkout.</p>
    </aside>
  );
}
