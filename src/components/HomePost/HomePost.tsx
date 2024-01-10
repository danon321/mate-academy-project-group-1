import './homePost.scss';
import { PostType } from '../../types/post';

type Props = {
  post: PostType;
};

export const HomePost: React.FC<Props> = ({ post }: Props) => {
  const limitContent = (content: string, maxChars: number) => {
    if (content.length > maxChars) {
      return content.slice(0, maxChars) + '...';
    }
    return content;
  };

  return (
    <div className="post-container">
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
          <div className="avatar-img">
            <img
              className="img"
              src="/static/images/posts/fotoAvatar.svg"
              alt="P"
            />
          </div>

          <div>
            <h5 className="avatar-name">Avatar name</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
