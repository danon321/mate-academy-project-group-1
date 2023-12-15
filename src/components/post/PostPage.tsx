import './postPage.css';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useParams } from 'react-router';
import { usePostSelector } from '../../hooks/hooks';

export const PostPage = () => {
  const { id } = useParams();
  const post = usePostSelector((state) =>
    state.posts.posts.find((post) => post.id === id)
  );

  return (
    <>
      <div>
        <Card className="display" sx={{ maxWidth: 860 }}>
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
            <Typography paragraph className="title" align='center' variant="h4">
              {post?.title}
            </Typography>
            <Typography paragraph align="left">
              {post?.content}
            </Typography>
            <Typography
              paragraph
              sx={{ maxWidth: 860 }}
            ></Typography>
            <Typography paragraph className="dispay-between">
              <span className="span-date">{post?.date}</span>
              <img className="size" src='/static/images/posts/facebook.svg'/>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
