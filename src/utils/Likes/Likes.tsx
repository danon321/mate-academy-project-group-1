import { IconButton, Box } from '@mui/material';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { usePostSelector } from '../../app/redux/hooks/hooks';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postSlice } from '../../app/redux/features/posts/post-slice';

type Props = {
  like: boolean | undefined;
  setLike: (bool: boolean) => void;
};

export const Like: React.FC<Props> = ({ like, setLike }: Props) => {
  const { id } = useParams();
  const postId = Number(id);
  const post = usePostSelector((state) =>
    state.posts.posts.find((post) => post.id === postId)
  );
  const dispatch = useDispatch();

  const addLike = (postId: number) => {
    setLike(!like);
    dispatch(postSlice.actions.addLike(postId));
  };

  const addDislike = (postId: number) => {
    setLike(false);
    dispatch(postSlice.actions.addDislike(postId));
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
