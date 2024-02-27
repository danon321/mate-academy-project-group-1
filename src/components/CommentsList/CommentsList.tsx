import React from 'react';
import { Comment } from '../Comment/Comment';

interface Comment {
  id: string;
  name: string;
  surname: string;
  text: string;
}

interface CommentsListProps {
  comments: Comment[];
}

export const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={comment.id} id={comment.id} name={comment.name} surname={comment.surname} text={comment.text} />
      ))}
    </div>
  );
};
