import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './admin.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Admin = () => {
  const [users, setUsers] = useState([]);

  // Ambil data user
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token'); // Ambil token dari localStorage
      const response = await fetch('http://localhost:8080/api/admin/users', {
        headers: {
          'Authorization': token, // Kirim token di header Authorization
        },
      });
      const data = await response.json();
      console.log(data); // Menambahkan log untuk memeriksa data yang diterima
      if (Array.isArray(data)) {
        setUsers(data); // Pastikan data yang diterima adalah array
      } else if (data.users && Array.isArray(data.users)) {
        setUsers(data.users); // Jika data adalah objek dengan properti 'users' yang berisi array
      } else {
        throw new Error('Data tidak sesuai format');
      }
    } catch (error) {
      console.error('Gagal mengambil data user:', error);
    }
  };
  

  useEffect(() => {
    fetchUsers(); // Panggil fetchUsers saat component pertama kali render
  }, []);

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
                <tr key={user.userId}>
                  <td>{user.userId}</td>
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
