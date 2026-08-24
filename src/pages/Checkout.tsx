import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { OrderSummary } from '../components/cart/OrderSummary';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import { useCheckout } from '../hooks/useCheckout';
import { DEMO_OTP } from '../utils/constants';

export function CheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, getCartTotal } = useCart();
  const { isAuthenticated } = useAuth();
  const { checkoutStep, setCheckoutStep, setOrderNumber } = useCheckout();
  const [otp, setOtp] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const [paid, setPaid] = useState(false);
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [isAuthenticated, cartItems.length, navigate]);

  const steps = ['Contact', 'Address', 'Payment', 'Review'];

  const handleSendOTP = () => {
    setOtp(DEMO_OTP);
    alert(`Demo OTP sent: ${DEMO_OTP}`);
  };

  const handleVerifyOTP = () => {
    if (otpInput === DEMO_OTP) {
      setCheckoutStep(2);
      setOtp('');
      setOtpInput('');
    } else {
      alert('Invalid OTP');
    }
  };

  const handlePayment = () => {
    setPaid(true);
    setTimeout(() => {
      const orderNum = `THR-${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`;
      setOrderNumber(orderNum);
      setCheckoutStep(4);
    }, 900);
  };

  return (
    <div className="container page checkout">
      <div className="checkout-head">
        <Link to="/" className="brand">
          <span className="brand-mark">⌁</span>Threads<span className="brand-dot">.</span>
        </Link>
        <span>
          Secure checkout <Check size={15} />
        </span>
      </div>
      <div className="checkout-steps">
        {steps.map((s, i) => (
          <div key={s} className={checkoutStep > i ? 'done' : checkoutStep === i + 1 ? 'current' : ''}>
            <b>{i + 1}</b>
            {s}
          </div>
        ))}
      </div>
      <div className="checkout-layout">
        <div className="checkout-form">
          <p className="eyebrow">Step 0{checkoutStep}</p>
          <h1>{steps[checkoutStep - 1]}</h1>

          {checkoutStep === 1 && (
            <>
              <label>
                Email address
                <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label>
                Mobile number
                <input placeholder="+91 98765 43210" value={mobile} onChange={(e) => setMobile(e.target.value)} />
              </label>
              {!otp && <button className="button dark" onClick={handleSendOTP}>Send OTP</button>}
              {otp && (
                <>
                  <label>
                    Enter OTP
                    <input placeholder="000000" value={otpInput} onChange={(e) => setOtpInput(e.target.value)} />
                  </label>
                  <button className="button dark" onClick={handleVerifyOTP}>
                    Verify OTP <ArrowRight size={16} />
                  </button>
                </>
              )}
              <p className="demo-note">Demo OTP: {DEMO_OTP}</p>
            </>
          )}

          {checkoutStep === 2 && (
            <>
              <div className="saved-address">
                <strong>Saurav Kumar</strong>
                <p>+91 9876543210</p>
                <p>24, Green Park, New Delhi, 110016</p>
                <span>Home</span>
              </div>
              <button className="button dark" onClick={() => setCheckoutStep(3)}>
                Use this address <ArrowRight size={16} />
              </button>
              <button className="text-link spaced" onClick={() => setCheckoutStep(1)}>
                ← Change details
              </button>
            </>
          )}

          {checkoutStep === 3 && (
            <>
              <div className="payment-options">
                <label>
                  <input type="radio" name="pay" defaultChecked /> UPI <span>name@upi</span>
                </label>
                <label>
                  <input type="radio" name="pay" /> Credit / debit card
                </label>
                <label>
                  <input type="radio" name="pay" /> Cash on delivery
                </label>
              </div>
              <label>
                UPI ID
                <input placeholder="name@upi" />
              </label>
              {!paid ? (
                <button className="button dark" onClick={handlePayment}>
                  Pay securely <ArrowRight size={16} />
                </button>
              ) : (
                <div className="processing">
                  <span className="spinner" /> Processing payment...
                </div>
              )}
            </>
          )}

          {checkoutStep === 4 && (
            <>
              <div className="success-icon">
                <Check />
              </div>
              <h2>Order confirmed.</h2>
              <p>
                Thank you for shopping with Threads. Your order is on its way.
              </p>
              <Link className="button dark" to="/account/orders">
                View order details <ArrowRight size={16} />
              </Link>
            </>
          )}
        </div>
        <OrderSummary subtotal={getCartTotal()} />
      </div>
    </div>
  );
}
