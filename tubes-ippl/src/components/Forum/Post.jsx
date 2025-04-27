import React from 'react';

const Post = ({ author, image, content }) => {
  return (
    <div className="post-card">
      <div className="post-author">{author}</div>
      {image && <img src={image} alt="Post" className="post-image" />}
      <div className="post-content">{content}</div>
    </div>
  );
};

export default Post;