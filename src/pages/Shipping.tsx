import { Plus } from 'lucide-react';

const sections = [
  'Shipping methods',
  'Estimated delivery',
  'Shipping charges',
  'International shipping',
  'Delayed orders',
];

export function Shipping() {
  return (
    <div className="container page narrow">
      <div className="page-intro compact">
        <p className="eyebrow">Customer care</p>
        <h1>Shipping information</h1>
        <p>Everything you need to know, in plain language.</p>
      </div>
      <div className="policy-list">
        {sections.map((s, i) => (
          <details key={s} open={i === 0}>
            <summary>
              {s}
              <Plus size={16} />
            </summary>
            <p>
              We partner with trusted carriers to make sure your Threads order reaches you safely. You'll receive tracking details as soon as it leaves our studio.
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
