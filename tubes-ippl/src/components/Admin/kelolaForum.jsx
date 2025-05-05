import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './kelolaForum.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const KelolaForum = () => {
  const [forumPosts, setForumPosts] = useState([]);

  // Ambil data forum dari backend
  const fetchForumPosts = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/forum/get');
      const data = await response.json();
      console.log(data); // Cek data yang diterima dari backend
      setForumPosts(data); // Simpan data forum di state
    } catch (error) {
      console.error('Gagal mengambil data forum:', error);
    }
  };

  // Hapus postingan
  const handleDelete = async (postId) => {
    const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus postingan ini?');
    if (!confirmDelete) return;
  
    const token = localStorage.getItem('token'); // Ambil token dari localStorage (atau tempat penyimpanan lainnya)
  
    if (!token) {
      alert('Token tidak ditemukan. Anda perlu login terlebih dahulu.');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8080/api/forum/delete/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token, // Mengirim token langsung tanpa 'Bearer'
        },
      });
  
      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        // Setelah menghapus, perbarui daftar forum
        setForumPosts(forumPosts.filter(post => post.postId !== postId));
      } else {
        alert(result.error || 'Gagal menghapus postingan.');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Terjadi kesalahan saat menghapus postingan.');
    }
  };

  useEffect(() => {
    fetchForumPosts(); // Panggil fetchForumPosts saat komponen pertama kali render
  }, []);

  return (
    <div className="main-kelola-forum">
      <Header />
      <div className="menu-bar">
        <Link className="kelolaUser" to="/admin">
          <button className="btn white">Kelola User</button>
        </Link>
        <Link className="kelolaUser" to="/kelForum">
          <button className="btn green">Kelola Forum</button>
        </Link>
      </div>
      <div className="forum-container">
        <h2>Kelola Forum</h2>
        {forumPosts.length > 0 ? (
          forumPosts.map((post) => (
            <div className="forum-post" key={post.postId}>
              <div className="forum-header">
                <h3>{post.title}</h3>
                <button className="btn-delete" onClick={() => handleDelete(post.postId)}>
                  Hapus
                </button>
              </div>
              <p className="forum-meta">
                Oleh <strong>{post.authorName}</strong> | {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p className="forum-content">{post.content}</p>
              {/* Menampilkan gambar jika ada */}
              {post.imageUrl && (
                <div className="forum-image">
                  <img src={post.imageUrl} alt={post.title} />
                </div>
              )}
            </div>
          ))
        ) : (
          <p>Belum ada postingan di forum.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default KelolaForum;
