import { Link } from 'react-router-dom';
import './kelolaForum.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
 
const forumPosts = [
  {
    id: 1,
    title: "Asal Usul Reog Ponorogo",
    author: "Budi Santoso",
    date: "2025-05-01",
    content: "Reog merupakan pertunjukan tradisional yang berasal dari Ponorogo, Jawa Timur...",
  },
  {
    id: 2,
    title: "Cerita Rakyat Banyumas",
    author: "Siti Aminah",
    date: "2025-04-29",
    content: "Di daerah Banyumas terdapat legenda tentang Raden Kamandaka dan Lutung Kasarung...",
  },
];

const KelolaForum = () => {
  const handleDelete = (id) => {
    alert(`Postingan dengan ID ${id} akan dihapus (simulasi).`);
    // Implementasi penghapusan sebenarnya dilakukan melalui API ke backend
  };

  return (
    <div className="main-kelola-forum">
      <Header />
      <div className="menu-bar">
          <Link className='kelolaUser' to="/admin"><button className="btn white">Kelola User</button></Link>
          <Link className='kelolaUser' to="/kelForum"><button className="btn green">Kelola Forum</button></Link>
        </div>
      <div className="forum-container">
        <h2>Kelola Forum</h2>
        {forumPosts.map((post) => (
          <div className="forum-post" key={post.id}>
            <div className="forum-header">
              <h3>{post.title}</h3>
              <button className="btn-delete" onClick={() => handleDelete(post.id)}>Hapus</button>
            </div>
            <p className="forum-meta">
              Oleh <strong>{post.author}</strong> | {post.date}
            </p>
            <p className="forum-content">{post.content}</p>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default KelolaForum;
