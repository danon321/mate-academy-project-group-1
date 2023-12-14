import React from 'react';
import { useParams } from 'react-router-dom';

const HomeId = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Post o ID: {id}</h2>
      {/* Zawartość strony użytkownika z identyfikatorem */}
    </div>
  );
};

export default HomeId;