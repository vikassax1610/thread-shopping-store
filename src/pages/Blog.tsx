import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { articles, images } from '../data/products';

export function Blog() {
  return (
    <div className="container page">
      <div className="page-intro compact">
        <p className="eyebrow">The journal</p>
        <h1>
          Ideas worth<br />
          <em>wearing.</em>
        </h1>
      </div>
      <div className="blog-grid">
        {articles.map((a, i) => (
          <Link to={`/blog/article-${i + 1}`} className="blog-card" key={a}>
            <img src={images[(i + 2) % images.length]} alt={a} />
            <p className="eyebrow">{i % 2 ? 'Style guide' : 'Behind the brand'}</p>
            <h2>{a}</h2>
            <span className="text-link">
              Read story <ArrowRight size={15} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
