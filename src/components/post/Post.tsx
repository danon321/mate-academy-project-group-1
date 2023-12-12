import './post.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { PostType } from '../../types/Post';
import { usePostSelector } from '../../hooks/hooks';

type Props = {
  post: PostType;
};

export const Post = ({ post }: Props) => {
  // const onePost = useSelector(state => getUserPosts(state, post.id))
  const onePost = usePostSelector((state) =>
    state.posts.posts.find((v) => v.id === post.id)
  );

  return (
    <Card className="display" sx={{ maxWidth: 1140 }}>
      <CardHeader
        className="text-center"
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {onePost?.id}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}
        subheader={post.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={post.imageUrl}
        alt="Paella dish"
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
        </Typography>
        <Typography paragraph className="text-center">
          Heat 1/2 cup of the broth in a pot until simmering, add saffron and
          set aside for 10 minutes.
        </Typography> */}
        <Typography paragraph className="text-left">
          {post.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
