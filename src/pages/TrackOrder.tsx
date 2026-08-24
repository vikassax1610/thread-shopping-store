import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function TrackOrder() {
  const [id, setId] = useState('');
  const [show, setShow] = useState(false);

  return (
    <div className="container page narrow">
      <div className="page-intro compact">
        <p className="eyebrow">We've got you</p>
        <h1>Track your order.</h1>
        <p>Enter the order number from your confirmation email.</p>
      </div>
      <div className="track-form">
        <input value={id} onChange={(e) => setId(e.target.value)} placeholder="THR-2026-10482" />
        <button className="button dark" onClick={() => setShow(true)}>
          Track order <ArrowRight size={16} />
        </button>
      </div>
      {show && (
        <div className="timeline">
          {['Order placed', 'Order confirmed', 'Packed', 'Shipped', 'Out for delivery', 'Delivered'].map(
            (x, i) => (
              <div key={x} className={i < 4 ? 'complete' : ''}>
                <span>{i < 4 ? <Check size={14} /> : i + 1}</span>
                <strong>{x}</strong>
                <small>{i < 4 ? '18 Aug 2026' : 'Coming soon'}</small>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
