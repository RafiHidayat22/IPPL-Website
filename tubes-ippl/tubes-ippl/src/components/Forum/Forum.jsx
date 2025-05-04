import React, { useState } from 'react';
import Post from './Post';
import PostForm from './PostForm';
import './Forum.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AuthForm from '../AuthForm/AuthForm';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Menyimpan status login

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  // Fungsi untuk mengubah status login
  const handleLogin = () => {
    setIsLoggedIn(true); // Mengubah status menjadi login
  };
  // eslint-disable-next-line
  const handleLogout = () => {
    setIsLoggedIn(false); // Mengubah status menjadi logout
  };

  return (
    <>
      <Header />

      <div className="container">
        <h1 className="title">Menarik Seputar Warisan Budaya Barlingmascakeb</h1>

        <div className="community-banner">Komunitas</div>

        <div className="posts-area">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Post key={post.id} {...post} />
            ))
          ) : (
            <p>Tidak ada postingan untuk ditampilkan.</p>
          )}
        </div>

        {/* Tampilkan form jika pengguna sudah login */}
        {isLoggedIn ? (
          <PostForm addPost={addPost} />
        ) : (
          <div>
            <p>Silakan login untuk membuat postingan.</p>
            <AuthForm onLogin={handleLogin} /> {/* Mengirimkan handleLogin ke AuthForm */}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Forum;
