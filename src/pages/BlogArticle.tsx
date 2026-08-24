import { useParams } from 'react-router-dom';
import { articles, images } from '../data/products';

export function BlogArticle() {
  const { slug } = useParams();
  const index = Math.max(0, Number(slug?.split('-')[1] || 1) - 1);
  const article = articles[index] || articles[0];

  return (
    <div className="container page article">
      <p className="eyebrow">The journal / Style guide</p>
      <h1>{article}</h1>
      <p className="article-lede">
        The best wardrobes aren't built overnight. They're built through small, thoughtful choices that make everyday dressing feel more like you.
      </p>
      <img src={images[(index + 2) % images.length]} alt="Fashion editorial" />
      <h2>Start with what you reach for.</h2>
      <p>
        Look at the pieces you already love. The shapes, colours and textures you return to are clues to a style that is already yours. Threads is here to add to that conversation, not replace it.
      </p>
    </div>
  );
}
