import './postPage.scss';

import { useParams } from 'react-router';
// import { useState } from 'react';
import { CardHeader, Avatar, IconButton, Box } from '@mui/material';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import AddComment from '../../components/AddComment/AddComment';
import { useEffect } from 'react';
import { useAppDispatch, usePostSelector } from '../../app/redux/hooks/hooks';
import { fetchPosts } from '../../api/services/fetchPost';
import { fullDate } from '../../utils/date/date';
// import { Like } from '../../utils/Likes';
import arrow from './arrow-drop-down-rounded.svg';
// import avatar from './Ellipse 4.jpg';
// import more from './more-horiz.svg';
// import rate from './rate-up.svg';
// import reply from './reply-rounded.svg';
import AllComments from '../../components/AllComments/AllComments';

export const PostPage = () => {
  const { id } = useParams();
  const post = usePostSelector((state) =>
    state.posts.posts.find((post) => post.id === Number(id))
  );
  const dispatch = useAppDispatch();
  // const [like, setLike] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const dataLoading = async () => {
      const posts = await fetchPosts();
      dispatch(posts);
    };

    dataLoading();
  }, []);

  const fullName = `${post?.user.name} ${post?.user.surname}`;

  return (
    <>
      <div className="box-page">
        <div className="post__picture">
          <div className="post__picture-textbox">
            <h1 className="post__picture-title">{post?.title}</h1>
          </div>
        </div>
        <div className="container">
          <span className="span-date">
            {post !== undefined && fullDate(post.date)}
          </span>
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
                subheader={fullName}
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

          <AllComments />

          <div className="comment-download-comments">
            <button className="comment-download-comments-more">Download more comments</button>
          </div>
        </div>
      </div>
    </>
  );
};
