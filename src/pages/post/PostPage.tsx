import './postPage.scss';

import { useParams } from 'react-router';
import { usePostSelector } from '../../app/redux/hooks/hooks';
// import { useState } from 'react';
import { CardHeader, Avatar, IconButton, Box } from '@mui/material';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import AddComment from '../../components/AddComment/AddComment';
// import { Like } from '../../utils/Likes';
import arrow from './arrow-drop-down-rounded.svg';
import avatar from './Ellipse 4.jpg';
import more from './more-horiz.svg';
import rate from './rate-up.svg';
import reply from './reply-rounded.svg';

export const PostPage = () => {
  const { id } = useParams();
  const post = usePostSelector((state) =>
    state.posts.posts.find((post) => post.id === Number(id))
  );

  // const [like, setLike] = useState<boolean | undefined>(undefined);

  return (
    <>
      <div className="box-page">
        <div className="post__picture">
          <div className="post__picture-textbox">
            <h1 className="post__picture-title">{post?.title}</h1>
          </div>
        </div>
        <div className="container">
          <span className="span-date">{post?.date.toString()}</span>
          <article className="content">{post?.content}</article>
          <div className="content-tags">
            <div className="content-tags__single">ADVENTURE</div>
            <div className="content-tags__single">PHOTO</div>
            <div className="content-tags__single">DESIGN</div>
          </div>
          <div className="separator"></div>
          <div className="display-between">
            <Link to="/users/2">
              <CardHeader
                avatar={
                  <Avatar
                    alt="Jennifer Lawrence"
                    src="/static/images/posts/jennifer_lawrence.svg"
                    sx={{ width: 56, height: 56 }}
                  />
                }
                subheader="Jennifer Lawrence"
              />
            </Link>
            {/* <Like like={like} setLike={setLike} /> */}
            <Box>
              <IconButton>
                <FacebookSharpIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
            </Box>
          </div>
          <AddComment />
          <div className="sorting">
            <p className="sorting-writting">Latest</p>
            <img src={arrow} alt="drop down" />
          </div>

          <div className="comment-header">
            <div className="comment-header-context">
              <img src={avatar} alt="full name" className="comment-header-avatar" />
              <div className="comment-header-data">
                <p className="comment-header-full-name">name fullname</p>
                <p className="comment-header-time">
                  <span className="comment-header-num-of-days">26</span>days ago
                </p>
              </div>
            </div>
            <img src={more} alt="more" className="comment-more" />
          </div>
          <p className="comment-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aut molestiae maxime, eius corporis, impedit architecto id tempora molestias quidem illo fugit saepe aliquid iure consequatur! Minus repellendus doloribus reprehenderit!</p>
          <button className="comment-read-more">Read more</button>
          <div className="comment-rating">
            <img src={rate} alt="rate up" className="comment-rating-up" />
            <p className="comment-rating-number">26</p>
            <img src={reply} alt="reply" className="comment-rating-reply" />
          </div>

          <div className="comment-download-comments">
            <button className="comment-download-comments-more">Download more comments</button>
          </div>
        </div>
      </div>
    </>
  );
};
