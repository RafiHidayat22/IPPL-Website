import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/Logo.png';

const Header = () => {
  const userData = JSON.parse(localStorage.getItem('user')); // misal: { name: "John", role: "admin" }

  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />

      <ul className="header-menu">
        <li><Link className='home-btn' to='/'>Home</Link></li>

        {/* Tampilkan hanya jika role-nya admin */}
        {userData?.role === 'admin' && (
          <li><Link className='LogIn' to="/admin">Admin</Link></li>
        )}

        <li><Link className='LogIn' to="/auth">Log In</Link></li>
      </ul>
    </div>
  );
};

export default Header;
