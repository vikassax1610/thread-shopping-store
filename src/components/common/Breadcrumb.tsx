import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  current: string;
  items?: { label: string; path: string }[];
}

export function Breadcrumb({ current, items = [] }: BreadcrumbProps) {
  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      <ChevronRight size={13} />
      {items.map((item, idx) => (
        <div key={idx}>
          <Link to={item.path}>{item.label}</Link>
          <ChevronRight size={13} />
        </div>
      ))}
      {current}
    </div>
  );
}
