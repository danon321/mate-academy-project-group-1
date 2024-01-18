import './postPage.scss';

import { useParams } from 'react-router';
import { usePostSelector } from '../../app/redux/hooks/hooks';
import { useState } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Like } from '../../utils/Likes';
import React from 'react';

export const PostPage = () => {
  const { id } = useParams();
  const post = usePostSelector((state) =>
    state.posts.posts.find((post) => post.id === id)
  );

  const [like, setLike] = useState<boolean | undefined>(undefined);

  return (
    <>
      <Box className="box-page">
        <Card className="container" sx={{ maxWidth: 1000 }}>
          <CardHeader
            avatar={
              <Avatar
                alt="Jennifer Lawrence"
                src="/static/images/posts/jennifer_lawrence.svg"
                sx={{ width: 56, height: 56 }}
              />
            }
            subheader="Jennifer Lawrence"
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
          />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
          <CardContent>
            <Typography paragraph className="title" align="center" variant="h4">
              {post?.title}
            </Typography>
            <Typography paragraph align="left">
              {post?.content}
            </Typography>
            <Typography paragraph sx={{ maxWidth: 860 }}></Typography>
            <Box className="display-between">
              <span className="span-date">{post?.date}</span>
              <Like like={like} setLike={setLike} />
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
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
