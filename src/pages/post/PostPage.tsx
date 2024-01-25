import './postPage.scss';

import { useParams } from 'react-router';
import { usePostSelector } from '../../app/redux/hooks/hooks';
// import { useState } from 'react';
import {
  CardHeader,
  Avatar,
  IconButton,
  Box,
} from '@mui/material';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import { Like } from '../../utils/Likes';

export const PostPage = () => {
  const { id } = useParams();
  const post = usePostSelector((state) =>
    state.posts.posts.find((post) => post.id === Number(id))
  );

  // const [like, setLike] = useState<boolean | undefined>(undefined);

  return (
    <>
      <div className="box-page">
        <div className='post__picture'>
          <div className='post__picture-textbox'>
            <h1 className='post__picture-title'>{post?.title}</h1>
          </div>
        </div>
        <div className="container">
          <span className="span-date">{post?.date.toString()}</span>
          <article className="content">
            {post?.content}
          </article>
          <div className='content-tags'>
            <div className='content-tags__single'>ADVENTURE</div>
            <div className='content-tags__single'>PHOTO</div>
            <div className='content-tags__single'>DESIGN</div>
          </div>
          <div className='separator'></div>
          <div className="display-between">
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
        </div>
      </div>
    </>
  );
};
