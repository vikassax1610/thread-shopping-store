import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { images } from '../../data/products';

export function Hero() {
  return (
    <section className="hero container">
      
      <div className="hero-copy">
        <p className="eyebrow">New season / 2026</p>
        <h1>
          Elevate your<br />
          <em>everyday.</em>
        </h1>
        <p>Thoughtful pieces, made for the way you move through the world. Clean lines, considered details, no noise.</p>
        <div className="hero-actions">
          <Link className="button dark" to="/shop">
            Shop the collection <ArrowRight size={16} />
          </Link>
          <Link className="text-link" to="/new-arrivals">
            Explore new arrivals <ArrowRight size={15} />
          </Link>
          
        </div>
      </div>
      <div className="hero-image">
        <img src={images[0]} alt="Models wearing the new Threads collection" />
        <div className="hero-stamp">
          The<br />
          new<br />
          <strong>standard</strong>
        </div>
      </div>
    </section>
  );
}
