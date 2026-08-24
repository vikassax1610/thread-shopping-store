import { Link } from 'react-router-dom';
import { Truck, Package, Check, Bell, Instagram } from 'lucide-react';
import { Button } from '../common/Button';

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4>{title}</h4>
      {links.map(([label, path]) => (
        <Link key={path} to={path}>
          {label}
        </Link>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-benefits container">
        <div>
          <Truck />
          <strong>Free shipping</strong>
          <span>On orders over ₹1,999</span>
        </div>
        <div>
          <Package />
          <strong>Easy returns</strong>
          <span>Within 7 days</span>
        </div>
        <div>
          <Check />
          <strong>Secure payment</strong>
          <span>100% protected checkout</span>
        </div>
        <div>
          <Bell />
          <strong>24/7 support</strong>
          <span>We're here to help</span>
        </div>
      </div>
      <div className="footer-main container">
        <div className="newsletter">
          <p className="eyebrow">Stay in the loop</p>
          <h3>Good things, delivered.</h3>
          <p>Sign up for early access, styling notes and a little inspiration.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Your email address" type="email" required />
            <Button variant="dark">Subscribe</Button>
          </form>
        </div>
        <div className="footer-links">
          <FooterCol
            title="Shop"
            links={[
              ['All products', '/shop'],
              ['Men', '/men'],
              ['Women', '/women'],
              ['Accessories', '/accessories'],
              ['New arrivals', '/new-arrivals'],
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              ['About us', '/about'],
              ['Our story', '/our-story'],
              ['Careers', '/careers'],
              ['Journal', '/blog'],
              ['Contact', '/contact'],
            ]}
          />
          <FooterCol
            title="Customer care"
            links={[
              ['Track order', '/track-order'],
              ['Returns & refunds', '/returns'],
              ['Shipping info', '/shipping'],
              ['FAQs', '/faqs'],
            ]}
          />
        </div>
      </div>
      <div className="footer-bottom container">
        <span>
          © 2026 Threads. Made with love by <a href="https://nyxstack.com/">nyxStack Innovation</a>
        </span>
        <div>
          <Instagram size={17} />
          <span>Follow along @threads</span>
        </div>
      </div>
    </footer>
  );
}
