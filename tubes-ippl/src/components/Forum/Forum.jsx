import React, { useState, useEffect } from 'react'; 
import Post from './Post';
import PostForm from './PostForm';
import './Forum.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AuthForm from '../AuthForm/AuthForm';
import { jwtDecode } from 'jwt-decode';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [error, setError] = useState(null); // State untuk menampilkan error

  // Ambil data postingan
  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/forum/get');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Gagal mengambil data postingan:', error);
      setError('Gagal memuat postingan');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = async (newPost) => {
    try {
      const formData = new FormData();
      formData.append('title', newPost.title);
      formData.append('content', newPost.content);
      if (newPost.image) {
        formData.append('image', newPost.image);
      }

      const token = localStorage.getItem('token');

      const response = await fetch('http://localhost:8080/api/forum/post', {
        method: 'POST',
        headers: {
          Authorization: token,
        },
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        // Setelah post berhasil, ambil data postingan terbaru
        fetchPosts();
      } else {
        console.error('Gagal membuat postingan:', result.error);
        setError(result.error || 'Gagal membuat postingan');
      }
    } catch (error) {
      console.error('Error saat mengirim postingan:', error);
      setError('Terjadi kesalahan saat membuat postingan');
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    fetchPosts();  // Refresh data jika login
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">Menarik Seputar Warisan Budaya Barlingmascakeb</h1>
        <div className="community-banner">Komunitas</div>
        
        {/* Menampilkan error jika ada */}
        {error && <div className="error-message">{error}</div>}

        <div className="posts-area">
          {posts.length > 0 ? (
            posts.map((post) => <Post key={post.postId} {...post} />)
          ) : (
            <p>Tidak ada postingan untuk ditampilkan.</p>
          )}
        </div>
        
        {isLoggedIn ? (
          <>
            <PostForm addPost={addPost} />
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <div>
            <p>Silakan login untuk membuat postingan.</p>
            <AuthForm onLogin={handleLogin} />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Forum;
