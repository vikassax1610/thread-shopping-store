import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { images } from '../data/products';

export function Collections() {
  const cols = [
    ['Summer collection', 'A lighter way forward.', images[4]],
    ['Everyday essentials', 'The pieces that do more.', images[1]],
    ['Street uniform', 'For off-duty days.', images[3]],
    ['Accessories', 'The finishing touches.', images[8]],
  ];

  return (
    <div className="container page">
      <div className="page-intro">
        <p className="eyebrow">Explore Threads</p>
        <h1>
          Collections with<br />
          <em>intention.</em>
        </h1>
        <p>Find your next everyday favourite through our considered edits.</p>
      </div>
      <div className="collection-list">
        {cols.map(([title, text, image], i) => (
          <Link to={i === 3 ? '/accessories' : '/shop'} className="collection-row" key={title}>
            <img src={image} alt={title} />
            <div>
              <p className="eyebrow">0{i + 1}</p>
              <h2>{title}</h2>
              <p>{text}</p>
              <span className="text-link">
                Shop collection <ArrowRight size={15} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
