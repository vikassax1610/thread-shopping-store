import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  link?: string;
}

export function SectionHeading({ eyebrow, title, link }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {link && (
        <Link className="text-link" to={link}>
          View all <ArrowRight size={15} />
        </Link>
      )}
    </div>
  );
}
