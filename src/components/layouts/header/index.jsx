import logo from "../../../assets/images/logo-beyonce.jpg"
import './style.css'

export const Header = () =>{
    return(
      <header>
        <img src={logo} alt="logo do resturante da bey" />
        <nav className="nav-header">
            <ul>      
                <li><a href="">Home</a></li>
                <li><a href="">Cardapio</a></li>
                <li><a href="">Sobre nós</a></li>
                <li><a href="">Contato</a></li>
            </ul>
        </nav>

        <nav className="btn-header"><a href="">Reserve agora</a></nav>
      </header>
    )
}