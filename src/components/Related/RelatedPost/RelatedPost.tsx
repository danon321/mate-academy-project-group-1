import { Button } from '@mui/material';
import { Post } from '../../../types/post';
import { fullDate } from '../../../utils/Date/date';
import { limitContent } from '../../../utils/limitContent/limitContent';
import './relatedPost.scss';

type Props = {
  post: Post;
};

export const RelatedPost: React.FC<Props> = ({ post }: Props) => {
  const style: any = {
    // eslint-disable-next-line quotes
    backgroundImage: "url('/static/images/posts/related/photo2.svg')",
  };

  return (
    <>
      <div className="relatedPost" style={{ ...style }}>
        <div className="relatedPost__button">
          <Button
            variant="contained"
            href="#contained-buttons"
            sx={{
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              '&:hover': {
                backgroundColor: 'rgb(255, 255, 255)',
                color: '#3c52b2',
              },
            }}
            size="small"
          >
            Category
          </Button>
        </div>
        <div className="relatedPost__content">
          <p className="relatedPost__date">{fullDate(post?.date)}</p>
          <p className="relatedPost__title">{limitContent(post.title, 50)}</p>
          <p className="relatedPost__description">
            {limitContent(post.content, 170)}
          </p>
        </div>
      </div>
    </>
  );
};
