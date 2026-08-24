import { images } from '../data/products';

export function OurStory() {
  return (
    <div className="container page">
      <section className="info-hero">
        <div>
          <p className="eyebrow">Since 2020</p>
          <h1>A better way to get dressed.</h1>
          <p>Threads began with a simple idea: getting dressed should feel effortless, personal and a little bit exciting.</p>
        </div>
        <img src={images[3]} alt="Threads story" />
      </section>
      <div className="values">
        <div>
          <p className="eyebrow">01 / Made to last</p>
          <h2>Design is in the details.</h2>
          <p>We obsess over the fit, feel and finish so your favourite pieces can become part of your everyday.</p>
        </div>
        <div>
          <p className="eyebrow">02 / Designed here</p>
          <h2>Rooted in India. Open to everywhere.</h2>
          <p>Our point of view is shaped by the rhythm, colour and contradiction of modern life here.</p>
        </div>
        <div>
          <p className="eyebrow">03 / Less noise</p>
          <h2>A wardrobe, not a trend.</h2>
          <p>We make considered essentials designed to work together, season after season.</p>
        </div>
      </div>
    </div>
  );
}
