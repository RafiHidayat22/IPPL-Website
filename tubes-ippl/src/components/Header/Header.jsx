import './Header.css'
import Logo from '../../assets/Logo.png'
const Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="logo" className="logo" />

            <ul className="header-menu">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

        </div>
    )
}

export default Header