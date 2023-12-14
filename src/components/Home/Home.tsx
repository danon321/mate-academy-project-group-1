import React, { useState } from 'react';
import { Post } from '../../types/post';
import { initialPosts } from '../../InitialPosts/initialPosts';
import './home.scss';

export const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleLike = (postId: number) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const handleDislike = (postId: number) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, dislikes: post.dislikes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const [clickedLikeButtons, setClickedLikeButtons] = useState<{
    [key: number]: boolean;
  }>({});
  const [clickedDislikeButtons, setClickedDislikeButtons] = useState<{
    [key: number]: boolean;
  }>({});

  const handleLikeButtonClick = (postId: number) => {
    const updatedLikeButtons = {
      ...clickedLikeButtons,
      [postId]: !clickedLikeButtons[postId],
    };
    setClickedLikeButtons(updatedLikeButtons);

    if (clickedDislikeButtons[postId]) {
      const updatedDislikeButtons = {
        ...clickedDislikeButtons,
        [postId]: false,
      };
      setClickedDislikeButtons(updatedDislikeButtons);
    } else {
      handleLike(postId);
    }
  };

  const handleDislikeButtonClick = (postId: number) => {
    const updatedDislikeButtons = {
      ...clickedDislikeButtons,
      [postId]: !clickedDislikeButtons[postId],
    };
    setClickedDislikeButtons(updatedDislikeButtons);

    if (clickedLikeButtons[postId]) {
      const updatedLikeButtons = {
        ...clickedLikeButtons,
        [postId]: false,
      };
      setClickedLikeButtons(updatedLikeButtons);
    } else {
      handleDislike(postId);
    }
  };

  const limitContent = (content: string, maxChars: number) => {
    if (content.length > maxChars) {
      return content.slice(0, maxChars) + '...';
    }
    return content;
  };

  return (
    <div className="container">
      <h1>Our Blog Page</h1>
      <div className="post-grid">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <p>{post.date}</p>
              <h2>{post.title}</h2>
            </div>
            <p>{limitContent(post.content, 120)}</p>
            <div className="like-dislike-container">
              <div className="like-counter">{post.likes}</div>
              <button
                onClick={() => handleLikeButtonClick(post.id)}
                className={`like-button ${
                  clickedLikeButtons[post.id] ? 'clicked' : ''
                }`}
              >
                👍
              </button>
              <a href={`/posts/${post.id}`} className="read-more">
                Czytaj więcej...
              </a>
              <button
                onClick={() => handleDislikeButtonClick(post.id)}
                className={`dislike-button ${
                  clickedDislikeButtons[post.id] ? 'clicked' : ''
                }`}
                disabled={
                  clickedDislikeButtons[post.id] && post.dislikes === -1
                }
              >
                👎
              </button>
              <div className="dislike-counter">{post.dislikes}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
