import React from 'react';
import { CommentsList } from '../CommentsList/CommentsList';

interface Comment {
  id: string;
  name: string;
  surname: string;
  text: string;
}

const AllComments: React.FC = () => {
  const comments: Comment[] = [
    {
      id: 'a1',
      name: 'Mike',
      surname: 'Brown',
      text: 'Ala ma kota, psa, rybki i akwarium.',
    },
    {
      id: 'a2',
      name: 'Suzan',
      surname: 'McAlister',
      text:
        'Płynie Wisła płynie po polskiej krainie po polskiej krainie, zobaczyła Kraków pewno go nie minie, zobaczyła Kraków pewno go nie minie',
    },
    {
      id: 'a3',
      name: 'Tom',
      surname: 'Orwell',
      text: 'Jest ok',
    },
  ];

  return <CommentsList comments={comments} />;
};

export default AllComments;
