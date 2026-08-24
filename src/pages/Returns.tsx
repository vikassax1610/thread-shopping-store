import { Plus } from 'lucide-react';

const sections = [
  'Return policy',
  'Eligibility',
  'How to return',
  'Refund process',
  'Exchange policy',
  'Non-returnable items',
];

export function Returns() {
  return (
    <div className="container page narrow">
      <div className="page-intro compact">
        <p className="eyebrow">Customer care</p>
        <h1>Returns & refunds</h1>
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
              We want you to love your order. If it is not quite right, you can request a return within 7 days of delivery, as long as the item is unworn and in its original packaging.
            </p>
          </details>
        ))}
      </div>
    </div>
  );
}
