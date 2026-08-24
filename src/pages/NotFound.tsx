import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';

export function NotFound() {
  return (
    <div className="container page empty">
      <div className="empty-icon">
        <Search />
      </div>
      <h1>That page wandered off.</h1>
      <p>Let's get you back to something good.</p>
      <Link className="button dark" to="/">
        Back home <ArrowRight size={16} />
      </Link>
    </div>
  );
}
