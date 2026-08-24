import { ArrowRight } from 'lucide-react';
import { jobs } from '../data/products';

export function Careers() {
  return (
    <div className="container page">
      <div className="page-intro">
        <p className="eyebrow">Come as you are</p>
        <h1>
          Make something<br />
          <em>worth wearing.</em>
        </h1>
        <p>We're building a different kind of fashion company. Thoughtful, curious, and always moving forward.</p>
      </div>
      <div className="jobs">
        <h2>Open roles</h2>
        {jobs.map((job) => (
          <div className="job" key={job}>
            <div>
              <h3>{job}</h3>
              <p>Threads studio · New Delhi</p>
            </div>
            <span>Full-time</span>
            <button className="text-link">
              Apply <ArrowRight size={15} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
