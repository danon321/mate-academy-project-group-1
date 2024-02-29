import React from 'react';
import { CommentsList } from '../CommentsList/CommentsList';

interface Comment {
  id: string;
  name: string;
  surname: string;
  text: string;
  date: string;
}

const AllComments: React.FC = () => {
  const comments: Comment[] = [
    {
      id: 'a1',
      name: 'Mike',
      surname: 'Brown',
      text: 'Ala ma kota, psa, rybki i akwarium.',
      date: '2024-02-20 16:54:55:236',
    },
    {
      id: 'a2',
      name: 'Suzan',
      surname: 'McAlister',
      text: 'Płynie Wisła płynie po polskiej krainie po polskiej krainie, zobaczyła Kraków pewno go nie minie, zobaczyła Kraków pewno go nie minie',
      date: '2024-02-29 12:54:55:236',
    },
    {
      id: 'a3',
      name: 'Tom',
      surname: 'Orwell',
      text: 'Jest ok',
      date: '2024-02-29 22:54:55:236',
    },
  ];

  return <CommentsList comments={comments} />;
};

export default AllComments;
