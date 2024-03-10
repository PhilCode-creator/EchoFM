import './footer.css'
import logo from '../../img/logo.png'
const Footer = () => {
    return (  
        <div className="footer">
            <div className="copyright">
                <img src={logo} alt="logo" />
                <span>© 2024</span>
            </div>
            <div className="infos">
                <h1>ÜBER UNS</h1>
                <a href="/streams">Steam-Link</a>
                <a href="/impressum">Impressum</a>
                <a href="/dsgvo">Datenschutz</a>
            </div>
            <div className="community">
                <h1>COMMUNITY</h1>
                <a href="/discord">Discord</a>
                <a href="/discord">Twitter</a>
                <a href="/discord">Irgendwas</a>

            </div>
        </div>
    );
}
 
export default Footer;