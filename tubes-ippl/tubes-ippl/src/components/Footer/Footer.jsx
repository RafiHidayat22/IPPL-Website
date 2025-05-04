import './Footer.css'
import Instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-left'>
            ADILUHUNG BANYUMAS
            </div>
            
            <div className='footer-right'>
            <ul className="footer-menu">
                <li><img src={Instagram} alt="" /></li>
                <li><img src={twitter} alt="" /></li>
                <li><img src={facebook} alt="" /></li>
            </ul>
            </div>
            

        </div>
    )
}

export default Footer