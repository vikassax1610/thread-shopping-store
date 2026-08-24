import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, ArrowRight, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useWishlist } from '../hooks/useWishlist';
import { useToast } from '../hooks/useToast';

export function AccountPage() {
  const { user, logout, isAuthenticated } = useAuth();
  const { wishlistItems } = useWishlist();
  const { addToast } = useToast();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    addToast('You have been logged out successfully');
    navigate('/');
  };

  return (
    <div className="container page account">
      <div className="account-intro">
        <p className="eyebrow">Welcome back</p>
        <h1>
          {user?.name?.split(' ')[0]}
          <span>.</span>
        </h1>
        <p className="muted">Manage your profile, orders and saved pieces.</p>
      </div>
      <div className="account-grid">
        <aside className="account-nav">
          {['Overview', 'Profile', 'Orders', 'Addresses', 'Wishlist', 'Settings'].map((x, i) => (
            <Link
              className={i === 0 ? 'active' : ''}
              to={i === 0 ? '/account' : `/account/${x.toLowerCase()}`}
              key={x}
            >
              {x}
              <ChevronRight size={15} />
            </Link>
          ))}
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              textAlign: 'left',
              fontSize: '11px',
              color: 'var(--muted)',
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--line)',
              padding: '14px 0',
              marginTop: '20px',
            }}
          >
            Logout <LogOut size={15} />
          </button>
        </aside>
        <div className="account-content">
          <div className="account-cards">
            <div>
              <p className="eyebrow">Orders</p>
              <strong>3</strong>
              <Link to="/account/orders">
                View order history <ArrowRight size={14} />
              </Link>
            </div>
            <div>
              <p className="eyebrow">Wishlist</p>
              <strong>{wishlistItems.length}</strong>
              <Link to="/wishlist">
                Saved pieces <ArrowRight size={14} />
              </Link>
            </div>
            <div>
              <p className="eyebrow">Default address</p>
              <strong>Home</strong>
              <span>New Delhi, India</span>
            </div>
          </div>
          <div className="account-panel">
            <div>
              <p className="eyebrow">Recent order</p>
              <h3>THR-2026-10482</h3>
              <p>Placed 18 Aug 2026 · 2 items</p>
            </div>
            <span className="status">In transit</span>
            <Link className="text-link" to="/track-order">
              Track order <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
