import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/Logo.png';
import { jwtDecode } from 'jwt-decode';

import { useEffect, useState } from 'react';

const Header = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserData(decoded); // decoded berisi { userId, name, role, iat, exp }
      } catch (err) {
        console.error('Invalid token:', err);
        localStorage.removeItem('token');
      }
    }
  }, []);

  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />

      <ul className="header-menu">
        <li><Link className='home-btn' to='/'>Home</Link></li>

        {/* Tampilkan jika role-nya admin */}
        {userData?.role === 'admin' && (
          <li><Link className='LogIn' to="/admin">Admin</Link></li>
        )}

        <li><Link className='LogIn' to="/auth">Log In</Link></li>
      </ul>
    </div>
  );
};

export default Header;
