import { initialPosts } from '../../app/redux/data/initialPosts';
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
          <div key={post.id} className="post-container">
            <div className="post-image">
              <img
                className="post-image image"
                src="/static/images/posts/postImage1.svg"
                alt="image"
              />
            </div>
            <div className="post-section">
              <div className="post-date">
                <p>{post.date}</p>
              </div>
              <div className="post-title">
                <h2>{limitContent(post.title, 50)}</h2>
              </div>
              <div className="post-description">
                <p className="post-text">{limitContent(post.content, 110)}</p>
                <a href={`/posts/${post.id}`} className="read-more">
                  Czytaj więcej...
                </a>
              </div>
              <div className="avatar-container">
                <div className='avatar-img'>
                  <img
                    className="img"
                    src="/static/images/posts/fotoAvatar.svg"
                    alt='P'
                  />
                </div>

                <div>
                  <h5 className="avatar-name">Avatar name</h5>
                </div>
              </div>
            </div>

            {/* <div className="like-dislike-container">
              <div className="like-counter">👍 {post.likes}</div>
              <div className="dislike-counter">👎 {post.dislikes}</div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};
