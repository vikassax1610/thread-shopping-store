import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/home/SectionHeading';
import { ProductGrid } from '../components/product/ProductGrid';
import { products, images } from '../data/products';

export function Men() {
  const items = products.filter((p) => p.gender === 'Men');

  return (
    <>
      <section className="category-hero container">
        <img src={images[1]} alt="Men's edit" />
        <div>
          <p className="eyebrow">The Threads edit</p>
          <h1>Men's edit</h1>
          <p>A considered collection of everyday essentials, made to be worn your way.</p>
          <Link className="button light" to="/shop">
            Shop now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="container section">
        <SectionHeading eyebrow="Curated for you" title="The essentials" link="/shop" />
        <ProductGrid items={items.slice(0, 8)} />
      </section>
    </>
  );
}
