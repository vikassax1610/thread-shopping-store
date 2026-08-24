import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Heart, ShoppingBag, ArrowRight, User } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { useWishlist } from '../../hooks/useWishlist';
import { useAuth } from '../../hooks/useAuth';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const { getCartCount } = useCart();
  const { wishlistItems } = useWishlist();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const cartCount = getCartCount();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
    setSearch('');
  };

  return (
    <header className="site-header">
      <div className="announcement">
        Free shipping on orders over ₹1,999 <span>Explore the new season <ArrowRight size={12} /></span>
      </div>
      <div className="header-main container">
        <button
          className="icon-btn mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
        <Link to="/" className="brand">
          <span className="brand-mark">⌁</span>Threads<span className="brand-dot">.</span>
        </Link>
        <nav className={mobileMenuOpen ? 'nav open' : 'nav'}>
          {[
            ['Home', '/'],
            ['Shop', '/shop'],
            ['Collections', '/collections'],
            ['Men', '/men'],
            ['Women', '/women'],
            ['About us', '/about'],
          ].map(([label, path]) => (
            <NavLink
              onClick={() => setMobileMenuOpen(false)}
              key={path}
              to={path}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <form className="header-search" onSubmit={handleSearch}>
            <Search size={17} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search" />
          </form>
          <Link className="header-icon" to="/wishlist" aria-label="Wishlist">
            <Heart size={19} />
            {wishlistItems.length > 0 && <b>{wishlistItems.length}</b>}
          </Link>
          <Link className="header-icon desktop-action" to={isAuthenticated ? '/account' : '/login'} aria-label="Account">
            <User size={19} />
          </Link>
          <Link className="header-icon" to="/cart" aria-label="Cart">
            <ShoppingBag size={19} />
            {cartCount > 0 && <b>{cartCount}</b>}
          </Link>
        </div>
      </div>
    </header>
  );
}
