import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState(null); // Ganti dari string ke objek file
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !content) return;
    
    // Jika ada gambar, buat URL lokal untuk file
    const imageUrl = image ? URL.createObjectURL(image) : '';

    const newPost = {
      id: Date.now(),
      author,
      image: imageUrl, // Simpan URL gambar lokal
      content,
    };

    addPost(newPost);
    setAuthor('');
    setImage(null);
    setContent('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Set file image yang diunggah
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Nama..."
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        className="input"
        type="file"
        onChange={handleImageChange} // Menangani file input
      />
      <textarea
        className="textarea"
        placeholder="Isi postingan..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="button">Buat Postingan</button>
    </form>
  );
};

export default PostForm;
