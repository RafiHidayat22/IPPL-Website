import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    
    const newPost = {
      title,
      content,
      image,
    };

    addPost(newPost);

    // Reset form setelah mengirim
    setTitle('');
    setContent('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Judul Postingan"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="textarea"
        placeholder="Isi postingan..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        className="input"
        type="file"
        onChange={handleImageChange}
      />
      <button type="submit" className="button">Buat Postingan</button>
    </form>
  );
};

export default PostForm;
