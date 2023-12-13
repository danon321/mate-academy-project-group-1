import './post.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useParams } from 'react-router';
import { usePostSelector } from '../../hooks/hooks';

export const Post = () => {
  const { id } = useParams();
  const post = usePostSelector((state) =>
    state.posts.posts.find((post) => Number(post.id) === Number(id))
  );

  return (
    <Card className="display" sx={{ maxWidth: 1200 }}>
      <CardHeader
        className="text-center"
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {post?.id}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        subheader={post?.date}
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
        {/* <Typography paragraph className="text-center">
          Method:
        </Typography> */}
        <Typography paragraph className="text-center">
          {post?.title}
        </Typography>
        <Typography paragraph className="text-left">
          {post?.content}
        </Typography>
      </CardContent>
    </Card>
  );
};
