import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Hero } from '../components/home/Hero';
import { SectionHeading } from '../components/home/SectionHeading';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { ProductGrid } from '../components/product/ProductGrid';
import { products, images } from '../data/products';

export function Home() {
  const categories = [
    { label: 'Men', path: '/men', image: images[1] },
    { label: 'Women', path: '/women', image: images[2] },
    { label: 'Kids', path: '/kids', image: images[6] },
    { label: 'Accessories', path: '/accessories', image: images[8] },
  ];

  return (
    <>
      <Hero />
      <section className="container reassurance">
        <span>Designed with intention</span>
        <span>Made to move</span>
        <span>Delivered with care</span>
      </section>
      <section className="container section">
        <SectionHeading eyebrow="Discover your edit" title="Shop by category" link="/collections" />
        <CategoryGrid categories={categories} />
      </section>
      <section className="container section">
        <SectionHeading eyebrow="The latest" title="Featured pieces" link="/shop" />
        <ProductGrid items={products.slice(0, 4)} />
      </section>
      <section className="promo container">
        <img src={images[4]} alt="Threads summer edit" />
        <div>
          <p className="eyebrow">The summer edit</p>
          <h2>Easy does it.</h2>
          <p>Light layers and relaxed shapes for longer days.</p>
          <Link className="button light" to="/shop">
            Shop summer <ArrowRight size={15} />
          </Link>
        </div>
      </section>
      <section className="story-teaser container">
        <img src={images[7]} alt="Threads clothing detail" />
        <div>
          <p className="eyebrow">The Threads approach</p>
          <h2>
            Less, but<br />
            <em>better.</em>
          </h2>
          <p>We make the pieces you reach for on repeat. Designed in India, made with care, and built to last beyond the season.</p>
          <Link className="text-link" to="/about">
            Read our story <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
