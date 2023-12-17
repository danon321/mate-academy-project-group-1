import { IconButton, Box } from '@mui/material';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { usePostSelector } from '../../hooks/hooks';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postSlice } from '../../features/posts/post-slice';

type Props = {
  like: boolean | undefined;
  setLike: (bool: boolean) => void;
};

export const Like: React.FC<Props> = ({
  like,
  setLike,
}: Props) => {
  const { id } = useParams();
  const post = usePostSelector((state) =>
    state.posts.posts.find((post) => post.id === id)
  );
  const dispatch = useDispatch();

  const addLike = (id: string) => {
    setLike(!like);
    dispatch(postSlice.actions.addLike(id));
  };

  const addDislike = (id: string) => {
    setLike(false);
    dispatch(postSlice.actions.addDislike(id));
  };

  return (
    <>
      <Box>
        {post?.likes && <span>{post.likes}</span>}

        {like === undefined ? (
          <>
            <IconButton
              onClick={() => {
                if (!post) return;
                return addLike(post.id);
              }}
            >
              <ThumbUpOffAltIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                if (!post) return;
                return addDislike(post.id);
              }}
            >
              <ThumbDownOffAltIcon />
            </IconButton>
          </>
        ) : like ? (
          <>
            <IconButton onClick={() => setLike(true)}>
              <ThumbUpAltIcon />
            </IconButton>
            <IconButton onClick={() => setLike(false)}>
              <ThumbDownOffAltIcon />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton onClick={() => setLike(!like)}>
              <ThumbUpOffAltIcon />
            </IconButton>
            <IconButton onClick={() => setLike(false)}>
              <ThumbDownAltIcon />
            </IconButton>
          </>
        )}
        <span>{post?.dislikes}</span>
      </Box>
    </>
  );
};
