import { Post } from '../../types/post';
import { fullDate } from '../../utils/Date/date';
import { limitContent } from '../../utils/limitContent/limitContent';
import './homePost.scss';

type Props = {
  post: Post;
};

export const HomePost: React.FC<Props> = ({ post }: Props) => {
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
          <p>{fullDate(post?.date)}</p>
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
        <div className="avatar__grid">
          <img
            className="avatar__img"
            src="/static/images/posts/fotoAvatar.svg"
            alt="P"
          />
          <h5 className="avatar__name">{`${post.user.name} ${post.user.surname}`}</h5>
          <h5 className="avatar__title">{post.user.title}</h5>
        </div>
      </div>
    </div>
  );
};
