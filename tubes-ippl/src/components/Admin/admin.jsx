import { Link } from 'react-router-dom';
import './admin.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const users = [
  { id: 1, email: "jane.doe@example.com", name: "Jane Doe", role: "Admin" },
  { id: 2, email: "john.smith@example.com", name: "John Smith", role: "User" },
  { id: 3, email: "budi@example.com", name: "Budi", role: "Moderator" },
];

const Admin = () => {
  return (
    <div className="main-jelajah">
      <Header />

      <div className="layout">
        <div className='title'>
            <h1>Dashboard Admin</h1>
        </div>
        <div className="menu-bar">
          <button className="btn green">Kelola User</button>
          <Link className='kelolaUser' to="/kelForum"><button className="btn white">Kelola Forum</button></Link>
        </div>

        <main className="main-content">
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Daftar User</h2>
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Nama</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
