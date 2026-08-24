import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CategoryItem {
  label: string;
  path: string;
  image: string;
}

interface CategoryGridProps {
  categories: CategoryItem[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="category-grid">
      {categories.map(({ label, path, image }) => (
        <Link to={path} className="category-card" key={label}>
          <img src={image} alt={label} />
          <div>
            <span>{label}</span>
            <ArrowRight size={17} />
          </div>
        </Link>
      ))}
    </div>
  );
}
