import React from 'react';

const Post = ({ title, authorName, content, imageUrl }) => {
  return (
    <div className="post-card">
      <h3 className="post-title">{title}</h3>
      <div className="post-author">Oleh: {authorName || 'Anonim'}</div>
      {imageUrl && <img src={imageUrl} alt="Post" className="post-image" />}
      <p className="post-content">{content}</p>
    </div>
  );
};

export default Post;
