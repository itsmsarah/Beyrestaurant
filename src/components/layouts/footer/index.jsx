import LogoFooter from '../../../assets/images/logo-restaurante-footer.svg'
import iconInsta from '../../../assets/images/instagram.png'
import iconWhats from '../../../assets/images/whatsapp.png'
import iconTwitter from '../../../assets/images/twitter.png'
import iconFace from '../../../assets/images/facebok.png'
import './style.css'

export const Footer = () =>{
    return(
        <footer>
            <div className="copyright-container">
                <img src={LogoFooter} alt="" />
                <div className="copyright-descricao">
                    
                <p>Copyright © 2025 Aurora Gastrô.</p>
                <p>Todos os direitos reservados</p>
                </div>
                <ul className='icons-container'>
                    <li><img src={iconWhats} alt="icon do whatsapp" /></li>
                    <li><img src={iconInsta} alt="icon do instagram" /></li>
                    <li><img src={iconTwitter} alt="icon do twitter" /></li>
                    <li><img src={iconFace} alt="icon do facebook" /></li>
                </ul>
            </div>
            <div className="footer-content">
                <div className="menu-alternativo-container">
                    <h2>Menu Alternativo</h2>
                    <ul className='menu-links'>
                        <li><a href="">Home</a></li>
                        <li><a href="">Cardápio</a></li>
                        <li><a href="">Sobre nós</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </div>
                <div className="endereco-container">
                    <h2>Endereço</h2>
                      <ul className='menu-links'>
                        <li><a href="">R. Dr. Antônio Bento, 393 </a></li>
                        <li><a href="">Santo Amaro, São Paulo</a></li>
                        <li><a href="">SP, 04750-000</a></li>
                    </ul>
                </div>
                <div className="contato-container">
                    <h2>Contato</h2>
                    <ul className='menu-links'>
                        <li><a href="">(11) 99434-6565 </a></li>
                        <li><a href="">(11) 3737-3900</a></li>
                       
                    </ul>
                </div>
            </div>
        </footer>
    )
}