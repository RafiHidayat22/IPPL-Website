import { Link } from 'react-router-dom';
import './Header.css'
import Logo from '../../assets/Logo.png'
const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="logo" className="logo" />

            <ul className="header-menu">    
                <li><Link className='home-btn' to='/'>Home</Link></li>
                <li>About</li>
                <li><Link className='LogIn' to="/auth">Log In</Link></li>
            </ul>

        </div>
    )
}

export default Header