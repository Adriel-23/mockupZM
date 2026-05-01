import './Footer.css'
import instagramIcon from '../../../assets/svg/instagram.svg'
import facebookIcon from '../../../assets/svg/facebook.svg'
import whatsappIcon from '../../../assets/svg/whatsapp.svg'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-layout">
                <div className="footer-col brand-col">
                    <h3 className="footer-logo">Zona Música</h3>
                    <p>Tu destino premium para instrumentos musicales de alta calidad y asesoramiento experto.</p>
                    <span className="copyright">Desarrollado por ALVA</span>
                </div>

                <div className="footer-col">
                    <h3 className="footer-title">Soporte</h3>
                    <ul className="footer-links-list">
                        <li><a href="mailto:soporte@zonamusica.com">soporte@zonamusica.com</a></li>
                        <li><a href="#">Preguntas Frecuentes</a></li>
                        <li><a href="#">Política de Devoluciones</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3 className="footer-title">Visítanos</h3>
                    <ul className="footer-links-list">
                        <li><span>Sede Central: Calle Falsa 123, Ciudad, País</span></li>
                        <li><span>Lun - Vie: 9:00 AM - 6:00 PM</span><br/><span>Sáb: 10:00 AM - 2:00 PM</span></li>
                    </ul>
                    
                    <div className="social-links-container">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                        <a href="https://wa.me/numerodetelefono" target="_blank" rel="noopener noreferrer" className="chat-link">
                            <img src={whatsappIcon} alt="WhatsApp" />
                            Chat with a Specialist
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer