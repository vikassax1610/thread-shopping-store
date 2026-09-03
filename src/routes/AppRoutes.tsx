import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

// Pages
import { Home } from '../pages/Home';
import { Shop } from '../pages/Shop';
import { ProductDetails } from '../pages/ProductDetails';
import { CartPage } from '../pages/Cart';
import { WishlistPage } from '../pages/Wishlist';
import { CheckoutPage } from '../pages/Checkout';
import { AccountPage } from '../pages/Account';
import { SearchPage } from '../pages/Search';
import { Collections } from '../pages/Collections';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { FAQs } from '../pages/FAQs';
import { NotFound } from '../pages/NotFound';
import { LoginPage } from '../pages/auth/Login';
import { RegisterPage } from '../pages/auth/Register';
import { Men } from '../pages/Men';
import { Women } from '../pages/Women';
import { Kids } from '../pages/Kids';
import { Accessories } from '../pages/Accessories';
import { NewArrivals } from '../pages/NewArrivals';
import { OurStory } from '../pages/OurStory';
import { Careers } from '../pages/Careers';
import { Blog } from '../pages/Blog';
import { BlogArticle } from '../pages/BlogArticle';
import { TrackOrder } from '../pages/TrackOrder';
import { Returns } from '../pages/Returns';
import { Shipping } from '../pages/Shipping';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      {/* Public routes */}
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/kids" element={<Kids />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/new-arrivals" element={<NewArrivals />} />

      {/* Cart & Wishlist */}
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishlist" element={<WishlistPage />} />

      {/* Auth */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected routes */}
      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        }
      />

      {/* Info pages */}
      <Route path="/about" element={<About />} />
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogArticle />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/track-order" element={<TrackOrder />} />
      <Route path="/returns" element={<Returns />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/faqs" element={<FAQs />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
