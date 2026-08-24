import { FormEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { useToast } from '../hooks/useToast';

export function Contact() {
  const { addToast } = useToast();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    addToast('Message sent — we\'ll be in touch.');
  };

  return (
    <div className="container page contact">
      <div className="page-intro compact">
        <p className="eyebrow">We'd love to hear from you</p>
        <h1>Let's talk.</h1>
      </div>
      <div className="contact-grid">
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input required placeholder="Your name" />
          </label>
          <label>
            Email
            <input required type="email" placeholder="you@example.com" />
          </label>
          <label>
            Subject
            <input required placeholder="How can we help?" />
          </label>
          <label>
            Message
            <textarea required placeholder="Tell us a little more..." />
          </label>
          <button className="button dark">
            Send message <ArrowRight size={16} />
          </button>
        </form>
        <div className="contact-details">
          <div>
            <p className="eyebrow">Email</p>
            <h3>hello@threads.studio</h3>
          </div>
          <div>
            <p className="eyebrow">Call</p>
            <h3>+91 11 4567 8900</h3>
          </div>
          <div>
            <p className="eyebrow">Visit</p>
            <h3>
              24 Green Park<br />
              New Delhi 110016
            </h3>
          </div>
          <div>
            <p className="eyebrow">Hours</p>
            <h3>Mon–Fri, 10am–6pm IST</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
