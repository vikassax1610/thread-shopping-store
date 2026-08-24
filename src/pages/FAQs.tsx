import { Plus } from 'lucide-react';
import { faqs } from '../data/products';

export function FAQs() {
  return (
    <div className="container page narrow">
      <div className="page-intro compact">
        <p className="eyebrow">Customer care</p>
        <h1>Frequently asked questions.</h1>
      </div>
      <div className="policy-list">
        {faqs.map((q) => (
          <details key={q}>
            <summary>
              {q}
              <Plus size={16} />
            </summary>
            <p>Our customer care team is here to help. Please contact us at hello@threads.studio and we'll get back to you within one working day.</p>
          </details>
        ))}
      </div>
    </div>
  );
}
