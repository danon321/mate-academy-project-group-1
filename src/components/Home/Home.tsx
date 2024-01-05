import { initialPosts } from '../../InitialPosts/initialPosts';
import './home.scss';

export const Home: React.FC = () => {
  const limitContent = (content: string, maxChars: number) => {
    if (content.length > maxChars) {
      return content.slice(0, maxChars) + '...';
    }
    return content;
  };

  return (
    <div className="container">
      <div className="post-grid">
        {initialPosts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <p>{post.date}</p>
              <h2>{post.title}</h2>
            </div>
            <p>{limitContent(post.content, 120)}</p>
            <a href={`/posts/${post.id}`} className="read-more">
              Czytaj więcej...
            </a>
            <div className="like-dislike-container">
              <div className="like-counter">👍 {post.likes}</div>
              <div className="dislike-counter">👎 {post.dislikes}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
